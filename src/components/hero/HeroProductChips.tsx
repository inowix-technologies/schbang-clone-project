import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const chips = [
  { label: "COM AI", accent: "hsl(var(--accent-com-ai))", className: "top-12 left-2 sm:left-4" },
  { label: "Beacon", accent: "hsl(var(--accent-beacon))", className: "top-1/3 -right-1 sm:-right-2" },
  { label: "RED CLI", accent: "hsl(var(--accent-red-cli))", className: "bottom-16 left-4 sm:left-8" },
];

interface HeroProductChipsProps {
  className?: string;
}

export const HeroProductChips = ({ className }: HeroProductChipsProps) => {
  const reduced = useReducedMotion();

  return (
    <div className={cn("absolute inset-0 pointer-events-none", className)} aria-hidden="true">
      {chips.map((chip, i) => (
        <motion.span
          key={chip.label}
          initial={reduced ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduced ? 0 : 0.6 + i * 0.12, duration: 0.4 }}
          className={cn(
            "absolute font-mono text-[8px] sm:text-[9px] uppercase tracking-wider",
            "px-2.5 sm:px-3 py-1 sm:py-1.5 border rounded-sm backdrop-blur-sm bg-inowix-bg/60",
            chip.className,
            !reduced && "animate-float"
          )}
          style={{
            borderColor: `${chip.accent}40`,
            color: chip.accent,
            animationDelay: reduced ? undefined : `${i * 1.5}s`,
          }}
        >
          {chip.label}
        </motion.span>
      ))}
    </div>
  );
};
