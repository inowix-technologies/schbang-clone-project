import { Card } from "@/components/ui/card";
import { Building2, Users } from "lucide-react";

const PartnersSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get Noticed by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our panel includes senior engineers and tech leads from Gurgaon's top companies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Partner Companies */}
          <Card className="p-8 bg-card border-border/50 hover-lift">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Partner MNCs</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i}
                  className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-border"
                >
                  <span className="text-muted-foreground font-semibold">Coming Soon</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Judges Panel */}
          <Card className="p-8 bg-card border-border/50 hover-lift">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-[hsl(var(--accent-blue))]/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-[hsl(var(--accent-blue))]" />
              </div>
              <h3 className="text-2xl font-bold">Expert Judges</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-24 h-24 rounded-full bg-muted border-2 border-border flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">TBA</span>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold">Expert {i}</p>
                    <p className="text-xs text-muted-foreground">Coming Soon</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
