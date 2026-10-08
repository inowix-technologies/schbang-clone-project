import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { ArrowLeft, Clock, Loader2, Lock, MessageCircle, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { AIA_CONFIG, isPlaceholder } from "@/lib/ai-automation/config";
import { FORM_OPTIONS, LOW_BUDGET_OPTION } from "@/lib/ai-automation/content";
import { DEFAULT_PHONE_COUNTRY, getPhoneCountry, validatePhone } from "@/lib/ai-automation/phone";
import {
  captureAttribution,
  createLeadId,
  getFbCookies,
  saveSubmission,
  type Attribution,
} from "@/lib/ai-automation/tracking";
import { sendLead, sendLeadInBackground, type LeadPayload } from "@/lib/ai-automation/submit";
import { CtaButton, LpContainer } from "./LpPrimitives";
import { PhoneInput } from "./PhoneInput";
import { Reveal } from "./Reveal";

const GOAL_MIN = 20;
const GOAL_MAX = 2000;
const MIN_FILL_TIME_MS = 3000;

const step1Schema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name").max(100),
  email: z.string().trim().email("Enter a valid work email").max(255),
});

const step2Schema = z.object({
  company: z.string().trim().min(2, "Enter your company name").max(150),
  role: z.string().min(1, "Select your role"),
  industry: z.string().min(1, "Select your industry"),
  companySize: z.string().min(1, "Select your company size"),
  goal: z
    .string()
    .trim()
    .min(GOAL_MIN, `Please add a bit more detail (at least ${GOAL_MIN} characters)`)
    .max(GOAL_MAX),
  budget: z.string().min(1, "Select an estimated budget"),
  timeline: z.string().min(1, "Select a timeline"),
});

type Values = z.infer<typeof step1Schema> &
  z.infer<typeof step2Schema> & { phone: string; phoneCountry: string };
type FieldName = keyof Values;
type Errors = Partial<Record<FieldName, string>>;

const INITIAL_VALUES: Values = {
  fullName: "",
  email: "",
  phone: "",
  phoneCountry: DEFAULT_PHONE_COUNTRY,
  company: "",
  role: "",
  industry: "",
  companySize: "",
  goal: "",
  budget: "",
  timeline: "",
};

const fieldClass =
  "lp-field h-12 w-full rounded-xl border border-lp-line bg-lp-white px-4 text-base text-lp-ink outline-none transition-colors placeholder:text-slate-400 hover:border-slate-300 focus:border-lp-blue focus:ring-4 focus:ring-lp-blue/15 aria-[invalid=true]:border-rose-400";

const zodErrors = (error: z.ZodError): Errors => {
  const out: Errors = {};
  for (const issue of error.issues) {
    const key = issue.path[0] as FieldName;
    if (!out[key]) out[key] = issue.message;
  }
  return out;
};

const summarize = (text: string, max = 60) => {
  const clean = text.trim().replace(/\s+/g, " ");
  return clean.length > max ? `${clean.slice(0, max).trimEnd()}...` : clean;
};

const Field = ({
  id,
  label,
  error,
  children,
  hint,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
  hint?: ReactNode;
}) => (
  <div>
    <div className="mb-1.5 flex items-baseline justify-between gap-3">
      <label htmlFor={id} className="text-sm font-semibold text-lp-ink">
        {label}
      </label>
      {hint}
    </div>
    {children}
    {error && (
      <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-rose-600">
        {error}
      </p>
    )}
  </div>
);

const ChoiceGroup = ({
  name,
  label,
  options,
  value,
  onChange,
  error,
  columns = "grid-cols-2 sm:grid-cols-3",
}: {
  name: FieldName;
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
  columns?: string;
}) => (
  <fieldset aria-describedby={error ? `${name}-error` : undefined}>
    <legend className="mb-1.5 text-sm font-semibold text-lp-ink">{label}</legend>
    <div className={cn("grid gap-2", columns)}>
      {options.map((option) => {
        const checked = value === option;
        return (
          <label
            key={option}
            className={cn(
              "relative flex min-h-[44px] cursor-pointer items-center justify-center rounded-xl border px-3 py-2 text-center text-sm font-medium transition-all",
              "has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-lp-blue/20",
              checked
                ? "border-lp-blue bg-lp-blue/[0.07] text-lp-blue"
                : "border-lp-line bg-lp-white text-lp-body hover:border-slate-300"
            )}
          >
            <input
              type="radio"
              name={name}
              value={option}
              checked={checked}
              onChange={() => onChange(option)}
              className="sr-only"
            />
            {option}
          </label>
        );
      })}
    </div>
    {error && (
      <p id={`${name}-error`} role="alert" className="mt-1.5 text-sm text-rose-600">
        {error}
      </p>
    )}
  </fieldset>
);

export const QualificationForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<1 | 2>(1);
  const [values, setValues] = useState<Values>(INITIAL_VALUES);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [attribution, setAttribution] = useState<Attribution | null>(null);
  const leadId = useRef(createLeadId());
  const mountedAt = useRef(Date.now());
  const companyRef = useRef<HTMLInputElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const hasNavigatedSteps = useRef(false);
  // Read from the DOM rather than state: bots often set .value without firing input events.
  const honeypotRef = useRef<HTMLInputElement>(null);
  const honeypotFilled = () => Boolean(honeypotRef.current?.value);

  useEffect(() => {
    setAttribution(captureAttribution());
  }, []);

  useEffect(() => {
    if (!hasNavigatedSteps.current) return;
    (step === 2 ? companyRef : firstFieldRef).current?.focus();
  }, [step]);

  const set = <K extends FieldName>(key: K, value: Values[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const errorProps = (key: FieldName) => ({
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `${key}-error` : undefined,
  });

  const buildPayload = (stage: "step1" | "complete", phoneE164: string): LeadPayload => {
    const attr = attribution ?? captureAttribution();
    const { fbp, fbc } = getFbCookies(attr.fbclid);
    const fullName = values.fullName.trim();
    const base: LeadPayload = {
      source: "ai-automation-lp",
      stage,
      lead_id: leadId.current,
      event_id: leadId.current,
      full_name: fullName,
      first_name: fullName.split(/\s+/)[0] ?? "",
      whatsapp: phoneE164,
      phone_country: getPhoneCountry(values.phoneCountry).label,
      email: values.email.trim(),
      utm_source: attr.utm_source,
      utm_medium: attr.utm_medium,
      utm_campaign: attr.utm_campaign,
      utm_content: attr.utm_content,
      utm_term: attr.utm_term,
      fbclid: attr.fbclid,
      landing_page: attr.landing_page || window.location.href,
      fbp,
      fbc,
      page_url: window.location.href,
      referrer: document.referrer,
      submitted_at: new Date().toISOString(),
      user_agent: navigator.userAgent,
    };
    if (stage === "step1") return base;
    return {
      ...base,
      company: values.company.trim(),
      role: values.role,
      industry: values.industry,
      company_size: values.companySize,
      automation_goal: values.goal.trim(),
      budget: values.budget,
      timeline: values.timeline,
      budget_qualified: values.budget !== LOW_BUDGET_OPTION,
    };
  };

  const validateStep1 = () => {
    const result = step1Schema.safeParse(values);
    const nextErrors: Errors = result.success ? {} : zodErrors(result.error);
    const phone = validatePhone(values.phoneCountry, values.phone);
    if ("error" in phone) nextErrors.phone = phone.error;
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0 && "e164" in phone ? phone.e164 : null;
  };

  const handleContinue = () => {
    const phoneE164 = validateStep1();
    if (!phoneE164) return;
    if (AIA_CONFIG.sendPartialLeads && !honeypotFilled()) {
      sendLeadInBackground(buildPayload("step1", phoneE164));
    }
    hasNavigatedSteps.current = true;
    setStep(2);
  };

  const handleBack = () => {
    hasNavigatedSteps.current = true;
    setErrors({});
    setStep(1);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      handleContinue();
      return;
    }

    const phoneE164 = validateStep1();
    if (!phoneE164) {
      setStep(1);
      return;
    }
    const result = step2Schema.safeParse(values);
    if (!result.success) {
      setErrors(zodErrors(result.error));
      return;
    }

    const looksLikeBot = honeypotFilled() || Date.now() - mountedAt.current < MIN_FILL_TIME_MS;
    if (looksLikeBot) {
      navigate(AIA_CONFIG.thankYouPath);
      return;
    }

    setSubmitting(true);
    setSubmitError(false);
    const ok = await sendLead(buildPayload("complete", phoneE164));
    if (!ok) {
      setSubmitting(false);
      setSubmitError(true);
      return;
    }

    saveSubmission({
      leadId: leadId.current,
      firstName: values.fullName.trim().split(/\s+/)[0] ?? "",
      automationSummary: summarize(values.goal),
      qualified: values.budget !== LOW_BUDGET_OPTION,
      conversionFired: false,
    });
    navigate(AIA_CONFIG.thankYouPath);
  };

  const whatsappFallback = isPlaceholder(AIA_CONFIG.whatsappNumber)
    ? null
    : `https://wa.me/${AIA_CONFIG.whatsappNumber}?text=${encodeURIComponent(
        `Hi Inowix, I tried to submit a request about ${summarize(values.goal) || "AI automation"}`
      )}`;

  return (
    <section id={AIA_CONFIG.formAnchorId} className="relative overflow-hidden bg-lp-mist py-20 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 h-[480px] w-[480px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.10) 0%, transparent 65%)" }}
      />
      <LpContainer className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <Reveal className="lg:pt-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-lp-blue">Free automation plan</p>
          <h2 className="text-[28px] font-extrabold leading-[1.15] tracking-tight text-lp-ink sm:text-4xl">
            Tell us what you want to automate
          </h2>
          <p className="mt-4 text-base text-lp-body sm:text-lg">
            Two quick steps. A senior team member reviews every request personally.
          </p>
          <ol className="mt-8 hidden space-y-5 lg:block">
            {[
              { icon: ShieldCheck, text: "A senior team member reviews your request" },
              { icon: Clock, text: "We reply within 30 minutes on UAE business days" },
              { icon: MessageCircle, text: "You get a free automation plan and a clear quote after a short discovery call" },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3 text-[15px] text-lp-body">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-lp-white text-lp-blue shadow-sm ring-1 ring-lp-line">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <span className="pt-1.5">{text}</span>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={80}>
          <form
            noValidate
            onSubmit={handleSubmit}
            className="relative rounded-3xl border border-lp-line bg-lp-white p-5 shadow-[0_24px_60px_-28px_rgba(11,16,32,0.25)] sm:p-8"
          >
            <div className="mb-7">
              <div className="mb-2 flex items-center justify-between text-xs font-semibold">
                <span className="text-lp-blue">Step {step} of 2</span>
                <span className="text-lp-muted">{step === 1 ? "Your details" : "Your project"}</span>
              </div>
              <div
                className="h-1.5 overflow-hidden rounded-full bg-lp-line"
                role="progressbar"
                aria-valuemin={1}
                aria-valuemax={2}
                aria-valuenow={step}
                aria-label="Form progress"
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-lp-blue to-lp-violet transition-all duration-500"
                  style={{ width: step === 1 ? "50%" : "100%" }}
                />
              </div>
            </div>

            {/* Honeypot: hidden from people, irresistible to bots. */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
              <label htmlFor="company_website">Company website</label>
              <input
                ref={honeypotRef}
                id="company_website"
                name="company_website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                defaultValue=""
              />
            </div>

            <input type="hidden" name="utm_source" value={attribution?.utm_source ?? ""} />
            <input type="hidden" name="utm_campaign" value={attribution?.utm_campaign ?? ""} />
            <input type="hidden" name="utm_content" value={attribution?.utm_content ?? ""} />
            <input type="hidden" name="fbclid" value={attribution?.fbclid ?? ""} />
            <input type="hidden" name="lead_id" value={leadId.current} />

            {step === 1 ? (
              <div className="space-y-5">
                <Field id="fullName" label="Full name" error={errors.fullName}>
                  <input
                    ref={firstFieldRef}
                    id="fullName"
                    name="full_name"
                    autoComplete="name"
                    value={values.fullName}
                    onChange={(e) => set("fullName", e.target.value)}
                    placeholder="e.g. Ahmed Khan"
                    className={fieldClass}
                    {...errorProps("fullName")}
                  />
                </Field>

                <Field id="phone" label="WhatsApp number" error={errors.phone}>
                  <PhoneInput
                    id="phone"
                    countryIso={values.phoneCountry}
                    value={values.phone}
                    onCountryChange={(iso) => set("phoneCountry", iso)}
                    onChange={(v) => set("phone", v)}
                    invalid={Boolean(errors.phone)}
                    describedBy={errors.phone ? "phone-error" : undefined}
                    fieldClassName={fieldClass}
                  />
                </Field>

                <Field id="email" label="Work email" error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={(e) => set("email", e.target.value)}
                    placeholder="you@company.com"
                    className={fieldClass}
                    {...errorProps("email")}
                  />
                </Field>

                <CtaButton type="submit" className="mt-2 w-full">
                  Continue
                </CtaButton>
                <p className="flex items-center justify-center gap-1.5 text-xs text-lp-muted">
                  <Lock className="h-3.5 w-3.5" aria-hidden />
                  Your details stay private.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <Field id="company" label="Company name" error={errors.company}>
                  <input
                    ref={companyRef}
                    id="company"
                    name="company"
                    autoComplete="organization"
                    value={values.company}
                    onChange={(e) => set("company", e.target.value)}
                    className={fieldClass}
                    {...errorProps("company")}
                  />
                </Field>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="role" label="Your role" error={errors.role}>
                    <select
                      id="role"
                      name="role"
                      value={values.role}
                      onChange={(e) => set("role", e.target.value)}
                      className={cn(fieldClass, "lp-select", !values.role && "text-slate-400")}
                      {...errorProps("role")}
                    >
                      <option value="" disabled>
                        Select your role
                      </option>
                      {FORM_OPTIONS.roles.map((o) => (
                        <option key={o} value={o} className="text-lp-ink">
                          {o}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field id="industry" label="Industry" error={errors.industry}>
                    <select
                      id="industry"
                      name="industry"
                      value={values.industry}
                      onChange={(e) => set("industry", e.target.value)}
                      className={cn(fieldClass, "lp-select", !values.industry && "text-slate-400")}
                      {...errorProps("industry")}
                    >
                      <option value="" disabled>
                        Select your industry
                      </option>
                      {FORM_OPTIONS.industries.map((o) => (
                        <option key={o} value={o} className="text-lp-ink">
                          {o}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <ChoiceGroup
                  name="companySize"
                  label="Company size"
                  options={FORM_OPTIONS.companySizes}
                  value={values.companySize}
                  onChange={(v) => set("companySize", v)}
                  error={errors.companySize}
                  columns="grid-cols-4"
                />

                <Field
                  id="goal"
                  label="What do you want to automate or build?"
                  error={errors.goal}
                  hint={
                    <span
                      className={cn(
                        "shrink-0 text-xs tabular-nums",
                        values.goal.trim().length >= GOAL_MIN ? "text-lp-success" : "text-lp-muted"
                      )}
                    >
                      {values.goal.trim().length}/{GOAL_MIN}+
                    </span>
                  }
                >
                  <textarea
                    id="goal"
                    name="automation_goal"
                    rows={4}
                    maxLength={GOAL_MAX}
                    value={values.goal}
                    onChange={(e) => set("goal", e.target.value)}
                    placeholder="e.g. We get 200 WhatsApp enquiries a week and can't reply fast enough..."
                    className={cn(fieldClass, "h-auto min-h-[120px] resize-y py-3 leading-relaxed")}
                    {...errorProps("goal")}
                  />
                </Field>

                <ChoiceGroup
                  name="budget"
                  label="Estimated budget"
                  options={FORM_OPTIONS.budgets}
                  value={values.budget}
                  onChange={(v) => set("budget", v)}
                  error={errors.budget}
                />

                <ChoiceGroup
                  name="timeline"
                  label="Timeline"
                  options={FORM_OPTIONS.timelines}
                  value={values.timeline}
                  onChange={(v) => set("timeline", v)}
                  error={errors.timeline}
                  columns="grid-cols-2"
                />

                {submitError && (
                  <div role="alert" className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">
                    We couldn't send your request. Please try again
                    {whatsappFallback ? (
                      <>
                        {" "}or{" "}
                        <a href={whatsappFallback} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
                          message us on WhatsApp
                        </a>
                        .
                      </>
                    ) : (
                      "."
                    )}
                  </div>
                )}

                <div className="flex flex-col-reverse gap-3 pt-1 sm:flex-row sm:items-center">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex h-12 items-center justify-center gap-1.5 rounded-xl px-4 text-sm font-semibold text-lp-body transition-colors hover:bg-lp-mist hover:text-lp-ink"
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden />
                    Back
                  </button>
                  <CtaButton type="submit" disabled={submitting} className="w-full sm:flex-1">
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                        Sending...
                      </>
                    ) : (
                      "Get My Free Automation Plan"
                    )}
                  </CtaButton>
                </div>
                <p className="text-center text-xs text-lp-muted">
                  No spam. We'll reply within 30 minutes on UAE business days.
                </p>
              </div>
            )}
          </form>
        </Reveal>
      </LpContainer>
    </section>
  );
};
