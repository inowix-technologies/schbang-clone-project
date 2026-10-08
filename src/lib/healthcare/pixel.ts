import { readSession, writeSession } from "./attribution";

type Fbq = (...args: unknown[]) => void;

const PENDING_LEAD_KEY = "inowix_hc_pending_lead";
const FIRED_PREFIX = "inowix_hc_lead_fired_";
const CONTENT_NAME = "Healthcare Platform";

export interface PendingLead {
  eventId: string;
  firstName: string;
  qualified: boolean;
}

const fbqSafe = (...args: unknown[]) => {
  try {
    (window as Window & { fbq?: Fbq }).fbq?.(...args);
  } catch {
    // A blocked or failed pixel must not affect the user flow.
  }
};

export const savePendingLead = (lead: PendingLead) => writeSession(PENDING_LEAD_KEY, lead);

export const readPendingLead = () => readSession<PendingLead>(PENDING_LEAD_KEY);

const firedThisPageLoad = new Set<string>();

/**
 * Claims a one-time slot for `key`. The guard is set before the caller fires, so StrictMode re-runs,
 * refreshes and back-navigation are no-ops; the in-memory set covers browsers without sessionStorage.
 */
const claimOnce = (key: string) => {
  const storageKey = FIRED_PREFIX + key;
  if (firedThisPageLoad.has(storageKey)) return false;
  try {
    if (sessionStorage.getItem(storageKey) === "1") return false;
    sessionStorage.setItem(storageKey, "1");
  } catch {
    // Fall through to the in-memory guard.
  }
  firedThisPageLoad.add(storageKey);
  return true;
};

/** Fires Lead (and QualifiedLead for ₹5L+ budgets) at most once per submission. */
export const fireLeadOnce = (lead: PendingLead): boolean => {
  if (!claimOnce(lead.eventId)) return false;
  fbqSafe("track", "Lead", { content_name: CONTENT_NAME }, { eventID: lead.eventId });
  if (lead.qualified) {
    fbqSafe("trackCustom", "QualifiedLead", { content_name: CONTENT_NAME }, { eventID: `${lead.eventId}-q` });
  }
  return true;
};

/**
 * index.html fires PageView only on full page loads, so the in-app hop to the thank-you page needs one.
 * Keyed per submission so a later refresh (which index.html already counts) doesn't add a second.
 */
export const firePageViewOnce = (eventId: string) => {
  if (claimOnce(`${eventId}-pv`)) fbqSafe("track", "PageView");
};
