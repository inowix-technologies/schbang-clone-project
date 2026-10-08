import { Building2, Clock3, Layers } from "lucide-react";
import { HC_CONFIG } from "@/lib/healthcare/config";
import { Container, CtaButton, Eyebrow } from "./Primitives";
import { AdminDashboardMockup } from "./mockups/AdminDashboardMockup";
import { PatientAppMockup } from "./mockups/PatientAppMockup";
import { ReminderMockup } from "./mockups/ReminderMockup";

const TRUST = [
  { icon: Building2, text: "Built for multi-branch clinics, diagnostic chains, hospitals and health startups" },
  { icon: Clock3, text: "Reply within 30 minutes on business days" },
  { icon: Layers, text: `${HC_CONFIG.platformsDelivered} platforms delivered` },
];

export const Hero = () => (
  <section className="relative overflow-hidden bg-hc-navy pb-16 pt-24 text-hc-white sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-32">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-hc-teal/30 blur-[120px] animate-hc-glow" />
      <div className="absolute -bottom-48 left-1/4 h-[480px] w-[620px] rounded-full bg-hc-blue/30 blur-[130px] animate-hc-glow [animation-delay:-4s]" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at 50% 30%, black 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 30%, black 20%, transparent 70%)",
        }}
      />
    </div>

    <Container className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
      <div>
        <Eyebrow dark>Custom Healthcare Platforms</Eyebrow>
        <h1 className="mt-5 text-[2.35rem] font-extrabold leading-[1.06] tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem]">
          Your Healthcare Business Has <span className="hc-gradient-text">Outgrown Spreadsheets.</span>
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-hc-white/75 sm:text-lg">
          Inowix builds custom hospital and clinic management platforms: appointments, patient records, doctor and
          patient apps, telemedicine and one admin dashboard for every branch.
        </p>
        <p className="mt-4 inline-flex items-center gap-2 rounded-lg border border-hc-white/10 bg-hc-white/5 px-3 py-2 text-sm font-medium text-hc-white/90">
          <span className="h-1.5 w-1.5 rounded-full bg-hc-teal" />
          {HC_CONFIG.priceLine}
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
          <CtaButton className="w-full sm:w-auto">Discuss Your Healthcare Platform</CtaButton>
          <a
            href="#solution"
            className="text-center text-sm font-semibold text-hc-white/80 underline-offset-4 transition-colors hover:text-hc-white hover:underline"
          >
            See what we build
          </a>
        </div>

        <ul className="mt-9 grid gap-3 border-t border-hc-white/10 pt-6 sm:grid-cols-3 sm:gap-4">
          {TRUST.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-start gap-2.5 text-[13px] leading-snug text-hc-white/70">
              <Icon className="mt-0.5 h-4 w-4 shrink-0 text-hc-teal" />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mx-auto w-full max-w-[560px] pb-10 lg:pb-0">
        <AdminDashboardMockup />
        <div className="absolute -bottom-2 right-0 hc-float sm:-right-4 lg:-bottom-10 lg:-right-8">
          <div className="origin-bottom-right scale-[0.72] sm:scale-90 lg:scale-100">
            <PatientAppMockup />
          </div>
        </div>
        <div className="absolute -left-3 -top-8 hidden hc-float [animation-delay:-3s] sm:block lg:-left-10">
          <ReminderMockup />
        </div>
      </div>
    </Container>
  </section>
);
