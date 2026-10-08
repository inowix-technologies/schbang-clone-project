import { supabase } from "@/integrations/supabase/client";

/** Google Sheets (Apps Script) web app URL shared by every lead form; see scripts/google-sheets-lead-webhook.gs. */
export const LEADS_WEBHOOK_URL =
  (import.meta.env.VITE_LEADS_WEBHOOK_URL as string | undefined) || "[WEBHOOK/BEACON ENDPOINT]";

export const isWebhookConfigured = (url: string) => Boolean(url) && !/^\[.*\]$/.test(url.trim());

const SUPABASE_TIMEOUT_MS = 10_000;

/**
 * no-cors + text/plain keeps this a "simple" request: no preflight, so it reaches Apps Script, Zapier or Make
 * hooks that don't send CORS headers. The response is opaque, so delivery = no network error.
 */
export const postLeadToWebhook = async (url: string, payload: Record<string, unknown>): Promise<void> => {
  if (!isWebhookConfigured(url)) throw new Error("Webhook URL is not configured");
  const body = JSON.stringify(payload);
  try {
    await fetch(url, {
      method: "POST",
      mode: "no-cors",
      keepalive: body.length < 60_000,
      headers: { "Content-Type": "text/plain;charset=UTF-8" },
      body,
    });
  } catch (error) {
    const queued =
      typeof navigator.sendBeacon === "function" &&
      navigator.sendBeacon(url, new Blob([body], { type: "text/plain;charset=UTF-8" }));
    if (!queued) throw error;
  }
};

const withTimeout = <T>(promise: PromiseLike<T>, ms: number) =>
  Promise.race([
    Promise.resolve(promise),
    new Promise<never>((_, reject) => setTimeout(() => reject(new Error("Timed out")), ms)),
  ]);

export interface ContactLeadRow {
  name: string;
  email: string;
  message: string;
  source: string;
  phone?: string | null;
  company?: string | null;
  subject?: string | null;
}

/** Saves the lead to the admin panel's Leads tab (Supabase `contact_leads`). */
export const insertContactLead = async (row: ContactLeadRow): Promise<void> => {
  const { error } = await withTimeout(
    supabase.from("contact_leads").insert([{ ...row, status: "new" }]),
    SUPABASE_TIMEOUT_MS,
  );
  if (error) throw error;
};

/**
 * Runs every destination in parallel and resolves true as soon as one accepts the lead, so a slow or offline
 * destination never holds up the user; the others keep running in the background. False only if all fail.
 */
export const deliverLead = (destinations: Record<string, () => Promise<void>>): Promise<boolean> => {
  const names = Object.keys(destinations);
  if (names.length === 0) return Promise.resolve(false);
  return new Promise((resolve) => {
    let failed = 0;
    names.forEach((name) => {
      destinations[name]().then(
        () => resolve(true),
        (reason) => {
          if (import.meta.env.DEV) console.warn(`[leads] ${name} failed:`, reason);
          if (++failed === names.length) resolve(false);
        },
      );
    });
  });
};
