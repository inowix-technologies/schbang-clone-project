import { NotificationBanner } from "@/components/NotificationBanner";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MarqueeSection } from "@/components/MarqueeSection";
import { VideoSection } from "@/components/VideoSection";
import { AboutSection } from "@/components/AboutSection";
import { WorkSection } from "@/components/WorkSection";

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
    </div>
  );
};

export default Index;
