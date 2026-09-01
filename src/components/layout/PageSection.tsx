import { SECTION_CONTAINER, SECTION_PY, SECTION_BORDER } from "@/lib/section-layout";
import { cn } from "@/lib/utils";

interface PageSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  border?: boolean;
}

export const PageSection = ({ children, className, id, border = true }: PageSectionProps) => (
  <section
    id={id}
    className={cn(SECTION_CONTAINER, SECTION_PY, border && SECTION_BORDER, className)}
  >
    {children}
  </section>
);
