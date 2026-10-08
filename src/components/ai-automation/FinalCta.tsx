import { CtaButton, LpContainer } from "./LpPrimitives";
import { Reveal } from "./Reveal";

export const FinalCta = () => (
  <section className="relative overflow-hidden bg-lp-navy py-20 sm:py-24">
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse at 20% 0%, rgba(59,91,255,0.45) 0%, transparent 55%), radial-gradient(ellipse at 85% 100%, rgba(124,58,237,0.45) 0%, transparent 55%)",
      }}
    />
    <LpContainer className="relative">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-[32px] font-extrabold leading-[1.1] tracking-tight text-lp-white sm:text-5xl">
          Stop losing leads. Start automating.
        </h2>
        <p className="mt-5 text-lg text-slate-300">
          Tell us what slows your team down. We'll send a free automation plan.
        </p>
        <CtaButton className="mt-9">Get Your Free Automation Plan</CtaButton>
      </Reveal>
    </LpContainer>
  </section>
);
