import { useEffect, useState, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { INOWIX_PRODUCTS, BEACON_DEMO } from "@/data/inowix-content";
import { ArchitectureFlowStrip } from "./ArchitectureFlowStrip";
import { BuiltByInowixBadge } from "./BuiltByInowixBadge";
import { Button } from "@/components/ui/button";

export const BeaconDemo = () => {
  const product = INOWIX_PRODUCTS.beacon;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const reduced = useReducedMotion();
  const [stageIndex, setStageIndex] = useState(0);

  useEffect(() => {
    if (!inView || reduced) return;
    const t = setInterval(
      () => setStageIndex((s) => (s + 1) % BEACON_DEMO.stages.length),
      1800
    );
    return () => clearInterval(t);
  }, [inView, reduced]);

  return (
    <div
      ref={ref}
      id="beacon-panel"
      className="relative min-h-[80vh] flex flex-col lg:flex-row-reverse border-b border-border/30 overflow-hidden"
      style={{ borderLeftColor: `${product.accent}30`, borderLeftWidth: 3 }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{ background: `radial-gradient(ellipse at 20% 50%, ${product.accent}, transparent 60%)` }}
      />

      <div className="relative z-10 flex-1 p-8 sm:p-12 lg:p-16 flex flex-col justify-center max-w-xl lg:ml-auto">
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
            Explore Beacon
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>

      <div className="relative z-10 flex-1 p-6 sm:p-10 lg:p-12 flex flex-col justify-center min-h-[420px]">
        {product.screenshot && (
          <div className="absolute inset-4 sm:inset-8 rounded-xl overflow-hidden opacity-15">
            <img src={product.screenshot} alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
        )}

        <div
          className="relative rounded-xl border p-6 sm:p-8 backdrop-blur-md max-w-xl mx-auto w-full"
          style={{ borderColor: `${product.accent}40`, background: `${product.accent}06` }}
        >
          <div className="flex items-center justify-between mb-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Revenue intelligence engine
            </p>
            <span className="font-mono text-[10px] px-2 py-0.5 rounded" style={{ color: product.accent, background: `${product.accent}15` }}>
              LIVE
            </span>
          </div>

          <div className="flex items-center gap-3 mb-6 p-3 rounded-lg border border-border/30 bg-inowix-bg/60">
            <div className="w-10 h-10 rounded border border-border/40 flex items-center justify-center font-mono text-xs" style={{ color: product.accent }}>
              AC
            </div>
            <div>
              <p className="font-semibold text-sm">{BEACON_DEMO.company}</p>
              <p className="font-mono text-[10px] text-muted-foreground">signal detected · enriching</p>
            </div>
            {stageIndex >= 4 && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="ml-auto font-mono text-lg font-bold"
                style={{ color: product.accent }}
              >
                {BEACON_DEMO.score}
              </motion.span>
            )}
          </div>

          <div className="space-y-2">
            {BEACON_DEMO.stages.map((stage, i) => (
              <motion.div
                key={stage}
                className="flex items-center gap-3"
                animate={{ opacity: i <= stageIndex ? 1 : 0.25 }}
              >
                <div
                  className="w-2 h-2 rounded-full shrink-0 transition-colors duration-300"
                  style={{ backgroundColor: i <= stageIndex ? product.accent : "hsl(var(--border))" }}
                />
                <span
                  className="font-mono text-[10px] sm:text-xs uppercase tracking-wider flex-1"
                  style={{ color: i <= stageIndex ? product.accent : undefined }}
                >
                  {stage}
                </span>
                {i === stageIndex && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-mono text-[9px] text-muted-foreground"
                  >
                    processing...
                  </motion.span>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <ArchitectureFlowStrip steps={product.architecture} accent={product.accent} className="mt-8 max-w-xl mx-auto w-full" />
      </div>
    </div>
  );
};
