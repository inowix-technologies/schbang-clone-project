import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import HeroSection from "@/components/portfolio/HeroSection";
import ProjectsGrid from "@/components/portfolio/ProjectsGrid";

const Work = () => {
  const workFAQs = [
    {
      id: 'portfolio-scope',
      question: 'What types of projects do you showcase in your portfolio?',
      answer: 'Our portfolio spans brand strategy, digital marketing campaigns, web development, mobile apps, film & photography, and creative campaigns. We showcase work across various industries from startups to Fortune 500 companies.'
    },
    {
      id: 'case-studies',
      question: 'Can I see detailed case studies of your work?',
      answer: 'Yes! Each project includes comprehensive case studies with challenges faced, solutions implemented, results achieved, and client testimonials. Contact us for detailed project breakdowns.'
    },
    {
      id: 'project-results',
      question: 'What kind of results do your projects typically achieve?',
      answer: 'Our projects consistently deliver measurable results: 200-500% increase in engagement, 50-300% boost in conversions, award recognition, and significant brand awareness growth. Results vary by industry and project scope.'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main>
        <HeroSection />
        <div className="relative z-10 bg-black">
          <ProjectsGrid />
        </div>
      </main>

      <FAQSection
        title="Portfolio FAQ"
        subtitle="Learn more about our work and project approach"
        faqs={workFAQs}
      />

      <Footer />
    </div>
  );
};

export default Work;