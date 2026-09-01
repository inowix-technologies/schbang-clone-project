import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { INDUSTRY_PROOF, INOWIX_PROJECTS, HOMEPAGE_COPY } from "@/data/inowix-content";
import { IndustryIcon } from "@/components/illustrations/industry-icons";
import { fadeUp, defaultViewport } from "@/components/home/HomepageMotion";
import { SECTION_CONTAINER, SECTION_PY, SECTION_BORDER, SECTION_HEADER_MB, SECTION_EYEBROW } from "@/lib/section-layout";

export const IndustryTile = ({
  industry,
  index,
  large = false,
}: {
  industry: (typeof INDUSTRY_PROOF)[0];
  index: number;
  large?: boolean;
}) => {
  const reduced = useReducedMotion();
  const project = INOWIX_PROJECTS[industry.projectSlug];

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className={cn(large && "sm:col-span-2")}
    >
      <Link
        to={project.link}
        className="group block relative p-5 sm:p-6 border border-border/40 rounded-sm bg-inowix-bg/50 hover:bg-inowix-surface/30 transition-all duration-300 overflow-hidden h-full"
        style={{ borderLeftColor: `${industry.accent}40`, borderLeftWidth: 3 }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 100% 0%, ${industry.accent}12, transparent 60%)` }}
        />
        <IndustryIcon slug={industry.slug} accent={industry.accent} className="mb-4 opacity-80" />
        <h3 className="font-semibold text-base sm:text-lg mb-2 group-hover:text-foreground transition-colors relative z-10">
          {industry.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed relative z-10">{industry.proof}</p>
        <div className="flex items-center gap-2 relative z-10">
          <span className="w-2 h-2 rounded-full shrink-0" style={{ background: industry.accent }} />
          <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: industry.accent }}>
            {project.name}
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export const IndustriesProofSection = () => {
  const reduced = useReducedMotion();
  const copy = HOMEPAGE_COPY.industries;

  return (
    <section id="industries" className={cn("relative bg-inowix-bg", SECTION_BORDER)} aria-label="Industries">
      <div className={cn(SECTION_CONTAINER, SECTION_PY)}>
        <motion.div
          initial={reduced ? false : fadeUp.hidden}
          whileInView={fadeUp.visible}
          viewport={defaultViewport}
          className={cn("flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4", SECTION_HEADER_MB)}
        >
          <div className="max-w-3xl">
            <p className={SECTION_EYEBROW}>{copy.label}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95]">
              <span className="block">{copy.line1}</span>
              <span className="block text-primary">{copy.line2}</span>
            </h2>
          </div>
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all shrink-0"
          >
            All industries <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INDUSTRY_PROOF.map((industry, i) => (
            <IndustryTile key={industry.slug} industry={industry} index={i} large={i < 2} />
          ))}
        </div>
      </div>
    </section>
  );
};
