import React, { useState } from 'react';
import { z } from 'zod';
import { Link } from 'react-router-dom';
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
  ArrowLeft,
  MailCheck,
  TrendingUp,
  Award,
  Clock,
  CheckCircle,
  Shield
} from 'lucide-react';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { GradientMesh } from "@/components/ui/gradient-mesh";
import { FloatingShapes } from "@/components/ui/floating-shapes";
import { Particles } from "@/components/ui/particles";
import { CreativeBackground } from "@/components/ui/creative-background";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";

/* ---------------------------
   Thank you page
   --------------------------- */
const ThankYouPage = ({ name, onReset }: { name: string, onReset: () => void }) => (
  <div className="min-h-screen bg-[#0F172A] text-white flex flex-col">
    <Header />
    <main className="flex-grow flex items-center justify-center pt-32">
      <div className="text-center max-w-2xl mx-auto px-6 py-20">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <MailCheck className="w-12 h-12 text-green-500" />
        </motion.div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Thank You, {name}!</h1>
        <p className="text-xl text-[#D1D5DB] mb-12">Your vision is in good hands. We've received your project details and will be in touch shortly.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/work">
            <Button className="h-14 px-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
              <Briefcase className="w-5 h-5 mr-2" />
              Explore Our Work
            </Button>
          </Link>
          <Button variant="outline" className="h-14 px-8 rounded-full border-border text-foreground hover:bg-card" onClick={onReset}>
            <ArrowLeft className="w-5 h-5 mr-2" />
            Submit Another Request
          </Button>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

/* ---------------------------
   Validation schema
   --------------------------- */
const newFormSchema = z.object({
  name: z.string().trim().min(1, "Full name is required"),
  email: z.string().trim().email("Invalid email address"),
  company: z.string().trim().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().optional(),
  message: z.string().trim().min(10, "Project details must be at least 10 characters")
});

const services = [
  {
    icon: Rocket,
    category: 'Brand',
    title: 'Brand Solutions',
    description: 'Strategic brand development and positioning.',
    features: ['Brand Strategy', 'Identity', 'Positioning'],
    cta: 'Learn More',
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10'
  },
  {
    icon: Zap,
    category: 'Tech',
    title: 'Tech Solutions',
    description: 'Web, mobile and platform engineering.',
    features: ['Web Apps', 'Mobile Apps', 'E-commerce'],
    cta: 'Explore',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10'
  },
  {
    icon: Sparkles,
    category: 'Media',
    title: 'Media & Growth',
    description: 'Performance marketing and creative.',
    features: ['Paid Media', 'Content', 'Analytics'],
    cta: 'Get Started',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10'
  }
];

const segments = [
  {
    icon: Users,
    title: 'Startups',
    subtitle: 'Early-stage growth',
    description: 'Build fast, iterate faster.',
    benefits: ['MVP development', 'Go-to-market', 'Cost-efficient'],
    cta: 'Talk to Sales'
  },
  {
    icon: Briefcase,
    title: 'SMBs',
    subtitle: 'Scale with confidence',
    description: 'Systems and processes for growth.',
    benefits: ['Automation', 'Performance', 'Retention'],
    cta: 'Book Demo'
  },
  {
    icon: Building2,
    title: 'Enterprises',
    subtitle: 'Custom enterprise solutions',
    description: 'Reliable, secure, scalable platforms.',
    benefits: ['Integration', 'Security', 'SLA'],
    cta: 'Contact Us'
  }
];

const aiFeatures = [
  { icon: Bot, stats: '4.5x', title: 'Automation', description: 'Automate repetitive tasks and cut costs.' },
  { icon: Brain, stats: '3x', title: 'Personalization', description: 'Deliver tailored experiences at scale.' }
];

const Marketing = () => {
  const [activeTab, setActiveTab] = useState<'form' | 'whatsapp'>('whatsapp');

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const validatedData = newFormSchema.parse(formState);
      
      // Simulate submission
      await new Promise(resolve => setTimeout(resolve, 1500));

      toast({ 
        title: "Thank you for your message!", 
        description: "We've received your project details and will be in touch shortly." 
      });
      
      setSubmittedName(validatedData.name.split(' ')[0] || 'Friend');
      setIsSubmitted(true);
      window.scrollTo(0, 0);
      setFormState({ name: '', email: '', company: '', projectType: '', budget: '', message: '' });

    } catch (err) {
      if (err instanceof z.ZodError) {
        toast({ 
          title: "Validation Error", 
          description: err.errors[0].message,
          variant: "destructive"
        });
      } else {
        toast({ 
          title: "Error", 
          description: "Failed to submit. Please try again.",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setSubmittedName('');
  };

  if (isSubmitted) return <ThankYouPage name={submittedName} onReset={handleResetForm} />;

  return (
    <div className="min-h-screen bg-[#0F172A] text-white selection:bg-orange-500/30 relative overflow-hidden">
      <GradientMesh className="opacity-30" />
      <FloatingShapes count={12} className="opacity-12" />
      <Particles count={40} color="#ffffff" className="opacity-15" />
      <CreativeBackground variant="gradient" className="opacity-20" />
      <Header />

      <main className="pt-32 relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-32 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               className="relative z-10"
            >
              <Badge className="mb-8 h-8 px-4 bg-orange-500/10 text-orange-400 border-orange-500/20 text-[10px] font-bold uppercase tracking-widest">🏆 Ranked #5 in MMA SMARTIES Business Impact Index</Badge>
              <h1 className="hero-title mb-6 sm:mb-8 px-2 sm:px-0">
                Award-Winning <span className="italic text-[#9CA3AF]">Excellence.</span>
              </h1>
              <p className="lead mb-8 sm:mb-10 max-w-2xl px-4 sm:px-0">
                Join 300+ global brands who've achieved remarkable growth with our integrated creative, technology, and media solutions.
              </p>
              
              <div className="flex flex-wrap gap-6 mb-12">
                <div className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-[#22C55E]" /><span className="text-sm font-bold text-[#D1D5DB]">1200+ Specialists</span></div>
                <div className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-[#22C55E]" /><span className="text-sm font-bold text-[#D1D5DB]">10+ Years Experience</span></div>
                <div className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-[#22C55E]" /><span className="text-sm font-bold text-[#D1D5DB]">Global Presence</span></div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button className="h-16 px-10 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-all font-bold text-lg" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
                  Get Free Strategy <ArrowRight className="w-5 h-5 ml-4" />
                </Button>
                <Link to="/work">
                  <Button variant="outline" className="h-16 px-10 rounded-full border-border text-foreground hover:bg-card transition-all font-bold text-lg">
                    View Case Studies
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="grid grid-cols-2 gap-4"
            >
              <Card className="p-8 bg-zinc-900/50 border-white/5 rounded-[2.5rem] hover:border-white/10 transition-all">
                <TrendingUp className="w-10 h-10 text-green-500 mb-6" />
                <div className="text-4xl font-bold mb-1">300%</div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF]">ROI Increase</div>
              </Card>
              <Card className="p-8 bg-zinc-900/50 border-white/5 rounded-[2.5rem] hover:border-white/10 transition-all">
                <Users className="w-10 h-10 text-blue-500 mb-6" />
                <div className="text-4xl font-bold mb-1">300+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-zinc-500">Brands Served</div>
              </Card>
              <Card className="p-8 bg-zinc-900/50 border-white/5 rounded-[2.5rem] hover:border-white/10 transition-all">
                <Award className="w-10 h-10 text-yellow-500 mb-6" />
                <div className="text-4xl font-bold mb-1">50+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-zinc-500">Awards Won</div>
              </Card>
              <Card className="p-8 bg-zinc-900/50 border-white/5 rounded-[2.5rem] hover:border-white/10 transition-all">
                <Clock className="w-10 h-10 text-purple-500 mb-6" />
                <div className="text-4xl font-bold mb-1">24hr</div>
                <div className="text-xs font-bold uppercase tracking-widest text-zinc-500">Response Time</div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-32 bg-zinc-950/50 border-y border-white/5 overflow-hidden relative">
          <GradientMesh className="opacity-15" />
          <FloatingShapes count={8} className="opacity-8" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="section-title mb-6 sm:mb-8 md:mb-10 px-2 sm:px-0">Ready to Transform?</h2>
                <p className="lead mb-8 sm:mb-10 md:mb-12 px-4 sm:px-0">Get a personalized strategy and quote tailored to your business goals. Our team will respond within 24 hours.</p>
                
                <div className="space-y-10">
                   {[
                     { icon: Shield, title: "Risk-Free Consultation", desc: "No commitment required. Get expert insights at no cost." },
                     { icon: Clock, title: "Fast Response", desc: "Detailed proposal within 24 hours of your inquiry." },
                     { icon: Users, title: "Expert Team", desc: "Work directly with our 1200+ global specialists." }
                   ].map((item, i) => (
                      <div key={i} className="flex gap-6 group">
                         <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:bg-orange-500/20 transition-all duration-500">
                           <item.icon className="w-7 h-7 text-orange-400" />
                         </div>
                         <div>
                            <h4 className="text-xl font-bold mb-2 group-hover:text-orange-300 transition-colors">{item.title}</h4>
                            <p className="text-[#9CA3AF] leading-relaxed text-sm">{item.desc}</p>
                         </div>
                      </div>
                   ))}
                </div>
              </div>

              <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="relative"
              >
                <div className="absolute inset-0 bg-orange-500/10 blur-[120px] -z-10" />
                <Card className="p-8 md:p-12 bg-zinc-900 border-white/10 rounded-[3rem] shadow-2xl overflow-hidden">
                  <div className="mb-10">
                    <h3 className="text-3xl font-bold mb-2">Let's Connect</h3>
                    <p className="text-zinc-500">Choose your preferred way to reach us.</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 p-1.5 bg-card/60 rounded-2xl mb-10 border border-border">
                    <button 
                       onClick={() => setActiveTab('form')} 
                       className={`flex items-center justify-center h-12 rounded-xl text-sm font-bold transition-all ${activeTab === 'form' ? 'bg-primary text-primary-foreground shadow-lg' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                      Strategy Form
                    </button>
                    <button 
                       onClick={() => setActiveTab('whatsapp')} 
                       className={`flex items-center justify-center h-12 rounded-xl text-sm font-bold transition-all ${activeTab === 'whatsapp' ? 'bg-primary text-primary-foreground shadow-lg' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                      WhatsApp
                    </button>
                  </div>

                  <AnimatePresence mode="wait">
                    {activeTab === 'form' ? (
                      <motion.form 
                        key="form"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        onSubmit={handleSubmit} 
                        className="space-y-6"
                      >
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="marketing-name" className="text-[#9CA3AF] ml-1">Full Name *</Label>
                            <Input id="marketing-name" name="name" placeholder="John Doe" required className="h-14 bg-white/5 border-white/10 rounded-2xl focus:border-orange-500/50" value={formState.name} onChange={handleFormChange} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="marketing-email" className="text-zinc-400 ml-1">Email *</Label>
                            <Input id="marketing-email" name="email" type="email" placeholder="john@company.com" required className="h-14 bg-white/5 border-white/10 rounded-2xl focus:border-orange-500/50" value={formState.email} onChange={handleFormChange} />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="marketing-company" className="text-zinc-400 ml-1">Company</Label>
                            <Input id="marketing-company" name="company" placeholder="Acme Inc." className="h-14 bg-white/5 border-white/10 rounded-2xl focus:border-orange-500/50" value={formState.company} onChange={handleFormChange} />
                          </div>
                          <div className="space-y-2">
                            <Label className="text-zinc-400 ml-1">Project Type *</Label>
                            <Select name="projectType" required onValueChange={(val) => handleSelectChange('projectType', val)} value={formState.projectType}>
                              <SelectTrigger className="h-14 bg-white/5 border-white/10 rounded-2xl">
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                              <SelectContent className="bg-zinc-900 border-white/10 text-white">
                                <SelectItem value="brand">Brand Strategy</SelectItem>
                                <SelectItem value="tech">Tech Solutions</SelectItem>
                                <SelectItem value="media">Media & Growth</SelectItem>
                                <SelectItem value="research">Market Research</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="marketing-message" className="text-zinc-400 ml-1">Details *</Label>
                          <Textarea id="marketing-message" name="message" placeholder="What are your goals?" required rows={4} className="bg-white/5 border-white/10 rounded-2xl focus:border-orange-500/50 resize-none p-4" value={formState.message} onChange={handleFormChange} />
                        </div>

                        <Button type="submit" className="w-full h-16 rounded-2xl bg-orange-500 text-white hover:bg-orange-600 transition-all font-bold text-lg" disabled={isSubmitting}>
                          {isSubmitting ? "Sending..." : "Request Full Strategy"}
                          <Send className="ml-4 h-5 w-5" />
                        </Button>
                      </motion.form>
                    ) : (
                      <motion.div 
                        key="whatsapp"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="text-center py-10"
                      >
                        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/20">
                           <MessageSquare className="w-10 h-10 text-green-500" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Quick Chat?</h3>
                        <p className="text-[#9CA3AF] mb-10 leading-relaxed">Connect with our team directly on WhatsApp for immediate assistance and quick answers.</p>
                        <a href="https://wa.me/916283075131" target="_blank" rel="noopener noreferrer">
                          <Button className="w-full h-16 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-bold text-lg">
                            Connect on WhatsApp
                          </Button>
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-32 container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="section-title mb-4 sm:mb-6 px-2 sm:px-0">Integrated Solutions</h2>
            <p className="lead max-w-2xl mx-auto px-4 sm:px-0">Scalable technology and creative strategies for modern brands.</p>
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
                   className="p-8 md:p-10 rounded-[2.5rem] bg-zinc-900/30 border border-white/5 hover:border-white/10 hover:bg-zinc-900/50 transition-all group"
                >
                  <div className={`w-16 h-16 ${service.bgColor} rounded-[1.25rem] flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <div className={`text-[10px] font-bold uppercase tracking-widest ${service.color} mb-4`}>{service.category}</div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">{service.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-8">{service.description}</p>
                  <ul className="space-y-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-xs font-bold text-[#9CA3AF] group-hover:text-[#D1D5DB] transition-colors uppercase tracking-widest">
                        <Sparkles className="h-3 w-3 text-[#374151] mr-3" />
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
        <section className="py-32 bg-zinc-950/50 border-y border-white/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="section-title mb-4 sm:mb-6 px-2 sm:px-0">Tailored for You</h2>
              <p className="lead px-4 sm:px-0">Solutions designed for your specific business scale.</p>
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
                     className="p-10 rounded-[3rem] bg-white/5 border border-white/10 flex flex-col h-full hover:border-orange-500/30 transition-all group"
                  >
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:bg-orange-500/20 transition-all">
                      <Icon className="h-8 w-8 text-orange-400" />
                    </div>
                    <h3 className="text-3xl font-bold mb-2">{segment.title}</h3>
                    <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-6">{segment.subtitle}</p>
                    <p className="text-[#9CA3AF] leading-relaxed mb-10">{segment.description}</p>
                    
                    <div className="space-y-4 mb-12 flex-grow">
                      {segment.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-4">
                          <div className="w-2 h-2 rounded-full bg-orange-500" />
                          <span className="text-sm font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <Link to="/contact-us" className="w-full">
                      <Button className="w-full h-14 rounded-2xl bg-card/60 border border-border text-foreground hover:bg-card transition-all group">
                        {segment.cta} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* AI Showcase */}
        <section className="py-32 container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {aiFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="p-10 bg-zinc-900/50 border-white/5 rounded-[2.5rem] relative overflow-hidden group hover:border-white/10 transition-all"
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-8">
                      <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                        <Icon className="h-7 w-7 text-orange-400" />
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-white mb-1">{feature.stats} Impact</div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Average Performance Boost</div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="py-40 relative">
          <GradientMesh className="opacity-25" />
          <FloatingShapes count={10} className="opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent pointer-events-none" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="hero-title mb-6 sm:mb-8 md:mb-10 px-2 sm:px-0">
              Ready to <br />
              <span className="text-zinc-600 italic">Work?</span>
            </h2>
            <p className="lead mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-4 sm:px-0">
              Join the hundreds of brands that trust us with their growth. Let's create something extraordinary.
            </p>
            <Link to="/contact-us">
              <Button className="h-16 sm:h-20 px-8 sm:px-16 rounded-full text-xl sm:text-2xl bg-orange-500 text-white hover:bg-orange-600 transition-all hover:scale-105 shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                Get Started Now
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Marketing;
