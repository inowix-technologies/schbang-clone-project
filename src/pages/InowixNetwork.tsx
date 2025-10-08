import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Film, Camera, Mic, Video, Award, Sparkles, Globe, Users } from "lucide-react";

const InowixNetwork = () => {
  const networks = [
    {
      icon: <Film className="w-12 h-12" />,
      title: "Inowix Motion Pictures",
      description: "Creating cinematic excellence with high-quality ad films and branded content that tells your story.",
      color: "from-[#B9D9FF] to-[#CDC3FF]",
      services: ["Ad Films", "Brand Videos", "Corporate Films", "Documentary Production"]
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Content Hub",
      description: "Rapid video content creation at scale. From concept to delivery, we produce content that resonates globally.",
      color: "from-[#D8FCC7] to-[#C7EFFC]",
      services: ["Social Media Content", "Explainer Videos", "Product Videos", "Tutorial Series"]
    },
    {
      icon: <Mic className="w-12 h-12" />,
      title: "Inowix 808",
      description: "Premium audio production services. Creating branded audio experiences that capture attention and build connections.",
      color: "from-[#FFF0BF] to-[#FFC8A9]",
      services: ["Audio Branding", "Podcast Production", "Voice Overs", "Sound Design"]
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: "Photography Studio",
      description: "Professional photography services that bring your brand vision to life through stunning visual storytelling.",
      color: "from-[#FFB9E3] to-[#FFB9B9]",
      services: ["Product Photography", "Corporate Portraits", "Event Coverage", "Lifestyle Shoots"]
    }
  ];

  const achievements = [
    { number: "500+", label: "Projects Delivered" },
    { number: "50+", label: "Brand Partners" },
    { number: "100M+", label: "Views Generated" },
    { number: "15+", label: "Industry Awards" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[#B9D9FF]/20 via-[#D8FCC7]/20 to-[#FFB9E3]/20">
        <div className="max-w-container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Inowix Network</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary via-[#CDC3FF] to-[#FFB9E3] bg-clip-text text-transparent">
            Film, Photography & Audio Excellence
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive content creation services under one roof. From cinematic ad films to podcast production, 
            we deliver premium quality content that elevates your brand.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-[#CDC3FF] hover:opacity-90">
              <Video className="w-4 h-4 mr-2" />
              View Our Work
            </Button>
            <Button size="lg" variant="outline">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Networks Grid */}
      <section className="py-20 px-6">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Our Network
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized studios working together to deliver exceptional content experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {networks.map((network, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${network.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${network.color} mb-6`}>
                    <div className="text-foreground">
                      {network.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {network.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {network.description}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground mb-3">Key Services:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {network.services.map((service, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          <span className="text-sm text-muted-foreground">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/5 via-transparent to-[#D8FCC7]/5">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="relative inline-block mb-3">
                  <Award className="w-8 h-8 text-primary/20 absolute -top-2 -right-2" />
                  <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-[#CDC3FF] bg-clip-text text-transparent">
                    {achievement.number}
                  </h3>
                </div>
                <p className="text-muted-foreground font-medium">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-[#D8FCC7]/10 to-[#FFB9E3]/10 border border-primary/20">
            <Users className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's bring your vision to life with our comprehensive content creation services. 
              From concept to delivery, we've got you covered.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-[#CDC3FF] hover:opacity-90">
                Start Your Project
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/contact-us">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InowixNetwork;
