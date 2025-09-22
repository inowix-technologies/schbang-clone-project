import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-section">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 text-balance">
              We're challengers at heart and builders by nature
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              We're on a mission to take the very best of Indian creative talent to the world.
            </p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-section bg-secondary">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Our Culture
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We're brand builders at heart, creators by design, tech enthusiasts in practice, 
                and integrated at our core. Driven by a ferocious hunger to create tangible impact 
                for your business, we work with in-house specialists, industry partners and 
                technology leaders to push the boundaries of creativity.
              </p>
              <Button className="rounded-full px-8 py-3">
                Join Our Team
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="aspect-square bg-muted rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-section">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="text-4xl md:text-6xl font-bold text-primary mb-4">1200+</div>
              <p className="text-lg text-muted-foreground">Specialists</p>
            </div>
            <div className="p-8">  
              <div className="text-4xl md:text-6xl font-bold text-primary mb-4">300+</div>
              <p className="text-lg text-muted-foreground">Brands Worldwide</p>
            </div>
            <div className="p-8">
              <div className="text-4xl md:text-6xl font-bold text-primary mb-4">10+</div>
              <p className="text-lg text-muted-foreground">Years</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;