import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, CalendarClock, CheckCircle2, MessageCircle } from "lucide-react";
import "@/components/healthcare/healthcare.css";
import { HC_CONFIG, isPlaceholder, whatsappLink } from "@/lib/healthcare/config";
import { usePageHead } from "@/lib/healthcare/head";
import { fireLeadOnce, firePageViewOnce, readPendingLead } from "@/lib/healthcare/pixel";
import { TopBar } from "@/components/healthcare/TopBar";
import { Footer } from "@/components/healthcare/Footer";
import { Container } from "@/components/healthcare/Primitives";

/** Unconfigured [PLACEHOLDER] links stay inert instead of opening a blank tab. */
const externalLink = (href: string | null) =>
  href ? { href, target: "_blank", rel: "noopener noreferrer" } : { href: "#", "aria-disabled": true };

const HealthcareThankYou = () => {
  const location = useLocation();
  const [firstName] = useState(() => readPendingLead()?.firstName ?? "");

  usePageHead({
    title: "Thank you | Inowix Healthcare Platforms",
    description: "We've received your healthcare platform request.",
    robots: "noindex, nofollow",
  });

  useEffect(() => {
    // Only a real submission in this session fires anything; direct visits and refreshes are no-ops.
    const pending = readPendingLead();
    if (!pending) return;
    const fromSubmit = (location.state as { fromSubmit?: boolean } | null)?.fromSubmit === true;
    if (fromSubmit) firePageViewOnce(pending.eventId);
    fireLeadOnce(pending);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hasWhatsapp = !isPlaceholder(HC_CONFIG.whatsappNumber);
  const hasCalendly = !isPlaceholder(HC_CONFIG.calendlyUrl);

  return (
    <div className="hc-root flex min-h-screen flex-col">
      <TopBar showCta={false} />
      <main className="relative flex flex-1 items-center overflow-hidden bg-hc-navy pb-16 pt-28 text-hc-white sm:pt-32">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-40 h-[480px] w-[480px] rounded-full bg-hc-teal/25 blur-[120px] animate-hc-glow" />
          <div className="absolute -bottom-48 -left-20 h-[440px] w-[560px] rounded-full bg-hc-blue/30 blur-[130px] animate-hc-glow [animation-delay:-4s]" />
        </div>
        <Container className="relative max-w-2xl text-center">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl hc-gradient-bg shadow-[0_16px_40px_-12px_rgba(20,184,166,0.7)]">
            <CheckCircle2 className="h-8 w-8 text-hc-white" />
          </span>
          <h1 className="mt-6 text-[2rem] font-extrabold leading-tight tracking-tight sm:text-5xl">
            {firstName ? `Thanks, ${firstName}.` : "Thanks."} We&apos;ve received your request.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-hc-white/75 sm:text-lg">
            A senior team member will contact you within 30 minutes on business days (10am-7pm IST).
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              {...externalLink(hasWhatsapp ? whatsappLink() : null)}
              className="inline-flex h-[52px] items-center justify-center gap-2 rounded-xl bg-hc-wa px-6 text-base font-semibold text-[#06301A] shadow-[0_12px_30px_-10px_rgba(37,211,102,0.6)] transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" />
              Chat with us on WhatsApp
            </a>
            <a
              {...externalLink(hasCalendly ? HC_CONFIG.calendlyUrl : null)}
              className="inline-flex h-[52px] items-center justify-center gap-2 rounded-xl border border-hc-white/20 bg-hc-white/5 px-6 text-base font-semibold text-hc-white transition-colors hover:bg-hc-white/10"
            >
              <CalendarClock className="h-5 w-5" />
              Book a 20-min call
            </a>
          </div>

          <Link
            to={HC_CONFIG.landingPath}
            className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-hc-white/60 transition-colors hover:text-hc-white"
          >
            <ArrowLeft className="h-4 w-4" /> Back to healthcare platforms
          </Link>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default HealthcareThankYou;
