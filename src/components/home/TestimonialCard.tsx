import type { InowixTestimonial } from "@/data/inowix-content";
import { INOWIX_PRODUCTS, INOWIX_PROJECTS } from "@/data/inowix-content";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  testimonial: InowixTestimonial;
  className?: string;
}

const resolveAccent = (testimonial: InowixTestimonial) => {
  if (testimonial.accent) return testimonial.accent;
  if (testimonial.projectSlug) return INOWIX_PROJECTS[testimonial.projectSlug].accent;
  if (testimonial.productSlug) return INOWIX_PRODUCTS[testimonial.productSlug].accent;
  return "#00D4FF";
};

const resolveLogo = (testimonial: InowixTestimonial) => {
  if (testimonial.projectSlug) {
    const project = INOWIX_PROJECTS[testimonial.projectSlug];
    return project.logo || project.image;
  }
  if (testimonial.productSlug) return INOWIX_PRODUCTS[testimonial.productSlug].screenshot;
  return undefined;
};

export const TestimonialCard = ({ testimonial, className }: TestimonialCardProps) => {
  const accent = resolveAccent(testimonial);
  const logo = resolveLogo(testimonial);

  return (
    <article
      className={cn(
        "relative flex w-[min(340px,88vw)] sm:w-[min(380px,85vw)] shrink-0 flex-col rounded-sm border border-border/40 bg-inowix-bg/80 p-5 sm:p-6 md:p-7 backdrop-blur-sm",
        className
      )}
      style={{ borderLeftColor: accent, borderLeftWidth: 3, boxShadow: `0 0 40px ${accent}12` }}
    >
      {testimonial.outcome && (
        <p
          className="font-mono text-[9px] uppercase tracking-[0.2em] mb-4 w-fit px-2 py-1 rounded-sm border"
          style={{ borderColor: `${accent}35`, color: accent }}
        >
          {testimonial.outcome}
        </p>
      )}

      <span className="text-4xl leading-none text-muted-foreground/20 font-serif mb-2 select-none" aria-hidden>
        "
      </span>
      <p className="text-sm sm:text-[15px] leading-relaxed text-foreground/90 flex-1">{testimonial.quote}</p>

      <div className="mt-6 pt-5 border-t border-border/30 flex items-center gap-3">
        {logo ? (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-border/30 bg-inowix-surface/50 p-1.5">
            <img
              src={logo}
              alt={testimonial.company}
              className="max-h-full max-w-full object-contain"
              loading="lazy"
            />
          </div>
        ) : (
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-border/30 font-mono text-[10px] font-bold"
            style={{ color: accent, borderColor: `${accent}35` }}
          >
            {testimonial.company.slice(0, 2).toUpperCase()}
          </div>
        )}
        <div className="min-w-0">
          <p className="text-sm font-medium truncate">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground truncate">
            {testimonial.title} · {testimonial.company}
          </p>
        </div>
      </div>
    </article>
  );
};
