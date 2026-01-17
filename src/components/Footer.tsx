import { Linkedin, Twitter, Instagram, ArrowUpRight } from "lucide-react";
import logo from "../assets/24e85f30-f1ab-4cf2-9ba1-9cb571f22241.png";
import { Link } from "react-router-dom";

const links = {
  company: [
    { name: "About", href: "/about-us" },
    { name: "Work", href: "/work" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact-us" },
  ],
  solutions: [
    { name: "Brand Strategy", href: "/solutions/brand-strategy" },
    { name: "Tech Solutions", href: "/solutions/technology-solutions" },
    { name: "Media", href: "/solutions/media-solutions" },
    { name: "Research", href: "/solutions/research-data-and-analytics-solutions" },
  ],
};

const socials = [
  { icon: Linkedin, href: "https://linkedin.com/company/inowix" },
  { icon: Twitter, href: "https://twitter.com/inowix" },
  { icon: Instagram, href: "https://instagram.com/inowix" },
];

export const Footer = () => {
  return (
    <footer className="bg-[#111] border-t border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-14 md:py-16">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-12 sm:mb-14 md:mb-16">
          
          {/* Logo & CTA */}
          <div className="col-span-1 sm:col-span-2 space-y-4 sm:space-y-5 md:space-y-6">
            <img src={logo} alt="Inowix" className="h-8 sm:h-9 md:h-10 brightness-0 invert" />
            <p className="text-white/60 text-xs sm:text-sm max-w-xs">
              Creative & technology agency crafting digital experiences for global brands.
            </p>
            <Link 
              to="/contact-us"
              className="inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all text-sm sm:text-base"
            >
              Start a project <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Link>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white/40 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              {links.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-white/40 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">Solutions</h4>
            <ul className="space-y-2 sm:space-y-3">
              {links.solutions.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/10">
          <p className="text-white/40 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Inowix. Made in India.
          </p>
          
          <div className="flex items-center gap-3 sm:gap-4">
            {socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all"
              >
                <social.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
