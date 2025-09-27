import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

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