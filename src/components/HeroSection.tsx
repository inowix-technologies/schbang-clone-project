export const HeroSection = () => {
  return (
    <section className="py-section">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center max-w-5xl mx-auto">
          {/* Animated service tags */}
          <div className="mb-12 overflow-hidden">
            <div className="animate-marquee flex items-center gap-8 text-sm text-muted-foreground uppercase tracking-wider whitespace-nowrap">
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 text-balance leading-tight">
            Your Creative, Media & Technology Transformation Partner
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            We're a team of 1200+ Specialists delivering award-winning work for 300+ brands worldwide, 10 years and counting!
          </p>
        </div>
      </div>
    </section>
  );
};