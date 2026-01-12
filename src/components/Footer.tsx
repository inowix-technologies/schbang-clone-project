import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram, Send, ArrowUpRight } from "lucide-react";
import logo from "../assets/24e85f30-f1ab-4cf2-9ba1-9cb571f22241.png";

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about-us" },
      { name: "Our Work", href: "/work" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact-us" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "Brand Solutions", href: "/solutions/brand-strategy" },
      { name: "Tech Solutions", href: "/solutions/technology-solutions" },
      { name: "Media Solutions", href: "/solutions/media-solutions" },
      { name: "Research Solutions", href: "/solutions/research-data-and-analytics-solutions" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blogs" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },
];

const socialLinks = [
  { icon: <Linkedin className="w-5 h-5" />, href: "#", name: "LinkedIn" },
  { icon: <Twitter className="w-5 h-5" />, href: "#", name: "Twitter" },
  { icon: <Instagram className="w-5 h-5" />, href: "#", name: "Instagram" },
];

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 border-t border-neutral-900 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          {/* Logo & Info Section */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-1">
              <img className="w-40" src={logo} alt="Inowix Logo" />
              <span className="text-neutral-500 text-xl font-light mt-4">.in</span>
            </div>

            <p className="text-neutral-400 text-lg max-w-sm leading-relaxed">
              We're a global creative agency specialized in design, development, and brand transformation.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerLinks.map((section) => (
              <div key={section.title} className="space-y-6">
                <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-neutral-400 hover:text-white transition-colors flex items-center group gap-1"
                      >
                        {link.name}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner Area */}
        <div className="pt-10 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-neutral-500 text-sm font-mono">
            &copy; {new Date().getFullYear()} INOWIX.IN — PROUDLY CREATED IN INDIA
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-neutral-500 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              System Status: Operational
            </div>
            <div className="text-neutral-500 text-sm italic">
              "All Right Reserved, All Wrong Reversed."
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};