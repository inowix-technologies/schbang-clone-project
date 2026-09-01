import { cn } from "@/lib/utils";
import type { InowixProject } from "@/data/inowix-content";
import { isGenericPlaceholderImage } from "./project-visual-utils";

interface ProjectVisualProps {
  project: InowixProject;
  variant?: "strip" | "case-study";
  className?: string;
}

export const ProjectVisual = ({ project, variant = "case-study", className }: ProjectVisualProps) => {
  const hasRealScreenshot =
    variant === "case-study" &&
    project.hasAppScreenshot &&
    Boolean(project.image) &&
    !isGenericPlaceholderImage(project.image);

  const logoSrc = project.logo;
  const fallbackImage =
    project.image && !isGenericPlaceholderImage(project.image) ? project.image : undefined;
  const src = hasRealScreenshot ? project.image : logoSrc || fallbackImage;

  if (!src) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-inowix-surface/50 border border-border/40",
          variant === "strip" ? "w-full h-full" : "w-full h-full min-h-[240px]",
          className
        )}
      >
        <span className="font-bold text-xl sm:text-2xl text-muted-foreground/60 tracking-tight text-center px-4">
          {project.name}
        </span>
      </div>
    );
  }

  const isLogoDisplay = !hasRealScreenshot;

  return (
    <div
      className={cn(
        "flex items-center justify-center overflow-hidden w-full h-full",
        isLogoDisplay ? "bg-inowix-bg" : "bg-inowix-elevated",
        className
      )}
    >
      <img
        src={src}
        alt={`${project.name}${isLogoDisplay ? " logo" : ""}`}
        className={cn(
          isLogoDisplay
            ? "max-w-[80%] max-h-[80%] object-contain"
            : "w-full h-full object-cover object-center"
        )}
        loading="lazy"
      />
    </div>
  );
};
