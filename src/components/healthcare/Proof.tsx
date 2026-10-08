import { Quote } from "lucide-react";
import { HC_CONFIG, showPlaceholder } from "@/lib/healthcare/config";
import { ProjectShowcase } from "@/components/landing/ProjectShowcase";
import { Container, CtaButton, SectionHeading } from "./Primitives";
import { Reveal } from "./Reveal";

export const Proof = () => {
  const { quote, attribution } = HC_CONFIG.clientQuote;
  const showQuote = showPlaceholder(quote);

  return (
    <section className="bg-hc-mist py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our work"
            title="Healthcare platforms we've built"
            intro="Real apps and platforms from our portfolio, built for patients, practitioners and care teams."
            center
          />
        </Reveal>

        <div className="mt-10 sm:mt-12">
          <ProjectShowcase
            projects={HC_CONFIG.proofProjects}
            theme="hc"
            wrap={(node, i) => (
              <Reveal delay={i * 90} className="h-full">
                {node}
              </Reveal>
            )}
          />
        </div>

        {showQuote && (
          <Reveal className="mt-8">
            <figure className="relative overflow-hidden rounded-2xl bg-hc-navy p-6 text-hc-white sm:p-8">
              <div aria-hidden="true" className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-hc-teal/25 blur-3xl" />
              <Quote className="relative h-7 w-7 text-hc-teal" />
              <blockquote className="relative mt-3 text-lg font-medium leading-relaxed sm:text-xl">{quote}</blockquote>
              <figcaption className="relative mt-4 text-sm text-hc-white/60">{attribution}</figcaption>
            </figure>
          </Reveal>
        )}

        <Reveal className="mt-10 flex justify-center sm:mt-12">
          <CtaButton>Discuss Your Healthcare Platform</CtaButton>
        </Reveal>
      </Container>
    </section>
  );
};
