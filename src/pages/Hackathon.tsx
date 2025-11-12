import HeroSection from "@/components/hackathon/HeroSection";
import ValueProposition from "@/components/hackathon/ValueProposition";
import ProcessSteps from "@/components/hackathon/ProcessSteps";
import TechTracks from "@/components/hackathon/TechTracks";
import RegistrationForm from "@/components/hackathon/RegistrationForm";
import FAQSection from "@/components/hackathon/FAQSection";
import { Footer } from "@/components/Footer";
import "./Hackathon.css";

const Hackathon = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ValueProposition />
      <ProcessSteps />
      <TechTracks />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Hackathon;
