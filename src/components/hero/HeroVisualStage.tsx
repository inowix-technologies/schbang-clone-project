import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { HeroAmbientLayer } from "@/components/hero/HeroAmbientLayer";
import { HeroFilm } from "@/components/hero/HeroFilm";
import { HeroProductChips } from "@/components/hero/HeroProductChips";
import { Spotlight } from "@/components/ui/spotlight";

interface HeroVisualStageProps {
  className?: string;
}

export const HeroVisualStage = ({ className }: HeroVisualStageProps) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative w-full overflow-hidden",
        "h-[min(52vh,520px)] lg:h-[min(78vh,720px)]",
        className
      )}
    >
      <HeroAmbientLayer />
      <Spotlight className="-top-20 right-0 md:right-10 opacity-40" fill="hsl(var(--primary))" />

      <div className="relative z-10 flex h-full flex-col">
        <div
          className={cn(
            "relative flex flex-1 flex-col overflow-hidden rounded-sm border border-border/30 bg-inowix-surface/10",
            "lg:-mr-6 xl:-mr-10 lg:rounded-none"
          )}
        >
          {/* Terminal chrome */}
          <div className="flex shrink-0 items-center justify-between border-b border-border/20 bg-inowix-bg/50 px-4 py-2 backdrop-blur-sm">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-inowix-com-ai" />
              <span className="h-2 w-2 rounded-full bg-inowix-beacon" />
              <span className="h-2 w-2 rounded-full bg-inowix-red-cli" />
            </div>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground/50">
              Inowix Film · Production
            </span>
          </div>

          {/* Film + chips */}
          <div className="relative flex-1 p-2 sm:p-3">
            <HeroFilm className="h-full border-0" />
            <HeroProductChips />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
