declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const ATTRIBUTION_KEY = "inowix_aia_attribution";
const SUBMISSION_KEY = "inowix_aia_submission";

export const ATTRIBUTION_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
] as const;

export type AttributionParam = (typeof ATTRIBUTION_PARAMS)[number];
export type Attribution = Record<AttributionParam, string> & { landing_page: string };

const emptyAttribution = (): Attribution => ({
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_content: "",
  utm_term: "",
  fbclid: "",
  landing_page: "",
});

const readJson = <T>(key: string): T | null => {
  try {
    const raw = sessionStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
};

const writeJson = (key: string, value: unknown) => {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage can be unavailable in private modes; tracking must never break the page.
  }
};

/** First-touch attribution for the session: the first URL that carried UTMs or fbclid wins. */
export const captureAttribution = (): Attribution => {
  const stored = readJson<Attribution>(ATTRIBUTION_KEY);
  if (stored) return { ...emptyAttribution(), ...stored };

  const params = new URLSearchParams(window.location.search);
  const fromUrl = emptyAttribution();
  let hasAny = false;
  for (const key of ATTRIBUTION_PARAMS) {
    const value = params.get(key)?.trim().slice(0, 500) ?? "";
    fromUrl[key] = value;
    if (value) hasAny = true;
  }
  fromUrl.landing_page = window.location.href;

  if (hasAny) writeJson(ATTRIBUTION_KEY, fromUrl);
  return fromUrl;
};

const readCookie = (name: string) =>
  document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`))
    ?.split("=")[1] ?? "";

/** _fbp / _fbc are needed if leads are later deduplicated against the Conversions API. */
export const getFbCookies = (fbclid: string) => {
  const fbp = readCookie("_fbp");
  let fbc = readCookie("_fbc");
  if (!fbc && fbclid) fbc = `fb.1.${Date.now()}.${fbclid}`;
  return { fbp, fbc };
};

export const fbqSafe = (...args: unknown[]) => {
  try {
    window.fbq?.(...args);
  } catch {
    // A blocked or failed pixel must not affect the user flow.
  }
};

export interface StoredSubmission {
  leadId: string;
  firstName: string;
  automationSummary: string;
  qualified: boolean;
  conversionFired: boolean;
}

export const saveSubmission = (submission: StoredSubmission) => writeJson(SUBMISSION_KEY, submission);

export const readSubmission = () => readJson<StoredSubmission>(SUBMISSION_KEY);

/**
 * Fires Lead for qualified budgets and LeadLowBudget otherwise, at most once per submission.
 * Returns false when the event had already been sent.
 */
export const fireConversionOnce = (submission: StoredSubmission): boolean => {
  if (submission.conversionFired) return false;

  if (submission.qualified) {
    fbqSafe("track", "Lead", { content_name: "AI Automation" }, { eventID: submission.leadId });
  } else {
    fbqSafe("trackCustom", "LeadLowBudget", { content_name: "AI Automation" }, { eventID: submission.leadId });
  }

  saveSubmission({ ...submission, conversionFired: true });
  return true;
};

export const createLeadId = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
