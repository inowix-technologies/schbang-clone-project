import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { THREE_WORLDS, HOMEPAGE_COPY, ENGINEERING_LAYERS } from "@/data/inowix-content";
import { WorldPanel } from "./WorldPanel";

export const ThreeWorldsSection = () => {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const copy = HOMEPAGE_COPY.threeWorlds;

  return (
    <section id="about" className="relative bg-inowix-bg border-t border-border/40 overflow-hidden" aria-label="How we engineer">
      <div className="absolute inset-0 pointer-events-none bg-grid-white/[0.02] bg-[length:48px_48px]" />
      <div className="absolute inset-0 pointer-events-none">
        {ENGINEERING_LAYERS.map((layer, i) => (
          <div
            key={layer}
            className="absolute left-0 right-0 h-px bg-border/20"
            style={{ top: `${12 + i * 14}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-20 sm:py-28">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-14 sm:mb-20"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">{copy.label}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95]">
            <span className="block">{copy.line1}</span>
            <span className="block text-primary">{copy.line2}</span>
          </h2>
        </motion.div>

        <div className="hidden lg:block absolute top-[45%] left-[20%] right-[20%] h-px pointer-events-none">
          <svg className="w-full h-8" viewBox="0 0 800 32" fill="none" aria-hidden="true">
            <motion.path
              d="M0 16 H800"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
              strokeDasharray="4 6"
              initial={reduced ? false : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            />
          </svg>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {THREE_WORLDS.map((world, i) => (
            <WorldPanel
              key={world.id}
              world={world}
              isActive={active === i}
              onActivate={() => setActive(i)}
              reduced={reduced}
            />
          ))}
        </div>

        <div className="flex justify-start">
          <Button asChild variant="outline" className="rounded-sm">
            <Link to="/about-us">
              About the company
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
