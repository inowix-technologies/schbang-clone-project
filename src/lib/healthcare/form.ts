import { findCountry, isValidPhone } from "./phone";

export interface Option {
  value: string;
  label: string;
}

export const ROLE_OPTIONS: Option[] = [
  { value: "owner-founder", label: "Owner / Founder" },
  { value: "hospital-administrator", label: "Hospital Administrator" },
  { value: "medical-director", label: "Medical Director" },
  { value: "operations-head", label: "Operations Head" },
  { value: "startup-founder", label: "Healthcare Startup Founder" },
  { value: "other", label: "Other" },
];

export const ORG_TYPE_OPTIONS: Option[] = [
  { value: "multi-branch-clinics", label: "Multi-branch clinics" },
  { value: "diagnostic-chain", label: "Diagnostic centre / chain" },
  { value: "hospital", label: "Hospital" },
  { value: "healthcare-startup", label: "Healthcare startup" },
  { value: "other", label: "Other" },
];

export const SIZE_BRANCH_OPTIONS: Option[] = [
  { value: "branches-1", label: "1 branch" },
  { value: "branches-2-5", label: "2-5 branches" },
  { value: "branches-6-20", label: "6-20 branches" },
  { value: "branches-20-plus", label: "20+ branches" },
];

export const SIZE_BED_OPTIONS: Option[] = [
  { value: "beds-under-50", label: "Under 50 beds" },
  { value: "beds-50-200", label: "50-200 beds" },
  { value: "beds-200-plus", label: "200+ beds" },
];

export const SITUATION_OPTIONS: Option[] = [
  { value: "new-project", label: "New project" },
  { value: "replacing-software", label: "Replacing existing software" },
  { value: "connecting-systems", label: "Connecting multiple systems" },
  { value: "scaling-platform", label: "Scaling an existing platform" },
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
const BELOW_FLOOR_BUDGETS = new Set(["under-3l", "3-5l"]);

export const REQUIREMENTS_MIN = 20;
export const REQUIREMENTS_MAX = 2000;

export interface StepOneValues {
  fullName: string;
  countryIso: string;
  phone: string;
  email: string;
}

export interface StepTwoValues {
  organization: string;
  role: string;
  orgType: string;
  size: string;
  requirements: string;
  situation: string;
  budget: string;
  timeline: string;
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
  if (v.organization.trim().length < 2) errors.organization = "Please enter your organization name.";
  if (!v.role) errors.role = "Please select your role.";
  if (!v.orgType) errors.orgType = "Please select your organization type.";
  if (!v.size) errors.size = "Please select the number of branches or beds.";
  const req = v.requirements.trim();
  if (req.length < REQUIREMENTS_MIN) errors.requirements = `Please add a little more detail (at least ${REQUIREMENTS_MIN} characters).`;
  else if (req.length > REQUIREMENTS_MAX) errors.requirements = `Please keep this under ${REQUIREMENTS_MAX} characters.`;
  if (!v.situation) errors.situation = "Please select your current situation.";
  if (!v.budget) errors.budget = "Please select a budget range.";
  if (!v.timeline) errors.timeline = "Please select a timeline.";
  return errors;
};

export const isQualifiedBudget = (budget: string) => QUALIFIED_BUDGETS.has(budget);

/** Single-branch practices or budgets below the ₹5L floor get a polite expectation-setting note. */
export const showBudgetNote = (budget: string, size: string) =>
  budget === "under-3l" || (size === "branches-1" && BELOW_FLOOR_BUDGETS.has(budget));

export const labelFor = (options: Option[], value: string) => options.find((o) => o.value === value)?.label ?? value;

export const sizeLabel = (value: string) => labelFor([...SIZE_BRANCH_OPTIONS, ...SIZE_BED_OPTIONS], value);
