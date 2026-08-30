import { cn } from "@/lib/utils";
import type { InowixProject } from "@/data/inowix-content";

interface ProjectVisualProps {
  project: InowixProject;
  variant?: "strip" | "case-study";
  className?: string;
}

export const ProjectVisual = ({ project, variant = "case-study", className }: ProjectVisualProps) => {
  const showScreenshot = variant === "case-study" && project.hasAppScreenshot && project.image;
  const logoSrc = project.logo;
  const src = showScreenshot ? project.image : logoSrc || project.image;

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

  const isLogoDisplay = !showScreenshot;

  return (
    <div
      className={cn(
        "flex items-center justify-center overflow-hidden w-full h-full",
        isLogoDisplay ? "bg-white" : "bg-inowix-elevated",
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
