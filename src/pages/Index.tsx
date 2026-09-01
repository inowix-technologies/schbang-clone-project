import { NotificationBanner } from "@/components/NotificationBanner";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TrustVelocityStrip } from "@/components/home/TrustVelocityStrip";
import { InowixLabsSection } from "@/components/labs/InowixLabsSection";
import { ThreeWorldsSection } from "@/components/worlds/ThreeWorldsSection";
import { SystemsEngineeredSection } from "@/components/work/SystemsEngineeredSection";
import { InowixTestimonials } from "@/components/home/InowixTestimonials";
import { EngineeringStackSection } from "@/components/services/EngineeringStackSection";
import { IndustriesProofSection } from "@/components/industries/IndustriesProofSection";
import { FoundersSection } from "@/components/home/FoundersSection";
import { ContactLocationsSection } from "@/components/ContactLocationsSection";
import { BannerSection } from "@/components/BannerSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const homeFAQs = [
    {
      id: "services",
      category: "services" as const,
      question: "What does Inowix Technologies build?",
      answer:
        "We engineer production-grade software, AI systems, SaaS products, mobile and web applications, cloud infrastructure, and cybersecurity technology. Our flagship products include COM AI, Beacon, and RED CLI. Explore our /services for the full engineering stack.",
    },
    {
      id: "timeline",
      category: "process" as const,
      question: "How long does a typical engineering project take?",
      answer:
        "Timelines depend on scope and complexity. A focused MVP may take 8–12 weeks; enterprise platforms typically run 3–6 months. We provide detailed architecture and timeline estimates during discovery.",
    },
    {
      id: "process",
      category: "process" as const,
      question: "What is your engineering process?",
      answer:
        "We follow a structured pipeline: Architecture → Design → Engineering → Deployment → Scale. Each phase includes technical reviews, with continuous integration and transparent communication throughout. See our /work for production systems we've shipped.",
    },
    {
      id: "technology",
      category: "services" as const,
      question: "Which technologies do you work with?",
      answer:
        "We work with modern production stacks including React, Node.js, Python, Flutter, React Native, AWS, GCP, Azure, PostgreSQL, Docker, Kubernetes, and AI/ML frameworks for LLM integration, RAG systems, and intelligent automation.",
    },
    {
      id: "products",
      category: "products" as const,
      question: "Does Inowix build its own products?",
      answer:
        "Yes. We build and operate COM AI (AI Commerce Infrastructure), Beacon (Revenue Intelligence Platform), and RED CLI (AI-Native Cybersecurity) — alongside client engineering work. View all /products and case studies on /work.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFAQs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.replace(/\/\w+/g, ""),
      },
    })),
  };

  return (
    <div className="min-h-screen bg-inowix-bg text-foreground overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <NotificationBanner />
      <Header />
      <HeroSection />
      <TrustVelocityStrip />
      <InowixLabsSection />
      <ThreeWorldsSection />
      <SystemsEngineeredSection />
      <InowixTestimonials />
      <EngineeringStackSection />
      <IndustriesProofSection />
      <FoundersSection />
      <ContactLocationsSection />
      <BannerSection />
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about working with Inowix"
        faqs={homeFAQs}
        colorScheme="blue"
      />
      <Footer />
    </div>
  );
};

export default Index;
