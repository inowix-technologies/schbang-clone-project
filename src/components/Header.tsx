import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-foreground">
              Schbang
              <span className="text-muted-foreground text-base font-normal">.Production</span>
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#work" className="text-foreground hover:text-muted-foreground transition-colors">
              Work
            </a>
            <div className="flex items-center gap-1 text-foreground hover:text-muted-foreground transition-colors cursor-pointer">
              <span>Solutions</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-1 text-foreground hover:text-muted-foreground transition-colors cursor-pointer">
              <span>About</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-1 text-foreground hover:text-muted-foreground transition-colors cursor-pointer">
              <span>Resources</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <a href="#careers" className="text-foreground hover:text-muted-foreground transition-colors">
              Careers
            </a>
          </nav>

          {/* Contact Button */}
          <Button className="rounded-full px-6 py-2 bg-primary text-primary-foreground hover:bg-primary/90">
            Contact Us →
          </Button>
        </div>
      </div>
    </header>
  );
};