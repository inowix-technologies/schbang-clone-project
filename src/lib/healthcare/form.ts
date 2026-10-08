import { findCountry, isValidPhone } from "./phone";

export interface Option {
  value: string;
  label: string;
}

export const ORG_TYPE_OPTIONS: Option[] = [
  { value: "single-clinic", label: "Single clinic" },
  { value: "multi-branch-clinics", label: "Multi-branch clinics" },
  { value: "diagnostic-chain", label: "Diagnostic centre / chain" },
  { value: "hospital", label: "Hospital" },
  { value: "healthcare-startup", label: "Healthcare startup" },
  { value: "other", label: "Other" },
];

export const BUILD_OPTIONS: Option[] = [
  { value: "full-platform", label: "Full platform" },
  { value: "patient-app", label: "Patient app" },
  { value: "doctor-app", label: "Doctor app" },
  { value: "clinic-admin", label: "Clinic / hospital admin" },
  { value: "appointments", label: "Appointments and reminders" },
  { value: "records", label: "Patient records (EMR)" },
  { value: "telemedicine", label: "Telemedicine" },
];

export const BUDGET_OPTIONS: Option[] = [
  { value: "under-3l", label: "Under ₹3L" },
  { value: "3-5l", label: "₹3-5L" },
  { value: "5-10l", label: "₹5-10L" },
  { value: "10-25l", label: "₹10-25L" },
  { value: "25l-plus", label: "₹25L+" },
  { value: "not-decided", label: "Not decided" },
];

export const TIMELINE_OPTIONS: Option[] = [
  { value: "immediately", label: "Immediately" },
  { value: "30-days", label: "Within 30 days" },
  { value: "1-3-months", label: "1-3 months" },
  { value: "researching", label: "Just researching" },
];

const QUALIFIED_BUDGETS = new Set(["5-10l", "10-25l", "25l-plus"]);

export const NOTE_MAX = 300;

export interface StepOneValues {
  fullName: string;
  countryIso: string;
  phone: string;
  email: string;
}

export interface StepTwoValues {
  orgType: string;
  build: string;
  budget: string;
  timeline: string;
  note: string;
}

export type FormValues = StepOneValues & StepTwoValues;
export type FormErrors = Partial<Record<keyof FormValues, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const validateStepOne = (v: StepOneValues): FormErrors => {
  const errors: FormErrors = {};
  const name = v.fullName.trim();
  if (name.length < 2) errors.fullName = "Please enter your full name.";
  else if (name.length > 100) errors.fullName = "Please keep your name under 100 characters.";

  if (!v.phone.trim()) errors.phone = "Please enter your WhatsApp number.";
  else if (!isValidPhone(v.phone, findCountry(v.countryIso))) errors.phone = "Please enter a valid number for the selected country.";

  const email = v.email.trim();
  if (!email) errors.email = "Please enter your work email.";
  else if (!EMAIL_RE.test(email) || email.length > 255) errors.email = "Please enter a valid email address.";
  return errors;
};

export const validateStepTwo = (v: StepTwoValues): FormErrors => {
  const errors: FormErrors = {};
  if (!v.orgType) errors.orgType = "Please pick your organization type.";
  if (!v.build) errors.build = "Please pick what you want to build.";
  if (!v.budget) errors.budget = "Please pick a budget range.";
  if (!v.timeline) errors.timeline = "Please pick a timeline.";
  if (v.note.trim().length > NOTE_MAX) errors.note = `Please keep this under ${NOTE_MAX} characters.`;
  return errors;
};

export const isQualifiedBudget = (budget: string) => QUALIFIED_BUDGETS.has(budget);

/** Budgets well below the ₹5L floor get a polite expectation-setting note. */
export const showBudgetNote = (budget: string) => budget === "under-3l";

export const labelFor = (options: Option[], value: string) => options.find((o) => o.value === value)?.label ?? value;
