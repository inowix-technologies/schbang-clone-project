import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { EditorialCTA } from "@/components/layout/EditorialCTA";
import { ProjectVisual } from "@/components/work/ProjectVisual";
import { ArchitectureFlowStrip } from "@/components/labs/ArchitectureFlowStrip";
import { INOWIX_PROJECTS, type ProjectSlug } from "@/data/inowix-content";
import { Button } from "@/components/ui/button";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project =
    slug && slug in INOWIX_PROJECTS ? INOWIX_PROJECTS[slug as ProjectSlug] : null;

  if (!project) {
    return (
      <PageShell>
        <div className="max-w-[1600px] mx-auto px-4 pt-32 pb-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Button asChild variant="outline" className="rounded-sm">
            <Link to="/work">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Work
            </Link>
          </Button>
        </div>
      </PageShell>
    );
  }

  const architectureSteps = project.capabilities;

  return (
    <PageShell>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 pt-28 sm:pt-32 pb-16">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          All Work
        </Link>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <span
              className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 border rounded-sm mb-4 inline-block"
              style={{ borderColor: `${project.accent}35`, color: project.accent }}
            >
              {project.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">{project.name}</h1>
            <p className="lead mb-8">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-10">
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

            <ArchitectureFlowStrip steps={architectureSteps} accent={project.accent} className="mb-10" />

            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
              style={{ color: project.accent }}
            >
              Start a similar project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="lg:col-span-5">
            <div
              className="rounded-sm overflow-hidden border aspect-[4/3] mb-6"
              style={{ borderColor: `${project.accent}30`, boxShadow: `0 0 40px ${project.glow}` }}
            >
              <ProjectVisual project={project} variant="case-study" />
            </div>

            <div className="p-6 border border-border/40 rounded-sm bg-inowix-surface/20">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Tech stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium border border-border/40 rounded-sm bg-inowix-bg/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <EditorialCTA />
    </PageShell>
  );
};

export default ProjectDetail;
