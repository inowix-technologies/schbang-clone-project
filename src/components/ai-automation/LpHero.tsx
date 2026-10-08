import { CheckCircle2, Sparkles } from "lucide-react";
import { HERO } from "@/lib/ai-automation/content";
import { CtaButton, LpContainer } from "./LpPrimitives";
import { HeroChatDashboard } from "./HeroChatDashboard";

export const LpHero = () => (
  <section id="lp-hero" className="relative overflow-hidden bg-lp-navy pb-20 pt-28 sm:pb-24 sm:pt-32 lg:pb-28">
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div
        className="animate-lp-glow absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(59,91,255,0.45) 0%, rgba(59,91,255,0) 65%)" }}
      />
      <div
        className="animate-lp-glow absolute -right-32 top-24 h-[620px] w-[620px] rounded-full [animation-delay:-4s]"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.42) 0%, rgba(124,58,237,0) 65%)" }}
      />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at 50% 30%, black 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 30%, black 20%, transparent 70%)",
        }}
      />
    </div>

    <LpContainer className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-lp-white/15 bg-lp-white/5 px-3.5 py-1.5 text-xs font-semibold text-slate-200 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-lp-blue" aria-hidden />
          {HERO.eyebrow}
        </span>

        <h1 className="mt-6 text-[40px] font-extrabold leading-[1.04] tracking-[-0.03em] text-lp-white sm:text-[56px] lg:text-[64px]">
          Your Team Shouldn't Do Work{" "}
          <span className="bg-gradient-to-r from-[#6F8BFF] via-lp-blue to-[#A78BFA] bg-clip-text text-transparent">
            AI Can Automate.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">{HERO.subheadline}</p>

        <p className="mt-5 inline-flex items-center rounded-lg border border-lp-white/10 bg-lp-white/5 px-3.5 py-2 text-sm font-medium text-slate-200">
          {HERO.priceLine}
        </p>

        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
          <CtaButton className="w-full sm:w-auto">{HERO.primaryCta}</CtaButton>
          <a
            href="#how-it-works"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="text-sm font-semibold text-slate-200 underline-offset-4 transition-colors hover:text-lp-white hover:underline"
          >
            {HERO.secondaryCta}
          </a>
        </div>

        <ul className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6">
          {HERO.trust.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-lp-wa" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <HeroChatDashboard />
    </LpContainer>
  </section>
);
