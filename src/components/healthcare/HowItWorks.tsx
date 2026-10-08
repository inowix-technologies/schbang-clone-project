import { HC_CONFIG } from "@/lib/healthcare/config";
import { Container, CtaButton, SectionHeading } from "./Primitives";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    title: "Discovery and workflow mapping",
    body: "We sit with your owners, admins and front desk to map every branch's workflow and priorities.",
  },
  {
    title: "Prototype",
    body: "Clickable screens of the admin dashboard and apps so your team can validate before we build.",
  },
  {
    title: "Build and integrate",
    body: "Agile sprints with regular demos, plus integrations with the systems you already rely on.",
  },
  {
    title: "Launch, training and support",
    body: "Branch-by-branch rollout, staff training and ongoing support after go-live.",
  },
];

export const HowItWorks = () => (
  <section className="bg-hc-white py-16 sm:py-24">
    <Container>
      <Reveal>
        <SectionHeading eyebrow="How it works" title="From first call to every branch live" center />
      </Reveal>

      <ol className="relative mt-12 grid gap-5 md:grid-cols-4 md:gap-4">
        <span aria-hidden="true" className="absolute left-[10%] right-[10%] top-6 hidden h-px bg-gradient-to-r from-hc-teal/0 via-hc-blue/40 to-hc-teal/0 md:block" />
        {STEPS.map((step, i) => (
          <Reveal as="li" key={step.title} delay={i * 90} className="relative">
            <div className="flex gap-4 md:flex-col md:items-center md:text-center">
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-hc-navy text-base font-bold text-hc-white ring-4 ring-hc-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[17px] font-bold leading-snug text-hc-ink md:mt-4">{step.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-hc-body">{step.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-12 flex flex-col items-center gap-5 text-center">
        <p className="text-lg font-semibold text-hc-ink">
          Most platforms go live in <span className="hc-gradient-text">{HC_CONFIG.goLiveWeeks} weeks</span>.
        </p>
        <CtaButton>Discuss Your Healthcare Platform</CtaButton>
      </Reveal>
    </Container>
  </section>
);
