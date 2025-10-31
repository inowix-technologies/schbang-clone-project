import HeroSection from "@/components/hackathon/HeroSection";
import ValueProposition from "@/components/hackathon/ValueProposition";
import ProcessSteps from "@/components/hackathon/ProcessSteps";
import TechTracks from "@/components/hackathon/TechTracks";
import RegistrationForm from "@/components/hackathon/RegistrationForm";
import PartnersSection from "@/components/hackathon/PartnersSection";
import FAQSection from "@/components/hackathon/FAQSection";
import Footer from "@/components/hackathon/Footer";
import "./Hackathon.css";

const Hackathon = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ValueProposition />
      <ProcessSteps />
      <TechTracks />
      <RegistrationForm />
      <PartnersSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Hackathon;
