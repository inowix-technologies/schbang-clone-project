import { Container, CtaButton } from "./Primitives";
import { Reveal } from "./Reveal";

export const FinalCta = () => (
  <section className="relative overflow-hidden bg-hc-navy py-16 text-hc-white sm:py-24">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute -left-24 top-0 h-[380px] w-[380px] rounded-full bg-hc-teal/30 blur-[110px] animate-hc-glow" />
      <div className="absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full bg-hc-blue/35 blur-[120px] animate-hc-glow [animation-delay:-4s]" />
    </div>
    <Container className="relative text-center">
      <Reveal>
        <h2 className="mx-auto max-w-2xl text-[1.9rem] font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Ready to run every branch from <span className="hc-gradient-text">one platform?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-hc-white/70 sm:text-lg">
          Tell us about your organization. A senior team member replies within 30 minutes on business days.
        </p>
        <CtaButton className="mt-8 w-full sm:w-auto">Discuss Your Healthcare Platform</CtaButton>
      </Reveal>
    </Container>
  </section>
);
