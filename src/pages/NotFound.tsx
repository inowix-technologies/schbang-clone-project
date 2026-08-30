import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, ArrowRight } from "lucide-react";

const quickLinks = [
  { label: "Work", to: "/work" },
  { label: "Products", to: "/products" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about-us" },
  { label: "Contact", to: "/contact-us" },
  { label: "Blog", to: "/blogs" },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageShell>
      <div className="flex min-h-[calc(100vh-160px)] items-center justify-center px-4 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Page not found
            </p>

            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-6 text-primary">404</h1>

            <h2 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight">
              This page doesn't exist
            </h2>

            <p className="text-muted-foreground mb-10 leading-relaxed">
              The page you're looking for may have been moved or removed. Here are some places to start.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
              <Button asChild size="lg" className="rounded-sm w-full sm:w-auto">
                <Link to="/">
                  <Home className="w-4 h-4 mr-2" />
                  Return home
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-sm w-full sm:w-auto"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go back
              </Button>
            </div>

            <div className="pt-10 border-t border-border/40">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Quick links</p>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageShell>
  );
};

export default NotFound;
