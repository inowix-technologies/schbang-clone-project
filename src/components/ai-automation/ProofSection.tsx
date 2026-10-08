import type { ReactNode } from "react";
import { ArrowRight, Bot, Database, MessageCircle, Quote, Users } from "lucide-react";
import { CLIENT_QUOTE, PROOF_PROJECTS } from "@/lib/ai-automation/content";
import { cn } from "@/lib/utils";
import { CtaButton, LpContainer, SectionHeading } from "./LpPrimitives";
import { Reveal } from "./Reveal";

const BrowserFrame = ({ children }: { children: ReactNode }) => (
  <div className="flex aspect-[16/10] flex-col overflow-hidden rounded-xl border border-lp-line bg-lp-white">
    <div className="flex items-center gap-1.5 border-b border-lp-line bg-lp-mist px-3 py-2">
      <span className="h-2 w-2 rounded-full bg-slate-300" />
      <span className="h-2 w-2 rounded-full bg-slate-300" />
      <span className="h-2 w-2 rounded-full bg-slate-300" />
    </div>
    <div className="flex-1 p-3">{children}</div>
  </div>
);

const DashboardMock = () => (
  <BrowserFrame>
    <div className="grid h-full grid-rows-[auto_1fr] gap-2">
      <div className="grid grid-cols-3 gap-2">
        {["New", "Qualified", "Booked"].map((label) => (
          <div key={label} className="rounded-lg bg-lp-mist p-2">
            <p className="text-[9px] font-medium text-lp-muted">{label}</p>
            <div className="mt-1 h-2 w-8 rounded bg-slate-300" />
          </div>
        ))}
      </div>
      <div className="flex items-end gap-1.5 rounded-lg bg-lp-mist p-2">
        {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
          <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-lp-blue to-lp-violet opacity-80" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  </BrowserFrame>
);

const WorkflowMock = () => {
  const nodes = [
    { icon: MessageCircle, label: "WhatsApp" },
    { icon: Bot, label: "AI agent" },
    { icon: Database, label: "CRM" },
    { icon: Users, label: "Sales" },
  ];
  return (
    <BrowserFrame>
      <div className="flex h-full items-center justify-between gap-1">
        {nodes.map((node, i) => (
          <div key={node.label} className="flex items-center gap-1">
            <div className="flex flex-col items-center gap-1">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-lp-blue to-lp-violet text-lp-white">
                <node.icon className="h-4 w-4" aria-hidden />
              </div>
              <span className="text-[9px] font-medium text-lp-muted">{node.label}</span>
            </div>
            {i < nodes.length - 1 && <ArrowRight className="mb-4 h-3 w-3 text-slate-400" aria-hidden />}
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
};

const ChatMock = () => (
  <BrowserFrame>
    <div className="flex h-full flex-col justify-end gap-1.5">
      {[
        ["self-start bg-lp-mist", "w-3/5"],
        ["self-end bg-lp-blue/15", "w-2/5"],
        ["self-start bg-lp-mist", "w-4/5"],
        ["self-end bg-lp-blue/15", "w-1/2"],
      ].map(([pos, width], i) => (
        <div key={i} className={cn("h-4 rounded-lg", pos, width)} />
      ))}
    </div>
  </BrowserFrame>
);

const MOCKS = [ChatMock, DashboardMock, WorkflowMock];

export const ProofSection = () => (
  <section className="bg-lp-mist py-20 sm:py-24">
    <LpContainer>
      <Reveal>
        <SectionHeading eyebrow="Proof" title="Real systems we've built" />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {PROOF_PROJECTS.map((project, i) => {
          const Mock = MOCKS[i % MOCKS.length];
          return (
            <Reveal key={i} delay={i * 90}>
              <article className="flex h-full flex-col rounded-2xl border border-lp-line bg-lp-white p-4 shadow-[0_8px_30px_-16px_rgba(11,16,32,0.18)]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    width={1200}
                    height={750}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[16/10] w-full rounded-xl border border-lp-line object-cover"
                  />
                ) : (
                  <Mock />
                )}
                <div className="flex flex-1 flex-col px-1 pb-1 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-lp-blue">{project.tag}</p>
                  <h3 className="mt-1.5 text-lg font-bold text-lp-ink">{project.name}</h3>
                  <dl className="mt-4 space-y-3 text-[15px]">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-lp-muted">Problem</dt>
                      <dd className="mt-0.5 text-lp-body">{project.problem}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-lp-muted">Outcome</dt>
                      <dd className="mt-0.5 font-medium text-lp-ink">{project.result}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal>
        <figure className="mx-auto mt-10 max-w-3xl rounded-2xl border border-lp-line bg-lp-white p-7 text-center shadow-[0_8px_30px_-16px_rgba(11,16,32,0.18)] sm:p-9">
          <Quote className="mx-auto h-7 w-7 text-lp-violet" aria-hidden />
          <blockquote className="mt-4 text-lg font-medium leading-relaxed text-lp-ink sm:text-xl">
            {CLIENT_QUOTE.quote}
          </blockquote>
          <figcaption className="mt-4 text-sm text-lp-muted">{CLIENT_QUOTE.attribution}</figcaption>
        </figure>
      </Reveal>

      <Reveal className="mt-12 flex justify-center">
        <CtaButton>Get Your Free Automation Plan</CtaButton>
      </Reveal>
    </LpContainer>
  </section>
);
