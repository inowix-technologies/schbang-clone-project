import { motion, useReducedMotion } from "framer-motion";
import { INOWIX_TESTIMONIALS, TRUST_STATS } from "@/data/inowix-content";
import { AnimatedGrid } from "@/components/ui/animated-grid";
import { TestimonialMarquee } from "@/components/home/TestimonialMarquee";
import { fadeUp, defaultViewport } from "@/components/home/HomepageMotion";
import { SECTION_BORDER, SECTION_CONTAINER, SECTION_PY, SECTION_HEADER_MB } from "@/lib/section-layout";
import { cn } from "@/lib/utils";

const rowA = INOWIX_TESTIMONIALS.filter((_, i) => i % 2 === 0);
const rowB = INOWIX_TESTIMONIALS.filter((_, i) => i % 2 === 1);

export const InowixTestimonials = () => {
  const reduced = useReducedMotion();

  return (
    <section
      className={cn("relative bg-inowix-surface/20 overflow-hidden", SECTION_BORDER)}
      aria-label="Client testimonials"
    >
      <AnimatedGrid pattern="grid" className="opacity-40" />

      <div className={cn("relative z-10", SECTION_CONTAINER, SECTION_PY)}>
        <motion.div
          initial={reduced ? false : fadeUp.hidden}
          whileInView={fadeUp.visible}
          viewport={defaultViewport}
          className={cn("flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8", SECTION_HEADER_MB)}
        >
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Client outcomes
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05]">
              Trusted by teams shipping{" "}
              <span className="text-primary">production systems</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl">
              Real outcomes from brands we engineer — mobile apps, logistics platforms, AI products, and
              enterprise systems in production.
            </p>
          </div>

          <div className="flex gap-8 sm:gap-10 shrink-0">
            {TRUST_STATS.slice(0, 2).map((stat) => (
              <div key={stat.label} className="text-left lg:text-right">
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

        <div className="space-y-4 sm:space-y-5 -mx-4 sm:mx-0">
          <TestimonialMarquee items={rowA} direction="right" speed="slow" />
          <TestimonialMarquee items={rowB} direction="left" speed="slow" />
        </div>
      </div>
    </section>
  );
};
