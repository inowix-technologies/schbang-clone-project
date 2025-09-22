import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-section bg-secondary">
      <div className="max-w-container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-6">
            What defines us
          </p>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 text-balance">
            We're challengers at heart and builders by nature.
          </h2>
          
          <div className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
            <p className="mb-6">
              <strong>We're brand builders at heart, creators by design, tech enthusiasts in practice, and integrated at our core.</strong>
            </p>
            
            <p className="text-muted-foreground">
              We're on a mission to take the very best of Indian creative talent to the world. 
              Driven by a ferocious hunger to create tangible impact for your business, we work 
              with in-house specialists, industry partners and technology leaders to push the 
              boundaries of creativity and put your brand on the global stage.
            </p>
          </div>
          
          <Button variant="outline" className="rounded-full px-8 py-3 text-foreground border-foreground hover:bg-foreground hover:text-background">
            Dive into our culture
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};