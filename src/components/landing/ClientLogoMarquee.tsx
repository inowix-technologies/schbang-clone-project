import type { ClientLogo } from "@/lib/landing-proof";
import { cn } from "@/lib/utils";
import { THEME_CLASSES, type LandingTheme } from "./theme";
import "./landing.css";

export const ClientLogoMarquee = ({
  logos,
  theme,
  label,
}: {
  logos: ClientLogo[];
  theme: LandingTheme;
  label: string;
}) => {
  const t = THEME_CLASSES[theme];
  if (logos.length === 0) return null;
  return (
    <section aria-label={label} className={cn("border-b py-8 sm:py-10", t.border, t.surface)}>
      <p className={cn("px-5 text-center text-xs font-semibold uppercase tracking-[0.18em]", t.muted)}>{label}</p>
      <div className="landing-marquee relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <ul className="landing-marquee-track flex w-max gap-4" style={{ ["--marquee-duration" as string]: `${logos.length * 3.5}s` }}>
          {[...logos, ...logos].map((logo, i) => (
            <li
              key={`${logo.name}-${i}`}
              aria-hidden={i >= logos.length || undefined}
              className={cn(
                "flex h-16 w-36 shrink-0 items-center justify-center rounded-2xl bg-white px-4 ring-1 sm:h-[72px] sm:w-40",
                t.ring,
              )}
            >
              <img
                src={logo.image}
                alt={i < logos.length ? logo.name : ""}
                decoding="async"
                className="max-h-9 w-auto max-w-full object-contain opacity-90 transition-opacity duration-300 hover:opacity-100 sm:max-h-10"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
