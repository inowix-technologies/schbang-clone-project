export interface CountryCode {
  iso: string;
  name: string;
  dial: string;
  /** Allowed national-number lengths, without the country code or a trunk "0". */
  lengths: number[];
  pattern?: RegExp;
}

export const COUNTRY_CODES: CountryCode[] = [
  { iso: "IN", name: "India", dial: "91", lengths: [10], pattern: /^[6-9]\d{9}$/ },
  { iso: "AE", name: "UAE", dial: "971", lengths: [9], pattern: /^5\d{8}$/ },
  { iso: "US", name: "USA / Canada", dial: "1", lengths: [10] },
  { iso: "GB", name: "UK", dial: "44", lengths: [10] },
  { iso: "SG", name: "Singapore", dial: "65", lengths: [8] },
  { iso: "AU", name: "Australia", dial: "61", lengths: [9] },
  { iso: "SA", name: "Saudi Arabia", dial: "966", lengths: [9] },
  { iso: "QA", name: "Qatar", dial: "974", lengths: [8] },
  { iso: "NP", name: "Nepal", dial: "977", lengths: [10] },
  { iso: "BD", name: "Bangladesh", dial: "880", lengths: [10] },
  { iso: "LK", name: "Sri Lanka", dial: "94", lengths: [9] },
];

export const DEFAULT_COUNTRY_ISO = "IN";

export const findCountry = (iso: string) =>
  COUNTRY_CODES.find((c) => c.iso === iso) ?? COUNTRY_CODES[0];

/** Strips formatting, a leading trunk "0" and a pasted country code. */
export const normalizeNational = (raw: string, country: CountryCode) => {
  let digits = raw.replace(/\D/g, "");
  if (digits.startsWith(country.dial) && digits.length > Math.max(...country.lengths)) {
    digits = digits.slice(country.dial.length);
  }
  if (digits.startsWith("0")) digits = digits.replace(/^0+/, "");
  return digits;
};

export const isValidPhone = (raw: string, country: CountryCode) => {
  const national = normalizeNational(raw, country);
  if (!country.lengths.includes(national.length)) return false;
  return country.pattern ? country.pattern.test(national) : true;
};

export const toE164 = (raw: string, country: CountryCode) => `+${country.dial}${normalizeNational(raw, country)}`;
