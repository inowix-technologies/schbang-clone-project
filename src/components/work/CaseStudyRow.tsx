import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { InowixProject } from "@/data/inowix-content";
import { BuiltByInowix } from "@/components/hero/BuiltByInowix";
import { cn } from "@/lib/utils";

interface CaseStudyRowProps {
  project: InowixProject;
  reversed?: boolean;
  index: number;
}

export const CaseStudyRow = ({ project, reversed = false, index }: CaseStudyRowProps) => {
  const reduced = useReducedMotion();

  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.55, delay: index * 0.05 }}
      className={cn(
        "relative flex flex-col lg:flex-row min-h-[60vh] border-b border-border/30 overflow-hidden",
        reversed && "lg:flex-row-reverse"
      )}
      style={{ borderLeftColor: `${project.accent}25`, borderLeftWidth: 3 }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{ background: `radial-gradient(ellipse at ${reversed ? "20%" : "80%"} 50%, ${project.accent}, transparent 55%)` }}
      />

      <div className="relative z-10 flex-1 p-8 sm:p-12 lg:p-16 flex flex-col justify-center max-w-xl">
        <BuiltByInowix className="mb-5 w-fit" />
        <p className="font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: project.accent }}>
          {project.category}
        </p>
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">{project.name}</h3>
        <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed">{project.description}</p>

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

      <div className="relative flex-1 min-h-[280px] lg:min-h-0 flex items-center justify-center p-6 sm:p-10 lg:p-12">
        <div
          className="relative w-full max-w-lg aspect-[4/3] rounded-sm overflow-hidden border"
          style={{ borderColor: `${project.accent}30`, boxShadow: `0 0 60px ${project.glow}` }}
        >
          <img
            src={project.logo || project.image}
            alt={project.name}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-inowix-bg/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 font-mono text-[9px] uppercase tracking-widest text-muted-foreground/60">
            ARCHITECTURE → ENGINEERING → PRODUCTION
          </div>
        </div>
      </div>
    </motion.article>
  );
};
