import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { ContactOfficesCompact } from "@/components/contact/ContactOfficesCompact";
import { ContactForm } from "@/components/ContactForm";
import { TeamPresenceStrip } from "@/components/team/TeamPresenceStrip";

const Contact = () => {
  return (
    <PageShell>
      <PageHero
        label="Contact"
        title={
          <>
            <span className="block">Let&apos;s engineer</span>
            <span className="block text-primary">your next system.</span>
          </>
        }
        subtitle="Tell us what you're building. We respond within 24 hours — directly from our engineering leadership."
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 pb-16 sm:pb-20 border-t border-border/40">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 pt-12">
          <div className="space-y-8 order-2 lg:order-1">
            <TeamPresenceStrip />
            <ContactForm />
          </div>
          <div className="order-1 lg:order-2">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">Our offices</p>
            <ContactOfficesCompact />
          </div>
        </div>
      </div>
    </PageShell>
  );
};

export default Contact;
