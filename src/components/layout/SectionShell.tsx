import { cn } from "@/lib/utils";
import { SECTION_BORDER, SECTION_CONTAINER, SECTION_PY } from "@/lib/section-layout";

interface SectionShellProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  padding?: "default" | "compact" | "none";
  border?: boolean;
  "aria-label"?: string;
}

export const SectionShell = ({
  children,
  id,
  className,
  containerClassName,
  padding = "default",
  border = true,
  "aria-label": ariaLabel,
}: SectionShellProps) => (
  <section
    id={id}
    aria-label={ariaLabel}
    className={cn("relative overflow-hidden", border && SECTION_BORDER, className)}
  >
    <div
      className={cn(
        SECTION_CONTAINER,
        padding === "default" && SECTION_PY,
        padding === "compact" && "py-12 sm:py-16 lg:py-20",
        containerClassName
      )}
    >
      {children}
    </div>
  </section>
);
