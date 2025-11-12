import { Button } from "@/components/ui/button";
import { ArrowRight, Code2 } from "lucide-react";
import heroImage from "@/assets/hackathon.png";

// Define the external registration link
const REGISTRATION_LINK = "https://unstop.com/p/code-to-career-the-ncr-tech-gateway-unlock-your-elite-future-delhi-gurgaon-hackathon-2025-inowix-technologies-1594046";

const HeroSection = () => {
  // We can remove scrollToRegistration as it's no longer needed for the register button

  const scrollToTracks = () => {
    document.getElementById('tracks')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated particle background (Omitted for brevity) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[hsl(var(--accent-blue))]/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[hsl(var(--accent-green))]/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 text-center lg:text-left animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gradient">Code to Career:</span>
                <br />
                <span className="text-foreground">The NCR Tech Gateway</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                An elite, online hackathon for Delhi-NCR's top developers. Build a high-impact solution, 
                get direct referrals to Gurgaon's top MNCs, and prove your expertise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* MODIFICATION HERE: Use 'asChild' and wrap with 'a' tag */}
              <Button 
                size="lg" 
                variant="default"
                asChild
                className="group glow-effect hover:shadow-primary/40"
              >
                <a href={REGISTRATION_LINK} target="_blank" rel="noopener noreferrer">
                  Register Your Team
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              {/* END MODIFICATION */}
              <Button 
                size="lg" 
                variant="outline" 
                onClick={scrollToTracks}
                className="border-border bg-card/50 hover:bg-card hover:border-primary/50 group"
              >
                <Code2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Explore the Tracks
              </Button>
            </div>

            {/* Key stats (Omitted for brevity) */}
            <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-6 pt-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gradient">₹5,000</div>
                <div className="text-sm text-muted-foreground">Prize Pool</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gradient">10</div>
                <div className="text-sm text-muted-foreground">Team Slots</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gradient">Top 3</div>
                <div className="text-sm text-muted-foreground">Get Referrals</div>
              </div>
            </div>
          </div>

          {/* Right image with glowing orb effect (Omitted for brevity) */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-2xl animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-[hsl(var(--accent-blue))]/20 to-[hsl(var(--accent-green))]/20 rounded-2xl blur-3xl animate-pulse-slow"></div>
              <img 
                src={heroImage} 
                alt="Tech illustration representing code, AI, and networking elements" 
                className="relative w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;