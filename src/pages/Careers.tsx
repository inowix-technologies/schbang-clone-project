import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock, Code2, Brain, Shield, Cloud } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { PageSection } from "@/components/layout/PageSection";
import { EditorialCTA } from "@/components/layout/EditorialCTA";
import { ContactOfficesCompact } from "@/components/contact/ContactOfficesCompact";
import { FOUNDERS_AND_LEADERS } from "@/data/team";
import { Button } from "@/components/ui/button";

const openings = [
  {
    title: "Full-Stack Engineer",
    department: "Engineering",
    location: "Bangalore · Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "Build production SaaS, mobile backends, and client platforms — React, Node.js, PostgreSQL, cloud deployment.",
    icon: Code2,
    accent: "#00FF88",
  },
  {
    title: "AI / ML Engineer",
    department: "Inowix Labs",
    location: "Delhi · Hybrid",
    type: "Full-time",
    experience: "2+ years",
    description: "Ship AI-native features for COM AI, Beacon, and client systems — LLM integration, RAG pipelines, production inference.",
    icon: Brain,
    accent: "#00D4FF",
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Chandigarh · Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "Own CI/CD, cloud infrastructure, and observability across client platforms and Inowix Labs products.",
    icon: Cloud,
    accent: "#38BDF8",
  },
  {
    title: "Security Engineer",
    department: "Cybersecurity",
    location: "Bangalore · Hybrid",
    type: "Full-time",
    experience: "3+ years",
    description: "Engineer security into every layer — penetration testing, compliance, threat modeling, and hardening production systems.",
    icon: Shield,
    accent: "#F472B6",
  },
];

const benefits = [
  { title: "Engineering-First", description: "Ship real systems — not slide decks or campaign decks." },
  { title: "Labs Exposure", description: "Work on proprietary products alongside client engineering." },
  { title: "Remote & Hybrid", description: "Three engineering hubs — BL, DL, CH — with flexible work." },
  { title: "Learning Budget", description: "Tools, courses, and conferences to stay at the edge." },
];

const founder = FOUNDERS_AND_LEADERS[0];

const Careers = () => {
  return (
    <PageShell>
      <PageHero
        label="Careers"
        title={
          <>
            <span className="block">Engineer systems</span>
            <span className="block text-primary">that ship to production.</span>
          </>
        }
        subtitle="Join a product engineering team building platforms for healthcare, logistics, AI, and enterprise — plus Inowix Labs products."
      />

      <PageSection>
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Why we build</p>
            <blockquote className="text-xl sm:text-2xl font-medium leading-relaxed mb-6">
              "We started Inowix to engineer what didn't exist yet — production systems, not agency deliverables.
              If you want to architect, build, and ship, you'll fit here."
            </blockquote>
            <div className="flex items-center gap-4">
              <img
                src={founder.photo}
                alt={founder.name}
                className="w-12 h-12 rounded-sm object-cover border"
                style={{ borderColor: `${founder.accent}40` }}
              />
              <div>
                <p className="font-semibold">{founder.name}</p>
                <p className="text-sm text-muted-foreground">{founder.title}</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-5 border border-border/40 rounded-sm bg-inowix-surface/20"
              >
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection id="openings">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Open roles</p>
        <h2 className="section-title mb-10">Current openings</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {openings.map((opening) => (
            <div
              key={opening.title}
              className="group p-6 border border-border/40 rounded-sm bg-inowix-bg/50 hover:bg-inowix-surface/30 transition-colors"
              style={{ borderLeftColor: `${opening.accent}40`, borderLeftWidth: 3 }}
            >
              <div className="flex items-start justify-between mb-4">
                <opening.icon className="w-5 h-5" style={{ color: opening.accent }} />
                <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                  {opening.department}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{opening.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{opening.description}</p>
              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {opening.location}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {opening.type}
                </span>
                <span>{opening.experience}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-muted-foreground mb-4">Don't see your role? We're always looking for strong engineers.</p>
          <Button asChild className="rounded-sm">
            <Link to="/contact-us">
              Send your portfolio <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </PageSection>

      <PageSection>
        <ContactOfficesCompact />
      </PageSection>

      <EditorialCTA />
    </PageShell>
  );
};

export default Careers;
