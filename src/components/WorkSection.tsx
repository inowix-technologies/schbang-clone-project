import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

const featuredSlugs = [
  "bigo-health-telemedicine-platform",
  "bolt-ride-hailing-platform",
  "siya-ayurveda-holistic-health-platform",
  "retailx-smart-inventory-management",
  "carzentra-ai-car-marketplace",
  "finnova-personal-finance-ai",
];

export const WorkSection = () => {
  const featured = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean)
    .slice(0, 6);

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-inowix-bg border-t border-border/40 relative" id="work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">Work</p>
            <h2 className="section-title">Engineering stories</h2>
            <p className="lead max-w-xl mt-3">
              Real systems built for production — from architecture to deployment.
            </p>
          </div>
          <Link to="/work" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all shrink-0">
            View all work <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {featured.map((project) => project && (
            <Link
              key={project.id}
              to={`/project/${project.slug}`}
              className="group block rounded-2xl border border-border/40 bg-inowix-surface/20 overflow-hidden hover:bg-inowix-surface/40 hover:border-border/60 transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden bg-inowix-elevated">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5 sm:p-6">
                <span className="font-mono text-[10px] uppercase tracking-wider text-primary mb-2 block">
                  {project.category}
                </span>
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{project.shortDescription}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
