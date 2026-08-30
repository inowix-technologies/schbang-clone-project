import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

interface PageShellProps {
  children: React.ReactNode;
  className?: string;
  showGrid?: boolean;
}

export const PageShell = ({ children, className, showGrid = true }: PageShellProps) => (
  <div className={cn("min-h-screen bg-inowix-bg text-foreground", className)}>
    {showGrid && (
      <div className="fixed inset-0 pointer-events-none bg-grid-white/[0.02] bg-[length:48px_48px]" aria-hidden="true" />
    )}
    <Header />
    <div className="relative z-10">{children}</div>
    <Footer />
  </div>
);
