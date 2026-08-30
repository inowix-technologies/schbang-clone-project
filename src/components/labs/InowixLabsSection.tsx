import { motion, useReducedMotion } from "framer-motion";
import { LABS_HEADLINE } from "@/data/inowix-content";
import { ComAiDemo } from "./ComAiDemo";
import { BeaconDemo } from "./BeaconDemo";
import { RedCliDemo } from "./RedCliDemo";

export const InowixLabsSection = () => {
  const reduced = useReducedMotion();

  return (
    <section id="inowix-labs" className="relative bg-inowix-bg" aria-label="Inowix Labs flagship products">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 pt-20 sm:pt-28 pb-4">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-16 sm:mb-20"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-inowix-com-ai mb-6">
            {LABS_HEADLINE.label}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95]">
            <span className="block text-muted-foreground/80">{LABS_HEADLINE.line1}</span>
            <span className="block">{LABS_HEADLINE.line2}</span>
            <span className="block text-primary">{LABS_HEADLINE.line3}</span>
          </h2>
        </motion.div>
      </div>

      <div className="border-t border-border/30">
        <ComAiDemo />
        <BeaconDemo />
        <RedCliDemo />
      </div>
    </section>
  );
};
