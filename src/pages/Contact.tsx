import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

const Contact = () => {
  const offices = [
    { city: "Bangalore", address: "Electronic City" },
    { city: "Mumbai", address: "Andheri East" },
    { city: "Delhi", address: "Connaught Place" },
    { city: "Dubai", address: "Business Bay" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-28 pb-24">
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Let's build<br />
              <span className="text-white/50">something great</span>
            </h1>
            <p className="text-white/50 text-base md:text-lg max-w-xl">
              Start a conversation. We respond within 24 hours.
            </p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-16 md:mb-24">
            
            {/* Form Section */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-10">
              
              {/* Quick Contact */}
              <div>
                <h3 className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-5">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:admin@inowix.in"
                    className="group flex items-center gap-4 p-4 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all"
                  >
                    <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-white/50 text-xs mb-1">Email</div>
                      <div className="text-white font-medium text-sm">admin@inowix.in</div>
                    </div>
                  </a>

                  <a
                    href="tel:+918769626027"
                    className="group flex items-center gap-4 p-4 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all"
                  >
                    <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-white/50 text-xs mb-1">Phone</div>
                      <div className="text-white font-medium text-sm">+91 87696 26027</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Offices */}
              <div>
                <h3 className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-5">
                  Our Offices
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {offices.map((office) => (
                    <div
                      key={office.city}
                      className="p-4 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-white/50" />
                        <span className="text-white font-medium text-sm">{office.city}</span>
                      </div>
                      <p className="text-white/50 text-xs">{office.address}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-white/50" />
                  <h4 className="text-white font-medium text-sm">Response Time</h4>
                </div>
                <p className="text-white/50 text-xs leading-relaxed">
                  We typically respond within 24 hours. For urgent inquiries, call us directly.
                </p>
              </div>

            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 md:mt-24 pt-16 md:pt-20 border-t border-white/10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                Prefer to discuss your project?
              </h2>
              <p className="text-white/50 mb-6 md:mb-8 text-sm md:text-base">
                Schedule a free consultation call with our team.
              </p>
              <a
                href="mailto:admin@inowix.in?subject=Schedule Consultation"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-white/90 transition-all"
              >
                Schedule a Call
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
