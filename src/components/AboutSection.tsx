import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Layers, Rocket, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "Engineers at Core",
    description: "We don't strategize in slides — we architect, build, and ship production systems.",
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Full-Stack Depth",
    description: "From database schema to deployment pipeline — we own the entire engineering stack.",
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    title: "Product Builders",
    description: "COM AI, Beacon, and RED CLI — we build our own products, not just client work.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Security-First",
    description: "Cybersecurity isn't an afterthought — it's engineered into every system we build.",
  },
];

export const AboutSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-inowix-bg border-t border-border/40 relative" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">About Inowix</p>
            <h2 className="section-title mb-6">
              A product engineering company
            </h2>
            <p className="lead mb-6">
              Inowix Technologies engineers production-grade software, AI systems, and cloud infrastructure for businesses that need technology they can run on.
            </p>
            <p className="text-muted-foreground mb-8">
              We take complex ideas from first architecture through design, engineering, deployment, and scale. Our team builds SaaS products, mobile applications, AI platforms, and security systems — including our own flagship products.
            </p>
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/about-us">
                About the company
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-xl border border-border/40 bg-inowix-surface/20 p-5 sm:p-6"
              >
                <div className="text-primary mb-3">{pillar.icon}</div>
                <h3 className="font-semibold mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
