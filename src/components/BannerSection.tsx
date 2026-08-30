import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const BannerSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-inowix-surface/50 border-t border-border/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:40px_40px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          Let's build
        </p>
        <h2 className="section-title mb-4">
          Ready to engineer your next system?
        </h2>
        <p className="lead mb-8 max-w-xl mx-auto">
          From complex problems to production systems. Tell us what you're building.
        </p>
        <Button asChild size="lg" className="rounded-full px-8 group">
          <Link to="/contact-us">
            Start a Project
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
};
