import { NotificationBanner } from "@/components/NotificationBanner";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MarqueeSection } from "@/components/MarqueeSection";
import { VideoSection } from "@/components/VideoSection";
import { AboutSection } from "@/components/AboutSection";
import { WorkSection } from "@/components/WorkSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ClientsSection } from "@/components/ClientsSection";
import { TrendingSection } from "@/components/TrendingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactLocationsSection } from "@/components/ContactLocationsSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  // Home FAQ data
  const homeFAQs = [
    {
      id: 'services',
      question: 'What services does your agency provide?',
      answer: 'We offer comprehensive digital solutions including web development, mobile app development, UI/UX design, digital marketing, AI/ML integration, cloud computing, and custom software development. Our full-stack approach ensures seamless end-to-end project delivery.'
    },
    {
      id: 'timeline',
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity and scope. Simple websites take 2-4 weeks, mobile apps 8-16 weeks, and enterprise solutions 3-6 months. We provide detailed timelines during our consultation phase and maintain transparent communication throughout.'
    },
    {
      id: 'process',
      question: 'What is your development process?',
      answer: 'We follow an agile methodology with clear phases: Discovery & Planning, Design & Prototyping, Development & Testing, Launch & Deployment, and Ongoing Support. Each phase includes client reviews and feedback integration.'
    },
    {
      id: 'technology',
      question: 'Which technologies do you specialize in?',
      answer: 'We specialize in modern tech stacks including React, Next.js, Node.js, Python, React Native, Flutter, AWS, Azure, MongoDB, PostgreSQL, and emerging technologies like AI/ML, blockchain, and IoT integration.'
    },
    {
      id: 'support',
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes, we offer comprehensive post-launch support including security updates, performance optimization, feature enhancements, technical support, and hosting management. We provide various support packages tailored to your needs.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NotificationBanner />
      <Header />
      <HeroSection />
      <MarqueeSection />
      <VideoSection />
      <AboutSection />
      <WorkSection />
      <ServicesSection />
      <ClientsSection />
      <TrendingSection />
      <TestimonialsSection />
      <ContactLocationsSection />
      <FAQSection 
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about working with our digital agency"
        faqs={homeFAQs}
        colorScheme="purple"
      />
      <Footer />
    </div>
  );
};

export default Index;
