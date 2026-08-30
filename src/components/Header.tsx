import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, Shield, X, ArrowRight } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import logo from "../assets/logoinowix.png";
import { useAuth } from "@/hooks/useAuth";

const serviceLinks = [
  { to: "/services/product-engineering", label: "Product Engineering" },
  { to: "/services/artificial-intelligence", label: "Artificial Intelligence" },
  { to: "/services/cloud-devops", label: "Cloud & DevOps" },
  { to: "/services/cybersecurity", label: "Cybersecurity" },
];

const productLinks = [
  { to: "/products/com-ai", label: "COM AI" },
  { to: "/products/beacon", label: "Beacon" },
  { to: "/products/red-cli", label: "RED CLI" },
  { to: "/products", label: "View all products →" },
];

const companyLinks = [
  { to: "/about-us", label: "About Us" },
  { to: "/careers", label: "Careers" },
  { to: "/blogs", label: "Blog" },
];

export const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isAdmin } = useAuth();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
      isScrolled ? "pt-3 px-3 sm:px-4" : "pt-0 px-0"
    )}>
      <motion.div
        layout
        className={cn(
          "mx-auto transition-all duration-500",
          isScrolled
            ? "max-w-6xl rounded-full border border-border/60 bg-inowix-surface/80 backdrop-blur-xl px-4 sm:px-6"
            : "max-w-full bg-inowix-bg/80 backdrop-blur-sm border-b border-border/40 px-4 sm:px-6 md:px-8"
        )}
      >
        <div className={cn(
          "flex items-center justify-between transition-all duration-500",
          isScrolled ? "h-12 sm:h-14" : "h-16 sm:h-18"
        )}>
          <Link to="/" className="flex items-center shrink-0">
            <img
              className={cn(
                "transition-all duration-500 object-contain",
                isScrolled ? "w-20 sm:w-24" : "w-28 sm:w-32 md:w-36"
              )}
              src={logo}
              alt="Inowix Technologies"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            <NavLink to="/work" active={isActive("/work")}>Work</NavLink>

            <NavDropdown
              label="Services"
              isOpen={activeDropdown === "services"}
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
              active={isActive("/services")}
            >
              <div className="p-2 w-64">
                {serviceLinks.map((link) => (
                  <DropdownItem key={link.to} to={link.to}>{link.label}</DropdownItem>
                ))}
              </div>
            </NavDropdown>

            <NavLink to="/industries" active={isActive("/industries")}>Industries</NavLink>

            <NavDropdown
              label="Products"
              isOpen={activeDropdown === "products"}
              onMouseEnter={() => setActiveDropdown("products")}
              onMouseLeave={() => setActiveDropdown(null)}
              active={isActive("/products")}
            >
              <div className="p-2 w-56">
                {productLinks.map((link) => (
                  <DropdownItem key={link.to} to={link.to}>{link.label}</DropdownItem>
                ))}
              </div>
            </NavDropdown>

            <NavDropdown
              label="Company"
              isOpen={activeDropdown === "company"}
              onMouseEnter={() => setActiveDropdown("company")}
              onMouseLeave={() => setActiveDropdown(null)}
              active={isActive("/about-us") || isActive("/careers") || isActive("/blogs")}
            >
              <div className="p-2 w-48">
                {companyLinks.map((link) => (
                  <DropdownItem key={link.to} to={link.to}>{link.label}</DropdownItem>
                ))}
              </div>
            </NavDropdown>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            {user && isAdmin && (
              <Button asChild variant="ghost" size="sm" className="hidden xl:flex rounded-full">
                <Link to="/admin"><Shield className="w-4 h-4 mr-2" />Admin</Link>
              </Button>
            )}
            <Button asChild size="sm" className={cn(
              "hidden sm:flex rounded-full font-semibold group",
              isScrolled ? "h-9 px-5" : "h-10 px-6"
            )}>
              <Link to="/contact-us">
                Start a Project
                <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <button
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors rounded-full hover:bg-inowix-surface"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden fixed top-[72px] sm:top-[80px] left-0 right-0 p-3 z-[110] max-h-[calc(100vh-80px)] overflow-y-auto"
          >
            <div className="bg-inowix-surface/95 backdrop-blur-2xl border border-border/40 rounded-2xl p-6 shadow-2xl space-y-6">
              <MobileNavLink to="/work">Work</MobileNavLink>

              <MobileSection title="Services">
                {serviceLinks.map((l) => (
                  <MobileSubLink key={l.to} to={l.to}>{l.label}</MobileSubLink>
                ))}
              </MobileSection>

              <MobileNavLink to="/industries">Industries</MobileNavLink>

              <MobileSection title="Products">
                {productLinks.map((l) => (
                  <MobileSubLink key={l.to} to={l.to}>{l.label}</MobileSubLink>
                ))}
              </MobileSection>

              <MobileSection title="Company">
                {companyLinks.map((l) => (
                  <MobileSubLink key={l.to} to={l.to}>{l.label}</MobileSubLink>
                ))}
              </MobileSection>

              <Button asChild className="w-full rounded-xl py-6">
                <Link to="/contact-us">Start a Project →</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const NavLink = ({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) => (
  <Link
    to={to}
    className={cn(
      "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
      active ? "text-primary bg-primary/5" : "text-foreground/80 hover:text-foreground hover:bg-inowix-surface"
    )}
  >
    {children}
  </Link>
);

const NavDropdown = ({ label, children, isOpen, onMouseEnter, onMouseLeave, active }: {
  label: string; children: React.ReactNode; isOpen: boolean;
  onMouseEnter: () => void; onMouseLeave: () => void; active: boolean;
}) => (
  <div className="relative" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    <button className={cn(
      "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
      isOpen || active ? "text-primary bg-primary/5" : "text-foreground/80 hover:text-foreground hover:bg-inowix-surface"
    )}>
      {label}
      <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", isOpen && "rotate-180")} />
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-[110]"
        >
          <div className="bg-inowix-surface/95 border border-border/40 rounded-xl shadow-2xl backdrop-blur-xl overflow-hidden">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const DropdownItem = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="flex items-center gap-2 px-4 py-2.5 text-sm rounded-lg transition-colors hover:bg-primary/5 hover:text-primary font-medium"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to} className="block text-xl font-bold tracking-tight hover:text-primary transition-colors">
    {children}
  </Link>
);

const MobileSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-3">
    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{title}</div>
    <div className="grid gap-3 pl-1">{children}</div>
  </div>
);

const MobileSubLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to} className="text-base font-medium text-foreground/80 hover:text-primary transition-colors">
    {children}
  </Link>
);
