import { deliverLead, insertContactLead, postLeadToWebhook } from "@/lib/lead-webhook";
import { HC_CONFIG } from "./config";
import { captureAttribution, getFbCookies } from "./attribution";
import { findCountry, toE164 } from "./phone";
import {
  BUDGET_OPTIONS,
  BUILD_OPTIONS,
  ORG_TYPE_OPTIONS,
  TIMELINE_OPTIONS,
  isQualifiedBudget,
  labelFor,
  type FormValues,
  type StepOneValues,
} from "./form";

const LEAD_SOURCE = "lp-healthcare-platforms";

export const createEventId = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;

const baseContext = () => {
  const attribution = captureAttribution();
  const { fbp, fbc } = getFbCookies(attribution.fbclid);
  return {
    utm_source: attribution.utm_source,
    utm_campaign: attribution.utm_campaign,
    utm_content: attribution.utm_content,
    fbclid: attribution.fbclid,
    fbp,
    fbc,
    landing_page: attribution.landing_page || window.location.href,
    referrer: attribution.referrer,
    page_url: window.location.href,
    user_agent: navigator.userAgent,
    submitted_at: new Date().toISOString(),
    source: LEAD_SOURCE,
  };
};

const contactFields = (v: StepOneValues) => {
  const country = findCountry(v.countryIso);
  return {
    full_name: v.fullName.trim(),
    whatsapp: toE164(v.phone, country),
    country_code: `+${country.dial}`,
    email: v.email.trim().toLowerCase(),
  };
};

const buildCompletePayload = (values: FormValues, eventId: string) => ({
  stage: "complete" as const,
  event_id: eventId,
  ...contactFields(values),
  org_type: values.orgType,
  org_type_label: labelFor(ORG_TYPE_OPTIONS, values.orgType),
  build: values.build,
  build_label: labelFor(BUILD_OPTIONS, values.build),
  budget: values.budget,
  budget_label: labelFor(BUDGET_OPTIONS, values.budget),
  timeline: values.timeline,
  timeline_label: labelFor(TIMELINE_OPTIONS, values.timeline),
  note: values.note.trim(),
  qualified: isQualifiedBudget(values.budget),
  ...baseContext(),
});

const toContactLead = (payload: ReturnType<typeof buildCompletePayload>) => ({
  name: payload.full_name,
  email: payload.email,
  phone: payload.whatsapp,
  company: payload.note.slice(0, 255) || null,
  subject: `Healthcare platform | ${payload.budget_label} | ${payload.org_type_label}`,
  message: [
    `Looking to build: ${payload.build_label}`,
    `Organization type: ${payload.org_type_label}`,
    `Budget: ${payload.budget_label}`,
    `Timeline: ${payload.timeline_label}`,
    `Note: ${payload.note || "-"}`,
    `WhatsApp: ${payload.whatsapp}`,
    `Qualified (₹5L+): ${payload.qualified ? "yes" : "no"}`,
    "",
    `utm_source: ${payload.utm_source || "-"}`,
    `utm_campaign: ${payload.utm_campaign || "-"}`,
    `utm_content: ${payload.utm_content || "-"}`,
    `fbclid: ${payload.fbclid || "-"}`,
    `Event ID: ${payload.event_id}`,
  ].join("\n"),
  source: LEAD_SOURCE,
});

/** Fire-and-forget: a failed partial capture must never block the user from reaching step 2. */
export const sendPartialLead = (values: StepOneValues, eventId: string) => {
  if (!HC_CONFIG.sendPartialLeads) return;
  postLeadToWebhook(HC_CONFIG.webhookUrl, {
    stage: "partial",
    event_id: eventId,
    ...contactFields(values),
    ...baseContext(),
  }).catch(() => {});
};

export interface SubmitResult {
  ok: boolean;
  qualified: boolean;
}

/** Sends the lead to Google Sheets and the admin panel; succeeds when at least one accepted it. */
export const submitLead = async (values: FormValues, eventId: string): Promise<SubmitResult> => {
  const payload = buildCompletePayload(values, eventId);
  const ok = await deliverLead({
    webhook: () => postLeadToWebhook(HC_CONFIG.webhookUrl, payload),
    supabase: () => insertContactLead(toContactLead(payload)),
  });
  return { ok, qualified: payload.qualified };
};
