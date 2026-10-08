import { Quote } from "lucide-react";
import { CLIENT_QUOTE, PROOF_PROJECTS } from "@/lib/ai-automation/content";
import { isPlaceholder } from "@/lib/ai-automation/config";
import { ProjectShowcase } from "@/components/landing/ProjectShowcase";
import { CtaButton, LpContainer, SectionHeading } from "./LpPrimitives";
import { Reveal } from "./Reveal";

const showQuote = !isPlaceholder(CLIENT_QUOTE.quote);

export const ProofSection = () => (
  <section className="bg-lp-mist py-20 sm:py-24">
    <LpContainer>
      <Reveal>
        <SectionHeading
          eyebrow="Our work"
          title="AI and automation systems we've shipped"
          subtitle="Real products from our portfolio, running in production for our clients."
        />
      </Reveal>

      <div className="mt-12">
        <ProjectShowcase
          projects={PROOF_PROJECTS}
          theme="lp"
          wrap={(node, i) => (
            <Reveal delay={i * 90} className="h-full">
              {node}
            </Reveal>
          )}
        />
      </div>

      {showQuote && (
        <Reveal>
          <figure className="mx-auto mt-10 max-w-3xl rounded-2xl border border-lp-line bg-lp-white p-7 text-center shadow-[0_8px_30px_-16px_rgba(11,16,32,0.18)] sm:p-9">
            <Quote className="mx-auto h-7 w-7 text-lp-violet" aria-hidden />
            <blockquote className="mt-4 text-lg font-medium leading-relaxed text-lp-ink sm:text-xl">
              {CLIENT_QUOTE.quote}
            </blockquote>
            <figcaption className="mt-4 text-sm text-lp-muted">{CLIENT_QUOTE.attribution}</figcaption>
          </figure>
        </Reveal>
      )}

      <Reveal className="mt-12 flex justify-center">
        <CtaButton>Get Your Free Automation Plan</CtaButton>
      </Reveal>
    </LpContainer>
  </section>
);
