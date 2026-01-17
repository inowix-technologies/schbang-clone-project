import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, Shield, X } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import logo from "../assets/logoinowix.png";
import { useAuth } from "@/hooks/useAuth";

export const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isAdmin } = useAuth();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out",
      isScrolled ? "pt-4 px-4" : "pt-0 px-0"
    )}>
      <motion.div
        layout
        className={cn(
          "mx-auto transition-all duration-500 ease-in-out",
          isScrolled
            ? "max-w-6xl rounded-full border border-[#374151] bg-[#111827]/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] px-4 sm:px-6"
            : "max-w-full bg-[#0F172A] border-b border-[#374151]/50 px-4 sm:px-6 md:px-8"
        )}
      >
        <div className={cn(
          "flex items-center justify-between transition-all duration-500",
          isScrolled ? "h-12 sm:h-14" : "h-16 sm:h-20"
        )}>
          {/* Logo */}
          <Link to="/" className="flex items-center group shrink-0">
            <div className="relative flex items-center">
              <img
                className={cn(
                  "transition-all duration-500 object-contain",
                  isScrolled ? "w-20 sm:w-24" : "w-32 sm:w-36 md:w-40"
                )}
                src={logo}
                alt="Inowix Logo"
              />
              <span className={cn(
                "text-primary font-medium transition-all duration-500",
                isScrolled ? "text-xs sm:text-sm -ml-1.5 sm:-ml-2" : "text-base sm:text-lg md:text-xl -ml-2 sm:-ml-3"
              )}>.in</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavLink to="/work" active={isActive('/work')}>Work</NavLink>

            <NavDropdown
              label="Solutions"
              isOpen={activeDropdown === 'solutions'}
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
              active={isActive('/solutions')}
            >
              <div className="p-2 w-64">
                <DropdownItem to="/solutions/brand-strategy">Brand Solutions</DropdownItem>
                <DropdownItem to="/solutions/technology-solutions">Tech Solutions</DropdownItem>
                <DropdownItem to="/solutions/media-solutions">Media Solutions</DropdownItem>
                <DropdownItem to="/solutions/research-data-and-analytics-solutions">Research Solutions</DropdownItem>
              </div>
            </NavDropdown>

            <NavDropdown
              label="About"
              isOpen={activeDropdown === 'about'}
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
              active={isActive('/about')}
            >
              <div className="p-2 w-56">
                <DropdownItem to="/about-us">About Us</DropdownItem>
                <DropdownItem to="/about-us">Inowix Network</DropdownItem>
              </div>
            </NavDropdown>

            <NavDropdown
              label="Resources"
              isOpen={activeDropdown === 'resources'}
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
              active={isActive('/resources') || isActive('/blogs')}
            >
              <div className="p-2 w-48">
                <DropdownItem to="/blogs">Blog</DropdownItem>
                <DropdownItem to="/resources">Insights</DropdownItem>
              </div>
            </NavDropdown>

            <NavLink to="/careers" active={isActive('/careers')}>Careers</NavLink>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {user && isAdmin && (
              <Button asChild variant="ghost" size="sm" className="hidden xl:flex rounded-full text-primary hover:bg-primary/10">
                <Link to="/admin">
                  <Shield className="w-4 h-4 mr-2" />
                  Admin
                </Link>
              </Button>
            )}
            <Button asChild size="sm" className={cn(
              "hidden sm:flex rounded-full transition-all duration-500 font-semibold text-xs sm:text-sm",
              isScrolled ? "h-8 sm:h-9 px-4 sm:px-5 bg-primary hover:bg-primary/90" : "h-10 sm:h-11 px-5 sm:px-6 md:px-7 bg-primary hover:bg-primary/90"
            )}>
              <Link to="/contact-us">Contact Us</Link>
            </Button>

            <button
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors duration-200 rounded-full hover:bg-secondary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="lg:hidden fixed top-[88px] sm:top-[96px] md:top-[100px] left-0 right-0 p-3 sm:p-4 z-[110] max-h-[calc(100vh-88px)] sm:max-h-[calc(100vh-96px)] md:max-h-[calc(100vh-100px)] overflow-y-auto"
          >
            <div className="bg-background/95 backdrop-blur-2xl border border-border/50 rounded-2xl sm:rounded-[2rem] p-5 sm:p-6 md:p-8 shadow-2xl space-y-5 sm:space-y-6 md:space-y-8">
              {/* Mobile Links */}
              <MobileNavLink to="/work" onClick={() => setIsMobileMenuOpen(false)}>Work</MobileNavLink>

              <MobileSection title="Solutions">
                <MobileSubLink to="/solutions/brand-strategy" onClick={() => setIsMobileMenuOpen(false)}>Brand Solutions</MobileSubLink>
                <MobileSubLink to="/solutions/technology-solutions" onClick={() => setIsMobileMenuOpen(false)}>Tech Solutions</MobileSubLink>
                <MobileSubLink to="/solutions/media-solutions" onClick={() => setIsMobileMenuOpen(false)}>Media Solutions</MobileSubLink>
                <MobileSubLink to="/solutions/research-data-and-analytics-solutions" onClick={() => setIsMobileMenuOpen(false)}>Research Solutions</MobileSubLink>
              </MobileSection>

              <MobileSection title="About">
                <MobileSubLink to="/about-us" onClick={() => setIsMobileMenuOpen(false)}>About Us</MobileSubLink>
                <MobileSubLink to="/about-us" onClick={() => setIsMobileMenuOpen(false)}>Inowix Network</MobileSubLink>
              </MobileSection>

              <MobileSection title="Resources">
                <MobileSubLink to="/blogs" onClick={() => setIsMobileMenuOpen(false)}>Blog</MobileSubLink>
                <MobileSubLink to="/resources" onClick={() => setIsMobileMenuOpen(false)}>Insights</MobileSubLink>
              </MobileSection>

              <MobileNavLink to="/careers" onClick={() => setIsMobileMenuOpen(false)}>Careers</MobileNavLink>

              <div className="pt-4 space-y-3 sm:space-y-4">
                {user && isAdmin && (
                  <Button asChild variant="outline" className="w-full rounded-xl sm:rounded-2xl py-4 sm:py-5 md:py-6 border-primary text-primary text-sm sm:text-base">
                    <Link to="/admin" onClick={() => setIsMobileMenuOpen(false)}>Admin Panel</Link>
                  </Button>
                )}
                <Button asChild className="w-full rounded-xl sm:rounded-2xl py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg">
                  <Link to="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>Contact Us →</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// Sub-components for cleaner code
const NavLink = ({ to, active, children }: { to: string, active: boolean, children: React.ReactNode }) => (
  <Link
    to={to}
    className={cn(
      "px-5 py-2 text-sm font-medium rounded-full transition-all duration-300",
      active ? "text-primary bg-primary/5" : "text-foreground hover:text-primary hover:bg-secondary/50"
    )}
  >
    {children}
  </Link>
);

const NavDropdown = ({ label, children, isOpen, onMouseEnter, onMouseLeave, active }: any) => (
  <div className="relative" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    <button className={cn(
      "flex items-center gap-1.5 px-5 py-2 text-sm font-medium rounded-full transition-all duration-300",
      isOpen || active ? "text-primary bg-primary/5" : "text-foreground hover:text-primary hover:bg-secondary/50"
    )}>
      <span>{label}</span>
      <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-300", isOpen ? "rotate-180" : "")} />
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-[110]"
        >
          <div className="bg-background/95 border border-border/50 rounded-2xl shadow-2xl backdrop-blur-xl overflow-hidden">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const DropdownItem = ({ to, children }: { to: string, children: React.ReactNode }) => (
  <Link
    to={to}
    className="flex items-center gap-3 px-4 py-2.5 text-sm rounded-xl transition-all duration-200 hover:bg-primary/5 hover:text-primary group"
  >
    <div className="w-1.5 h-1.5 bg-primary rounded-full scale-0 group-hover:scale-100 transition-transform" />
    <span className="font-medium">{children}</span>
  </Link>
);

const MobileNavLink = ({ to, onClick, children }: any) => (
  <Link to={to} onClick={onClick} className="block text-xl sm:text-2xl font-bold tracking-tight hover:text-primary transition-colors">
    {children}
  </Link>
);

const MobileSection = ({ title, children }: any) => (
  <div className="space-y-4">
    <div className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">{title}</div>
    <div className="grid grid-cols-1 gap-4 pl-2">
      {children}
    </div>
  </div>
);

const MobileSubLink = ({ to, onClick, children }: any) => (
  <Link to={to} onClick={onClick} className="text-base sm:text-lg font-medium text-foreground/80 hover:text-primary transition-colors">
    {children}
  </Link>
);