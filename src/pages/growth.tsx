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
import { Footer } from "@/components/Footer";

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source
              src="https://cdn.pixabay.com/video/2022/12/13/143097-779840052_large.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              Transform Your{" "}
              <span className="text-gradient">Business Ideas</span>
              <br />
              Into Reality
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              From startup concepts to enterprise AI solutions. We build custom applications, 
              ecommerce platforms, and intelligent automation that scale with your vision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect group"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary/50 hover:border-primary hover:bg-primary/10"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span>500+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
                <span>98% Client Satisfaction</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </section>

      {/* Lead Form Section */}
      <section id="contact" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                Let's Build <span className="text-gradient">Together</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Share your vision and we'll turn it into reality
              </p>
            </div>

            <form onSubmit={handleSubmit} className="card-glass rounded-2xl p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input 
                    id="name" 
                    name="name"
                    placeholder="John Doe" 
                    required 
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    placeholder="john@company.com" 
                    required 
                    className="bg-background/50"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input 
                    id="company" 
                    name="company"
                    placeholder="Your Company" 
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type *</Label>
                  <Select name="projectType" required>
                    <SelectTrigger className="bg-background/50">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="app">Custom Application</SelectItem>
                      <SelectItem value="ecommerce">Ecommerce Platform</SelectItem>
                      <SelectItem value="ai">AI Solutions</SelectItem>
                      <SelectItem value="automation">Business Automation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range</Label>
                <Select name="budget">
                  <SelectTrigger className="bg-background/50">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">$5K - $20K</SelectItem>
                    <SelectItem value="medium">$20K - $50K</SelectItem>
                    <SelectItem value="large">$50K - $100K</SelectItem>
                    <SelectItem value="enterprise">$100K+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Project Details *</Label>
                <Textarea 
                  id="message" 
                  name="message"
                  placeholder="Tell us about your project, goals, and timeline..." 
                  required 
                  rows={4}
                  className="bg-background/50 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 glow-effect"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Get Started"}
                <Send className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                We respect your privacy. Your information will never be shared.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Our <span className="text-gradient">Solutions</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              From startups to enterprises, we deliver technology that drives growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index}
                  className="card-glass p-8 hover:scale-105 transition-transform duration-300 group cursor-pointer"
                >
                  <div className="mb-6">
                    <div className="inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  <div className="mb-2 text-sm font-medium text-primary">
                    {service.category}
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Decorative gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      </section>

      {/* Client Segments Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Built for <span className="text-gradient">Every Scale</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're just starting or scaling to millions, we have the right solution
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {segments.map((segment, index) => {
              const Icon = segment.icon;
              return (
                <Card 
                  key={index}
                  className="card-glass p-8 flex flex-col h-full hover:shadow-elevated transition-all duration-300"
                >
                  <div className="mb-6">
                    <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-4">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{segment.title}</h3>
                    <p className="text-sm text-primary font-medium">{segment.subtitle}</p>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {segment.description}
                  </p>

                  <div className="mb-8 flex-grow">
                    <ul className="space-y-3">
                      {segment.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 group"
                    size="lg"
                  >
                    {segment.cta}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Showcase Section */}
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Technology</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Empower Your Business with <span className="text-gradient">Artificial Intelligence</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform operations, enhance customer experience, and unlock new revenue streams with enterprise-grade AI solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {aiFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="card-glass p-8 relative overflow-hidden group hover:shadow-elevated transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="inline-flex p-3 rounded-xl bg-primary/10">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{feature.stats}</div>
                        <div className="text-xs text-muted-foreground">Average Impact</div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="card-glass rounded-2xl p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Transform Your Business with AI?
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Schedule a free consultation to discover how AI can revolutionize your operations
              </p>
              <a href="#contact" className="inline-flex">
                <button className="px-8 py-4 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-effect transition-all">
                  Schedule Free Consultation
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer/>
    </div>
  );
};

export default Growth;
