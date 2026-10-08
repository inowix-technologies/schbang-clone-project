import { ArrowUpRight, CheckCircle2, Target } from "lucide-react";
import type { LandingProject } from "@/lib/landing-proof";
import { cn } from "@/lib/utils";
import { THEME_CLASSES, type LandingTheme } from "./theme";
import "./landing.css";

/** "AI CHATBOT" -> "AI Chatbot": short acronyms stay uppercase, other words become title case. */
const toTitle = (value: string) =>
  value
    .split(" ")
    .map((word) => (word.length <= 2 ? word : word.charAt(0) + word.slice(1).toLowerCase()))
    .join(" ");

const BrowserBar = ({ slug }: { slug: string }) => (
  <div className="flex items-center gap-1.5 border-b border-white/10 bg-slate-900 px-3 py-2">
    <span className="h-2 w-2 rounded-full bg-rose-400/80" />
    <span className="h-2 w-2 rounded-full bg-amber-300/80" />
    <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
    <span className="ml-2 truncate rounded-md bg-white/10 px-2 py-0.5 font-mono text-[10px] text-white/60">
      inowix.in/project/{slug}
    </span>
  </div>
);

/** Logo-only projects get a branded tile in their accent colour instead of an empty placeholder. */
const BrandTile = ({ project, large }: { project: LandingProject; large?: boolean }) => (
  <div
    className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-xl"
    style={{
      background: `radial-gradient(circle at 20% 15%, ${project.accent}55, transparent 55%), radial-gradient(circle at 85% 90%, ${project.accent}40, transparent 50%), linear-gradient(135deg, ${project.accent}14, ${project.accent}38)`,
    }}
  >
    <div
      aria-hidden
      className="absolute inset-0 opacity-40"
      style={{
        backgroundImage: `radial-gradient(${project.accent}66 1px, transparent 1px)`,
        backgroundSize: "18px 18px",
        maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
      }}
    />
    {project.logo ? (
      <div className="landing-float relative rounded-2xl bg-white p-4 shadow-[0_20px_40px_-18px_rgba(15,23,42,0.45)] ring-1 ring-black/5 sm:p-5">
        <img
          src={project.logo}
          alt={`${project.name} logo`}
          loading="lazy"
          decoding="async"
          className={cn("w-auto object-contain", large ? "h-16 max-w-[220px] sm:h-20" : "h-12 max-w-[170px] sm:h-14")}
        />
      </div>
    ) : (
      <span className="relative text-2xl font-extrabold text-slate-800">{project.name}</span>
    )}
    <div className="absolute inset-x-3 bottom-3 flex flex-wrap gap-1.5">
      {project.capabilities.slice(0, 3).map((cap) => (
        <span
          key={cap}
          className="rounded-full bg-white/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-700 backdrop-blur"
        >
          {cap}
        </span>
      ))}
    </div>
  </div>
);

const ShowcaseVisual = ({ project, large }: { project: LandingProject; large?: boolean }) => {
  if (!project.screenshot) return <BrandTile project={project} large={large} />;
  return (
    <div className={cn("relative", project.phoneShot && "pb-6 pr-6 sm:pb-8 sm:pr-8")}>
      <div className="overflow-hidden rounded-xl bg-slate-900 shadow-[0_24px_50px_-24px_rgba(15,23,42,0.6)] ring-1 ring-black/10">
        <BrowserBar slug={project.slug} />
        <img
          src={project.screenshot}
          alt={`${project.name} product screenshot`}
          width={1200}
          height={750}
          loading="lazy"
          decoding="async"
          className="aspect-[16/10] w-full object-cover"
        />
      </div>
      {project.phoneShot && (
        <div className="landing-float absolute bottom-0 right-0 w-[26%] min-w-[92px] overflow-hidden rounded-[1.4rem] border-[5px] border-slate-900 bg-slate-900 shadow-[0_24px_40px_-16px_rgba(15,23,42,0.6)]">
          <img
            src={project.phoneShot}
            alt={`${project.name} app screen`}
            width={473}
            height={1024}
            loading="lazy"
            decoding="async"
            className="block w-full rounded-[1rem]"
          />
        </div>
      )}
    </div>
  );
};

const CaseStudyLink = ({ project, theme }: { project: LandingProject; theme: LandingTheme }) => (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      "group/link inline-flex items-center gap-1.5 text-sm font-semibold transition-colors",
      THEME_CLASSES[theme].link,
    )}
  >
    View case study
    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" aria-hidden />
  </a>
);

const Tag = ({ project, theme }: { project: LandingProject; theme: LandingTheme }) => (
  <p className={cn("inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em]", THEME_CLASSES[theme].muted)}>
    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: project.accent }} />
    {project.tag}
  </p>
);

const Chips = ({ items, theme }: { items: string[]; theme: LandingTheme }) => (
  <ul className="flex flex-wrap gap-1.5">
    {items.map((item) => (
      <li key={item} className={cn("rounded-full px-2.5 py-1 text-xs font-medium", THEME_CLASSES[theme].chip)}>
        {item}
      </li>
    ))}
  </ul>
);

const FeaturedCard = ({ project, theme }: { project: LandingProject; theme: LandingTheme }) => {
  const t = THEME_CLASSES[theme];
  return (
    <article
      className={cn(
        "grid items-center gap-8 overflow-hidden rounded-3xl border p-5 sm:p-7 lg:grid-cols-[1.15fr_1fr] lg:gap-10 lg:p-9",
        t.border,
        t.surface,
        t.shadow,
      )}
    >
      <ShowcaseVisual project={project} large />
      <div>
        <Tag project={project} theme={theme} />
        <h3 className={cn("mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl", t.ink)}>{project.name}</h3>
        <dl className="mt-5 space-y-4 text-[15px] leading-relaxed">
          {project.problem && (
            <div className="flex gap-3">
              <Target className={cn("mt-0.5 h-5 w-5 shrink-0", t.muted)} aria-hidden />
              <div>
                <dt className={cn("text-xs font-semibold uppercase tracking-wider", t.muted)}>The challenge</dt>
                <dd className={cn("mt-0.5", t.body)}>{project.problem}</dd>
              </div>
            </div>
          )}
          <div className="flex gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: project.accent }} aria-hidden />
            <div>
              <dt className={cn("text-xs font-semibold uppercase tracking-wider", t.muted)}>What we built</dt>
              <dd className={cn("mt-0.5 font-medium", t.ink)}>{project.outcome}</dd>
            </div>
          </div>
        </dl>
        <div className="mt-6">
          <Chips items={project.capabilities.map(toTitle)} theme={theme} />
        </div>
        <p className={cn("mt-4 text-xs", t.muted)}>Built with {project.technologies.join(" · ")}</p>
        <div className="mt-6">
          <CaseStudyLink project={project} theme={theme} />
        </div>
      </div>
    </article>
  );
};

const CompactCard = ({ project, theme }: { project: LandingProject; theme: LandingTheme }) => {
  const t = THEME_CLASSES[theme];
  return (
    <article className={cn("flex h-full flex-col rounded-3xl border p-4 sm:p-5", t.border, t.surface, t.shadow)}>
      <ShowcaseVisual project={project} />
      <div className="flex flex-1 flex-col px-1 pt-5">
        <Tag project={project} theme={theme} />
        <h3 className={cn("mt-1.5 text-xl font-bold tracking-tight", t.ink)}>{project.name}</h3>
        <p className={cn("mt-2 text-[15px] leading-relaxed", t.body)}>{project.outcome}</p>
        <div className="mt-4">
          <Chips items={project.capabilities.slice(0, 3).map(toTitle)} theme={theme} />
        </div>
        <div className="mt-auto pt-5">
          <CaseStudyLink project={project} theme={theme} />
        </div>
      </div>
    </article>
  );
};

/** First project gets the large featured layout; the rest sit side by side underneath. */
export const ProjectShowcase = ({
  projects,
  theme,
  wrap = (node) => node,
}: {
  projects: readonly LandingProject[];
  theme: LandingTheme;
  /** Lets each page wrap cards in its own reveal animation. */
  wrap?: (node: JSX.Element, index: number) => JSX.Element;
}) => {
  const [featured, ...rest] = projects;
  if (!featured) return null;
  return (
    <div className="space-y-6">
      {wrap(<FeaturedCard project={featured} theme={theme} />, 0)}
      {rest.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((project, i) => (
            <div key={project.slug} className="h-full">
              {wrap(<CompactCard project={project} theme={theme} />, i + 1)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
