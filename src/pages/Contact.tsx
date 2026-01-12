import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { FAQSection } from "@/components/FAQSection";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageSquare, Globe, ArrowRight } from "lucide-react";

const offices = [
  {
    city: "Bangalore",
    address: "OXFORD TOWER-2, Door no. 901 8th floor, 139, Kodihalli, Bengaluru, Karnataka 560008",
    phone: "+91 8769626027",
    email: "admin@inowix.in",
    timezone: "IST (UTC +5:30)"
  },
  {
    city: "Delhi",
    address: "1-A, Khasra No. 275, First Floor, Westend Marg, Saidulajab, Saket, New Delhi, Delhi 110030",
    phone: "+91 8769626027",
    email: "admin@inowix.in",
    timezone: "IST (UTC +5:30)"
  },
  {
    city: "Chandigarh",
    address: "SBP South city , Zirakpur , Chandigarh",
    phone: "+91 8769626027",
    email: "admin@inowix.in",
    timezone: "IST (UTC +5:30)"
  }
];

const Contact = () => {
  const contactFAQs = [
    {
      id: 'response-time',
      question: 'How quickly do you respond to inquiries?',
      answer: 'We typically respond to all inquiries within 2-4 hours during business hours (9 AM - 7 PM IST).'
    },
    {
      id: 'consultation',
      question: 'Do you offer free consultations?',
      answer: 'Yes, we offer complimentary 30-minute consultation calls to discuss your project requirements.'
    },
    {
      id: 'project-start',
      question: 'How soon can we start working on our project?',
      answer: 'Typically, we can begin new projects within 1-2 weeks after contract signing and initial deposit.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-primary/30">
      <Header />

      <main className="pt-32">
        {/* Modern Hero Section */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new projects
            </div>

            <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-[1.05] mb-8">
              Let's build the <span className="text-zinc-500">future</span> together.
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Have an idea? Let's turn it into a reality. Our team of experts is ready to help you scale your digital presence.
            </p>
          </motion.div>
        </section>

        {/* Contact Grid */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="p-8 md:p-12 rounded-[2.5rem] bg-zinc-900/50 border border-white/5 backdrop-blur-xl shadow-2xl"
              >
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Send us a message</h2>
                    <p className="text-sm text-zinc-500">We usually respond within 24 hours.</p>
                  </div>
                </div>
                <ContactForm />
              </motion.div>
            </div>

            {/* Right Column: Info & Offices */}
            <div className="lg:col-span-5 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-12"
              >
                {/* Contact Highlights */}
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex items-center gap-6 p-6 rounded-3xl bg-zinc-900 border border-white/5 group hover:border-primary/20 transition-all">
                    <div className="p-4 rounded-2xl bg-primary/5 group-hover:bg-primary/10 transition-colors">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Email us at</div>
                      <div className="text-lg font-bold">admin@inowix.in</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 p-6 rounded-3xl bg-zinc-900 border border-white/5 group hover:border-primary/20 transition-all">
                    <div className="p-4 rounded-2xl bg-primary/5 group-hover:bg-primary/10 transition-colors">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Call us at</div>
                      <div className="text-lg font-bold">+91 8769626027</div>
                    </div>
                  </div>
                </div>

                {/* Office Locations */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500">Our Studios</h3>
                    <div className="h-px flex-1 bg-zinc-800" />
                  </div>

                  <div className="space-y-6">
                    {offices.map((office, index) => (
                      <div key={index} className="group">
                        <h4 className="text-xl font-bold mb-3 flex items-center gap-2 group-hover:text-primary transition-colors">
                          {office.city}
                          <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </h4>
                        <p className="text-sm text-zinc-500 leading-relaxed mb-4 max-w-sm">
                          {office.address}
                        </p>
                        <div className="flex items-center gap-3 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                          <Clock className="w-3 h-3" />
                          {office.timezone}
                        </div>
                        {index !== offices.length - 1 && <div className="h-px w-12 bg-zinc-800 mt-8" />}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <FAQSection
          title="Common Questions"
          subtitle="Everything you need to know about starting a project with us."
          faqs={contactFAQs}
        />
      </main>

      <Footer />
    </div>
  );
};

export default Contact;