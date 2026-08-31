import { useState } from "react";
import { Linkedin, Twitter, Instagram, ArrowUpRight } from "lucide-react";
import logo from "../assets/logoinowix.png";
import { Link } from "react-router-dom";
import { BuiltByInowix } from "@/components/hero/BuiltByInowix";
import { Button } from "@/components/ui/button";

const links = {
  company: [
    { name: "About", href: "/about-us" },
    { name: "Work", href: "/work" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact-us" },
  ],
  services: [
    { name: "Product Engineering", href: "/services/product-engineering" },
    { name: "Artificial Intelligence", href: "/services/artificial-intelligence" },
    { name: "Cloud & DevOps", href: "/services/cloud-devops" },
    { name: "Cybersecurity", href: "/services/cybersecurity" },
  ],
  products: [
    { name: "Inowix Labs", href: "/#inowix-labs" },
    { name: "COM AI", href: "/products/com-ai" },
    { name: "Beacon", href: "/products/beacon" },
    { name: "RED CLI", href: "/products/red-cli" },
  ],
  more: [
    { name: "Blog", href: "/blogs" },
    { name: "Industries", href: "/industries" },
  ],
};

const socials = [
  { icon: Linkedin, href: "https://linkedin.com/company/inowix" },
  { icon: Twitter, href: "https://twitter.com/inowix" },
  { icon: Instagram, href: "https://instagram.com/inowix" },
];

const trustBadges = ["Production-Grade Engineering", "DevSecOps Practices", "SOC 2 Ready Architecture"];

export const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-inowix-surface border-t border-border/40 relative z-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
        <div className="mb-10 pb-10 border-b border-border/30">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight max-w-2xl mb-6">
            We build technology that businesses <span className="text-primary">run on</span>.
          </h2>
          <div className="flex flex-wrap gap-3 mb-8">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="font-mono text-[9px] uppercase tracking-wider px-3 py-1.5 border border-border/40 rounded-sm text-muted-foreground"
              >
                {badge}
              </span>
            ))}
          </div>
          <form
            className="flex flex-col sm:flex-row gap-2 max-w-md"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `mailto:info@inowix.in?subject=Newsletter&body=Subscribe: ${email}`;
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email for engineering insights"
              className="flex-1 h-10 px-4 rounded-sm border border-border/40 bg-inowix-bg text-sm"
              aria-label="Email for newsletter"
            />
            <Button type="submit" className="rounded-sm shrink-0">
              Subscribe
            </Button>
          </form>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 mb-12 sm:mb-14">
          <div className="sm:col-span-2 lg:col-span-2 space-y-5">
            <img src={logo} alt="Inowix Technologies" className="h-8 sm:h-9 brightness-0 invert" />
            <p className="text-muted-foreground text-sm max-w-sm">
              We build technology that businesses run on. Product engineering, AI systems, and cybersecurity — from architecture to production.
            </p>
            <BuiltByInowix size="md" />
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 text-foreground font-medium hover:gap-3 transition-all text-sm group"
            >
              Start a project
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">Company</h4>
            <ul className="space-y-2.5">
              {links.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-foreground/70 hover:text-foreground text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">Products</h4>
            <ul className="space-y-2.5">
              {links.products.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-foreground/70 hover:text-foreground text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">Services</h4>
            <ul className="space-y-2.5 mb-6">
              {links.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-foreground/70 hover:text-foreground text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2.5">
              {links.more.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-foreground/70 hover:text-foreground text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-border/40">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <p className="text-muted-foreground text-xs sm:text-sm">
              © {new Date().getFullYear()} Inowix Technologies
            </p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
              BL · DL · CH
            </p>
          </div>
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border transition-all"
              >
                <social.icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
