import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/moving-border";
import { GradientMesh } from "@/components/ui/gradient-mesh";
import { FloatingShapes } from "@/components/ui/floating-shapes";
import { Particles } from "@/components/ui/particles";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="min-h-[60vh] sm:min-h-[65vh] md:h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden py-8 sm:py-12 md:py-0">
      <GradientMesh className="opacity-40" />
      <FloatingShapes count={10} className="opacity-15" />
      <Particles count={30} color="#ffffff" className="opacity-20" />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="max-w-container mx-auto px-4 sm:px-6 relative z-10 w-full pt-12 sm:pt-16 md:pt-0">
        <div className="text-center max-w-5xl mx-auto">
          {/* Animated service tags - kept but styled for dark mode */}
          <div className="mb-6 sm:mb-8 md:mb-12 overflow-hidden opacity-70">
            <div className="animate-marquee flex items-center gap-3 sm:gap-4 md:gap-8 text-[10px] sm:text-xs md:text-sm text-neutral-300 uppercase tracking-wider whitespace-nowrap">
              <span>content creation</span>
              <span>•</span>
              <span>seo</span>
              <span>•</span>
              <span>brand strategy</span>
              <span>•</span>
              <span>research & analytics</span>
              <span>•</span>
              <span>video production</span>
              <span>•</span>
              <span>web development</span>
              <span>•</span>
              <span>media planning</span>
              <span>•</span>
              <span>content creation</span>
              <span>•</span>
              <span>seo</span>
              <span>•</span>
              <span>brand strategy</span>
              <span>•</span>
              <span>research & analytics</span>
              <span>•</span>
              <span>video production</span>
              <span>•</span>
              <span>web development</span>
              <span>•</span>
              <span>media planning</span>
            </div>
          </div>

          {/* Main headline */}
          <h1 className="hero-title bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-6 sm:mb-8 px-2 sm:px-0">
            Your <span className="text-blue-400">Creative</span>, Media & <span className="text-purple-400">Technology</span> Transformation Partner
          </h1>

          {/* Subtitle */}
          <p className="mt-3 sm:mt-4 font-normal text-sm sm:text-base md:text-lg text-neutral-300 max-w-lg mx-auto px-4 sm:px-0 leading-relaxed">
             We're a team of 1200+ Specialists delivering award-winning work for 300+ brands worldwide, 10 years and counting!
          </p>
          
          <div className="mt-5 sm:mt-6 md:mt-8 flex justify-center">
            <Link to="/contact-us">
              <Button
                borderRadius="1.75rem"
                className="bg-black text-white border-neutral-200 dark:border-slate-800 text-xs sm:text-sm md:text-base px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3"
              >
                Book a Call
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};