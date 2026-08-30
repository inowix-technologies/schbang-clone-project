import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useIndustries } from "@/hooks/useServices";
import { Link } from "react-router-dom";
import { ArrowRight, Loader2 } from "lucide-react";

const Industries = () => {
  const { industries, isLoading } = useIndustries();

  return (
    <div className="min-h-screen bg-inowix-bg text-foreground">
      <Header />
      <main className="pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12 sm:mb-16 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Industries</p>
            <h1 className="section-title mb-4">Built inside the industries we serve</h1>
            <p className="lead">
              We understand these sectors because we've engineered production systems within them.
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {industries.map((industry) => (
                <div
                  key={industry.id}
                  className="group rounded-2xl border border-border/40 bg-inowix-surface/30 p-6 sm:p-8 hover:bg-inowix-elevated/50 hover:border-border/60 transition-all duration-300"
                >
                  <h2 className="text-lg sm:text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {industry.name}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">{industry.description}</p>
                  <Link
                    to="/work"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary"
                  >
                    View related work
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;
