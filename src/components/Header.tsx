import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

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
            <a 
              href="/work" 
              className={`transition-colors ${
                isActive('/work') ? 'text-primary' : 'text-foreground hover:text-muted-foreground'
              }`}
            >
              Work
            </a>
            <div className="relative group">
              <button className={`flex items-center gap-1 transition-colors ${
                isActive('/solutions') ? 'text-primary' : 'text-foreground hover:text-muted-foreground'
              }`}>
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  <a href="/solutions/brand-strategy" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-md">Brand Solutions</a>
                  <a href="/solutions/technology-solutions" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-md">Tech Solutions</a>
                  <a href="/solutions/media-solutions" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-md">Media Solutions</a>
                  <a href="/solutions/research-data-and-analytics-solutions" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-md">Research Solutions</a>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className={`flex items-center gap-1 transition-colors ${
                isActive('/about') ? 'text-primary' : 'text-foreground hover:text-muted-foreground'
              }`}>
                <span>About</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  <a href="/about-us" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-md">About Us</a>
                  <a href="/schbang-network" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-md">Schbang Network</a>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className={`flex items-center gap-1 transition-colors ${
                isActive('/resources') || isActive('/blogs') ? 'text-primary' : 'text-foreground hover:text-muted-foreground'
              }`}>
                <span>Resources</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  <a href="/blogs" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-md">Blog</a>
                  <a href="/resources" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-md">Insights</a>
                </div>
              </div>
            </div>
            <a 
              href="/careers" 
              className={`transition-colors ${
                isActive('/careers') ? 'text-primary' : 'text-foreground hover:text-muted-foreground'
              }`}
            >
              Careers
            </a>
          </nav>

          {/* Contact Button */}
          <Button asChild className="rounded-full px-6 py-2 bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="/contact-us">Contact Us →</a>
          </Button>
        </div>
      </div>
    </header>
  );
};