export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold mb-6">
              Schbang
              <span className="text-primary-foreground/70 text-base font-normal">.Production</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Proudly created in India.<br />
              All Right Reserved, All Wrong Reversed.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="/about-us" className="hover:text-primary-foreground transition-colors">About</a></li>
              <li><a href="/work" className="hover:text-primary-foreground transition-colors">Case Studies</a></li>
              <li><a href="/careers" className="hover:text-primary-foreground transition-colors">Careers</a></li>
              <li><a href="/contact-us" className="hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="/solutions/brand-strategy" className="hover:text-primary-foreground transition-colors">Brand Solutions</a></li>
              <li><a href="/solutions/technology-solutions" className="hover:text-primary-foreground transition-colors">Tech Solutions</a></li>
              <li><a href="/solutions/media-solutions" className="hover:text-primary-foreground transition-colors">Media Solutions</a></li>
              <li><a href="/solutions/research-data-and-analytics-solutions" className="hover:text-primary-foreground transition-colors">Research Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="/blogs" className="hover:text-primary-foreground transition-colors">Blog</a></li>
              <li><a href="/privacy-policy" className="hover:text-primary-foreground transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="text-center text-primary-foreground/80">
            <p>&copy; 2024 Schbang. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};