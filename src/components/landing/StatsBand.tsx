import { LANDING_STATS } from "@/lib/landing-proof";
import { cn } from "@/lib/utils";
import { THEME_CLASSES, type LandingTheme } from "./theme";

export const StatsBand = ({ theme, title }: { theme: LandingTheme; title: string }) => {
  const t = THEME_CLASSES[theme];
  return (
    <section className={cn("relative overflow-hidden py-14 sm:py-16", t.darkBg)}>
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-24 -top-32 h-[380px] w-[380px] rounded-full"
          style={{ background: `radial-gradient(circle, ${t.glowA} 0%, transparent 65%)` }}
        />
        <div
          className="absolute -bottom-40 right-0 h-[420px] w-[420px] rounded-full"
          style={{ background: `radial-gradient(circle, ${t.glowB} 0%, transparent 65%)` }}
        />
      </div>
      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-white/70 sm:text-base">{title}</p>
        <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
          {LANDING_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span
                  className={cn(
                    "flex min-h-12 items-center justify-center font-extrabold leading-none tracking-tight sm:min-h-[3.75rem]",
                    stat.value.length > 6 ? "text-xl sm:text-2xl lg:text-[28px]" : "text-4xl sm:text-5xl lg:text-6xl",
                    t.gradientText,
                  )}
                >
                  {stat.value}
                </span>
                <span className="mt-2 block text-sm text-white/65">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
