import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border transition-opacity duration-700 z-[100]">
      <div className="max-w-container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
              Inowix
              <span className="text-muted-foreground text-base font-normal">.in</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a 
              href="/work" 
              className={`font-medium transition-colors duration-200 ${
                isActive('/work') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              Work
            </a>
            
            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`flex items-center gap-1 font-medium transition-colors duration-200 ${
                  isActive('/solutions') || activeDropdown === 'solutions' ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
                onClick={() => handleDropdownToggle('solutions')}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'solutions' ? 'rotate-180' : ''
                }`} />
              </button>
              
              <div className={`absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-xl shadow-xl transition-all duration-200 z-[100] ${
                activeDropdown === 'solutions' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <div className="p-3 bg-background rounded-xl">
                  <a 
                    href="/solutions/brand-strategy" 
                    className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-secondary hover:text-primary rounded-lg transition-all duration-200 group"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>Brand Solutions</span>
                  </a>
                  <a 
                    href="/solutions/technology-solutions" 
                    className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-secondary hover:text-primary rounded-lg transition-all duration-200 group"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>Tech Solutions</span>
                  </a>
                  <a 
                    href="/solutions/media-solutions" 
                    className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-secondary hover:text-primary rounded-lg transition-all duration-200 group"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>Media Solutions</span>
                  </a>
                  <a 
                    href="/solutions/research-data-and-analytics-solutions" 
                    className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-secondary hover:text-primary rounded-lg transition-all duration-200 group"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>Research Solutions</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* About Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`flex items-center gap-1 font-medium transition-colors duration-200 ${
                  isActive('/about') || activeDropdown === 'about' ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
                onClick={() => handleDropdownToggle('about')}
              >
                <span>About</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'about' ? 'rotate-180' : ''
                }`} />
              </button>
              
              <div className={`absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-xl shadow-xl transition-all duration-200 z-[100] ${
                activeDropdown === 'about' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <div className="p-3 bg-background rounded-xl">
                  <a 
                    href="/about-us" 
                    className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-secondary hover:text-primary rounded-lg transition-all duration-200 group"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>About Us</span>
                  </a>
                  <a 
                    href="/schbang-network" 
                    className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-secondary hover:text-primary rounded-lg transition-all duration-200 group"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>Inowix Network</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`flex items-center gap-1 font-medium transition-colors duration-200 ${
                  isActive('/resources') || isActive('/blogs') || activeDropdown === 'resources' ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
                onClick={() => handleDropdownToggle('resources')}
              >
                <span>Resources</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'resources' ? 'rotate-180' : ''
                }`} />
              </button>
              
              <div className={`absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-xl shadow-xl transition-all duration-200 z-[100] ${
                activeDropdown === 'resources' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <div className="p-3 bg-background rounded-xl">
                  <a 
                    href="/blogs" 
                    className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-secondary hover:text-primary rounded-lg transition-all duration-200 group"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>Blog</span>
                  </a>
                  <a 
                    href="/resources" 
                    className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-secondary hover:text-primary rounded-lg transition-all duration-200 group"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>Insights</span>
                  </a>
                </div>
              </div>
            </div>
            
            <a 
              href="/careers" 
              className={`font-medium transition-colors duration-200 ${
                isActive('/careers') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              Careers
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <Button asChild className="hidden sm:flex rounded-full px-6 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200">
              <a href="/contact-us">Contact Us →</a>
            </Button>
            
            <button
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors duration-200 rounded-lg hover:bg-secondary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-border bg-background">
            <div className="px-6 py-6 space-y-6">
              <a 
                href="/work" 
                className={`block py-3 font-medium transition-colors duration-200 ${
                  isActive('/work') ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Work
              </a>
              
              <div className="space-y-3">
                <div className={`font-medium transition-colors duration-200 ${
                  isActive('/solutions') ? 'text-primary' : 'text-foreground'
                }`}>
                  Solutions
                </div>
                <div className="pl-4 space-y-3 border-l-2 border-secondary">
                  <a 
                    href="/solutions/brand-strategy" 
                    className="block py-2 text-muted-foreground hover:text-primary transition-colors duration-200" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Brand Solutions
                  </a>
                  <a 
                    href="/solutions/technology-solutions" 
                    className="block py-2 text-muted-foreground hover:text-primary transition-colors duration-200" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Tech Solutions
                  </a>
                  <a 
                    href="/solutions/media-solutions" 
                    className="block py-2 text-muted-foreground hover:text-primary transition-colors duration-200" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Media Solutions
                  </a>
                  <a 
                    href="/solutions/research-data-and-analytics-solutions" 
                    className="block py-2 text-muted-foreground hover:text-primary transition-colors duration-200" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Research Solutions
                  </a>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className={`font-medium transition-colors duration-200 ${
                  isActive('/about') ? 'text-primary' : 'text-foreground'
                }`}>
                  About
                </div>
                <div className="pl-4 space-y-3 border-l-2 border-secondary">
                  <a 
                    href="/about-us" 
                    className="block py-2 text-muted-foreground hover:text-primary transition-colors duration-200" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About Us
                  </a>
                  <a 
                    href="/schbang-network" 
                    className="block py-2 text-muted-foreground hover:text-primary transition-colors duration-200" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Inowix Network
                  </a>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className={`font-medium transition-colors duration-200 ${
                  isActive('/resources') || isActive('/blogs') ? 'text-primary' : 'text-foreground'
                }`}>
                  Resources
                </div>
                <div className="pl-4 space-y-3 border-l-2 border-secondary">
                  <a 
                    href="/blogs" 
                    className="block py-2 text-muted-foreground hover:text-primary transition-colors duration-200" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Blog
                  </a>
                  <a 
                    href="/resources" 
                    className="block py-2 text-muted-foreground hover:text-primary transition-colors duration-200" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Insights
                  </a>
                </div>
              </div>
              
              <a 
                href="/careers" 
                className={`block py-3 font-medium transition-colors duration-200 ${
                  isActive('/careers') ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Careers
              </a>
              
              <Button asChild className="w-full rounded-full px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200">
                <a href="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>Contact Us →</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};