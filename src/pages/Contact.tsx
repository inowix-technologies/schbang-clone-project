import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { FAQSection } from "@/components/FAQSection";
import { MapPin, Phone, Mail, Clock, MessageCircle, Headphones, Globe, Zap } from "lucide-react";

const offices = [
  {
    city: "Bangalore", 
    address: "OXFORD TOWER-2, Door no. 901 8th floor, 139, Kodihalli, Bengaluru, Karnataka 560008",
    phone: "+91 8769626027",
    email: "admin@inowix.in",
    time: "12:22 PM"
  },
  {
    city: "Delhi",
    address: "1-A, Khasra No. 275, First Floor, Westend Marg, Saidulajab, Saket, New Delhi, Delhi 110030", 
    phone: "+91 8769626027",
    email: "admin@inowix.in",
    time: "12:22 PM"
  },
  {
    city: "Chandigarh",
    address: "SBP South city , Zirakpur , Chandigarh",
    phone: "+91 8769626027", 
    email: "admin@inowix.in",
    time: "07:52 AM"
  }
];

const Contact = () => {
  // Contact FAQ data
  const contactFAQs = [
    {
      id: 'response-time',
      question: 'How quickly do you respond to inquiries?',
      answer: 'We typically respond to all inquiries within 2-4 hours during business hours (9 AM - 7 PM IST). For urgent matters, you can call us directly for immediate assistance.'
    },
    {
      id: 'consultation',
      question: 'Do you offer free consultations?',
      answer: 'Yes, we offer complimentary 30-minute consultation calls to discuss your project requirements, understand your goals, and provide initial recommendations. No obligations attached!'
    },
    {
      id: 'project-start',
      question: 'How soon can we start working on our project?',
      answer: 'Project start times depend on our current capacity and project complexity. Typically, we can begin new projects within 1-2 weeks after contract signing and initial payment.'
    },
    {
      id: 'communication',
      question: 'How do you handle communication during projects?',
      answer: 'We maintain transparent communication through regular updates, scheduled calls, project management tools, and dedicated account managers. You\'ll always know the project status and next steps.'
    },
    {
      id: 'meeting-options',
      question: 'Can we meet in person or only online?',
      answer: 'We offer both in-person meetings at our offices in Bangalore, Delhi, and Chandigarh, as well as virtual meetings via video calls. We adapt to your preferred communication style.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="py-section relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-[hsl(var(--light-blue))] to-[hsl(var(--light-purple))] rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-[hsl(var(--light-green))] to-[hsl(var(--white-green))] rounded-full blur-2xl opacity-20 animate-pulse delay-1000"></div>
        
        <div className="max-w-container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 p-4 bg-gradient-to-r from-[hsl(var(--light-blue))] to-[hsl(var(--light-purple))] rounded-2xl shadow-[var(--glow-blue)] mb-8">
              <MessageCircle className="w-8 h-8 text-blue-600" />
              <Headphones className="w-6 h-6 text-purple-600 animate-pulse" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-[hsl(var(--light-blue))] to-[hsl(var(--light-purple))] bg-clip-text text-transparent">
              Let's Create Something Amazing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your brand? Get in touch with our team to discuss your next project
            </p>
            
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-[hsl(var(--light-green))]">
                <Globe className="w-4 h-4 text-[hsl(var(--light-green))]" />
                <span className="text-sm text-white/80">3 Office Locations</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-[hsl(var(--light-orange))]">
                <Zap className="w-4 h-4 text-[hsl(var(--light-orange))]" />
                <span className="text-sm text-white/80">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-section">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Get In Touch
                </h2>
                <p className="text-muted-foreground mb-8">
                  We have offices across India and internationally. Reach out to the office nearest to you.
                </p>
              </div>

              {/* Enhanced Office Locations */}
              <div className="space-y-6">
                {offices.map((office, index) => {
                  const colorSchemes = [
                    { bg: 'from-[hsl(var(--light-blue))] to-[hsl(var(--white-green))]', border: 'border-[hsl(var(--light-blue))]' },
                    { bg: 'from-[hsl(var(--light-green))] to-[hsl(var(--light-yellow))]', border: 'border-[hsl(var(--light-green))]' },
                    { bg: 'from-[hsl(var(--light-purple))] to-[hsl(var(--light-pink))]', border: 'border-[hsl(var(--light-purple))]' }
                  ];
                  const scheme = colorSchemes[index % colorSchemes.length];
                  
                  return (
                    <div key={index} className={`p-6 bg-gradient-to-br ${scheme.bg} rounded-xl border ${scheme.border} hover:shadow-lg transition-all duration-300 group`}>
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-lg font-bold text-gray-800 group-hover:scale-105 transition-transform duration-300">
                          {office.city}
                        </h3>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span>{office.time}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-4 h-4 text-gray-700 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{office.address}</span>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <Phone className="w-4 h-4 text-gray-700" />
                          <a href={`tel:${office.phone}`} className="text-gray-700 hover:text-gray-900 transition-colors">
                            {office.phone}
                          </a>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <Mail className="w-4 h-4 text-gray-700" />
                          <a href={`mailto:${office.email}`} className="text-gray-700 hover:text-gray-900 transition-colors">
                            {office.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        title="Contact & Support FAQ"
        subtitle="Quick answers to common questions about getting in touch and working with us"
        faqs={contactFAQs}
        colorScheme="orange"
      />

      <Footer />
    </div>
  );
};

export default Contact;