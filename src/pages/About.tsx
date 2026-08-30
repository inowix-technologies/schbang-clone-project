import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { PageSection } from "@/components/layout/PageSection";
import { EditorialCTA } from "@/components/layout/EditorialCTA";
import { LeadershipGrid } from "@/components/team/LeadershipGrid";
import { COMPANY_MILESTONES, ENGINEERING_VALUES } from "@/data/team";
import { motion, useReducedMotion } from "framer-motion";

const About = () => {
  const reduced = useReducedMotion();

  return (
    <PageShell>
      <PageHero
        label="About Inowix"
        title={
          <>
            <span className="block">Five years building</span>
            <span className="block text-primary">what didn&apos;t exist yet.</span>
          </>
        }
        subtitle="Inowix Technologies engineers production-grade software, AI systems, and cloud infrastructure — including our own flagship products COM AI, Beacon, and RED CLI."
      />

      <PageSection>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-inowix-com-ai mb-8">Leadership</p>
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 max-w-xl">The people behind Inowix</h2>
        <LeadershipGrid />
      </PageSection>

      <PageSection>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">Timeline</p>
        <h2 className="text-2xl sm:text-3xl font-bold mb-12">Five years of engineering</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_MILESTONES.map((m, i) => (
            <motion.div
              key={m.year}
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="border border-border/40 rounded-sm p-6 bg-inowix-surface/20"
            >
              <p className="font-mono text-2xl font-bold text-primary mb-2">{m.year}</p>
              <p className="font-semibold mb-2">{m.label}</p>
              <p className="text-sm text-muted-foreground">{m.detail}</p>
            </motion.div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">Values</p>
        <h2 className="text-2xl sm:text-3xl font-bold mb-12">How we engineer</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {ENGINEERING_VALUES.map((v) => (
            <div key={v.title} className="border border-border/40 rounded-sm p-6 sm:p-8 bg-inowix-surface/10">
              <h3 className="font-semibold text-lg mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm">{v.description}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection border={false}>
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Offices</p>
        <div className="flex flex-wrap gap-6 font-mono text-sm">
          <span>BL · Bangalore</span>
          <span>DL · Delhi</span>
          <span>CH · Chandigarh</span>
        </div>
      </PageSection>

      <EditorialCTA />
    </PageShell>
  );
};

export default About;
