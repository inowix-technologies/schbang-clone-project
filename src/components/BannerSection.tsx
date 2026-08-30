import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HOMEPAGE_COPY } from "@/data/inowix-content";

export const BannerSection = () => {
  const copy = HOMEPAGE_COPY.banner;

  return (
    <section className="py-20 sm:py-28 bg-inowix-surface/30 border-t border-border/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:40px_40px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">{copy.label}</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">{copy.headline}</h2>
        <p className="text-muted-foreground text-base sm:text-lg mb-4 max-w-xl mx-auto">{copy.subline}</p>
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-inowix-com-ai mb-10">{copy.statusLine}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Button asChild size="lg" className="rounded-sm px-8 group w-full sm:w-auto">
            <Link to="/contact-us">
              Start a Project
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-sm px-8 w-full sm:w-auto">
            <Link to="#inowix-labs">Explore Inowix Labs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
