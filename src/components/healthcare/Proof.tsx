import { ImageIcon, Quote } from "lucide-react";
import { HC_CONFIG, isPlaceholder, showPlaceholder, type ProofProject } from "@/lib/healthcare/config";
import { Container, SectionHeading } from "./Primitives";
import { Reveal } from "./Reveal";

const isProjectVisible = (p: ProofProject) => showPlaceholder(p.name) && showPlaceholder(p.result);

const Screenshot = ({ project }: { project: ProofProject }) =>
  isPlaceholder(project.screenshot) ? (
    <div className="flex aspect-[16/10] items-center justify-center rounded-xl border border-dashed border-hc-line bg-gradient-to-br from-hc-mist to-hc-sky">
      <span className="inline-flex items-center gap-2 text-xs font-semibold text-hc-muted">
        <ImageIcon className="h-4 w-4" /> {project.screenshot}
      </span>
    </div>
  ) : (
    <img
      src={project.screenshot}
      alt={`${project.name} product screenshot`}
      width={640}
      height={400}
      loading="lazy"
      decoding="async"
      className="aspect-[16/10] w-full rounded-xl object-cover ring-1 ring-hc-line"
    />
  );

export const Proof = () => {
  const projects = HC_CONFIG.proofProjects.filter(isProjectVisible);
  const { quote, attribution } = HC_CONFIG.clientQuote;
  const showQuote = showPlaceholder(quote);

  if (projects.length === 0 && !showQuote) return null;

  return (
    <section className="bg-hc-mist py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Proof" title="Platforms we've built" />
        </Reveal>

        {projects.length > 0 && (
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {projects.map((project, i) => (
              <Reveal key={i} delay={i * 90}>
                <article className="flex h-full flex-col rounded-2xl bg-hc-white p-4 ring-1 ring-hc-line shadow-[0_14px_36px_-24px_rgba(11,21,48,0.35)]">
                  <Screenshot project={project} />
                  <h3 className="mt-4 text-lg font-bold text-hc-ink">{project.name}</h3>
                  <p className="mt-1 text-sm text-hc-body">{project.whatItDoes}</p>
                  <dl className="mt-4 space-y-3 border-t border-hc-line pt-4 text-sm">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-hc-muted">Problem</dt>
                      <dd className="mt-0.5 text-hc-body">{project.problem}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-hc-muted">Outcome</dt>
                      <dd className="mt-0.5 font-semibold text-hc-ink">{project.result}</dd>
                    </div>
                  </dl>
                </article>
              </Reveal>
            ))}
          </div>
        )}

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
      </Container>
    </section>
  );
};
