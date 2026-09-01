import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { AnimatedGrid } from "@/components/ui/animated-grid";
import { CLIENT_LOGO_SLUGS, INOWIX_PROJECTS, TRUST_STATS } from "@/data/inowix-content";
import { fadeUp, defaultViewport } from "@/components/home/HomepageMotion";
import { ClientLogoMarquee } from "@/components/home/ClientLogoMarquee";

const AnimatedStat = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const reduced = useReducedMotion();
  const spring = useSpring(0, { stiffness: 60, damping: 20 });
  const display = useTransform(spring, (v) => Math.floor(v));
  const [shown, setShown] = useState(reduced ? value : 0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) {
      setShown(value);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) spring.set(value);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced, spring, value]);

  useEffect(() => {
    if (reduced) return;
    return display.on("change", (v) => setShown(v));
  }, [display, reduced]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
        {shown}
        {suffix}
      </p>
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-2">{label}</p>
    </div>
  );
};

export const TrustVelocityStrip = () => {
  const reduced = useReducedMotion();
  const logoItems = CLIENT_LOGO_SLUGS.map((slug) => {
    const project = INOWIX_PROJECTS[slug];
    return {
      name: project.name,
      image: project.logo || project.image,
    };
  });

  return (
    <section className="relative border-t border-border/40 bg-inowix-surface/30 overflow-hidden" aria-label="Trust metrics">
      <AnimatedGrid pattern="grid" className="opacity-50" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
        <motion.div
          initial={reduced ? false : fadeUp.hidden}
          whileInView={fadeUp.visible}
          viewport={defaultViewport}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {TRUST_STATS.map((stat) => (
            <AnimatedStat key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </motion.div>

        <ClientLogoMarquee items={logoItems} direction="left" speed="slow" />
      </div>
    </section>
  );
};
