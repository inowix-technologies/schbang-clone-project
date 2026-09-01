import { cn } from "@/lib/utils";
import type { InowixProject } from "@/data/inowix-content";

interface ProjectLogoBadgeProps {
  project: InowixProject;
  size?: "sm" | "md";
  className?: string;
}

export const ProjectLogoBadge = ({ project, size = "md", className }: ProjectLogoBadgeProps) => {
  if (!project.logo) return null;

  const dimension = size === "sm" ? "h-12 w-12" : "h-14 w-14";

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-sm border bg-inowix-bg/80 p-2",
        dimension,
        className
      )}
      style={{ borderColor: `${project.accent}35`, boxShadow: `0 0 20px ${project.glow}` }}
    >
      <img
        src={project.logo}
        alt={`${project.name} logo`}
        className="max-h-full max-w-full object-contain"
        loading="lazy"
      />
    </div>
  );
};
