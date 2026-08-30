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
    className={cn(
      "max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20",
      border && "border-t border-border/40",
      className
    )}
  >
    {children}
  </section>
);
