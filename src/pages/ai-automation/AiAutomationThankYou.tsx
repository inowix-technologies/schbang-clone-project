import { useEffect, useRef, useState } from "react";
import { CalendarDays, CheckCircle2, MessageCircle } from "lucide-react";
import "@/components/ai-automation/ai-automation.css";
import { LpContainer, LpLogo } from "@/components/ai-automation/LpPrimitives";
import { LpFooter } from "@/components/ai-automation/LpFooter";
import { AIA_CONFIG, isPlaceholder, whatsappLink } from "@/lib/ai-automation/config";
import { fireConversionOnce, readSubmission, type StoredSubmission } from "@/lib/ai-automation/tracking";
import { usePageMeta } from "@/lib/ai-automation/usePageMeta";

const META = {
  title: "Thank you | Inowix AI Automation",
  description: "We've received your AI automation request.",
  noindex: true,
};

const hasBooking = !isPlaceholder(AIA_CONFIG.bookingUrl);

const AiAutomationThankYou = () => {
  usePageMeta(META);
  const [submission] = useState<StoredSubmission | null>(() => readSubmission());
  const firedRef = useRef(false);

  useEffect(() => {
    if (firedRef.current || !submission) return;
    firedRef.current = true;
    fireConversionOnce(submission);
  }, [submission]);

  const firstName = submission?.firstName;
  const headline = firstName ? `Thanks, ${firstName}. We've got your request.` : "Thanks. We've got your request.";
  const qualified = submission ? submission.qualified : true;

  return (
    <div className="lp-root flex min-h-screen flex-col bg-lp-navy text-lp-white antialiased">
      <header className="border-b border-lp-white/10">
        <LpContainer className="flex h-16 items-center">
          <LpLogo />
        </LpContainer>
      </header>

      <main className="relative flex flex-1 items-center overflow-hidden py-16 sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 15% 0%, rgba(59,91,255,0.35) 0%, transparent 55%), radial-gradient(ellipse at 90% 100%, rgba(124,58,237,0.35) 0%, transparent 55%)",
          }}
        />
        <LpContainer className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-lp-blue to-lp-violet shadow-[0_16px_40px_-12px_rgba(59,91,255,0.7)]">
              <CheckCircle2 className="h-8 w-8 text-lp-white" aria-hidden />
            </div>

            <h1 className="text-[32px] font-extrabold leading-[1.12] tracking-tight text-lp-white sm:text-5xl">{headline}</h1>

            {qualified ? (
              <>
                <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
                  A senior team member will contact you within 30 minutes on business days (UAE 9am-6pm).
                </p>

                <div className={hasBooking ? "mt-10 grid gap-4 sm:grid-cols-2" : "mx-auto mt-10 grid max-w-sm gap-4"}>
                  <a
                    href={whatsappLink(
                      `Hi Inowix, I just submitted a request about ${submission?.automationSummary || "AI automation"}`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-16 items-center justify-center gap-3 rounded-2xl bg-lp-wa px-6 text-base font-semibold text-lp-navy shadow-[0_14px_36px_-14px_rgba(37,211,102,0.8)] transition-transform hover:-translate-y-0.5"
                  >
                    <MessageCircle className="h-5 w-5" aria-hidden />
                    Chat with us on WhatsApp
                  </a>
                  {hasBooking && (
                    <a
                      href={AIA_CONFIG.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-16 items-center justify-center gap-3 rounded-2xl border border-lp-white/20 bg-lp-white/10 px-6 text-base font-semibold text-lp-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-lp-white/15"
                    >
                      <CalendarDays className="h-5 w-5" aria-hidden />
                      Book a 20-min call
                    </a>
                  )}
                </div>
              </>
            ) : (
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
                Based on the budget you shared, a fully custom build may not be the right fit right now. We'll review
                your request, and if we can help, we'll reply by email.
              </p>
            )}
          </div>
        </LpContainer>
      </main>

      <LpFooter />
    </div>
  );
};

export default AiAutomationThankYou;
