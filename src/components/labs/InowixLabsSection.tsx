import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { LABS_HEADLINE } from "@/data/inowix-content";
import { ComAiDemo } from "./ComAiDemo";
import { BeaconDemo } from "./BeaconDemo";
import { RedCliDemo } from "./RedCliDemo";
import { cn } from "@/lib/utils";

const chapters = [
  { id: "com-ai-panel", label: "COM AI", accent: "#00FF88" },
  { id: "beacon-panel", label: "Beacon", accent: "#00D4FF" },
  { id: "red-cli-panel", label: "RED CLI", accent: "#DC2626" },
];

export const InowixLabsSection = () => {
  const reduced = useReducedMotion();
  const [activeChapter, setActiveChapter] = useState(chapters[0].id);

  useEffect(() => {
    const panels = chapters.map((c) => document.getElementById(c.id)).filter(Boolean) as HTMLElement[];
    if (!panels.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveChapter(visible.target.id);
      },
      { threshold: [0.3, 0.5, 0.7], rootMargin: "-20% 0px -20% 0px" }
    );

    panels.forEach((panel) => observer.observe(panel));
    return () => observer.disconnect();
  }, []);

  const scrollToChapter = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="inowix-labs" className="relative bg-inowix-bg" aria-label="Inowix Labs flagship products">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 pt-20 sm:pt-28 pb-4">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-10 sm:mb-14"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-inowix-com-ai mb-6">
            {LABS_HEADLINE.label}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95]">
            <span className="block text-muted-foreground/80">{LABS_HEADLINE.line1}</span>
            <span className="block">{LABS_HEADLINE.line2}</span>
            <span className="block text-primary">{LABS_HEADLINE.line3}</span>
          </h2>
        </motion.div>

        <nav className="hidden lg:flex gap-2 mb-8 sticky top-24 z-20 w-fit" aria-label="Labs chapters">
          {chapters.map((chapter) => (
            <button
              key={chapter.id}
              type="button"
              onClick={() => scrollToChapter(chapter.id)}
              className={cn(
                "font-mono text-[10px] uppercase tracking-wider px-4 py-2 rounded-sm border transition-all",
                activeChapter === chapter.id
                  ? "border-border/60 bg-inowix-surface/40"
                  : "border-border/30 text-muted-foreground hover:text-foreground"
              )}
              style={activeChapter === chapter.id ? { color: chapter.accent, borderColor: `${chapter.accent}50` } : undefined}
            >
              {chapter.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="border-t border-border/30 lg:snap-y lg:snap-mandatory">
        <ComAiDemo />
        <BeaconDemo />
        <RedCliDemo />
      </div>
    </section>
  );
};
