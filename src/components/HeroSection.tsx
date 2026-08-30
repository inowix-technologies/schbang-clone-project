import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HeroHeadline } from "@/components/hero/HeroHeadline";
import { InowixCore } from "@/components/hero/InowixCore";
import { HERO_CAPABILITIES } from "@/data/inowix-content";
import type { CoreNodeId } from "@/components/hero/CoreNodePanel";

export const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion();
  const [activeNode, setActiveNode] = useState<CoreNodeId | null>(null);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-inowix-bg" aria-label="Inowix hero">
      {/* Structural grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,hsl(var(--primary)/0.06),transparent)] pointer-events-none" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 min-h-[100svh] flex flex-col">
        <div className="flex-1 grid lg:grid-cols-[42fr_58fr] gap-6 lg:gap-4 xl:gap-8 items-center pt-24 sm:pt-28 lg:pt-32 pb-8 lg:pb-12 min-h-0">
          {/* LEFT */}
          <div className="flex flex-col justify-center text-center lg:text-left lg:pr-6 xl:pr-10 order-2 lg:order-1">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-inowix-com-ai opacity-30" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-inowix-com-ai" />
              </span>
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Product Engineering · AI · Cybersecurity
              </span>
            </motion.div>

            <HeroHeadline className="lg:mx-0" />

            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-base sm:text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              COM AI. Beacon. RED CLI. Babyland. SwiftGo. SRL Logistics.
              We don't just build software — we engineer systems businesses run on.
            </motion.p>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
              className="mb-8 space-y-2 max-w-lg mx-auto lg:mx-0"
            >
              {HERO_CAPABILITIES.map((row, ri) => (
                <div key={ri} className="flex flex-wrap justify-center lg:justify-start gap-x-3 gap-y-1">
                  {row.map((label, li) => (
                    <span key={label} className="inline-flex items-center gap-3">
                      {li > 0 && <span className="text-border/50 hidden sm:inline">·</span>}
                      <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-muted-foreground/60">
                        {label}
                      </span>
                    </span>
                  ))}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3"
            >
              <Button asChild size="lg" className="rounded-sm px-8 h-12 font-semibold group w-full sm:w-auto">
                <Link to="/contact-us">
                  Start a Project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-sm px-8 h-12 border-border/50 w-full sm:w-auto font-mono text-xs uppercase tracking-wider"
              >
                <Link to="#inowix-labs">Explore Inowix Labs</Link>
              </Button>
            </motion.div>
          </div>

          {/* RIGHT — INOWIX CORE v2 full bleed */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "relative order-1 lg:order-2 w-full h-[min(52vh,520px)] lg:h-[min(78vh,720px)]",
              "lg:-mr-6 xl:-mr-10"
            )}
          >
            <div className="absolute inset-0 lg:rounded-none border border-border/30 bg-inowix-surface/10 overflow-hidden">
              <div className="absolute top-0 inset-x-0 flex items-center justify-between px-4 py-2 border-b border-border/20 bg-inowix-bg/50 backdrop-blur-sm z-20">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-inowix-com-ai" />
                  <span className="w-2 h-2 rounded-full bg-inowix-beacon" />
                  <span className="w-2 h-2 rounded-full bg-inowix-red-cli" />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground/50">
                  Inowix Core · Live System Map
                </span>
              </div>
              <div className="absolute inset-0 top-9 p-2 sm:p-4">
                <InowixCore activeId={activeNode} onActivate={setActiveNode} className="h-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
