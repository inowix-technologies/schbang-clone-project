import { Link } from "react-router-dom";
import { ArrowRight, Loader2 } from "lucide-react";
import { useIndustries } from "@/hooks/useServices";

export const IndustriesSection = () => {
  const { industries, isLoading } = useIndustries();

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-inowix-surface/30 border-t border-border/40 relative" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">Industries</p>
            <h2 className="section-title">Built inside the industries we serve</h2>
          </div>
          <Link to="/industries" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all shrink-0">
            All industries <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-6 h-6 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {industries.slice(0, 8).map((industry) => (
              <Link
                key={industry.id}
                to="/industries"
                className="group rounded-xl border border-border/40 bg-inowix-bg/50 p-4 sm:p-5 hover:bg-inowix-elevated/30 hover:border-border/60 transition-all duration-300"
              >
                <h3 className="text-sm sm:text-base font-medium group-hover:text-primary transition-colors">
                  {industry.name}
                </h3>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
