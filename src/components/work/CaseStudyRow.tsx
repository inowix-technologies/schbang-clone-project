import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { InowixProject } from "@/data/inowix-content";
import { BuiltByInowix } from "@/components/hero/BuiltByInowix";
import { ProjectVisual } from "./ProjectVisual";
import { ProjectLogoBadge } from "./ProjectLogoBadge";
import { cn } from "@/lib/utils";

interface CaseStudyRowProps {
  project: InowixProject;
  reversed?: boolean;
  index: number;
}

export const CaseStudyRow = ({ project, reversed = false, index }: CaseStudyRowProps) => {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [12, -12]);

  return (
    <motion.article
      ref={ref}
      initial={reduced ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.55, delay: index * 0.05 }}
      className={cn(
        "relative flex flex-col lg:flex-row border-b border-border/30 overflow-hidden",
        "lg:min-h-[60vh]",
        reversed && "lg:flex-row-reverse"
      )}
      style={{ borderLeftColor: `${project.accent}25`, borderLeftWidth: 3 }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{ background: `radial-gradient(ellipse at ${reversed ? "20%" : "80%"} 50%, ${project.accent}, transparent 55%)` }}
      />

      <div className="relative z-10 flex-1 p-6 sm:p-8 md:p-10 lg:p-14 xl:p-16 flex flex-col justify-center max-w-xl">
        <BuiltByInowix className="mb-4 sm:mb-5 w-fit" />
        <p className="font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: project.accent }}>
          {project.category}
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
          <ProjectLogoBadge project={project} />
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">{project.name}</h3>
        </div>
        <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mb-5 sm:mb-6 leading-relaxed">{project.description}</p>

        {project.metrics && project.metrics.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-6">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-sm border border-border/40 bg-inowix-surface/30 px-4 py-3"
                style={{ borderLeftColor: project.accent, borderLeftWidth: 2 }}
              >
                <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">{metric.label}</p>
                <p className="text-sm font-semibold mt-1">{metric.value}</p>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {project.capabilities.map((cap) => (
            <span
              key={cap}
              className="font-mono text-[9px] uppercase tracking-wider px-2.5 py-1 border rounded-sm"
              style={{ borderColor: `${project.accent}35`, color: project.accent }}
            >
              {cap}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span key={tech} className="text-xs text-muted-foreground/80 px-2 py-0.5 bg-inowix-surface/50 rounded-sm">
              {tech}
            </span>
          ))}
        </div>

        <Link
          to={project.link}
          className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all w-fit"
          style={{ color: project.accent }}
        >
          View case study <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="relative flex-1 min-h-[220px] sm:min-h-[280px] lg:min-h-0 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
        <motion.div
          style={{ y, borderColor: `${project.accent}30`, boxShadow: `0 0 60px ${project.glow}` }}
          className="relative w-full max-w-lg aspect-[4/3] rounded-sm overflow-hidden border"
        >
          <ProjectVisual project={project} variant="case-study" className="min-h-[200px] sm:min-h-[240px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-inowix-bg/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 font-mono text-[9px] uppercase tracking-widest text-muted-foreground/60">
            ARCHITECTURE → ENGINEERING → PRODUCTION
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
};
