import { useEffect, useState, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { INOWIX_PRODUCTS, RED_CLI_DEMO } from "@/data/inowix-content";
import { ArchitectureFlowStrip } from "./ArchitectureFlowStrip";
import { BuiltByInowixBadge } from "./BuiltByInowixBadge";
import { Button } from "@/components/ui/button";

export const RedCliDemo = () => {
  const product = INOWIX_PRODUCTS["red-cli"];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const reduced = useReducedMotion();
  const [lineIndex, setLineIndex] = useState(0);
  const [typedCmd, setTypedCmd] = useState("");

  useEffect(() => {
    if (!inView || reduced) {
      setTypedCmd(RED_CLI_DEMO.command);
      return;
    }
    const cmd = RED_CLI_DEMO.command;
    let i = 0;
    const typeInterval = setInterval(() => {
      i++;
      setTypedCmd(cmd.slice(0, i));
      if (i >= cmd.length) clearInterval(typeInterval);
    }, 60);
    return () => clearInterval(typeInterval);
  }, [inView, reduced]);

  useEffect(() => {
    if (!inView || reduced) return;
    const t = setInterval(() => setLineIndex((l) => Math.min(l + 1, RED_CLI_DEMO.checks.length + 2)), 900);
    return () => clearInterval(t);
  }, [inView, reduced]);

  return (
    <div
      ref={ref}
      id="red-cli-panel"
      className="relative min-h-[70vh] flex flex-col lg:flex-row border-b border-border/30 overflow-hidden"
      style={{ borderLeftColor: `${product.accent}30`, borderLeftWidth: 3 }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{ background: `radial-gradient(ellipse at 70% 40%, ${product.accent}, transparent 55%)` }}
      />

      <div className="relative z-10 flex-1 p-8 sm:p-12 lg:p-16 flex flex-col justify-center max-w-xl">
        <BuiltByInowixBadge className="mb-6 w-fit" />
        <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: product.accent }}>
          {product.tagline}
        </p>
        <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">{product.name}</h3>
        <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed">{product.description}</p>
        <div className="flex flex-wrap gap-2 mb-10">
          {product.features.map((f) => (
            <span
              key={f}
              className="font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 border rounded-sm"
              style={{ borderColor: `${product.accent}30`, color: product.accent }}
            >
              {f}
            </span>
          ))}
        </div>
        <Button asChild className="w-fit rounded-sm group" style={{ backgroundColor: product.accent }}>
          <Link to={product.link}>
            Explore RED CLI
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>

      <div className="relative z-10 flex-1 p-6 sm:p-10 lg:p-12 flex flex-col justify-center min-h-[440px]">
        <div
          className="relative rounded-xl border overflow-hidden max-w-xl mx-auto w-full font-mono text-sm shadow-2xl"
          style={{ borderColor: `${product.accent}50`, boxShadow: `0 0 60px ${product.glow}` }}
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30 bg-inowix-surface/80">
            <span className="w-3 h-3 rounded-full bg-[#DC2626]/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <span className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="ml-2 text-[10px] text-muted-foreground uppercase tracking-widest">red-cli · security scan</span>
          </div>

          <div className="p-6 sm:p-8 bg-[#0a0c0e] min-h-[320px]">
            <p className="text-[#DC2626] mb-4">
              $ {typedCmd}
              {!reduced && typedCmd.length < RED_CLI_DEMO.command.length && (
                <span className="animate-pulse">▊</span>
              )}
            </p>

            {lineIndex >= 1 && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-muted-foreground text-xs mb-4">
                SCANNING · {RED_CLI_DEMO.fileCount.toLocaleString()} FILES
              </motion.p>
            )}

            <div className="space-y-2 mb-6">
              {RED_CLI_DEMO.checks.map((check, i) => (
                <motion.div
                  key={check.label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={lineIndex > i ? { opacity: 1, x: 0 } : { opacity: 0 }}
                  className="flex justify-between text-xs gap-4"
                >
                  <span className="text-muted-foreground">{check.label}</span>
                  <span className={check.ok ? "text-inowix-com-ai" : "text-[#DC2626]"}>
                    {check.status}
                  </span>
                </motion.div>
              ))}
            </div>

            {lineIndex >= RED_CLI_DEMO.checks.length + 1 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-lg border border-[#DC2626]/50 bg-[#DC2626]/10 p-4"
              >
                <p className="text-[#DC2626] font-bold text-xs mb-2">{RED_CLI_DEMO.vulnerability.title}</p>
                <p className="text-[10px] text-muted-foreground leading-relaxed">
                  <span className="text-foreground/80">AI ANALYSIS · </span>
                  {RED_CLI_DEMO.vulnerability.analysis}
                </p>
              </motion.div>
            )}
          </div>
        </div>

        <ArchitectureFlowStrip steps={product.architecture} accent={product.accent} className="mt-8 max-w-xl mx-auto w-full" />
      </div>
    </div>
  );
};
