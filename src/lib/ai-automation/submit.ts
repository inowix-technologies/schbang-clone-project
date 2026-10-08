import { deliverLead, insertContactLead, isWebhookConfigured, postLeadToWebhook } from "@/lib/lead-webhook";
import { AIA_CONFIG } from "./config";

export type LeadPayload = Record<string, string | boolean>;

export const LEAD_SOURCE = "ai-automation-lp";

const webhookReady = () => {
  if (isWebhookConfigured(AIA_CONFIG.webhookUrl)) return true;
  console.warn("[ai-automation] Webhook URL is not configured (set VITE_LEADS_WEBHOOK_URL).");
  return false;
};

const text = (payload: LeadPayload, key: string) => String(payload[key] ?? "").trim();

const toContactLead = (payload: LeadPayload) => {
  const message = [
    `Wants to automate: ${text(payload, "automation_goal")}`,
    `Industry: ${text(payload, "industry")}`,
    `Budget: ${text(payload, "budget")}`,
    `Timeline: ${text(payload, "timeline")}`,
    `Note: ${text(payload, "note") || "-"}`,
    `WhatsApp: ${text(payload, "whatsapp")} (${text(payload, "phone_country")})`,
    `Qualified budget: ${payload.budget_qualified ? "yes" : "no"}`,
    "",
    `utm_source: ${text(payload, "utm_source") || "-"}`,
    `utm_campaign: ${text(payload, "utm_campaign") || "-"}`,
    `utm_content: ${text(payload, "utm_content") || "-"}`,
    `fbclid: ${text(payload, "fbclid") || "-"}`,
    `Lead ID: ${text(payload, "lead_id")}`,
  ].join("\n");

  return {
    name: text(payload, "full_name"),
    email: text(payload, "email"),
    phone: text(payload, "whatsapp") || null,
    company: text(payload, "note").slice(0, 255) || null,
    subject: `AI automation | ${text(payload, "budget")} | ${text(payload, "industry")}`,
    message,
    source: LEAD_SOURCE,
  };
};

/** Step-1 capture: fire-and-forget so a slow network never blocks the visitor from reaching step 2. */
export const sendLeadInBackground = (payload: LeadPayload) => {
  if (!webhookReady()) return;
  postLeadToWebhook(AIA_CONFIG.webhookUrl, payload).catch(() => {});
};

/** Sends the finished lead to Google Sheets and the admin panel; true when at least one accepted it. */
export const sendLead = async (payload: LeadPayload): Promise<boolean> => {
  // Lets the thank-you flow be tested locally before a webhook exists.
  if (import.meta.env.DEV && !isWebhookConfigured(AIA_CONFIG.webhookUrl)) {
    console.warn("[ai-automation] Webhook URL is not configured; lead payload:", payload);
    return true;
  }
  return deliverLead({
    webhook: async () => {
      if (!webhookReady()) throw new Error("Webhook URL is not configured");
      await postLeadToWebhook(AIA_CONFIG.webhookUrl, payload);
    },
    supabase: () => insertContactLead(toContactLead(payload)),
  });
};
