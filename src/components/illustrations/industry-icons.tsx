import { cn } from "@/lib/utils";

export const IndustryIcon = ({ slug, className, accent }: { slug: string; className?: string; accent: string }) => {
  const props = { className: cn("w-8 h-8", className), fill: "none", stroke: accent, strokeWidth: 1.2, "aria-hidden": true as const };

  switch (slug) {
    case "logistics":
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <rect x="2" y="8" width="14" height="8" rx="1" />
          <path d="M16 10h4l2 4v2h-6V10z" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="18" cy="18" r="2" />
        </svg>
      );
    case "healthcare":
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="M12 4v16M4 12h16" strokeLinecap="round" />
          <rect x="3" y="3" width="18" height="18" rx="2" opacity="0.3" />
        </svg>
      );
    case "fintech":
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="M4 18 L8 10 L12 14 L16 6 L20 12" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "ecommerce":
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <circle cx="9" cy="20" r="1.5" fill={accent} />
          <circle cx="17" cy="20" r="1.5" fill={accent} />
          <path d="M2 4h2l2.5 12h11l2-8H6" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M8 12h8M12 8v8" opacity="0.5" />
        </svg>
      );
  }
};
