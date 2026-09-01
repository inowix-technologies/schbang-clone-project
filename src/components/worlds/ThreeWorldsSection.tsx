import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { THREE_WORLDS, HOMEPAGE_COPY, ENGINEERING_LAYERS } from "@/data/inowix-content";
import { WorldIllustration } from "@/components/illustrations/WorldIllustration";
import { WorldPanel } from "./WorldPanel";
import { fadeUp, defaultViewport } from "@/components/home/HomepageMotion";
import { SECTION_CONTAINER, SECTION_PY, SECTION_BORDER, SECTION_HEADER_MB, SECTION_EYEBROW } from "@/lib/section-layout";
import { cn } from "@/lib/utils";

const worldIllustrationType = {
  engineering: "engineering",
  ai: "ai",
  security: "security",
} as const;

export const ThreeWorldsSection = () => {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const copy = HOMEPAGE_COPY.threeWorlds;

  return (
    <section id="about" className={cn("relative bg-inowix-bg overflow-hidden", SECTION_BORDER)} aria-label="How we engineer">
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

      <div className={cn("relative z-10", SECTION_CONTAINER, SECTION_PY)}>
        <motion.div
          initial={reduced ? false : fadeUp.hidden}
          whileInView={fadeUp.visible}
          viewport={defaultViewport}
          className={cn("max-w-4xl", SECTION_HEADER_MB)}
        >
          <p className={SECTION_EYEBROW}>{copy.label}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95]">
            <span className="block">{copy.line1}</span>
            <span className="block text-primary">{copy.line2}</span>
          </h2>
        </motion.div>

        {/* Mobile: tap panels */}
        <div className="lg:hidden grid gap-4 mb-12">
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

        {/* Desktop: bento grid */}
        <div className="hidden lg:block mb-12">
          <BentoGrid className="max-w-none md:auto-rows-[20rem]">
            {THREE_WORLDS.map((world, i) => (
              <BentoGridItem
                key={world.id}
                className={`bg-inowix-surface/20 border border-border/40 dark:bg-inowix-surface/20 ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
                title={
                  <span style={{ color: world.accent }} className="font-mono text-[10px] uppercase tracking-widest block mb-1">
                    {world.label}
                  </span>
                }
                description={
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{world.name}</h3>
                    <p className="text-sm text-muted-foreground">{world.description}</p>
                  </div>
                }
                header={
                  <div
                    className="h-32 rounded-sm border border-border/30 p-4"
                    style={{ background: `radial-gradient(ellipse at 50% 50%, ${world.glow}, transparent 70%)` }}
                  >
                    <WorldIllustration
                      type={worldIllustrationType[world.id as keyof typeof worldIllustrationType] ?? "engineering"}
                      accent={world.accent}
                    />
                  </div>
                }
              />
            ))}
          </BentoGrid>
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
