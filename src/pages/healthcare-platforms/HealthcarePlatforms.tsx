import { useEffect } from "react";
import "@/components/healthcare/healthcare.css";
import { HC_CONFIG } from "@/lib/healthcare/config";
import { captureAttribution } from "@/lib/healthcare/attribution";
import { usePageHead } from "@/lib/healthcare/head";
import { TopBar } from "@/components/healthcare/TopBar";
import { Hero } from "@/components/healthcare/Hero";
import { PainStrip } from "@/components/healthcare/PainStrip";
import { Solution } from "@/components/healthcare/Solution";
import { HowItWorks } from "@/components/healthcare/HowItWorks";
import { Proof } from "@/components/healthcare/Proof";
import { Security } from "@/components/healthcare/Security";
import { WhoFor } from "@/components/healthcare/WhoFor";
import { QuoteSection } from "@/components/healthcare/QuoteSection";
import { Faq } from "@/components/healthcare/Faq";
import { FinalCta } from "@/components/healthcare/FinalCta";
import { Footer } from "@/components/healthcare/Footer";
import { ClientLogoMarquee } from "@/components/landing/ClientLogoMarquee";
import { StatsBand } from "@/components/landing/StatsBand";
import { HEALTHCARE_CLIENT_LOGOS } from "@/lib/landing-proof";

const TITLE = "Custom Healthcare Platforms for Clinics and Hospitals | Inowix";
const DESCRIPTION =
  "Custom hospital and clinic management platforms for multi-branch clinics, diagnostic chains and hospitals in India: appointments, patient records, doctor and patient apps, telemedicine. Projects from ₹5L+.";

// PageView is fired by the base pixel snippet in index.html on load; firing it here would double-count.
const HealthcarePlatforms = () => {
  usePageHead({
    title: TITLE,
    description: DESCRIPTION,
    canonical: `${HC_CONFIG.siteUrl}${HC_CONFIG.landingPath}`,
  });

  useEffect(() => {
    captureAttribution();
  }, []);

  return (
    <div className="hc-root min-h-screen">
      <TopBar />
      <main>
        <Hero />
        <ClientLogoMarquee logos={HEALTHCARE_CLIENT_LOGOS} theme="hc" label="Healthcare and wellness brands we've built for" />
        <PainStrip />
        <Solution />
        <HowItWorks />
        <Proof />
        <Security />
        <WhoFor />
        <StatsBand theme="hc" title="The engineering team behind your healthcare platform" />
        <QuoteSection />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
};

export default HealthcarePlatforms;
