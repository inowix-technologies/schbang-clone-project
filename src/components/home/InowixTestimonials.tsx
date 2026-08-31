import { motion, useReducedMotion } from "framer-motion";
import { INOWIX_TESTIMONIALS } from "@/data/inowix-content";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { fadeUp, defaultViewport } from "@/components/home/HomepageMotion";

export const InowixTestimonials = () => {
  const reduced = useReducedMotion();
  const items = INOWIX_TESTIMONIALS.map((t) => ({
    quote: t.quote,
    name: t.name,
    title: `${t.title} · ${t.company}`,
  }));

  return (
    <section className="relative border-t border-border/40 bg-inowix-surface/20 overflow-hidden" aria-label="Client testimonials">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
        <motion.div
          initial={reduced ? false : fadeUp.hidden}
          whileInView={fadeUp.visible}
          viewport={defaultViewport}
          className="max-w-3xl mb-10"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Client outcomes</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Trusted by teams shipping <span className="text-primary">production systems</span>
          </h2>
        </motion.div>

        <InfiniteMovingCards items={items} direction="right" speed="slow" pauseOnHover />
      </div>
    </section>
  );
};
