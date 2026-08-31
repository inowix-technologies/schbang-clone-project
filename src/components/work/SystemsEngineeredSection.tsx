import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  FEATURED_PROJECT_SLUGS,
  CLIENT_LOGO_SLUGS,
  INOWIX_PROJECTS,
  HOMEPAGE_COPY,
} from "@/data/inowix-content";
import { CaseStudyRow } from "./CaseStudyRow";
import { ClientLogoMarquee } from "@/components/home/ClientLogoMarquee";

export const ClientLogoStrip = () => {
  const logos = CLIENT_LOGO_SLUGS.map((slug) => INOWIX_PROJECTS[slug]);
  const logoItems = logos.map((project) => ({
    name: project.name,
    image: project.logo || project.image,
  }));

  return (
    <div className="border-t border-border/30 py-12 sm:py-16 space-y-4">
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground text-center mb-4">
        {HOMEPAGE_COPY.clientStrip.label}
      </p>
      <ClientLogoMarquee items={logoItems} direction="left" speed="slow" />
      <ClientLogoMarquee items={[...logoItems].reverse()} direction="right" speed="slow" />
    </div>
  );
};

export const SystemsEngineeredSection = () => {
  const reduced = useReducedMotion();
  const copy = HOMEPAGE_COPY.systemsEngineered;
  const featured = FEATURED_PROJECT_SLUGS.map((slug) => INOWIX_PROJECTS[slug]);

  return (
    <section id="work" className="relative bg-inowix-bg border-t border-border/40" aria-label="Systems we've engineered">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 pt-20 sm:pt-28 pb-4">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-16"
        >
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">{copy.label}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95]">
              <span className="block">{copy.line1}</span>
              <span className="block text-primary">{copy.line2}</span>
            </h2>
          </div>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all shrink-0"
          >
            View all work <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      <div>
        {featured.map((project, i) => (
          <CaseStudyRow key={project.slug} project={project} reversed={i % 2 === 1} index={i} />
        ))}
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        <ClientLogoStrip />
      </div>
    </section>
  );
};
