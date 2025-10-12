// Marketing.jsx
import React, { useState, useEffect, createContext, useContext } from 'react';
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
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
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

/* ---------------------------
   Lightweight UI placeholders
   (replace with your real components)
   --------------------------- */
const Button = ({ children, className = '', ...props }) => (
  <button className={`inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 ${className}`} {...props}>
    {children}
  </button>
);
const Input = ({ className = '', ...props }) => <input className={`flex h-10 w-full rounded-md px-3 py-2 text-sm ${className}`} {...props} />;
const Label = ({ children, className = '', ...props }) => <label className={`text-sm font-medium ${className}`} {...props}>{children}</label>;
const Textarea = ({ className = '', ...props }) => <textarea className={`min-h-[80px] w-full rounded-md px-3 py-2 text-sm ${className}`} {...props} />;
const Card = ({ children, className = '', ...props }) => <div className={`rounded-lg border bg-white p-4 ${className}`} {...props}>{children}</div>;
const CardHeader = ({ children, className = '', ...props }) => <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>{children}</div>;
const CardTitle = ({ children, className = '', ...props }) => <h3 className={`text-2xl font-semibold ${className}`} {...props}>{children}</h3>;
const CardDescription = ({ children, className = '', ...props }) => <p className={`text-sm text-muted-foreground ${className}`} {...props}>{children}</p>;
const CardContent = ({ children, className = '', ...props }) => <div className={`p-6 pt-0 ${className}`} {...props}>{children}</div>;
const Badge = ({ children, className = '', ...props }) => <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${className}`} {...props}>{children}</div>;

/* ---------------------------
   Simple custom Select
   --------------------------- */
const SelectContext = createContext();

const Select = ({ children, onValueChange, name, required, value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({ value: value || '', label: null });

  // Sync external value if provided (uncontrolled is also supported)
  useEffect(() => {
    if (value !== undefined) {
      // find label from children (simple search)
      let currentLabel = null;
      React.Children.forEach(children, child => {
        if (!child) return;
        // child might be SelectContent
        if (child.props && child.props.children) {
          React.Children.forEach(child.props.children, item => {
            if (!item || !item.props) return;
            if (item.props.value === value) {
              currentLabel = item.props.children;
            }
          });
        }
      });
      setSelectedOption({ value: value || '', label: currentLabel });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, children]);

  const handleSelect = (val, label) => {
    setSelectedOption({ value: val, label });
    if (onValueChange) onValueChange(val);
    setIsOpen(false);
  };

  return (
    <SelectContext.Provider value={{ isOpen, setIsOpen, selectedOption, handleSelect }}>
      <div className="relative">
        <input type="hidden" name={name} value={selectedOption.value || ''} required={required} />
        {children}
      </div>
    </SelectContext.Provider>
  );
};

const SelectTrigger = ({ children, className = '' }) => {
  const { isOpen, setIsOpen } = useContext(SelectContext);
  return (
    <button type="button" onClick={() => setIsOpen(!isOpen)} className={`flex h-10 items-center justify-between rounded-md px-3 py-2 text-sm w-full ${className}`}>
      {children}
    </button>
  );
};

const SelectValue = ({ placeholder }) => {
  const { selectedOption } = useContext(SelectContext);
  return <span>{selectedOption?.label || placeholder}</span>;
};

const SelectContent = ({ children }) => {
  const { isOpen } = useContext(SelectContext);
  if (!isOpen) return null;
  return <div className="absolute z-50 min-w-full rounded-md border bg-white shadow-md mt-1">{children}</div>;
};

const SelectItem = ({ children, value }) => {
  const { handleSelect } = useContext(SelectContext);
  return (
    <div onClick={() => handleSelect(value, children)} className="py-2 px-3 cursor-pointer hover:bg-gray-100">
      {children}
    </div>
  );
};

/* ---------------------------
   Small mocks (replace with real toast/supabase)
   --------------------------- */
const useToast = () => ({
  toast: ({ title, description }) => console.log('Toast:', title, description)
});

const supabase = {
  from: () => ({
    insert: async (data) => {
      console.log('Mock insert to supabase:', data);
      return { error: null };
    }
  })
};

/* ---------------------------
   Thank you page
   --------------------------- */
const ThankYouPage = ({ name, onReset }) => (
  <div className="min-h-screen bg-background flex flex-col">
    <Header />
    <main className="flex-grow flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-6 py-20">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
          <MailCheck className="w-12 h-12 text-green-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Thank You, {name}!</h1>
        <p className="text-xl text-muted-foreground mb-8">Your vision is in good hands. We've received your project details and will be in touch shortly.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/work">
            <Button className="rounded-full px-8">
              <Briefcase className="w-5 h-5 mr-2" />
              Explore Our Work
            </Button>
          </Link>
          <Button className="rounded-full px-8" onClick={onReset}>
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

/* ---------------------------
   Example data for services/segments/aiFeatures
   (Replace/extend with real data)
   --------------------------- */
const services = [
  {
    icon: Rocket,
    category: 'Brand',
    title: 'Brand Solutions',
    description: 'Strategic brand development and positioning.',
    features: ['Brand Strategy', 'Identity', 'Positioning'],
    cta: 'Learn More'
  },
  {
    icon: Zap,
    category: 'Tech',
    title: 'Tech Solutions',
    description: 'Web, mobile and platform engineering.',
    features: ['Web Apps', 'Mobile Apps', 'E-commerce'],
    cta: 'Explore'
  },
  {
    icon: Sparkles,
    category: 'Media',
    title: 'Media & Growth',
    description: 'Performance marketing and creative.',
    features: ['Paid Media', 'Content', 'Analytics'],
    cta: 'Get Started'
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

/* ---------------------------
   Marketing component
   --------------------------- */
const Marketing = () => {
  const [activeTab, setActiveTab] = useState('whatsapp');

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const validatedData = newFormSchema.parse(formState);
      const leadData = {
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company || 'Not provided',
        subject: `New Project Inquiry: ${validatedData.projectType}`,
        message: `Project Type: ${validatedData.projectType}\nBudget: ${validatedData.budget || 'Not specified'}\n\nProject Details:\n${validatedData.message}`,
        source: 'marketing-landing-new',
        status: 'new'
      };

      const { error } = await supabase.from('contact_leads').insert([leadData]);
      if (error) throw error;

      toast({ title: "Thank you for your message!", description: "We've received your project details and will be in touch shortly." });
      setSubmittedName(validatedData.name.split(' ')[0] || 'Friend');
      setIsSubmitted(true);
      window.scrollTo(0, 0);
      setFormState({ name: '', email: '', company: '', projectType: '', budget: '', message: '' });

    } catch (err) {
      if (err instanceof z.ZodError) {
        toast({ title: "Validation Error", description: err.errors[0].message });
      } else {
        toast({ title: "Error", description: "Failed to submit. Please try again." });
        console.error(err);
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
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-10 md:py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">🏆 Ranked #5 in MMA SMARTIES Business Impact Index</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Transform Your Business with <span className="text-primary"> Award-Winning</span> Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Join 300+ global brands who've achieved remarkable growth with our integrated creative, technology, and media solutions. Get a custom strategy in 24 hours.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500" /><span className="text-sm font-medium">1200+ Specialists</span></div>
                <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500" /><span className="text-sm font-medium">10+ Years Experience</span></div>
                <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500" /><span className="text-sm font-medium">Award-Winning Work</span></div>
              </div>
              <div className="flex flex-col lg:flex-row md:flex-row items-center gap-4">
                <Button className="rounded-full px-8" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
                  Get Free Strategy Session <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Link to="/work"><Button className="rounded-full px-8">View Case Studies</Button></Link>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6"><div className="flex items-center gap-3 mb-3"><TrendingUp className="w-8 h-8 text-green-500" /><div><p className="text-2xl font-bold text-green-500">300%</p><p className="text-sm text-muted-foreground">ROI Increase</p></div></div></Card>
                <Card className="p-6"><div className="flex items-center gap-3 mb-3"><Users className="w-8 h-8 text-blue-500" /><div><p className="text-2xl font-bold text-blue-500">300+</p><p className="text-sm text-muted-foreground">Brands Served</p></div></div></Card>
                <Card className="p-6"><div className="flex items-center gap-3 mb-3"><Award className="w-8 h-8 text-yellow-500" /><div><p className="text-2xl font-bold text-yellow-500">50+</p><p className="text-sm text-muted-foreground">Awards Won</p></div></div></Card>
                <Card className="p-6"><div className="flex items-center gap-3 mb-3"><Clock className="w-8 h-8 text-purple-500" /><div><p className="text-2xl font-bold text-purple-500">24hr</p><p className="text-sm text-muted-foreground">Response Time</p></div></div></Card>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <section id="contact-form" className="py-2 mt-[4rem] bg-[##1F1E1F]">
            <div className="max-w-container mx-auto px-6 py-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Transform Your Business?</h2>
                  <p className="text-xl text-muted-foreground mb-8">Get a personalized strategy and quote tailored to your specific industry, business size, and objectives. Our team will respond within 24 hours.</p>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4"><Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" /><div><h4 className="font-semibold text-foreground mb-2">Risk-Free Consultation</h4><p className="text-muted-foreground">No commitment required. Get expert insights and recommendations at no cost.</p></div></div>
                    <div className="flex items-start gap-4"><Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" /><div><h4 className="font-semibold text-foreground mb-2">Fast Response</h4><p className="text-muted-foreground">Our team reviews every inquiry and responds with a detailed proposal within 24 hours.</p></div></div>
                    <div className="flex items-start gap-4"><Users className="w-6 h-6 text-primary mt-1 flex-shrink-0" /><div><h4 className="font-semibold text-foreground mb-2">Expert Team</h4><p className="text-muted-foreground">Work directly with our 1200+ specialists across all disciplines.</p></div></div>
                  </div>
                </div>

                <Card className="p-8">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-2xl text-white">Let's Connect</CardTitle>
                    <CardDescription className='text-white'>Choose your preferred way to get in touch with us.</CardDescription>
                  </CardHeader>

                  <div className="flex w-full bg-muted/50 p-1 rounded-lg mb-6">
                    <button onClick={() => setActiveTab('form')} className={`w-1/2 p-2 rounded-md text-sm font-medium ${activeTab === 'form' ? 'bg-primary text-black' : 'text-black hover:bg-muted'}`}>Get a Full Strategy</button>
                    <button onClick={() => setActiveTab('whatsapp')} className={`w-1/2 p-2 rounded-md text-sm font-medium ${activeTab === 'whatsapp' ? 'bg-primary text-black' : 'text-black hover:bg-muted'}`}>Connect on WhatsApp</button>
                  </div>

                  {activeTab === 'form' && (
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
                            value={formState.name}
                            onChange={handleFormChange}
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
                            value={formState.email}
                            onChange={handleFormChange}
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
                            value={formState.company}
                            onChange={handleFormChange}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="projectType">Project Type *</Label>
                          <Select name="projectType" required onValueChange={(val) => handleSelectChange('projectType', val)} value={formState.projectType}>
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
                        <Select name="budget" onValueChange={(val) => handleSelectChange('budget', val)} value={formState.budget}>
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
                          value={formState.message}
                          onChange={handleFormChange}
                        />
                      </div>

                      <Button
                        type="submit"
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
                  )}

                  {activeTab === 'whatsapp' && (
                    <div className="text-center animate-in fade-in duration-300">
                      <h3 className="text-lg font-semibold text-foreground mb-2">Have a Quick Question?</h3>
                      <p className="text-muted-foreground mb-6">Tap the button below to start a chat with our team directly on WhatsApp. We're here to help!</p>
                      <a href="https://wa.me/916283075131" target="_blank" rel="noopener noreferrer" className="w-full inline-block">
                        <Button className="w-full bg-primary hover:bg-primary/90 text-black font-semibold py-4 rounded-xl transition-all duration-300 hover:scale-105">
                          <MessageSquare className="w-5 h-5 mr-2" />Connect on WhatsApp
                        </Button>
                      </a>
                    </div>
                  )}
                </Card>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Our <span className="text-gradient">Solutions</span></h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">From startups to enterprises, we deliver technology that drives growth</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="card-glass p-8 hover:scale-105 transition-transform duration-300 group bg-[#1F1E1F] cursor-pointer">
                  <div className="mb-6">
                    <div className="inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  <div className="mb-2 text-sm font-medium text-primary">{service.category}</div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-colors">{service.title}</h3>

                  <p className="text-muted-foreground mb-6">{service.description}</p>

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

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      </section>

      {/* Client Segments Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Built for <span className="text-gradient">Every Scale</span></h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">Whether you're just starting or scaling to millions, we have the right solution</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {segments.map((segment, index) => {
              const Icon = segment.icon;
              return (
                <Card key={index} className="card-glass p-8 flex flex-col h-full bg-[#1F1E1F] hover:shadow-elevated transition-all duration-300">
                  <div className="mb-6">
                    <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-4">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{segment.title}</h3>
                    <p className="text-sm text-primary font-medium">{segment.subtitle}</p>
                  </div>

                  <p className="text-muted-foreground mb-6">{segment.description}</p>

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

                  <Button className="w-full bg-primary hover:bg-primary/90 group" size="lg">
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

            <h2 className="text-5xl md:text-6xl font-bold mb-4">Empower Your Business with <span className="text-gradient">Artificial Intelligence</span></h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Transform operations, enhance customer experience, and unlock new revenue streams with enterprise-grade AI solutions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {aiFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="card-glass p-8 relative overflow-hidden bg-[#1F1E1F] group hover:shadow-elevated transition-all duration-300">
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
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h3>
              <p className="text-lg text-muted-foreground mb-8">Schedule a free consultation to discover how AI can revolutionize your operations</p>
              <a href="#contact" className="inline-flex">
                <button className="px-8 py-4 rounded-lg bg-[#1F1E1F] hover:bg-primary/90 text-white font-semibold glow-effect transition-all">
                  Schedule Free Consultation
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Marketing;
