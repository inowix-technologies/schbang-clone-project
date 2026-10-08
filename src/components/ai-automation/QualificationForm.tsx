import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { ArrowLeft, Clock, Loader2, Lock, Mail, MessageCircle, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { AIA_CONFIG, isPlaceholder } from "@/lib/ai-automation/config";
import { LEAD_FALLBACK_EMAIL, buildLeadMailto } from "@/lib/lead-email-fallback";
import { FORM_OPTIONS, LOW_BUDGET_OPTION, PROOF_PROJECTS } from "@/lib/ai-automation/content";
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

const NOTE_MAX = 300;
const MIN_FILL_TIME_MS = 3000;

const step1Schema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name").max(100),
  email: z.string().trim().email("Enter a valid work email").max(255),
});

const step2Schema = z.object({
  goal: z.string().min(1, "Pick what you want to automate"),
  industry: z.string().min(1, "Pick your industry"),
  budget: z.string().min(1, "Pick an estimated budget"),
  timeline: z.string().min(1, "Pick a timeline"),
  note: z.string().trim().max(NOTE_MAX, `Keep this under ${NOTE_MAX} characters`),
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
  goal: "",
  industry: "",
  budget: "",
  timeline: "",
  note: "",
};

const fieldClass =
  "lp-field h-11 w-full rounded-xl border border-lp-line bg-lp-white px-3.5 text-base text-lp-ink outline-none transition-colors placeholder:text-slate-400 hover:border-slate-300 focus:border-lp-blue focus:ring-4 focus:ring-lp-blue/15 aria-[invalid=true]:border-rose-400 sm:text-[15px]";

const zodErrors = (error: z.ZodError): Errors => {
  const out: Errors = {};
  for (const issue of error.issues) {
    const key = issue.path[0] as FieldName;
    if (!out[key]) out[key] = issue.message;
  }
  return out;
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
    <div className="mb-1 flex items-baseline justify-between gap-3">
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
}: {
  name: FieldName;
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
}) => (
  <fieldset aria-describedby={error ? `${name}-error` : undefined}>
    <legend className="mb-2 text-sm font-semibold text-lp-ink">{label}</legend>
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const checked = value === option;
        return (
          <label
            key={option}
            className={cn(
              "relative inline-flex min-h-[40px] cursor-pointer items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all",
              "has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-lp-blue/20",
              checked
                ? "border-lp-blue bg-lp-blue text-lp-white shadow-[0_6px_16px_-8px_rgba(59,91,255,0.8)]"
                : error
                  ? "border-rose-300 bg-lp-white text-lp-body hover:border-rose-400"
                  : "border-lp-line bg-lp-white text-lp-body hover:border-lp-blue/40 hover:text-lp-ink"
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
  const step2Ref = useRef<HTMLDivElement>(null);
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
    if (step === 2) step2Ref.current?.querySelector<HTMLInputElement>("input")?.focus();
    else firstFieldRef.current?.focus();
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
      automation_goal: values.goal,
      industry: values.industry,
      budget: values.budget,
      timeline: values.timeline,
      note: values.note.trim(),
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
      automationSummary: values.goal,
      qualified: values.budget !== LOW_BUDGET_OPTION,
      conversionFired: false,
    });
    navigate(AIA_CONFIG.thankYouPath);
  };

  const phoneCheck = validatePhone(values.phoneCountry, values.phone);
  const fallbackMailto = buildLeadMailto(`AI automation enquiry - ${values.fullName.trim()}`, {
    Name: values.fullName,
    WhatsApp: phoneCheck.ok ? phoneCheck.e164 : values.phone,
    Email: values.email,
    "Want to automate": values.goal,
    Industry: values.industry,
    Budget: values.budget,
    Timeline: values.timeline,
    Note: values.note,
  });

  const whatsappFallback = isPlaceholder(AIA_CONFIG.whatsappNumber)
    ? null
    : `https://wa.me/${AIA_CONFIG.whatsappNumber}?text=${encodeURIComponent(
        `Hi Inowix, I tried to submit a request about ${values.goal || "AI automation"}`
      )}`;

  return (
    <section id={AIA_CONFIG.formAnchorId} className="relative overflow-clip bg-lp-mist py-16 sm:py-24">
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
            Two quick steps, mostly taps. A senior team member reviews every request personally.
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
          <div className="mt-8 hidden rounded-2xl border border-lp-line bg-lp-white p-4 shadow-sm lg:block">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-lp-muted">Recently shipped by our team</p>
            <ul className="mt-3 grid grid-cols-3 gap-3">
              {PROOF_PROJECTS.map((project) => (
                <li key={project.slug}>
                  <div
                    className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl ring-1 ring-lp-line"
                    style={{ background: `linear-gradient(135deg, ${project.accent}1f, ${project.accent}45)` }}
                  >
                    {project.screenshot ? (
                      <img src={project.screenshot} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                    ) : (
                      project.logo && <img src={project.logo} alt="" loading="lazy" decoding="async" className="max-h-8 w-auto max-w-[80%] object-contain" />
                    )}
                  </div>
                  <p className="mt-1.5 truncate text-xs font-semibold text-lp-ink">{project.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <form
            noValidate
            onSubmit={handleSubmit}
            className="relative rounded-3xl border border-lp-line bg-lp-white p-5 shadow-[0_24px_60px_-28px_rgba(11,16,32,0.25)] sm:p-7"
          >
            <div className="mb-5">
              <div className="mb-2 flex items-center justify-between gap-3 text-xs font-semibold">
                <span className="text-lp-blue">
                  Step {step} of 2 <span className="text-lp-muted">· {step === 1 ? "Your details" : "Your project"}</span>
                </span>
                <span className="inline-flex shrink-0 items-center gap-1 text-lp-muted">
                  <Clock className="h-3.5 w-3.5" aria-hidden />
                  <span className="sm:hidden">~30 sec</span>
                  <span className="hidden sm:inline">Takes about 30 seconds</span>
                </span>
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
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
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
                </div>

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

                <CtaButton type="submit" className="mt-1 h-12 w-full">
                  Continue
                </CtaButton>
                <p className="flex items-center justify-center gap-1.5 text-xs text-lp-muted">
                  <Lock className="h-3.5 w-3.5" aria-hidden />
                  Your details stay private.
                </p>
              </div>
            ) : (
              <div ref={step2Ref} className="space-y-5">
                <ChoiceGroup
                  name="goal"
                  label="What do you want to automate?"
                  options={FORM_OPTIONS.goals}
                  value={values.goal}
                  onChange={(v) => set("goal", v)}
                  error={errors.goal}
                />

                <ChoiceGroup
                  name="industry"
                  label="Your industry"
                  options={FORM_OPTIONS.industries}
                  value={values.industry}
                  onChange={(v) => set("industry", v)}
                  error={errors.industry}
                />

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
                  label="When do you want to start?"
                  options={FORM_OPTIONS.timelines}
                  value={values.timeline}
                  onChange={(v) => set("timeline", v)}
                  error={errors.timeline}
                />

                <Field
                  id="note"
                  label="Company name or a quick note"
                  error={errors.note}
                  hint={<span className="shrink-0 text-xs text-lp-muted">Optional</span>}
                >
                  <input
                    id="note"
                    name="note"
                    autoComplete="organization"
                    maxLength={NOTE_MAX}
                    value={values.note}
                    onChange={(e) => set("note", e.target.value)}
                    placeholder="e.g. Acme Realty, 200 WhatsApp leads a week"
                    className={fieldClass}
                    {...errorProps("note")}
                  />
                </Field>

                {submitError && (
                  <div role="alert" className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">
                    <p>We couldn't send your request just now. Your answers are still here, so you can send them by email instead.</p>
                    <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-2">
                      <a href={fallbackMailto} className="inline-flex items-center gap-1.5 font-semibold underline">
                        <Mail className="h-3.5 w-3.5" aria-hidden /> Email them to {LEAD_FALLBACK_EMAIL}
                      </a>
                      {whatsappFallback && (
                        <a href={whatsappFallback} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold underline">
                          <MessageCircle className="h-3.5 w-3.5" aria-hidden /> Message us on WhatsApp
                        </a>
                      )}
                    </div>
                  </div>
                )}

                <div className="sticky bottom-0 z-10 -mx-5 flex items-center gap-2 border-t border-lp-line bg-lp-white/95 px-5 py-3 backdrop-blur sm:static sm:mx-0 sm:gap-3 sm:border-0 sm:bg-transparent sm:p-0 sm:pt-1 sm:backdrop-blur-none">
                  <button
                    type="button"
                    onClick={handleBack}
                    aria-label="Back to your details"
                    className="inline-flex h-12 shrink-0 items-center justify-center gap-1.5 rounded-xl px-3 text-sm font-semibold text-lp-body transition-colors hover:bg-lp-mist hover:text-lp-ink sm:px-4"
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden />
                    <span className="hidden sm:inline">Back</span>
                  </button>
                  <CtaButton type="submit" disabled={submitting} className="h-12 min-w-0 flex-1 px-4 text-[15px] sm:px-7 sm:text-base">
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
