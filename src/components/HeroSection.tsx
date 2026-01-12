import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/moving-border";

export const HeroSection = () => {
  return (
    <section className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="max-w-container mx-auto px-6 relative z-10 w-full pt-20 md:pt-0">
        <div className="text-center max-w-5xl mx-auto">
          {/* Animated service tags - kept but styled for dark mode */}
          <div className="mb-12 overflow-hidden opacity-70">
            <div className="animate-marquee flex items-center gap-8 text-sm text-neutral-300 uppercase tracking-wider whitespace-nowrap">
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
          <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-8 leading-tight">
            Your <span className="text-blue-400">Creative</span>, Media & <span className="text-purple-400">Technology</span> Transformation Partner
          </h1>

          {/* Subtitle */}
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg mx-auto">
             We're a team of 1200+ Specialists delivering award-winning work for 300+ brands worldwide, 10 years and counting!
          </p>
          
          <div className="mt-8 flex justify-center">
            <Button
              borderRadius="1.75rem"
              className="bg-black text-white border-neutral-200 dark:border-slate-800"
            >
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};