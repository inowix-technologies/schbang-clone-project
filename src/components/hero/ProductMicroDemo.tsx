import { motion } from "framer-motion";
import type { ProductSlug } from "@/data/inowix-content";
import { COM_AI_DEMO, BEACON_DEMO, RED_CLI_DEMO } from "@/data/inowix-content";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

interface ProductMicroDemoProps {
  productId: ProductSlug;
  className?: string;
  autoPlay?: boolean;
}

export const ProductMicroDemo = ({ productId, className, autoPlay = true }: ProductMicroDemoProps) => {
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!autoPlay || reduced) return;
    const interval = setInterval(() => setStep((s) => s + 1), 2200);
    return () => clearInterval(interval);
  }, [autoPlay, reduced]);

  if (productId === "com-ai") {
    const phase = step % 4;
    return (
      <div className={cn("font-mono text-[9px] sm:text-[10px] space-y-2", className)}>
        <div className="rounded border border-[#00FF88]/20 bg-[#00FF88]/5 p-2">
          <span className="text-muted-foreground">customer · </span>
          <span className="text-foreground/90">{COM_AI_DEMO.customerMessage}</span>
        </div>
        {phase >= 1 && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="flex flex-wrap gap-1">
            {COM_AI_DEMO.processingSteps.slice(0, phase + 1).map((s) => (
              <span key={s} className="px-1.5 py-0.5 rounded text-[8px] bg-[#00FF88]/10 text-[#00FF88] border border-[#00FF88]/20">
                {s}
              </span>
            ))}
          </motion.div>
        )}
        {phase >= 3 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded border border-[#00FF88]/30 bg-inowix-bg/80 p-2 text-[#00FF88]/90">
            {COM_AI_DEMO.response}
          </motion.div>
        )}
      </div>
    );
  }

  if (productId === "beacon") {
    const activeStage = step % BEACON_DEMO.stages.length;
    return (
      <div className={cn("font-mono text-[9px] sm:text-[10px] space-y-2", className)}>
        <div className="flex items-center gap-2 text-[#00D4FF]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
          {BEACON_DEMO.company}
        </div>
        <div className="flex flex-wrap gap-1">
          {BEACON_DEMO.stages.map((stage, i) => (
            <span
              key={stage}
              className={cn(
                "px-1.5 py-0.5 rounded text-[8px] border transition-all duration-300",
                i <= activeStage
                  ? "bg-[#00D4FF]/15 text-[#00D4FF] border-[#00D4FF]/30"
                  : "bg-inowix-surface/50 text-muted-foreground/40 border-border/30"
              )}
            >
              {stage}
            </span>
          ))}
        </div>
        {activeStage >= 4 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#00D4FF]/80">
            intelligence score: {BEACON_DEMO.score}
          </motion.div>
        )}
      </div>
    );
  }

  // red-cli
  const scanPhase = step % 6;
  return (
    <div className={cn("font-mono text-[9px] sm:text-[10px] space-y-1.5", className)}>
      <div className="text-[#DC2626]">{RED_CLI_DEMO.command}</div>
      <div className="text-muted-foreground">SCANNING · {RED_CLI_DEMO.fileCount} FILES</div>
      {RED_CLI_DEMO.checks.map((check, i) => (
        <motion.div
          key={check.label}
          initial={{ opacity: 0 }}
          animate={{ opacity: scanPhase > i ? 1 : 0.3 }}
          className="flex justify-between gap-2"
        >
          <span className="text-muted-foreground">{check.label}</span>
          <span className={check.ok ? "text-[#00FF88]/80" : "text-[#DC2626]"}>
            {check.status}
          </span>
        </motion.div>
      ))}
      {scanPhase >= 5 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-2 p-2 rounded border border-[#DC2626]/40 bg-[#DC2626]/5 text-[#DC2626]/90 text-[8px]"
        >
          {RED_CLI_DEMO.vulnerability.title}
        </motion.div>
      )}
    </div>
  );
};
