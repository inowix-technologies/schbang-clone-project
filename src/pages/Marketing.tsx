import { useState, useEffect } from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import {
  ArrowRight,
  Star,
  Users,
  Target,
  Zap,
  Lightbulb,
  Palette,
  Code2,
  Megaphone,
  BarChart3,
  Globe,
  Code,
  Layers,
  CheckCircle,
  TrendingUp,
  Shield,
  Clock,
  Award,
  Phone,
  Mail,
  Building,
  MessageSquare,
  Loader2,
  // --- Icons for Thank You Page ---
  MailCheck,
  Briefcase,
  ArrowLeft
} from "lucide-react";
import { z } from 'zod';
import { Link } from 'react-router-dom';

// --- Thank You Page Component (No changes needed here) ---
const ThankYouPage = ({ name, onReset }) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-6 py-20">
          <div className="w-24 h-24 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
            <MailCheck className="w-12 h-12 text-green-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Thank You, {name}!
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Your vision is in good hands. We've received your project details and our team is already reviewing them. We're excited to learn more about your goals and will be in touch with a custom strategy <span className="text-primary font-semibold">within 24 hours</span>.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/work">
              <Button size="lg" variant="outline" className="rounded-full px-8 w-full sm:w-auto">
                <Briefcase className="w-5 h-5 mr-2" />
                Explore Our Work
              </Button>
            </Link>
            <Button size="lg" className="rounded-full px-8 w-full sm:w-auto" onClick={onReset}>
              <ArrowLeft className="w-5 h-5 mr-2" />
              Submit Another Request
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// --- Data and Schema (No changes needed here) ---
const marketingFormSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50, "First name must be less than 50 characters"),
  lastName: z.string().trim().min(1, "Last name is required").max(50, "Last name must be less than 50 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(1, "Phone number is required").max(50, "Phone number must be less than 50 characters"),
  company: z.string().trim().min(1, "Company name is required").max(255, "Company name must be less than 255 characters"),
  industry: z.string().min(1, "Please select your industry"),
  businessSize: z.string().min(1, "Please select your business size"),
  primaryService: z.string().min(1, "Please select a primary service"),
  projectType: z.string().min(1, "Please select project type"),
  budget: z.string().min(1, "Please select your budget range"),
  timeline: z.string().min(1, "Please select your timeline"),
  projectDetails: z.string().trim().min(10, "Please provide at least 10 characters describing your project").max(1000, "Project details must be less than 1000 characters"),
  currentChallenges: z.string().trim().max(500, "Current challenges must be less than 500 characters").optional(),
  goals: z.string().trim().max(500, "Goals must be less than 500 characters").optional(),
  source: z.string().optional()
});

const industries = [
  { value: "technology", label: "Technology & Software", caseStudy: "Helped 50+ tech startups scale from MVP to market leader" },
  { value: "ecommerce", label: "E-commerce & Retail", caseStudy: "Increased online sales by 300% for retail brands" },
  // ... other industries
];
const businessSizes = [
  { value: "startup", label: "Startup (1-10 employees)", services: ["MVP Development", "Brand Identity", "Digital Marketing Launch"] },
  { value: "small", label: "Small Business (11-50 employees)", services: ["Website Redesign", "Marketing Automation", "Brand Expansion"] },
  // ... other business sizes
];
const services = [
  {
    value: "brand",
    label: "Brand Solutions",
    description: "Strategic brand development and positioning",
    subServices: ["Brand Strategy", "Brand Identity", "Brand Positioning", "Brand Guidelines", "Rebranding"],
    caseStudy: "Transformed 300+ brands with strategic positioning that increased market share by 45%"
  },
  // ... other services
];


const Marketing = () => {
  // --- NEW: State for active tab ---
  const [activeTab, setActiveTab] = useState('form'); // 'form' or 'whatsapp'

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    businessSize: '',
    primaryService: '',
    projectType: '',
    budget: '',
    timeline: '',
    projectDetails: '',
    currentChallenges: '',
    goals: '',
    source: 'marketing-landing'
  });

  const [isLoading, setIsLoading] = useState(false);
  const [currentCaseStudy, setCurrentCaseStudy] = useState('');
  const [availableServices, setAvailableServices] = useState < string[] > ([]);
  const [projectTypes, setProjectTypes] = useState < string[] > ([]);
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  // --- All useEffects and handlers remain unchanged ---
  useEffect(() => {
    if (formData.industry) {
      const industry = industries.find(i => i.value === formData.industry);
      setCurrentCaseStudy(industry?.caseStudy || '');
    }
  }, [formData.industry]);

  useEffect(() => {
    if (formData.businessSize) {
      const businessSize = businessSizes.find(b => b.value === formData.businessSize);
      setAvailableServices(businessSize?.services || []);
    }
  }, [formData.businessSize]);

  useEffect(() => {
    if (formData.primaryService) {
      const service = services.find(s => s.value === formData.primaryService);
      setProjectTypes(service?.subServices || []);
    }
  }, [formData.primaryService]);

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const validatedData = marketingFormSchema.parse(formData);
      const leadData = {
        name: `${validatedData.firstName} ${validatedData.lastName}`,
        email: validatedData.email,
        company: validatedData.company,
        phone: validatedData.phone,
        subject: `${validatedData.primaryService} - ${validatedData.projectType}`,
        message: `
Industry: ${validatedData.industry}
Business Size: ${validatedData.businessSize}
Primary Service: ${validatedData.primaryService}
Project Type: ${validatedData.projectType}
Budget: ${validatedData.budget}
Timeline: ${validatedData.timeline}

Project Details:
${validatedData.projectDetails}

Current Challenges:
${validatedData.currentChallenges || 'Not specified'}

Goals:
${validatedData.goals || 'Not specified'}
        `.trim(),
        source: 'marketing-landing',
        status: 'new'
      };
      const { error } = await supabase.from('contact_leads').insert([leadData]);
      if (error) throw error;
      toast({
        title: "Thank you for your interest!",
        description: "Our team will review your project details and contact you within 24 hours with a customized proposal.",
      });
      setSubmittedName(validatedData.firstName);
      setIsSubmitted(true);
      window.scrollTo(0, 0);
      setFormData({
        firstName: '', lastName: '', email: '', phone: '', company: '', industry: '',
        businessSize: '', primaryService: '', projectType: '', budget: '', timeline: '',
        projectDetails: '', currentChallenges: '', goals: '', source: 'marketing-landing'
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const firstError = error.errors[0];
        toast({ title: "Validation Error", description: firstError.message, variant: "destructive" });
      } else {
        toast({ title: "Error", description: "Failed to submit your request. Please try again.", variant: "destructive" });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setSubmittedName('');
  }

  if (isSubmitted) {
    return <ThankYouPage name={submittedName} onReset={handleResetForm} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-10 md:py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                🏆 Ranked #5 in MMA SMARTIES Business Impact Index
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Transform Your Business with <span className="text-primary">Award-Winning</span> Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Join 300+ global brands who've achieved remarkable growth with our integrated
                creative, technology, and media solutions. Get a custom strategy in 24 hours.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {/* ...CheckCircle items... */}
              </div>
              <div className="flex flex-col lg:flex-row md:flex-row items-center gap-4">
                <Button
                  size="lg"
                  className="rounded-full px-8"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Free Strategy Session
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Link to="/work">
                  <Button variant="outline" size="lg" className="rounded-full px-8">
                    View Case Studies
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* ...Metric Cards... */}
              </div>
            </div>
          </div>

          {/* --- CONTACT FORM SECTION (UPDATED) --- */}
          <section id="contact-form" className="py-2 mt-[4rem]">
            <div className="max-w-container mx-auto px-6 py-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Ready to Transform Your Business?
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Get a personalized strategy and quote tailored to your specific industry,
                    business size, and objectives. Our team will respond within 24 hours.
                  </p>
                  <div className="space-y-6">
                    {/* ...Benefit items... */}
                  </div>
                  {currentCaseStudy && (
                    <div className="mt-8 p-6 bg-primary/5 rounded-2xl border border-primary/20">
                      <h4 className="font-semibold text-foreground mb-2">Industry Success Story</h4>
                      <p className="text-muted-foreground italic">"{currentCaseStudy}"</p>
                    </div>
                  )}
                </div>

                <Card className="p-8">
                  <CardHeader className="px-0 pt-0">
                    {/* --- UPDATED --- */}
                    <CardTitle className="text-2xl text-white">Let's Connect</CardTitle>
                    <CardDescription className='text-white'>
                      Choose your preferred way to get in touch with us.
                    </CardDescription>
                  </CardHeader>

                  {/* --- NEW: TABS --- */}
                  <div className="flex w-full bg-muted/50 p-1 rounded-lg mb-6">
                    <button
                      onClick={() => setActiveTab('form')}
                      className={`w-1/2 p-2 rounded-md text-sm font-medium transition-colors ${
                        activeTab === 'form' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-muted'
                      }`}
                    >
                      Get a Full Strategy
                    </button>
                    <button
                      onClick={() => setActiveTab('whatsapp')}
                      className={`w-1/2 p-2 rounded-md text-sm font-medium transition-colors ${
                        activeTab === 'whatsapp' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-muted'
                      }`}
                    >
                      Connect on WhatsApp
                    </button>
                  </div>

                  {/* --- CONDITIONAL RENDER: FORM --- */}
                  {activeTab === 'form' && (
                    <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in duration-300">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="flex items-center gap-2">
                            <MessageSquare className="w-4 h-4" /> First Name *
                          </Label>
                          <Input id="firstName" value={formData.firstName} onChange={(e) => handleChange('firstName', e.target.value)} placeholder="John" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" value={formData.lastName} onChange={(e) => handleChange('lastName', e.target.value)} placeholder="Smith" required />
                        </div>
                      </div>
                      {/* ... All other form fields remain here ... */}
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-primary hover:bg-primary/90 text-[#1f1f1f] font-semibold py-4 rounded-xl transition-all duration-300 hover:scale-105"
                      >
                        {isLoading && <Loader2 className="w-5 h-5 mr-2 animate-spin" />}
                        {isLoading ? 'Submitting...' : 'Get My Custom Strategy Now'}
                      </Button>
                      <p className="text-xs text-muted-foreground text-center">
                        By submitting this form, you agree to our privacy policy.
                      </p>
                    </form>
                  )}

                  {/* --- CONDITIONAL RENDER: WHATSAPP --- */}
                  {activeTab === 'whatsapp' && (
                    <div className="text-center animate-in fade-in duration-300">
                      <h3 className="text-lg font-semibold text-foreground mb-2">Have a Quick Question?</h3>
                      <p className="text-muted-foreground mb-6">
                        Tap the button below to start a chat with our team directly on WhatsApp. We're here to help!
                      </p>
                      <a
                        href="https://wa.me/916283075131" // IMPORTANT: Replace with your actual WhatsApp number including country code
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-block"
                      >
                        <Button
                          className="w-full bg-primary hover:bg-primary/90 text-[#1f1f1f] font-semibold py-4 rounded-xl transition-all duration-300 hover:scale-105"
                        >
                          <MessageSquare className="w-5 h-5 mr-2" />
                          Connect on WhatsApp
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

      {/* ... Other Sections (Services, Process, etc.) ... */}
      <Footer />
    </div>
  );
};

export default Marketing;
