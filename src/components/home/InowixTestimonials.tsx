import { motion, useReducedMotion } from "framer-motion";
import { INOWIX_TESTIMONIALS, TRUST_STATS } from "@/data/inowix-content";
import { AnimatedGrid } from "@/components/ui/animated-grid";
import { TestimonialMarquee } from "@/components/home/TestimonialMarquee";
import { fadeUp, defaultViewport } from "@/components/home/HomepageMotion";

const rowA = INOWIX_TESTIMONIALS.filter((_, i) => i % 2 === 0);
const rowB = INOWIX_TESTIMONIALS.filter((_, i) => i % 2 === 1);

export const InowixTestimonials = () => {
  const reduced = useReducedMotion();

  return (
    <section
      className="relative border-t border-border/40 bg-inowix-surface/20 overflow-hidden"
      aria-label="Client testimonials"
    >
      <AnimatedGrid pattern="grid" className="opacity-40" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24">
        <motion.div
          initial={reduced ? false : fadeUp.hidden}
          whileInView={fadeUp.visible}
          viewport={defaultViewport}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12"
        >
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Client outcomes
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05]">
              Trusted by teams shipping{" "}
              <span className="text-primary">production systems</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-base sm:text-lg max-w-2xl">
              Real outcomes from brands we engineer — mobile apps, logistics platforms, AI products, and
              enterprise systems in production.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 lg:gap-8 shrink-0">
            {TRUST_STATS.slice(0, 2).map((stat) => (
              <div key={stat.label} className="text-center lg:text-right">
                <p className="text-2xl sm:text-3xl font-bold tracking-tight">
                  {stat.value}
                  {stat.suffix}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="space-y-5">
          <TestimonialMarquee items={rowA} direction="right" speed="slow" />
          <TestimonialMarquee items={rowB} direction="left" speed="slow" />
        </div>
      </div>
    </section>
  );
};
