import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HOMEPAGE_COPY } from "@/data/inowix-content";

export const EditorialCTA = () => {
  const copy = HOMEPAGE_COPY.banner;

  return (
    <section className="border-t border-border/40 bg-inowix-surface/30 py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">{copy.label}</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{copy.headline}</h2>
        <p className="text-muted-foreground mb-8">{copy.subline}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild size="lg" className="rounded-sm px-8 group w-full sm:w-auto">
            <Link to="/contact-us">
              Start a Project
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-sm px-8 w-full sm:w-auto">
            <Link to="/#inowix-labs">Explore Inowix Labs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
