import { useEffect, useRef, useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Info, Loader2, Lock, Mail, MessageCircle } from "lucide-react";
import { HC_CONFIG, isPlaceholder, whatsappLink } from "@/lib/healthcare/config";
import { captureAttribution } from "@/lib/healthcare/attribution";
import { DEFAULT_COUNTRY_ISO, findCountry, toE164 } from "@/lib/healthcare/phone";
import { LEAD_FALLBACK_EMAIL, buildLeadMailto } from "@/lib/lead-email-fallback";
import {
  BUDGET_OPTIONS,
  BUILD_OPTIONS,
  NOTE_MAX,
  ORG_TYPE_OPTIONS,
  TIMELINE_OPTIONS,
  labelFor,
  showBudgetNote,
  validateStepOne,
  validateStepTwo,
  type FormErrors,
  type FormValues,
} from "@/lib/healthcare/form";
import { createEventId, sendPartialLead, submitLead } from "@/lib/healthcare/submit-lead";
import { savePendingLead } from "@/lib/healthcare/pixel";
import { ChipGroup, TextField } from "./fields";
import { PhoneField } from "./PhoneField";

/** Bots tend to submit almost instantly; real people take far longer to fill both steps. */
const MIN_FILL_MS = 3000;

const INITIAL_VALUES: FormValues = {
  fullName: "",
  countryIso: DEFAULT_COUNTRY_ISO,
  phone: "",
  email: "",
  orgType: "",
  build: "",
  budget: "",
  timeline: "",
  note: "",
};

const FIELD_ORDER: (keyof FormValues)[] = ["fullName", "phone", "email", "orgType", "build", "budget", "timeline", "note"];

const STEPS = ["Your details", "Your project"];

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
    const target = step === 2 ? 'input[name="orgType"]' : "#hc-fullName";
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

  const fallbackMailto = buildLeadMailto(`Healthcare platform enquiry - ${values.fullName.trim()}`, {
    Name: values.fullName,
    WhatsApp: values.phone ? toE164(values.phone, findCountry(values.countryIso)) : "",
    Email: values.email,
    "Organization type": labelFor(ORG_TYPE_OPTIONS, values.orgType),
    "Looking to build": labelFor(BUILD_OPTIONS, values.build),
    Budget: labelFor(BUDGET_OPTIONS, values.budget),
    Timeline: labelFor(TIMELINE_OPTIONS, values.timeline),
    Note: values.note,
  });

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="relative scroll-mt-24 rounded-3xl bg-hc-white p-5 shadow-[0_30px_70px_-30px_rgba(11,21,48,0.45)] ring-1 ring-hc-line sm:p-7"
    >
      <div className="mb-5">
        <div className="flex items-center justify-between gap-3 text-xs font-semibold">
          <span className="text-hc-blue">
            Step {step} of 2 <span className="text-hc-muted">· {STEPS[step - 1]}</span>
          </span>
          <span className="inline-flex shrink-0 items-center gap-1 text-hc-muted">
            <Clock className="h-3.5 w-3.5" />
            <span className="sm:hidden">~30 sec</span>
            <span className="hidden sm:inline">Takes about 30 seconds</span>
          </span>
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
          <div className="grid gap-4 sm:grid-cols-2">
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
          </div>
          <PhoneField
            id="hc-phone"
            countryIso={values.countryIso}
            phone={values.phone}
            error={errors.phone}
            onCountryChange={(iso) => set("countryIso", iso)}
            onPhoneChange={(v) => set("phone", v)}
          />
          <button
            type="submit"
            className="group mt-1 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl text-base font-semibold text-hc-white hc-gradient-bg shadow-[0_12px_30px_-10px_rgba(59,91,255,0.65)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-hc-blue/25"
          >
            Continue
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      ) : (
        <div className="space-y-5">
          <ChipGroup
            name="orgType"
            legend="Your organization"
            options={ORG_TYPE_OPTIONS}
            value={values.orgType}
            error={errors.orgType}
            onChange={(v) => set("orgType", v)}
          />
          <ChipGroup
            name="build"
            legend="What do you want to build?"
            options={BUILD_OPTIONS}
            value={values.build}
            error={errors.build}
            onChange={(v) => set("build", v)}
          />
          <ChipGroup
            name="budget"
            legend="Budget"
            options={BUDGET_OPTIONS}
            value={values.budget}
            error={errors.budget}
            onChange={(v) => set("budget", v)}
          >
            {showBudgetNote(values.budget) && (
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
            legend="When do you want to start?"
            options={TIMELINE_OPTIONS}
            value={values.timeline}
            error={errors.timeline}
            onChange={(v) => set("timeline", v)}
          />
          <TextField
            id="hc-note"
            name="note"
            label="Organization name or a quick note"
            optional
            autoComplete="organization"
            maxLength={NOTE_MAX}
            placeholder="e.g. CityCare Clinics, 6 branches. No patient details, please."
            value={values.note}
            error={errors.note}
            onChange={(e) => set("note", e.target.value)}
          />

          {submitError && (
            <div role="alert" className="rounded-xl bg-hc-danger/5 px-4 py-3 text-sm text-hc-danger ring-1 ring-hc-danger/20">
              <p>We couldn't send your request just now. Your answers are still here, so you can send them by email instead.</p>
              <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-2">
                <a href={fallbackMailto} className="inline-flex items-center gap-1.5 font-semibold underline">
                  <Mail className="h-3.5 w-3.5" /> Email them to {LEAD_FALLBACK_EMAIL}
                </a>
                {!isPlaceholder(HC_CONFIG.whatsappNumber) && (
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold underline">
                    <MessageCircle className="h-3.5 w-3.5" /> Message us on WhatsApp
                  </a>
                )}
              </div>
            </div>
          )}

          <div className="sticky bottom-0 z-10 -mx-5 flex items-center gap-2 border-t border-hc-line bg-hc-white/95 px-5 py-3 backdrop-blur sm:static sm:mx-0 sm:gap-3 sm:border-0 sm:bg-transparent sm:p-0 sm:pt-1 sm:backdrop-blur-none">
            <button
              type="button"
              onClick={() => setStep(1)}
              disabled={submitting}
              aria-label="Back to your details"
              className="inline-flex h-12 shrink-0 items-center justify-center gap-1.5 rounded-xl px-3 text-sm font-semibold text-hc-body transition-colors hover:bg-hc-mist hover:text-hc-ink disabled:opacity-50 sm:px-4"
            >
              <ArrowLeft className="h-4 w-4" /> <span className="hidden sm:inline">Back</span>
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="group inline-flex h-12 min-w-0 flex-1 items-center justify-center gap-2 rounded-xl px-4 text-[15px] font-semibold sm:px-5 sm:text-base text-hc-white hc-gradient-bg shadow-[0_12px_30px_-10px_rgba(59,91,255,0.65)] transition-transform enabled:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-hc-blue/25 disabled:cursor-wait disabled:opacity-80"
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
