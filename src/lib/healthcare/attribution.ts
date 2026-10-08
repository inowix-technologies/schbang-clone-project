const ATTRIBUTION_KEY = "inowix_hc_attribution";

export const ATTRIBUTION_PARAMS = ["utm_source", "utm_campaign", "utm_content", "fbclid"] as const;

export type AttributionParam = (typeof ATTRIBUTION_PARAMS)[number];
export type Attribution = Record<AttributionParam, string> & { landing_page: string; referrer: string };

const emptyAttribution = (): Attribution => ({
  utm_source: "",
  utm_campaign: "",
  utm_content: "",
  fbclid: "",
  landing_page: "",
  referrer: "",
});

export const readSession = <T>(key: string): T | null => {
  try {
    const raw = sessionStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
};

export const writeSession = (key: string, value: unknown) => {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage can be unavailable in private modes; tracking must never break the page.
  }
};

/** First-touch attribution for the session: the first URL that carried UTMs or fbclid wins. */
export const captureAttribution = (): Attribution => {
  const stored = readSession<Attribution>(ATTRIBUTION_KEY);
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
  fromUrl.referrer = document.referrer;

  if (hasAny) writeSession(ATTRIBUTION_KEY, fromUrl);
  return fromUrl;
};

const readCookie = (name: string) =>
  document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`))
    ?.split("=")[1] ?? "";

/** _fbp / _fbc let leads be deduplicated against the Conversions API later. */
export const getFbCookies = (fbclid: string) => {
  const fbp = readCookie("_fbp");
  let fbc = readCookie("_fbc");
  if (!fbc && fbclid) fbc = `fb.1.${Date.now()}.${fbclid}`;
  return { fbp, fbc };
};
