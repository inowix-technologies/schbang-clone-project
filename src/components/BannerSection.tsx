import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { HOMEPAGE_COPY, FEATURED_PROJECT_SLUGS, INOWIX_PROJECTS } from "@/data/inowix-content";
import { fadeUp, defaultViewport } from "@/components/home/HomepageMotion";

const tickerNames = FEATURED_PROJECT_SLUGS.slice(0, 6).map((slug) => INOWIX_PROJECTS[slug].name);

export const BannerSection = () => {
  const copy = HOMEPAGE_COPY.banner;
  const reduced = useReducedMotion();

  return (
    <section className="py-20 sm:py-28 bg-inowix-surface/30 border-t border-border/40 relative overflow-hidden">
      <BackgroundBeams className="opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,hsl(var(--primary)/0.08),transparent)] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          initial={reduced ? false : fadeUp.hidden}
          whileInView={fadeUp.visible}
          viewport={defaultViewport}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">{copy.label}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Ready to engineer your{" "}
            <AnimatedGradientText className="from-primary via-inowix-beacon to-inowix-com-ai">
              next system
            </AnimatedGradientText>
            ?
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-xl mx-auto">{copy.subline}</p>

          <div className="overflow-hidden mb-10 py-2 border-y border-border/30">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground animate-marquee whitespace-nowrap">
              Trusted by {tickerNames.join(" · ")} · Trusted by {tickerNames.join(" · ")}
            </p>
          </div>

          <Button asChild size="lg" className="rounded-sm px-10 group">
            <Link to="/contact-us">
              Start a Project
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
