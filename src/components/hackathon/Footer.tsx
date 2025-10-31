import { Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-[hsl(210,8%,12%)] border-t border-border/50 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-muted-foreground text-sm">
            © 2025 Code to Career: The NCR Tech Gateway. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              className="hover:bg-primary/20 hover:text-primary"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="hover:bg-primary/20 hover:text-primary"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                <MessageCircle className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Email */}
          <div className="text-sm">
            <a href="mailto:hello@codetocareer.com" className="text-muted-foreground hover:text-primary transition-colors">
              admin@inowix.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
