import { supabase } from "@/integrations/supabase/client";
import { HC_CONFIG, isPlaceholder } from "./config";
import { captureAttribution, getFbCookies } from "./attribution";
import { findCountry, toE164 } from "./phone";
import {
  BUDGET_OPTIONS,
  ORG_TYPE_OPTIONS,
  ROLE_OPTIONS,
  SITUATION_OPTIONS,
  TIMELINE_OPTIONS,
  isQualifiedBudget,
  labelFor,
  sizeLabel,
  type FormValues,
  type StepOneValues,
} from "./form";

const SUPABASE_TIMEOUT_MS = 10_000;
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

/**
 * no-cors + text/plain keeps this a "simple" request: no preflight, and it reaches Zapier, Make or
 * Apps Script hooks that don't send CORS headers. The response is opaque, so delivery = no network error.
 */
const postToWebhook = async (payload: Record<string, unknown>): Promise<void> => {
  if (isPlaceholder(HC_CONFIG.webhookUrl)) throw new Error("Webhook URL is not configured");
  const body = JSON.stringify(payload);
  try {
    await fetch(HC_CONFIG.webhookUrl, {
      method: "POST",
      mode: "no-cors",
      keepalive: body.length < 60_000,
      headers: { "Content-Type": "text/plain;charset=UTF-8" },
      body,
    });
  } catch (error) {
    const queued = typeof navigator.sendBeacon === "function"
      && navigator.sendBeacon(HC_CONFIG.webhookUrl, new Blob([body], { type: "text/plain;charset=UTF-8" }));
    if (!queued) throw error;
  }
};

const withTimeout = <T>(promise: PromiseLike<T>, ms: number) =>
  Promise.race([
    Promise.resolve(promise),
    new Promise<never>((_, reject) => setTimeout(() => reject(new Error("Timed out")), ms)),
  ]);

const insertIntoSupabase = async (payload: ReturnType<typeof buildCompletePayload>) => {
  const message = [
    `Looking to build: ${payload.requirements}`,
    "",
    `Role: ${payload.role_label}`,
    `Organization type: ${payload.org_type_label}`,
    `Size: ${payload.size_label}`,
    `Current situation: ${payload.situation_label}`,
    `Budget: ${payload.budget_label}`,
    `Timeline: ${payload.timeline_label}`,
    `WhatsApp: ${payload.whatsapp}`,
    `Qualified (₹5L+): ${payload.qualified ? "yes" : "no"}`,
    "",
    `utm_source: ${payload.utm_source || "-"}`,
    `utm_campaign: ${payload.utm_campaign || "-"}`,
    `utm_content: ${payload.utm_content || "-"}`,
    `fbclid: ${payload.fbclid || "-"}`,
    `Event ID: ${payload.event_id}`,
  ].join("\n");

  const { error } = await withTimeout(
    supabase.from("contact_leads").insert([{
      name: payload.full_name,
      email: payload.email,
      phone: payload.whatsapp,
      company: payload.organization,
      subject: `Healthcare platform | ${payload.budget_label} | ${payload.org_type_label}`,
      message,
      source: LEAD_SOURCE,
      status: "new",
    }]),
    SUPABASE_TIMEOUT_MS,
  );
  if (error) throw error;
};

const buildCompletePayload = (values: FormValues, eventId: string) => ({
  stage: "complete" as const,
  event_id: eventId,
  ...contactFields(values),
  organization: values.organization.trim(),
  role: values.role,
  role_label: labelFor(ROLE_OPTIONS, values.role),
  org_type: values.orgType,
  org_type_label: labelFor(ORG_TYPE_OPTIONS, values.orgType),
  size: values.size,
  size_label: sizeLabel(values.size),
  requirements: values.requirements.trim(),
  situation: values.situation,
  situation_label: labelFor(SITUATION_OPTIONS, values.situation),
  budget: values.budget,
  budget_label: labelFor(BUDGET_OPTIONS, values.budget),
  timeline: values.timeline,
  timeline_label: labelFor(TIMELINE_OPTIONS, values.timeline),
  qualified: isQualifiedBudget(values.budget),
  ...baseContext(),
});

/** Fire-and-forget: a failed partial capture must never block the user from reaching step 2. */
export const sendPartialLead = (values: StepOneValues, eventId: string) => {
  if (!HC_CONFIG.sendPartialLeads) return;
  postToWebhook({ stage: "partial", event_id: eventId, ...contactFields(values), ...baseContext() }).catch(() => {});
};

export interface SubmitResult {
  ok: boolean;
  qualified: boolean;
}

/** Succeeds when at least one destination accepted the lead. */
export const submitLead = async (values: FormValues, eventId: string): Promise<SubmitResult> => {
  const payload = buildCompletePayload(values, eventId);
  const results = await Promise.allSettled([postToWebhook(payload), insertIntoSupabase(payload)]);
  if (import.meta.env.DEV) {
    results.forEach((r, i) => r.status === "rejected" && console.warn(["Webhook", "Supabase"][i], "lead write failed:", r.reason));
  }
  return { ok: results.some((r) => r.status === "fulfilled"), qualified: payload.qualified };
};
