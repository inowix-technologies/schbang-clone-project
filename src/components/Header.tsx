import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Menu,
  Shield,
  X,
  ArrowRight,
  Bot,
  Radar,
  Terminal,
  Code2,
  BrainCircuit,
  Cloud,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import logo from "../assets/logoinowix.png";
import { useAuth } from "@/hooks/useAuth";
import { ENGINEERING_SERVICES, INOWIX_PRODUCTS } from "@/data/inowix-content";

interface MenuEntry {
  to: string;
  label: string;
  description: string;
  accent: string;
  icon: LucideIcon;
}

const productIcons: Record<string, LucideIcon> = { "com-ai": Bot, beacon: Radar, "red-cli": Terminal };
const serviceIcons: Record<string, LucideIcon> = {
  "product-engineering": Code2,
  "artificial-intelligence": BrainCircuit,
  "cloud-devops": Cloud,
  cybersecurity: ShieldCheck,
};

const productLinks: MenuEntry[] = Object.values(INOWIX_PRODUCTS).map((p) => ({
  to: p.link,
  label: p.name,
  description: p.tagline,
  accent: p.accent,
  icon: productIcons[p.slug] ?? Bot,
}));

const serviceLinks: MenuEntry[] = ENGINEERING_SERVICES.map((s) => ({
  to: s.link,
  label: s.name,
  description: s.description,
  accent: s.accent,
  icon: serviceIcons[s.slug] ?? Code2,
}));

const DROPDOWN_CLOSE_DELAY_MS = 120;

export const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isAdmin } = useAuth();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const closeTimer = useRef<number>();

  const openDropdown = (id: string) => {
    window.clearTimeout(closeTimer.current);
    setActiveDropdown(id);
  };

  const scheduleClose = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setActiveDropdown(null), DROPDOWN_CLOSE_DELAY_MS);
  };

  const toggleDropdown = (id: string) => {
    window.clearTimeout(closeTimer.current);
    setActiveDropdown((current) => (current === id ? null : id));
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveDropdown(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(closeTimer.current);
    };
  }, []);

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
      isScrolled ? "pt-3 px-3 sm:px-4" : "pt-0 px-0"
    )}>
      <div
        className="absolute top-0 left-0 h-0.5 bg-primary z-[110] transition-[width] duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />
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
              id="products"
              label="Products"
              isOpen={activeDropdown === "products"}
              onOpen={() => openDropdown("products")}
              onClose={scheduleClose}
              onToggle={() => toggleDropdown("products")}
              active={isActive("/products")}
            >
              <div className="w-[420px]">
                <DropdownHeading>Inowix Labs · AI-native products</DropdownHeading>
                <div className="grid gap-0.5 px-2 pb-2">
                  {productLinks.map((entry) => (
                    <DropdownItem key={entry.to} entry={entry} />
                  ))}
                </div>
                <DropdownFooter
                  primary={{ to: "/products", label: "Explore all products" }}
                  secondary={{ to: "/#inowix-labs", label: "See live demos" }}
                />
              </div>
            </NavDropdown>

            <NavDropdown
              id="services"
              label="Services"
              isOpen={activeDropdown === "services"}
              onOpen={() => openDropdown("services")}
              onClose={scheduleClose}
              onToggle={() => toggleDropdown("services")}
              active={isActive("/services")}
            >
              <div className="w-[560px]">
                <DropdownHeading>Engineering services</DropdownHeading>
                <div className="grid grid-cols-2 gap-0.5 px-2 pb-2">
                  {serviceLinks.map((entry) => (
                    <DropdownItem key={entry.to} entry={entry} />
                  ))}
                </div>
                <DropdownFooter
                  primary={{ to: "/services", label: "All services" }}
                  secondary={{ to: "/contact-us", label: "Start a project" }}
                />
              </div>
            </NavDropdown>

            <NavLink to="/about-us" active={isActive("/about-us")}>About</NavLink>
            <NavLink to="/contact-us" active={isActive("/contact-us")}>Contact</NavLink>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            {user && isAdmin && (
              <Button asChild variant="ghost" size="sm" className="hidden xl:flex rounded-sm">
                <Link to="/admin"><Shield className="w-4 h-4 mr-2" />Admin</Link>
              </Button>
            )}
            <Button asChild size="sm" className={cn(
              "hidden sm:flex rounded-sm font-semibold group",
              isScrolled ? "h-9 px-5" : "h-10 px-6"
            )}>
              <Link to="/contact-us">
                Start a Project
                <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <button
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors rounded-sm hover:bg-inowix-surface"
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
            <div className="bg-inowix-surface/95 backdrop-blur-2xl border border-border/40 rounded-sm p-6 shadow-2xl space-y-6">
              <MobileNavLink to="/work">Work</MobileNavLink>

              <MobileSection title="Products">
                {productLinks.map((l) => (
                  <MobileSubLink key={l.to} entry={l} />
                ))}
                <Link to="/products" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Explore all products <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </MobileSection>

              <MobileSection title="Services">
                {serviceLinks.map((l) => (
                  <MobileSubLink key={l.to} entry={l} />
                ))}
              </MobileSection>

              <MobileNavLink to="/about-us">About</MobileNavLink>
              <MobileNavLink to="/contact-us">Contact</MobileNavLink>

              <Button asChild className="w-full rounded-sm py-6">
                <Link to="/contact-us">Start a Project →</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const navItemClass = (highlighted: boolean) =>
  cn(
    "relative flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-sm transition-colors duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
    highlighted ? "text-foreground" : "text-foreground/65 hover:text-foreground"
  );

const ActiveIndicator = () => (
  <span className="pointer-events-none absolute inset-x-3.5 -bottom-px h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
);

const NavLink = ({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) => (
  <Link to={to} className={navItemClass(active)} aria-current={active ? "page" : undefined}>
    {children}
    {active && <ActiveIndicator />}
  </Link>
);

const NavDropdown = ({ id, label, children, isOpen, onOpen, onClose, onToggle, active }: {
  id: string; label: string; children: React.ReactNode; isOpen: boolean;
  onOpen: () => void; onClose: () => void; onToggle: () => void; active: boolean;
}) => (
  <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
    <button
      type="button"
      className={navItemClass(isOpen || active)}
      aria-expanded={isOpen}
      aria-controls={`nav-${id}-menu`}
      onClick={onToggle}
    >
      {label}
      <ChevronDown className={cn("w-3.5 h-3.5 opacity-60 transition-transform duration-200", isOpen && "rotate-180 opacity-100")} />
      {active && <ActiveIndicator />}
    </button>
    {/* Positioning lives on a plain div: framer-motion's transform would override -translate-x-1/2.
        max-w-none opts out of the global `* { max-width: 100% }`, which would clamp the panel to the trigger's width. */}
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-[110] w-max max-w-none [&_*]:max-w-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`nav-${id}-menu`}
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-md border border-border/60 bg-inowix-surface shadow-[0_24px_60px_-12px_rgba(0,0,0,0.75)] ring-1 ring-black/40"
          >
            <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </div>
);

const DropdownHeading = ({ children }: { children: React.ReactNode }) => (
  <p className="px-5 pt-4 pb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{children}</p>
);

const DropdownItem = ({ entry }: { entry: MenuEntry }) => {
  const Icon = entry.icon;
  return (
    <Link
      to={entry.to}
      className="group flex items-start gap-3 rounded-sm p-3 transition-colors hover:bg-inowix-elevated focus-visible:bg-inowix-elevated focus-visible:outline-none"
    >
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border transition-colors"
        style={{ color: entry.accent, borderColor: `${entry.accent}33`, background: `${entry.accent}12` }}
      >
        <Icon className="h-4 w-4" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
          {entry.label}
          <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 text-primary transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
        </span>
        <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">{entry.description}</span>
      </span>
    </Link>
  );
};

const DropdownFooter = ({ primary, secondary }: {
  primary: { to: string; label: string };
  secondary: { to: string; label: string };
}) => (
  <div className="flex items-center justify-between gap-4 border-t border-border/50 bg-inowix-bg/60 px-5 py-3">
    <Link
      to={primary.to}
      className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
    >
      {primary.label}
      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
    </Link>
    <Link to={secondary.to} className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
      {secondary.label}
    </Link>
  </div>
);

const MobileNavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to} className="block text-xl font-bold tracking-tight hover:text-primary transition-colors">
    {children}
  </Link>
);

const MobileSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-3">
    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{title}</div>
    <div className="grid grid-cols-1 gap-3 pl-1">{children}</div>
  </div>
);

const MobileSubLink = ({ entry }: { entry: MenuEntry }) => {
  const Icon = entry.icon;
  return (
    <Link to={entry.to} className="group flex min-w-0 items-center gap-3 rounded-sm transition-colors">
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border"
        style={{ color: entry.accent, borderColor: `${entry.accent}33`, background: `${entry.accent}12` }}
      >
        <Icon className="h-4 w-4" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-base font-medium text-foreground/90 group-hover:text-primary transition-colors">
          {entry.label}
        </span>
        <span className="block text-xs text-muted-foreground truncate">{entry.description}</span>
      </span>
    </Link>
  );
};
