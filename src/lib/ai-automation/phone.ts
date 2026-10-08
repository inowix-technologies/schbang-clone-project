export interface PhoneCountry {
  iso: string;
  label: string;
  dial: string;
  /** Validates the national number after non-digits and a leading trunk 0 are removed. */
  pattern: RegExp;
  example: string;
}

export const OTHER_COUNTRY_ISO = "OTHER";

export const PHONE_COUNTRIES: PhoneCountry[] = [
  { iso: "AE", label: "UAE", dial: "971", pattern: /^5\d{8}$/, example: "50 123 4567" },
  { iso: "SA", label: "KSA", dial: "966", pattern: /^5\d{8}$/, example: "55 123 4567" },
  { iso: "QA", label: "Qatar", dial: "974", pattern: /^\d{8}$/, example: "3312 3456" },
  { iso: "KW", label: "Kuwait", dial: "965", pattern: /^\d{8}$/, example: "5001 2345" },
  { iso: "BH", label: "Bahrain", dial: "973", pattern: /^\d{8}$/, example: "3600 1234" },
  { iso: "OM", label: "Oman", dial: "968", pattern: /^\d{8}$/, example: "9212 3456" },
  { iso: "IN", label: "India", dial: "91", pattern: /^[6-9]\d{9}$/, example: "98765 43210" },
  { iso: "PK", label: "Pakistan", dial: "92", pattern: /^3\d{9}$/, example: "301 2345678" },
  { iso: "EG", label: "Egypt", dial: "20", pattern: /^1\d{9}$/, example: "100 123 4567" },
  { iso: "JO", label: "Jordan", dial: "962", pattern: /^7\d{8}$/, example: "79 012 3456" },
  { iso: "LB", label: "Lebanon", dial: "961", pattern: /^\d{7,8}$/, example: "71 123 456" },
  { iso: "GB", label: "UK", dial: "44", pattern: /^7\d{9}$/, example: "7400 123456" },
  { iso: "US", label: "US/CA", dial: "1", pattern: /^[2-9]\d{9}$/, example: "201 555 0123" },
  { iso: OTHER_COUNTRY_ISO, label: "Other", dial: "", pattern: /^[1-9]\d{7,14}$/, example: "Country code + number" },
];

export const DEFAULT_PHONE_COUNTRY = "AE";

export const getPhoneCountry = (iso: string) =>
  PHONE_COUNTRIES.find((country) => country.iso === iso) ?? PHONE_COUNTRIES[0];

const toNationalDigits = (country: PhoneCountry, raw: string) => {
  let digits = raw.replace(/\D/g, "");
  if (digits.startsWith("00")) digits = digits.slice(2);
  if (country.dial && digits.startsWith(country.dial) && digits.length > country.dial.length + 6) {
    digits = digits.slice(country.dial.length);
  }
  if (country.dial) digits = digits.replace(/^0+/, "");
  return digits;
};

export type PhoneValidation = { ok: true; e164: string } | { ok: false; error: string };

export const validatePhone = (iso: string, raw: string): PhoneValidation => {
  const country = getPhoneCountry(iso);
  if (!raw.trim()) return { ok: false, error: "Enter your WhatsApp number" };

  const national = toNationalDigits(country, raw);
  if (!country.pattern.test(national)) {
    return {
      ok: false,
      error: country.dial
        ? `Enter a valid ${country.label} mobile number, e.g. ${country.example}`
        : "Enter your full number including country code",
    };
  }
  return { ok: true, e164: `+${country.dial}${national}` };
};
