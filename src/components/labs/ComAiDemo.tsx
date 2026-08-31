import { useEffect, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { INOWIX_PRODUCTS, COM_AI_DEMO } from "@/data/inowix-content";
import { ArchitectureFlowStrip } from "./ArchitectureFlowStrip";
import { BuiltByInowixBadge } from "./BuiltByInowixBadge";
import { Button } from "@/components/ui/button";

export const ComAiDemo = () => {
  const product = INOWIX_PRODUCTS["com-ai"];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const reduced = useReducedMotion();
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!inView || reduced) return;
    const t = setInterval(() => setPhase((p) => (p + 1) % 5), 2400);
    return () => clearInterval(t);
  }, [inView, reduced]);

  return (
    <div
      ref={ref}
      id="com-ai-panel"
      className="relative min-h-[70vh] flex flex-col lg:flex-row border-b border-border/30 overflow-hidden"
      style={{ borderLeftColor: `${product.accent}30`, borderLeftWidth: 3 }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{ background: `radial-gradient(ellipse at 80% 50%, ${product.accent}, transparent 60%)` }}
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
        <Button asChild className="w-fit rounded-sm group" style={{ backgroundColor: product.accent, color: "#070809" }}>
          <Link to={product.link}>
            Explore COM AI
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>

      <div className="relative z-10 flex-1 p-6 sm:p-10 lg:p-12 flex flex-col justify-center min-h-[400px]">
        {product.screenshot && (
          <div className="absolute inset-4 sm:inset-8 rounded-xl overflow-hidden opacity-20">
            <img src={product.screenshot} alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
        )}

        <div
          className="relative rounded-xl border p-6 sm:p-8 backdrop-blur-md max-w-lg mx-auto w-full"
          style={{ borderColor: `${product.accent}40`, background: `${product.accent}06` }}
        >
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
            Live commerce interaction
          </p>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="rounded-lg border border-border/40 bg-inowix-bg/80 p-4 mb-4"
          >
            <span className="text-[10px] font-mono text-muted-foreground">customer · whatsapp</span>
            <p className="text-sm mt-2 text-foreground/90">{COM_AI_DEMO.customerMessage}</p>
          </motion.div>

          {phase >= 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-wrap gap-2 mb-4">
              {COM_AI_DEMO.processingSteps.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={phase > i ? { opacity: 1, scale: 1 } : { opacity: 0.3, scale: 0.95 }}
                  className="font-mono text-[9px] uppercase px-2 py-1 rounded border"
                  style={{ borderColor: `${product.accent}40`, color: product.accent }}
                >
                  {s}
                </motion.span>
              ))}
            </motion.div>
          )}

          {phase >= 4 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-lg p-4 font-mono text-sm"
              style={{ background: `${product.accent}12`, color: product.accent }}
            >
              {COM_AI_DEMO.response}
            </motion.div>
          )}
        </div>

        <ArchitectureFlowStrip steps={product.architecture} accent={product.accent} className="mt-8 max-w-lg mx-auto w-full" />
      </div>
    </div>
  );
};
