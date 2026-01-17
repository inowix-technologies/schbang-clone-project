import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { 
  ArrowRight, 
  Play, 
  Send,
  Code2,
  ShoppingCart,
  Building2,
  Zap,
  MessageSquare,
  Sparkles,
  Rocket,
  Users,
  Briefcase,
  Bot,
  Brain,
  Wand2,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GradientMesh } from "@/components/ui/gradient-mesh";
import { FloatingShapes } from "@/components/ui/floating-shapes";
import { Particles } from "@/components/ui/particles";
import { CreativeBackground } from "@/components/ui/creative-background";

const Growth = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Thank you for your interest!",
        description: "We'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  const services = [
    {
      icon: Code2,
      title: "Custom Applications",
      description: "Tailored software solutions built from the ground up to match your exact business needs and workflows.",
      features: ["Web & Mobile Apps", "API Integration", "Cloud Infrastructure", "Scalable Architecture"],
      category: "Development"
    },
    {
      icon: ShoppingCart,
      title: "Ecommerce Platforms",
      description: "Complete online stores with payment processing, inventory management, and customer analytics.",
      features: ["Shopping Cart", "Payment Gateway", "Order Management", "Analytics Dashboard"],
      category: "Ecommerce"
    },
    {
      icon: MessageSquare,
      title: "AI Chatbots",
      description: "Intelligent conversational AI that handles customer support, lead qualification, and engagement 24/7.",
      features: ["Natural Language", "Multi-Channel", "Smart Routing", "Analytics"],
      category: "AI Solutions"
    },
    {
      icon: Zap,
      title: "Business Automation",
      description: "Streamline operations with intelligent workflows that reduce manual tasks and increase efficiency.",
      features: ["Process Automation", "Data Integration", "Workflow Design", "Performance Tracking"],
      category: "Automation"
    },
    {
      icon: Sparkles,
      title: "AI Voice Assistants",
      description: "Voice-enabled interfaces for hands-free interaction, appointment scheduling, and information retrieval.",
      features: ["Voice Recognition", "Natural Speech", "Multi-Language", "Context Aware"],
      category: "AI Solutions"
    },
    {
      icon: Building2,
      title: "Enterprise Solutions",
      description: "Large-scale systems designed for high-volume operations with advanced security and compliance.",
      features: ["Scalable Infrastructure", "Security Compliance", "Data Analytics", "24/7 Monitoring"],
      category: "Enterprise"
    }
  ];

  const segments = [
    {
      icon: Rocket,
      title: "Startups & Entrepreneurs",
      subtitle: "Turn Your Idea Into Reality",
      description: "Have a vision but no technical team? We become your technology partner, transforming concepts into market-ready products.",
      benefits: [
        "MVP development in weeks, not months",
        "Cost-effective solutions that scale",
        "Expert guidance from idea to launch",
        "Ongoing support and iteration"
      ],
      cta: "Launch Your Startup",
      color: "primary"
    },
    {
      icon: Users,
      title: "Small & Medium Business",
      subtitle: "Digital Transformation Made Simple",
      description: "Modernize your operations with custom applications and ecommerce solutions designed for growth.",
      benefits: [
        "Custom web and mobile applications",
        "Full-featured ecommerce platforms",
        "Automated workflows and processes",
        "Affordable monthly payment plans"
      ],
      cta: "Grow Your Business",
      color: "secondary"
    },
    {
      icon: Briefcase,
      title: "Enterprise & High-Volume",
      subtitle: "AI-Powered Innovation at Scale",
      description: "Transform your established business with cutting-edge AI solutions, intelligent automation, and enterprise-grade systems.",
      benefits: [
        "AI chatbots and voice assistants",
        "Advanced business automation",
        "High-volume data processing",
        "Dedicated enterprise support"
      ],
      cta: "Explore Enterprise Solutions",
      color: "accent"
    }
  ];

  const aiFeatures = [
    {
      icon: Bot,
      title: "Intelligent Chatbots",
      description: "24/7 AI-powered customer service that understands context, handles complex queries, and learns from every interaction.",
      stats: "95% Query Resolution"
    },
    {
      icon: Sparkles,
      title: "Smart Automation",
      description: "Eliminate repetitive tasks with AI that adapts to your workflows, predicts needs, and optimizes processes in real-time.",
      stats: "70% Time Savings"
    },
    {
      icon: Brain,
      title: "Predictive Analytics",
      description: "Make data-driven decisions with AI that forecasts trends, identifies opportunities, and provides actionable insights.",
      stats: "3x ROI Increase"
    },
    {
      icon: Wand2,
      title: "Voice AI Assistants",
      description: "Natural language voice interfaces that schedule, search, and execute commands through simple conversations.",
      stats: "98% Accuracy"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 relative overflow-hidden">
      <GradientMesh className="opacity-30" />
      <FloatingShapes count={12} className="opacity-12" />
      <Particles count={40} color="#ffffff" className="opacity-15" />
      <CreativeBackground variant="gradient" className="opacity-20" />
      <Header />
      
      <main className="pt-32 relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-32 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent blur-3xl pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-5xl mx-auto relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
              <Rocket className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-purple-200">Scale Your Vision</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-6 sm:mb-8 tracking-tight leading-[1.05] px-2 sm:px-0">
              Accelerate Your <span className="italic text-zinc-500">Growth.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto px-4 sm:px-0">
              From startup concepts to enterprise AI solutions. We build custom applications, ecommerce platforms, and intelligent automation that scale.
            </p>

            <div className="flex justify-center gap-6">
               <a href="#contact">
                 <Button className="h-14 px-8 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition-all hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                   Start Your Project
                   <ArrowRight className="w-5 h-5 ml-2" />
                 </Button>
               </a>
               <Link to="/work">
                 <Button variant="outline" className="h-14 px-8 rounded-full border-border text-foreground hover:bg-card transition-all">
                   <Play className="w-5 h-5 mr-2" />
                   View Our Work
                 </Button>
               </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-20 flex flex-wrap justify-center gap-10 text-xs font-bold uppercase tracking-widest text-zinc-500">
              <div className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-purple-500 animate-pulse" />
                <span>500+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span>98% Client Satisfaction</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                <span>24/7 Global Support</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Lead Form Section */}
        <section id="contact" className="py-32 bg-zinc-950/50 border-y border-white/5 relative overflow-hidden">
          <GradientMesh className="opacity-15" />
          <FloatingShapes count={8} className="opacity-8" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-2 sm:px-0">Let's Build Together</h2>
                <p className="text-zinc-500 text-sm sm:text-base md:text-lg px-4 sm:px-0">Share your vision and we'll turn it into reality.</p>
              </div>

              <motion.form 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit} 
                className="p-8 md:p-12 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl space-y-8"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-zinc-400 ml-1">Full Name *</Label>
                    <Input id="name" name="name" placeholder="John Doe" required className="h-14 bg-white/5 border-white/10 rounded-2xl focus:border-purple-500/50 transition-colors" />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-zinc-400 ml-1">Email *</Label>
                    <Input id="email" name="email" type="email" placeholder="john@company.com" required className="h-14 bg-white/5 border-white/10 rounded-2xl focus:border-purple-500/50 transition-colors" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="company" className="text-zinc-400 ml-1">Company Name</Label>
                    <Input id="company" name="company" placeholder="Acme Inc." className="h-14 bg-white/5 border-white/10 rounded-2xl focus:border-purple-500/50 transition-colors" />
                  </div>
                  <div className="space-y-3">
                    <Label className="text-zinc-400 ml-1">Project Type *</Label>
                    <Select name="projectType" required>
                      <SelectTrigger className="h-14 bg-white/5 border-white/10 rounded-2xl focus:border-purple-500/50 transition-colors">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-900 border-white/10 text-white">
                        <SelectItem value="app">Custom Application</SelectItem>
                        <SelectItem value="ecommerce">Ecommerce Platform</SelectItem>
                        <SelectItem value="ai">AI Solutions</SelectItem>
                        <SelectItem value="automation">Business Automation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="message" className="text-zinc-400 ml-1">Project Details *</Label>
                  <Textarea id="message" name="message" placeholder="Tell us about your project, goals, and timeline..." required rows={4} className="bg-white/5 border-white/10 rounded-2xl focus:border-purple-500/50 transition-colors resize-none p-4" />
                </div>

                <Button type="submit" size="lg" className="w-full h-16 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-bold text-lg" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Get Started"}
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </motion.form>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-32 container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-2 sm:px-0">Our Solutions</h2>
            <p className="text-zinc-500 text-sm sm:text-base md:text-lg px-4 sm:px-0">Technology that drives growth at every scale.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div 
                   key={index}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.1 }}
                   className="p-8 rounded-[2rem] bg-zinc-900/30 border border-white/5 hover:border-white/10 hover:bg-zinc-900/50 transition-all group"
                >
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:bg-purple-500/20 transition-all duration-500">
                    <Icon className="h-7 w-7 text-purple-400" />
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-purple-500 mb-4">{service.category}</div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-8">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors">
                        <Sparkles className="h-3 w-3 text-zinc-600 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Client Segments */}
        <section className="py-32 bg-zinc-950/50 border-y border-white/5 relative overflow-hidden">
          <GradientMesh className="opacity-15" />
          <FloatingShapes count={6} className="opacity-8" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance px-2 sm:px-0">Built for Every Scale</h2>
              <p className="text-zinc-500 text-sm sm:text-base md:text-lg px-4 sm:px-0">Whether you're starting up or scaling to millions.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {segments.map((segment, index) => {
                const Icon = segment.icon;
                return (
                  <motion.div 
                     key={index}
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 flex flex-col h-full hover:border-purple-500/30 transition-all group"
                  >
                    <div className="w-16 h-16 bg-purple-500/10 rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="h-8 w-8 text-purple-400" />
                    </div>
                    <h3 className="text-3xl font-bold mb-2">{segment.title}</h3>
                    <p className="text-sm text-purple-500 font-bold uppercase tracking-widest mb-6">{segment.subtitle}</p>
                    <p className="text-zinc-500 leading-relaxed mb-10">{segment.description}</p>
                    
                    <div className="space-y-4 mb-12 flex-grow">
                      {segment.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center mt-0.5 border border-white/10">
                            <ArrowRight className="w-3 h-3 text-purple-400" />
                          </div>
                          <span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <a href="#contact" className="w-full">
                      <Button className="w-full h-14 rounded-2xl bg-card/60 border border-border text-foreground hover:bg-card transition-all group">
                        {segment.cta}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* AI Showcase */}
        <section className="py-32 container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8 items-center justify-center">
              <Sparkles className="h-4 w-4 text-purple-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-purple-200">AI-Powered Tech</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 tracking-tight px-2 sm:px-0">Enterprise AI</h2>
            <p className="text-zinc-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 sm:px-0">Transform operations and unlock new revenue streams with our intelligent solutions.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-20">
            {aiFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="p-10 bg-zinc-900/50 border-white/5 rounded-[2.5rem] relative overflow-hidden group hover:border-white/10 transition-all"
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-8">
                      <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                        <Icon className="h-7 w-7 text-purple-400" />
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-white mb-1">{feature.stats}</div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Average Impact</div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-zinc-500 leading-relaxed text-sm">{feature.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-16 rounded-[3rem] bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
            <h3 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ready for the Future?</h3>
            <p className="text-zinc-400 text-lg mb-10 max-w-lg mx-auto relative z-10">Discover how AI can revolutionize your operations and drive unprecedented growth.</p>
            <a href="#contact">
              <Button className="h-16 px-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-bold text-lg relative z-10 shadow-2xl">
                Schedule Free Consultation
              </Button>
            </a>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Growth;
