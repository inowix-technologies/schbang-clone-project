import { NotificationBanner } from "@/components/NotificationBanner";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { InowixLabsSection } from "@/components/labs/InowixLabsSection";
import { AboutSection } from "@/components/AboutSection";
import { WorkSection } from "@/components/WorkSection";
import { ServicesSection } from "@/components/ServicesSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { ContactLocationsSection } from "@/components/ContactLocationsSection";
import { BannerSection } from "@/components/BannerSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const homeFAQs = [
    {
      id: 'services',
      question: 'What does Inowix Technologies build?',
      answer: 'We engineer production-grade software, AI systems, SaaS products, mobile and web applications, cloud infrastructure, and cybersecurity technology. Our flagship products include COM AI, Beacon, and RED CLI.'
    },
    {
      id: 'timeline',
      question: 'How long does a typical engineering project take?',
      answer: 'Timelines depend on scope and complexity. A focused MVP may take 8–12 weeks; enterprise platforms typically run 3–6 months. We provide detailed architecture and timeline estimates during discovery.'
    },
    {
      id: 'process',
      question: 'What is your engineering process?',
      answer: 'We follow a structured pipeline: Architecture → Design → Engineering → Deployment → Scale. Each phase includes technical reviews, with continuous integration and transparent communication throughout.'
    },
    {
      id: 'technology',
      question: 'Which technologies do you work with?',
      answer: 'We work with modern production stacks including React, Node.js, Python, Flutter, React Native, AWS, GCP, Azure, PostgreSQL, Docker, Kubernetes, and AI/ML frameworks for LLM integration, RAG systems, and intelligent automation.'
    },
    {
      id: 'products',
      question: 'Does Inowix build its own products?',
      answer: 'Yes. We build and operate COM AI (AI Commerce Infrastructure), Beacon (Revenue Intelligence Platform), and RED CLI (AI-Native Cybersecurity) — alongside client engineering work for platforms like Babyland, SwiftGo, and SRL Logistics.'
    }
  ];

  return (
    <div className="min-h-screen bg-inowix-bg text-foreground">
      <NotificationBanner />
      <Header />
      <HeroSection />
      <InowixLabsSection />
      <AboutSection />
      <WorkSection />
      <ServicesSection />
      <IndustriesSection />
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
