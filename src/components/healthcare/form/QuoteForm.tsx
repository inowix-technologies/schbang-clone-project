import { useEffect, useRef, useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Info, Loader2, Lock, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { HC_CONFIG, isPlaceholder, whatsappLink } from "@/lib/healthcare/config";
import { captureAttribution } from "@/lib/healthcare/attribution";
import { DEFAULT_COUNTRY_ISO } from "@/lib/healthcare/phone";
import {
  BUDGET_OPTIONS,
  ORG_TYPE_OPTIONS,
  REQUIREMENTS_MIN,
  ROLE_OPTIONS,
  SITUATION_OPTIONS,
  SIZE_BED_OPTIONS,
  SIZE_BRANCH_OPTIONS,
  TIMELINE_OPTIONS,
  showBudgetNote,
  validateStepOne,
  validateStepTwo,
  type FormErrors,
  type FormValues,
} from "@/lib/healthcare/form";
import { createEventId, sendPartialLead, submitLead } from "@/lib/healthcare/submit-lead";
import { savePendingLead } from "@/lib/healthcare/pixel";
import { ChipGroup, SelectField, TextAreaField, TextField } from "./fields";
import { PhoneField } from "./PhoneField";

/** Bots tend to submit almost instantly; real people take far longer to fill both steps. */
const MIN_FILL_MS = 3000;

const INITIAL_VALUES: FormValues = {
  fullName: "",
  countryIso: DEFAULT_COUNTRY_ISO,
  phone: "",
  email: "",
  organization: "",
  role: "",
  orgType: "",
  size: "",
  requirements: "",
  situation: "",
  budget: "",
  timeline: "",
};

const FIELD_ORDER: (keyof FormValues)[] = [
  "fullName",
  "phone",
  "email",
  "organization",
  "role",
  "orgType",
  "size",
  "requirements",
  "situation",
  "budget",
  "timeline",
];

const STEPS = ["Your details", "Your organization"];

export const QuoteForm = () => {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const mountedAt = useRef(Date.now());
  const eventId = useRef(createEventId());
  const lastPartialKey = useRef("");
  const [attribution] = useState(captureAttribution);

  const [step, setStep] = useState<1 | 2>(1);
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const set = <K extends keyof FormValues>(key: K, value: FormValues[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const focusFirstError = (errs: FormErrors) => {
    const first = FIELD_ORDER.find((k) => errs[k]);
    if (!first) return;
    const form = formRef.current;
    const el = form?.querySelector<HTMLElement>(`#hc-${first}`) ?? form?.querySelector<HTMLElement>(`[name="${first}"]`);
    el?.focus({ preventScroll: true });
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    const target = step === 2 ? "#hc-organization" : "#hc-fullName";
    window.setTimeout(() => formRef.current?.querySelector<HTMLElement>(target)?.focus({ preventScroll: true }), 350);
  }, [step]);

  const handleContinue = () => {
    const errs = validateStepOne(values);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      focusFirstError(errs);
      return;
    }
    const partialKey = `${values.fullName}|${values.countryIso}|${values.phone}|${values.email}`;
    if (partialKey !== lastPartialKey.current && !honeypotRef.current?.value) {
      lastPartialKey.current = partialKey;
      sendPartialLead(values, eventId.current);
    }
    setStep(2);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      handleContinue();
      return;
    }
    if (submitting) return;

    const errs = { ...validateStepOne(values), ...validateStepTwo(values) };
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      if (Object.keys(validateStepOne(values)).length > 0) setStep(1);
      else focusFirstError(errs);
      return;
    }

    if (honeypotRef.current?.value || Date.now() - mountedAt.current < MIN_FILL_MS) {
      navigate(HC_CONFIG.thankYouPath, { replace: true });
      return;
    }

    setSubmitting(true);
    setSubmitError(false);
    const result = await submitLead(values, eventId.current);
    if (!result.ok) {
      setSubmitting(false);
      setSubmitError(true);
      return;
    }

    savePendingLead({
      eventId: eventId.current,
      firstName: values.fullName.trim().split(/\s+/)[0] ?? "",
      qualified: result.qualified,
    });
    navigate(HC_CONFIG.thankYouPath, { state: { fromSubmit: true } });
  };

  const reqLength = values.requirements.trim().length;

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="relative scroll-mt-24 rounded-3xl bg-hc-white p-5 shadow-[0_30px_70px_-30px_rgba(11,21,48,0.45)] ring-1 ring-hc-line sm:p-8"
    >
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs font-semibold">
          <span className="text-hc-blue">Step {step} of 2</span>
          <span className="text-hc-muted">{STEPS[step - 1]}</span>
        </div>
        <div
          className="mt-2 h-1.5 overflow-hidden rounded-full bg-hc-sky"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={2}
          aria-valuenow={step}
          aria-label="Form progress"
        >
          <div className="h-full rounded-full hc-gradient-bg transition-[width] duration-500" style={{ width: step === 1 ? "50%" : "100%" }} />
        </div>
        <ol className="mt-3 flex gap-4 text-xs">
          {STEPS.map((label, i) => (
            <li key={label} className={cn("flex items-center gap-1.5", i + 1 <= step ? "text-hc-ink" : "text-hc-muted")}>
              <span
                className={cn(
                  "flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-bold",
                  i + 1 < step ? "bg-hc-success text-hc-white" : i + 1 === step ? "bg-hc-blue text-hc-white" : "bg-hc-sky text-hc-muted",
                )}
              >
                {i + 1 < step ? <Check className="h-2.5 w-2.5" /> : i + 1}
              </span>
              {label}
            </li>
          ))}
        </ol>
      </div>

      {/* Hidden attribution fields; the same values are also attached to the submitted payload. */}
      <input type="hidden" name="utm_source" value={attribution.utm_source} />
      <input type="hidden" name="utm_campaign" value={attribution.utm_campaign} />
      <input type="hidden" name="utm_content" value={attribution.utm_content} />
      <input type="hidden" name="fbclid" value={attribution.fbclid} />

      <div aria-hidden="true" className="absolute -left-[9999px] top-0 h-px w-px overflow-hidden">
        <label htmlFor="hc-website">Website</label>
        <input ref={honeypotRef} id="hc-website" name="website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>

      {step === 1 ? (
        <div className="space-y-4">
          <TextField
            id="hc-fullName"
            name="fullName"
            label="Full name"
            autoComplete="name"
            placeholder="Your full name"
            value={values.fullName}
            error={errors.fullName}
            onChange={(e) => set("fullName", e.target.value)}
          />
          <PhoneField
            id="hc-phone"
            countryIso={values.countryIso}
            phone={values.phone}
            error={errors.phone}
            onCountryChange={(iso) => set("countryIso", iso)}
            onPhoneChange={(v) => set("phone", v)}
          />
          <TextField
            id="hc-email"
            name="email"
            type="email"
            inputMode="email"
            label="Work email"
            autoComplete="email"
            placeholder="you@yourhospital.com"
            value={values.email}
            error={errors.email}
            onChange={(e) => set("email", e.target.value)}
          />
          <button
            type="submit"
            className="group mt-2 inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-xl text-base font-semibold text-hc-white hc-gradient-bg shadow-[0_12px_30px_-10px_rgba(59,91,255,0.65)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-hc-blue/25"
          >
            Continue
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      ) : (
        <div className="space-y-5">
          <TextField
            id="hc-organization"
            name="organization"
            label="Organization name"
            autoComplete="organization"
            placeholder="e.g. CityCare Clinics"
            value={values.organization}
            error={errors.organization}
            onChange={(e) => set("organization", e.target.value)}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <SelectField
              id="hc-role"
              name="role"
              label="Your role"
              placeholder="Select your role"
              options={ROLE_OPTIONS}
              value={values.role}
              error={errors.role}
              onChange={(e) => set("role", e.target.value)}
            />
            <SelectField
              id="hc-orgType"
              name="orgType"
              label="Organization type"
              placeholder="Select type"
              options={ORG_TYPE_OPTIONS}
              value={values.orgType}
              error={errors.orgType}
              onChange={(e) => set("orgType", e.target.value)}
            />
          </div>
          <SelectField
            id="hc-size"
            name="size"
            label="Number of clinics / branches / beds"
            placeholder="Select branches or beds"
            groups={[
              { label: "Branches", options: SIZE_BRANCH_OPTIONS },
              { label: "Beds", options: SIZE_BED_OPTIONS },
            ]}
            value={values.size}
            error={errors.size}
            onChange={(e) => set("size", e.target.value)}
          />
          <TextAreaField
            id="hc-requirements"
            name="requirements"
            label="What are you looking to build?"
            placeholder="e.g. We run 6 clinics and need one system for appointments, patient records and reminders..."
            rows={4}
            maxLength={2000}
            value={values.requirements}
            error={errors.requirements}
            onChange={(e) => set("requirements", e.target.value)}
            hint={
              <p id="hc-requirements-hint" className="mt-1.5 flex justify-between gap-3 text-xs text-hc-muted">
                <span>Please don't include any patient or medical information.</span>
                <span className={cn("shrink-0", reqLength >= REQUIREMENTS_MIN && "text-hc-success")}>
                  {reqLength < REQUIREMENTS_MIN ? `${reqLength}/${REQUIREMENTS_MIN} min` : "Looks good"}
                </span>
              </p>
            }
          />
          <ChipGroup
            name="situation"
            legend="Current situation"
            options={SITUATION_OPTIONS}
            value={values.situation}
            error={errors.situation}
            onChange={(v) => set("situation", v)}
          />
          <ChipGroup
            name="budget"
            legend="Budget"
            options={BUDGET_OPTIONS}
            value={values.budget}
            error={errors.budget}
            onChange={(v) => set("budget", v)}
            columns={3}
          >
            {showBudgetNote(values.budget, values.size) && (
              <p className="mt-3 flex gap-2 rounded-xl bg-amber-50 px-3.5 py-3 text-[13px] leading-relaxed text-[#7C4A03] ring-1 ring-amber-200">
                <Info className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  Our custom platforms usually start from ₹5L. If you run a single practice and need a ready-made app,
                  off-the-shelf clinic software may suit you better. You can still send your request and we'll point you
                  in the right direction.
                </span>
              </p>
            )}
          </ChipGroup>
          <ChipGroup
            name="timeline"
            legend="Timeline"
            options={TIMELINE_OPTIONS}
            value={values.timeline}
            error={errors.timeline}
            onChange={(v) => set("timeline", v)}
          />

          {submitError && (
            <div role="alert" className="rounded-xl bg-hc-danger/5 px-4 py-3 text-sm text-hc-danger ring-1 ring-hc-danger/20">
              We couldn't send your request just now. Please try again
              {!isPlaceholder(HC_CONFIG.whatsappNumber) && (
                <>
                  {" "}or{" "}
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold underline">
                    <MessageCircle className="h-3.5 w-3.5" /> message us on WhatsApp
                  </a>
                </>
              )}
              .
            </div>
          )}

          <div className="flex flex-col-reverse gap-3 pt-1 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => setStep(1)}
              disabled={submitting}
              className="inline-flex h-12 items-center justify-center gap-1.5 rounded-xl px-4 text-sm font-semibold text-hc-body transition-colors hover:bg-hc-mist hover:text-hc-ink disabled:opacity-50"
            >
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="group inline-flex h-[52px] flex-1 items-center justify-center gap-2 rounded-xl px-5 text-base font-semibold text-hc-white hc-gradient-bg shadow-[0_12px_30px_-10px_rgba(59,91,255,0.65)] transition-transform enabled:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-hc-blue/25 disabled:cursor-wait disabled:opacity-80"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  Request a Platform Consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </button>
          </div>
        </div>
      )}

      <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-hc-muted">
        <Lock className="h-3.5 w-3.5" />
        No spam. We reply within 30 minutes on business days.
      </p>
    </form>
  );
};
