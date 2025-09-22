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
import { Footer } from "@/components/Footer";

const Index = () => {
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
      <Footer />
    </div>
  );
};

export default Index;
