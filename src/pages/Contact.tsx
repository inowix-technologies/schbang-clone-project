import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const offices = [
  {
    city: "Mumbai",
    address: "Kamala Mills Compound, 301/302 Trade World, Tower D, Lower Parel, Mumbai, Maharashtra 400013",
    phone: "+91 963254875",
    email: "mumbai@schbang.com",
    time: "12:22 PM"
  },
  {
    city: "Bangalore", 
    address: "OXFORD TOWER-2, Door no. 901 8th floor, 139, Kodihalli, Bengaluru, Karnataka 560008",
    phone: "+91 963254875",
    email: "bangalore@schbang.com",
    time: "12:22 PM"
  },
  {
    city: "Delhi",
    address: "1-A, Khasra No. 275, First Floor, Westend Marg, Saidulajab, Saket, New Delhi, Delhi 110030", 
    phone: "+91 963254875",
    email: "delhi@schbang.com",
    time: "12:22 PM"
  },
  {
    city: "London",
    address: "15/F The Hennessy 256 Hennessy Road Wan Chai, Hong Kong",
    phone: "+44 20 7946 0958", 
    email: "london@schbang.com",
    time: "07:52 AM"
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-section">
        <div className="max-w-container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
              Let's Create Something Amazing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your brand? Get in touch with our team to discuss your next project
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-section">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Start Your Project
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="john@company.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <Input placeholder="Your Company" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service Interested In
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="brand">Brand Solutions</SelectItem>
                      <SelectItem value="tech">Tech Solutions</SelectItem>
                      <SelectItem value="media">Media Solutions</SelectItem>
                      <SelectItem value="research">Research Solutions</SelectItem>
                      <SelectItem value="film">Film & Photography</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Details
                  </label>
                  <Textarea 
                    placeholder="Tell us about your project..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full rounded-full py-3">
                  Send Message
                </Button>
              </form>
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

              {/* Office Locations */}
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="p-6 bg-muted rounded-xl">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-bold text-foreground">
                        {office.city}
                      </h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{office.time}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{office.address}</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-primary" />
                        <a href={`tel:${office.phone}`} className="text-primary hover:underline">
                          {office.phone}
                        </a>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-primary" />
                        <a href={`mailto:${office.email}`} className="text-primary hover:underline">
                          {office.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;