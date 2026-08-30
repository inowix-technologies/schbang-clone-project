import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { PageSection } from "@/components/layout/PageSection";
import { EditorialCTA } from "@/components/layout/EditorialCTA";
import { INDUSTRY_PROOF, INOWIX_PROJECTS, HOMEPAGE_COPY } from "@/data/inowix-content";

const Industries = () => {
  const copy = HOMEPAGE_COPY.industries;

  return (
    <PageShell>
      <PageHero
        label="Industries"
        title={
          <>
            <span className="block">{copy.line1}</span>
            <span className="block text-primary">{copy.line2}</span>
          </>
        }
        subtitle="We understand these sectors because we've engineered production systems within them."
      />

      <PageSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INDUSTRY_PROOF.map((industry) => {
            const project = INOWIX_PROJECTS[industry.projectSlug];
            const relatedProjects = Object.values(INOWIX_PROJECTS).filter((p) =>
              industry.proof.toLowerCase().includes(p.name.toLowerCase())
            );

            return (
              <div
                key={industry.slug}
                className="group relative p-5 sm:p-6 border border-border/40 rounded-sm bg-inowix-bg/50 hover:bg-inowix-surface/30 transition-all h-full flex flex-col"
                style={{ borderLeftColor: `${industry.accent}40`, borderLeftWidth: 3 }}
              >
                <h2 className="font-semibold text-base sm:text-lg mb-2">{industry.name}</h2>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">{industry.proof}</p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: industry.accent }} />
                  <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: industry.accent }}>
                    {project.name}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {relatedProjects.slice(0, 3).map((p) => (
                    <Link
                      key={p.slug}
                      to={p.link}
                      className="font-mono text-[9px] uppercase tracking-wider px-2 py-1 border border-border/40 rounded-sm hover:border-border/80 transition-colors"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
                <Link
                  to={project.link}
                  className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
                  style={{ color: industry.accent }}
                >
                  View case study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </PageSection>

      <PageSection>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">All work</p>
            <h2 className="text-2xl font-bold">18 systems engineered across industries</h2>
          </div>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all shrink-0"
          >
            View all projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </PageSection>

      <EditorialCTA />
    </PageShell>
  );
};

export default Industries;
