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

// --- NEW Thank You Page Component ---
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

// Enhanced form schema
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

// Industry options with targeted case studies
const industries = [
  { value: "technology", label: "Technology & Software", caseStudy: "Helped 50+ tech startups scale from MVP to market leader" },
  { value: "ecommerce", label: "E-commerce & Retail", caseStudy: "Increased online sales by 300% for retail brands" },
  { value: "healthcare", label: "Healthcare & Medical", caseStudy: "Streamlined patient engagement for 20+ medical practices" },
  { value: "finance", label: "Finance & Banking", caseStudy: "Enhanced digital banking experience for 1M+ users" },
  { value: "education", label: "Education & E-learning", caseStudy: "Built learning platforms serving 100K+ students" },
  { value: "realestate", label: "Real Estate", caseStudy: "Digitized property management for major real estate firms" },
  { value: "hospitality", label: "Hospitality & Travel", caseStudy: "Boosted booking conversions by 250% for hotel chains" },
  { value: "manufacturing", label: "Manufacturing & Industrial", caseStudy: "Optimized supply chain operations for global manufacturers" },
  { value: "nonprofits", label: "Non-profits & NGOs", caseStudy: "Amplified social impact reach by 400% for NGOs" },
  { value: "other", label: "Other", caseStudy: "Custom solutions for unique business challenges" }
];

const businessSizes = [
  { value: "startup", label: "Startup (1-10 employees)", services: ["MVP Development", "Brand Identity", "Digital Marketing Launch"] },
  { value: "small", label: "Small Business (11-50 employees)", services: ["Website Redesign", "Marketing Automation", "Brand Expansion"] },
  { value: "medium", label: "Medium Business (51-200 employees)", services: ["Digital Transformation", "Advanced Analytics", "Multi-channel Marketing"] },
  { value: "large", label: "Large Enterprise (200+ employees)", services: ["Enterprise Solutions", "Global Brand Management", "Complex Integrations"] }
];

const services = [
  {
    value: "brand",
    label: "Brand Solutions",
    description: "Strategic brand development and positioning",
    subServices: ["Brand Strategy", "Brand Identity", "Brand Positioning", "Brand Guidelines", "Rebranding"],
    caseStudy: "Transformed 300+ brands with strategic positioning that increased market share by 45%"
  },
  {
    value: "tech",
    label: "Tech Solutions", 
    description: "Web development, mobile apps, and digital platforms",
    subServices: ["Web Development", "Mobile Apps", "E-commerce", "UI/UX Design", "Custom Software"],
    caseStudy: "Built scalable tech solutions that handle 10M+ daily users"
  },
  {
    value: "media",
    label: "Media Solutions",
    description: "Performance marketing and advertising",
    subServices: ["Media Planning", "Paid Advertising", "Performance Marketing", "Media Analytics", "Social Media"],
    caseStudy: "Generated $50M+ in revenue for clients through strategic media campaigns"
  },
  {
    value: "research",
    label: "Research Solutions",
    description: "Market research and data analytics",
    subServices: ["Market Research", "Consumer Insights", "Data Analytics", "Competitive Analysis", "User Research"],
    caseStudy: "Provided insights that led to 80% success rate in new product launches"
  },
  {
    value: "film",
    label: "Film & Photography",
    description: "Visual content and production",
    subServices: ["Ad Films", "Product Photography", "Brand Videos", "Social Content", "Animation"],
    caseStudy: "Created viral content with 100M+ total views across campaigns"
  }
];

const Marketing = () => {
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
  const [availableServices, setAvailableServices] = useState<string[]>([]);
  const [projectTypes, setProjectTypes] = useState<string[]>([]);
  const { toast } = useToast();

  // --- NEW state for handling form submission status ---
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  // Dynamic form logic - update case studies and options based on selections
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

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
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

      const { error } = await supabase
        .from('contact_leads')
        .insert([leadData]);

      if (error) throw error;

      toast({
        title: "Thank you for your interest!",
        description: "Our team will review your project details and contact you within 24 hours with a customized proposal.",
      });

      // --- MODIFIED: Set submission status to true and store name for personalization ---
      setSubmittedName(validatedData.firstName);
      setIsSubmitted(true);
      window.scrollTo(0, 0); // Scroll to top for the new page

      // Reset form
      setFormData({
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

    } catch (error) {
      if (error instanceof z.ZodError) {
        const firstError = error.errors[0];
        toast({
          title: "Validation Error",
          description: firstError.message,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to submit your request. Please try again.",
          variant: "destructive"
        });
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  // --- NEW: Function to reset the form and show the form page again ---
  const handleResetForm = () => {
    setIsSubmitted(false);
    setSubmittedName('');
  }

  // --- NEW: Conditional rendering logic ---
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
                Transform Your Business with 
                <span className="text-primary"> Award-Winning</span> Solutions
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Join 300+ global brands who've achieved remarkable growth with our integrated 
                creative, technology, and media solutions. Get a custom strategy in 24 hours.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium">1200+ Specialists</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium">10+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium">Award-Winning Work</span>
                </div>
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
                <Button  variant="outline" size="lg" className="rounded-full px-8">
                  View Case Studies
                </Button>
                </Link>
              </div>
            </div>

            
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-8 h-8 text-green-500" />
                    <div>
                      <p className="text-2xl font-bold text-green-500">300%</p>
                      <p className="text-sm text-muted-foreground">ROI Increase</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-8 h-8 text-blue-500" />
                    <div>
                      <p className="text-2xl font-bold text-blue-500">300+</p>
                      <p className="text-sm text-muted-foreground">Brands Served</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="w-8 h-8 text-yellow-500" />
                    <div>
                      <p className="text-2xl font-bold text-yellow-500">50+</p>
                      <p className="text-sm text-muted-foreground">Awards Won</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-8 h-8 text-purple-500" />
                    <div>
                      <p className="text-2xl font-bold text-purple-500">24hr</p>
                      <p className="text-sm text-muted-foreground">Response Time</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

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
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Risk-Free Consultation</h4>
                    <p className="text-muted-foreground">No commitment required. Get expert insights and recommendations at no cost.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Fast Response</h4>
                    <p className="text-muted-foreground">Our team reviews every inquiry and responds with a detailed proposal within 24 hours.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Expert Team</h4>
                    <p className="text-muted-foreground">Work directly with our 1200+ specialists across all disciplines.</p>
                  </div>
                </div>
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
                <CardTitle className="text-2xl text-white">Get Your Custom Strategy</CardTitle>
                <CardDescription className='text-white'>
                  Tell us about your project and we'll create a tailored solution for your business.
                </CardDescription>
              </CardHeader>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleChange('firstName', e.target.value)}
                      placeholder="John"
                      required
                      data-testid="input-firstName"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleChange('lastName', e.target.value)}
                      placeholder="Smith"
                      required
                      data-testid="input-lastName"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="john@company.com"
                      required
                      data-testid="input-email"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      required
                      data-testid="input-phone"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="flex items-center gap-2">
                    <Building className="w-4 h-4" />
                    Company Name *
                  </Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    placeholder="Your Company Name"
                    required
                    data-testid="input-company"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry *</Label>
                    <Select 
                      value={formData.industry} 
                      onValueChange={(value) => handleChange('industry', value)}
                    >
                      <SelectTrigger data-testid="select-industry">
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        {industries.map((industry) => (
                          <SelectItem key={industry.value} value={industry.value}>
                            {industry.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="businessSize">Business Size *</Label>
                    <Select 
                      value={formData.businessSize} 
                      onValueChange={(value) => handleChange('businessSize', value)}
                    >
                      <SelectTrigger data-testid="select-businessSize">
                        <SelectValue placeholder="Select business size" />
                      </SelectTrigger>
                      <SelectContent>
                        {businessSizes.map((size) => (
                          <SelectItem key={size.value} value={size.value}>
                            {size.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {availableServices.length > 0 && (
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-medium text-foreground mb-2">Recommended Services for Your Business Size:</h4>
                    <div className="flex flex-wrap gap-2">
                      {availableServices.map((service, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="primaryService">Primary Service Needed *</Label>
                    <Select 
                      value={formData.primaryService} 
                      onValueChange={(value) => handleChange('primaryService', value)}
                    >
                      <SelectTrigger data-testid="select-primaryService">
                        <SelectValue placeholder="Select primary service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.value} value={service.value}>
                            {service.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="projectType">Specific Project Type *</Label>
                    <Select 
                      value={formData.projectType} 
                      onValueChange={(value) => handleChange('projectType', value)}
                      disabled={!formData.primaryService}
                    >
                      <SelectTrigger data-testid="select-projectType">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        {projectTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range *</Label>
                    <Select 
                      value={formData.budget} 
                      onValueChange={(value) => handleChange('budget', value)}
                    >
                      <SelectTrigger data-testid="select-budget">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-10k">Under ₹25,000</SelectItem>
                        <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                        <SelectItem value="50k-100k">₹50,000 - ₹100,000</SelectItem>
                        <SelectItem value="100k-250k">₹100,000 - ₹250,000</SelectItem>
                        <SelectItem value="250k-500k">₹250,000 - ₹500,000</SelectItem>
                        <SelectItem value="over-500k">Over ₹500,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Timeline *</Label>
                    <Select 
                      value={formData.timeline} 
                      onValueChange={(value) => handleChange('timeline', value)}
                    >
                      <SelectTrigger data-testid="select-timeline">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP</SelectItem>
                        <SelectItem value="1-month">Within 1 month</SelectItem>
                        <SelectItem value="2-3-months">2-3 months</SelectItem>
                        <SelectItem value="3-6-months">3-6 months</SelectItem>
                        <SelectItem value="6-12-months">6-12 months</SelectItem>
                        <SelectItem value="planning">Just planning ahead</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectDetails">Project Details *</Label>
                  <Textarea
                    id="projectDetails"
                    value={formData.projectDetails}
                    onChange={(e) => handleChange('projectDetails', e.target.value)}
                    placeholder="Please describe your project, objectives, and what you're looking to achieve..."
                    className="min-h-32"
                    required
                    data-testid="textarea-projectDetails"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currentChallenges">Current Challenges (Optional)</Label>
                  <Textarea
                    id="currentChallenges"
                    value={formData.currentChallenges}
                    onChange={(e) => handleChange('currentChallenges', e.target.value)}
                    placeholder="What challenges are you currently facing in your business?"
                    className="min-h-24"
                    data-testid="textarea-currentChallenges"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="goals">Specific Goals (Optional)</Label>
                  <Textarea
                    id="goals"
                    value={formData.goals}
                    onChange={(e) => handleChange('goals', e.target.value)}
                    placeholder="What specific goals do you want to achieve with this project?"
                    className="min-h-24"
                    data-testid="textarea-goals"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-primary/90 text-[#1f1f1f] font-semibold py-4 rounded-xl transition-all duration-300 hover:scale-105"
                  data-testid="button-submit"
                >
                  {isLoading && <Loader2 className="w-5 h-5 mr-2 animate-spin" />}
                  {isLoading ? 'Submitting Your Request...' : 'Get My Custom Strategy Now'}
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy. 
                  We'll contact you within 24 hours with a customized proposal.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-section">
        <div className="max-w-container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Comprehensive Solutions for Modern Businesses
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From brand strategy to technology implementation, we offer end-to-end solutions 
              that drive measurable business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#1f1f1f] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {service.value === 'brand' && <Palette className="w-8 h-8 text-primary" />}
                    {service.value === 'tech' && <Code2 className="w-8 h-8 text-primary" />}
                    {service.value === 'media' && <Megaphone className="w-8 h-8 text-primary" />}
                    {service.value === 'research' && <BarChart3 className="w-8 h-8 text-primary" />}
                    {service.value === 'film' && <Star className="w-8 h-8 text-primary" />}
                  </div>
                  <CardTitle className="text-xl">{service.label}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-[#1f1f1f]">Key Services:</p>
                    <div className="flex flex-wrap gap-2">
                      {service.subServices.slice(0, 3).map((subService, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {subService}
                        </Badge>
                      ))}
                      {service.subServices.length > 3 && (
                        <Badge variant="outline" className="text-xs text-[#1f1f1f]">
                          +{service.subServices.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <div className="pt-4 border-t">
                      <p className="text-xs text-muted-foreground italic">
                        "{service.caseStudy}"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-section bg-secondary">
        <div className="max-w-container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Proven Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A structured approach that has delivered success for 300+ global brands
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Think", description: "Deep analysis of your business, market, and objectives", icon: Lightbulb },
              { step: 2, title: "Plan", description: "Strategic roadmap with clear milestones and deliverables", icon: Target },
              { step: 3, title: "Execute", description: "Fearless implementation with our expert team", icon: Zap },
              { step: 4, title: "Measure", description: "Continuous optimization based on real data and results", icon: BarChart3 }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <phase.icon className="w-10 h-10 text-[#1f1f1f]" />
                </div>
                <div className="mb-4">
                  <span className="text-sm font-medium text-primary">Step {phase.step}</span>
                  <h3 className="text-2xl font-bold text-foreground">{phase.title}</h3>
                </div>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Marketing;