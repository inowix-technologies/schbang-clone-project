import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CO_FOUNDERS } from "@/data/team";
import { fadeUp, defaultViewport } from "@/components/home/HomepageMotion";
import type { TeamLeader } from "@/data/team";

const FounderCard = ({ founder, index }: { founder: TeamLeader; index: number }) => {
  const reduced = useReducedMotion();

  return (
    <motion.article
      initial={reduced ? false : fadeUp.hidden}
      whileInView={fadeUp.visible}
      viewport={defaultViewport}
      transition={{ delay: index * 0.1 }}
      className="group flex flex-col"
    >
      <div
        className="relative aspect-[3/4] overflow-hidden rounded-sm border border-border/30 mb-5"
        style={{
          background: `radial-gradient(ellipse at 50% 90%, ${founder.accent}18, transparent 65%)`,
        }}
      >
        <img
          src={founder.photo}
          alt={`${founder.name}, ${founder.title} of Inowix`}
          className="absolute inset-0 h-full w-full object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
          decoding="async"
        />
      </div>
      <p className="font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: founder.accent }}>
        {founder.title}
      </p>
      <h3 className="text-xl sm:text-2xl font-bold mb-2">{founder.name}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{founder.bio}</p>
    </motion.article>
  );
};

export const FoundersSection = () => {
  const reduced = useReducedMotion();

  return (
    <section className="relative border-t border-border/40 bg-inowix-bg overflow-hidden" aria-label="Inowix co-founders">
      <div className="absolute inset-0 pointer-events-none bg-grid-white/[0.02] bg-[length:48px_48px]" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-20 sm:py-28">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
          <motion.div
            initial={reduced ? false : fadeUp.hidden}
            whileInView={fadeUp.visible}
            viewport={defaultViewport}
            className="lg:sticky lg:top-28"
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-inowix-com-ai mb-6">Leadership</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[0.95] mb-6">
              Built by founders
              <span className="block text-primary">who ship.</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-md mb-8 leading-relaxed">
              Inowix is led by engineers who build in public — running client platforms and proprietary products from the same production stack.
            </p>
            <Link
              to="/about-us"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
            >
              Meet the team <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {CO_FOUNDERS.map((founder, i) => (
              <FounderCard key={founder.id} founder={founder} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
