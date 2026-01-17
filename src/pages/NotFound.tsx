import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search, Sparkles } from "lucide-react";
import { GradientMesh } from "@/components/ui/gradient-mesh";
import { FloatingShapes } from "@/components/ui/floating-shapes";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#0F172A] text-white selection:bg-purple-500/30">
      <Header />
      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center relative overflow-hidden">
        <GradientMesh className="opacity-30" />
        <FloatingShapes count={10} className="opacity-10" />
        
        <div className="text-center max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-purple-200">Page Not Found</span>
            </div>
            
            <motion.h1 
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-bold mb-6 sm:mb-8 bg-gradient-to-br from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              404
            </motion.h1>
            
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight px-2 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Oops! Page not found
            </motion.h2>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-[#D1D5DB] mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/">
                <Button className="h-14 px-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-bold text-lg group">
                  <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Return to Home
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="h-14 px-8 rounded-full border-border text-foreground hover:bg-card transition-all font-bold text-lg group"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Go Back
              </Button>
            </motion.div>

            <motion.div 
              className="mt-16 pt-16 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-sm text-[#9CA3AF] mb-6">Quick Links:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/work" className="text-[#D1D5DB] hover:text-white transition-colors">Our Work</Link>
                <Link to="/solutions" className="text-[#D1D5DB] hover:text-white transition-colors">Solutions</Link>
                <Link to="/about-us" className="text-[#D1D5DB] hover:text-white transition-colors">About</Link>
                <Link to="/contact-us" className="text-[#D1D5DB] hover:text-white transition-colors">Contact</Link>
                <Link to="/blogs" className="text-[#D1D5DB] hover:text-white transition-colors">Blog</Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
