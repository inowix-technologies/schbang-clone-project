export const LEAD_FALLBACK_EMAIL = "info@inowix.in";

// Some mail clients silently drop mailto links longer than ~2,000 characters.
const MAX_BODY_CHARS = 1500;

/** Pre-filled email used when a form can't save a lead, so the visitor can still reach us. */
export const buildLeadMailto = (subject: string, fields: Record<string, string | undefined>) => {
  let body = Object.entries(fields)
    .filter(([, value]) => value && value.trim())
    .map(([label, value]) => `${label}: ${value!.trim()}`)
    .join("\n");
  if (body.length > MAX_BODY_CHARS) body = `${body.slice(0, MAX_BODY_CHARS).trimEnd()}...`;
  return `mailto:${LEAD_FALLBACK_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};
