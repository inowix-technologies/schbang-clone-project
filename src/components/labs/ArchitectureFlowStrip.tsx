import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ArchitectureFlowStripProps {
  steps: string[];
  accent: string;
  className?: string;
}

export const ArchitectureFlowStrip = ({ steps, accent, className }: ArchitectureFlowStripProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const reduced = useReducedMotion();

  return (
    <div ref={ref} className={cn("overflow-x-auto pb-2", className)}>
      <div className="flex items-center gap-0 min-w-max">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center">
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider px-3 py-2 border rounded-sm whitespace-nowrap"
              style={{
                borderColor: `${accent}40`,
                background: `${accent}08`,
                color: accent,
              }}
            >
              {step}
            </motion.div>
            {i < steps.length - 1 && (
              <motion.span
                initial={reduced ? false : { opacity: 0, scaleX: 0 }}
                animate={inView ? { opacity: 0.5, scaleX: 1 } : {}}
                transition={{ delay: i * 0.08 + 0.05 }}
                className="text-muted-foreground/40 px-1 text-xs origin-left"
              >
                ↓
              </motion.span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
