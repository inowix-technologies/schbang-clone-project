import { AIA_CONFIG, isPlaceholder } from "./config";

export type LeadPayload = Record<string, string | boolean>;

const REQUEST_TIMEOUT_MS = 8000;

const beacon = (url: string, body: string) => {
  if (!("sendBeacon" in navigator)) return false;
  // sendBeacon only allows CORS-safelisted content types, so JSON goes out as text/plain.
  return navigator.sendBeacon(url, new Blob([body], { type: "text/plain;charset=UTF-8" }));
};

/** Resolves true once the webhook accepted the lead (or the beacon was queued). */
export const sendLead = async (payload: LeadPayload): Promise<boolean> => {
  const url = AIA_CONFIG.webhookUrl;
  if (isPlaceholder(url)) {
    console.warn("[ai-automation] Webhook URL is not configured; lead payload:", payload);
    return import.meta.env.DEV;
  }

  const body = JSON.stringify(payload);
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
      signal: controller.signal,
    });
    if (res.ok) return true;
    return beacon(url, body);
  } catch {
    return beacon(url, body);
  } finally {
    window.clearTimeout(timer);
  }
};

export const sendLeadInBackground = (payload: LeadPayload) => {
  void sendLead(payload);
};
