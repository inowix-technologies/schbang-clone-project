import { CtaButton, LpContainer, LpLogo } from "./LpPrimitives";

export const LpTopBar = () => (
  <header className="fixed inset-x-0 top-0 z-50 border-b border-lp-white/10 bg-lp-navy/80 backdrop-blur-md">
    <LpContainer className="flex h-16 items-center justify-between">
      <LpLogo />
      <CtaButton size="md">Get a Quote</CtaButton>
    </LpContainer>
  </header>
);
