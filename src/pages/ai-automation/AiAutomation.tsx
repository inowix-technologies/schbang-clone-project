import { useEffect } from "react";
import "@/components/ai-automation/ai-automation.css";
import { LpTopBar } from "@/components/ai-automation/LpTopBar";
import { LpHero } from "@/components/ai-automation/LpHero";
import { PainStrip } from "@/components/ai-automation/PainStrip";
import { SolutionGrid } from "@/components/ai-automation/SolutionGrid";
import { HowItWorks } from "@/components/ai-automation/HowItWorks";
import { ProofSection } from "@/components/ai-automation/ProofSection";
import { FitSection } from "@/components/ai-automation/FitSection";
import { QualificationForm } from "@/components/ai-automation/QualificationForm";
import { LpFaq } from "@/components/ai-automation/LpFaq";
import { FinalCta } from "@/components/ai-automation/FinalCta";
import { LpFooter } from "@/components/ai-automation/LpFooter";
import { MobileStickyCta } from "@/components/ai-automation/MobileStickyCta";
import { ClientLogoMarquee } from "@/components/landing/ClientLogoMarquee";
import { StatsBand } from "@/components/landing/StatsBand";
import { AI_CLIENT_LOGOS } from "@/lib/landing-proof";
import { PAGE_META } from "@/lib/ai-automation/content";
import { captureAttribution } from "@/lib/ai-automation/tracking";
import { usePageMeta } from "@/lib/ai-automation/usePageMeta";

// PageView is fired once by the pixel snippet in index.html; this page must not fire it again.
const AiAutomation = () => {
  usePageMeta(PAGE_META);

  useEffect(() => {
    captureAttribution();
  }, []);

  return (
    <div className="lp-root min-h-screen bg-lp-white text-lp-ink antialiased">
      <LpTopBar />
      <main>
        <LpHero />
        <ClientLogoMarquee logos={AI_CLIENT_LOGOS} theme="lp" label="Brands we've built products for" />
        <PainStrip />
        <SolutionGrid />
        <HowItWorks />
        <ProofSection />
        <FitSection />
        <StatsBand theme="lp" title="The engineering team behind your automation" />
        <QualificationForm />
        <LpFaq />
        <FinalCta />
      </main>
      <LpFooter stickyCtaOffset />
      <MobileStickyCta />
    </div>
  );
};

export default AiAutomation;
