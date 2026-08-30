import { Linkedin, Twitter, Instagram, ArrowUpRight } from "lucide-react";
import logo from "../assets/logoinowix.png";
import { Link } from "react-router-dom";
import { BuiltByInowix } from "@/components/hero/BuiltByInowix";

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
    { name: "Inowix Labs", href: "#inowix-labs" },
    { name: "COM AI", href: "/products/com-ai" },
    { name: "Beacon", href: "/products/beacon" },
    { name: "RED CLI", href: "/products/red-cli" },
  ],
};

const socials = [
  { icon: Linkedin, href: "https://linkedin.com/company/inowix" },
  { icon: Twitter, href: "https://twitter.com/inowix" },
  { icon: Instagram, href: "https://instagram.com/inowix" },
];

export const Footer = () => {
  return (
    <footer className="bg-inowix-surface border-t border-border/40 relative z-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
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
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">Services</h4>
            <ul className="space-y-2.5">
              {links.services.map((link) => (
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
