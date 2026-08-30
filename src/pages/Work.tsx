import { useState, useMemo } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { EditorialCTA } from "@/components/layout/EditorialCTA";
import { CaseStudyRow } from "@/components/work/CaseStudyRow";
import { ClientLogoStrip } from "@/components/work/SystemsEngineeredSection";
import { INOWIX_PROJECTS } from "@/data/inowix-content";
import { cn } from "@/lib/utils";

const ALL_PROJECTS = Object.values(INOWIX_PROJECTS);
const CATEGORIES = ["All", ...Array.from(new Set(ALL_PROJECTS.map((p) => p.category)))];

const Work = () => {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(
    () => (filter === "All" ? ALL_PROJECTS : ALL_PROJECTS.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <PageShell>
      <PageHero
        label="Work"
        title={
          <>
            <span className="block">Built for production.</span>
            <span className="block text-primary">Not for presentations.</span>
          </>
        }
        subtitle="Real systems engineered for Babyland, SwiftGo, SRL Logistics, and 15+ brands — from architecture to deployment."
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 pb-8">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 border rounded-sm transition-all",
                filter === cat
                  ? "border-primary/50 bg-primary/10 text-primary"
                  : "border-border/40 text-muted-foreground hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div>
        {filtered.map((project, i) => (
          <CaseStudyRow key={project.slug} project={project} reversed={i % 2 === 1} index={i} />
        ))}
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        <ClientLogoStrip />
      </div>

      <EditorialCTA />
    </PageShell>
  );
};

export default Work;
