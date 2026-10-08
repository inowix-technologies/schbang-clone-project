export type LandingTheme = "lp" | "hc";

/** Full class strings per landing page palette, so Tailwind can see every class at build time. */
export const THEME_CLASSES = {
  lp: {
    eyebrow: "text-lp-blue",
    ink: "text-lp-ink",
    body: "text-lp-body",
    muted: "text-lp-muted",
    border: "border-lp-line",
    ring: "ring-lp-line",
    surface: "bg-lp-white",
    mist: "bg-lp-mist",
    link: "text-lp-blue hover:text-lp-violet",
    chip: "bg-lp-mist text-lp-body ring-1 ring-lp-line",
    darkBg: "bg-lp-navy",
    gradientText: "bg-gradient-to-r from-[#8EA2FF] via-[#6F8BFF] to-[#B79CFF] bg-clip-text text-transparent",
    glowA: "rgba(59,91,255,0.35)",
    glowB: "rgba(124,58,237,0.32)",
    shadow: "shadow-[0_18px_50px_-28px_rgba(11,16,32,0.35)]",
  },
  hc: {
    eyebrow: "text-hc-blue",
    ink: "text-hc-ink",
    body: "text-hc-body",
    muted: "text-hc-muted",
    border: "border-hc-line",
    ring: "ring-hc-line",
    surface: "bg-hc-white",
    mist: "bg-hc-mist",
    link: "text-hc-blue hover:text-hc-teal",
    chip: "bg-hc-mist text-hc-body ring-1 ring-hc-line",
    darkBg: "bg-hc-navy",
    gradientText: "hc-gradient-text",
    glowA: "rgba(20,184,166,0.32)",
    glowB: "rgba(59,91,255,0.32)",
    shadow: "shadow-[0_18px_50px_-28px_rgba(11,21,48,0.4)]",
  },
} as const;
