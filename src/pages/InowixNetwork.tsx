import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Film, Camera, Mic, Video, Award, Sparkles, Globe, Users, Bot, Cpu, Smartphone, Code, BarChart3, CheckCircle } from "lucide-react";

// Placeholder for an illustration component
const IllustrationPlaceholder = () => (
  <div className="flex items-center justify-center w-full h-80 bg-gradient-to-br from-primary/10 to-[#D8FCC7]/10 rounded-2xl border border-primary/20">
    <p className="text-muted-foreground">Illustration Here</p>
  </div>
);

const InowixNetwork = () => {
  const creativeNetworks = [
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

  const techSolutions = [
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "Agentic AI & Automation",
      description: "Leverage our expertise in building advanced, custom Agentic AI solutions and AI assistants to automate complex workflows and drive efficiency.",
      color: "from-[#C3E5FF] to-[#A9C8FF]",
      services: ["Custom AI Agents", "Workflow Automation", "LLM Integration", "Process Optimization"]
    },
    {
        icon: <Bot className="w-12 h-12" />,
        title: "Intelligent Chatbots",
        description: "Develop unique, custom-trained chatbots that provide personalized customer experiences and streamline your support and sales processes.",
        color: "from-[#C7FCE4] to-[#A7E9D1]",
        services: ["Customer Support Bots", "Lead Gen Chatbots", "Internal Helpdesks", "Custom Training"]
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile & Web Applications",
      description: "We design and develop high-performance, scalable mobile and web applications tailored to your specific business needs and user expectations.",
      color: "from-[#FFDDB9] to-[#FFB9B9]",
      services: ["iOS & Android Apps", "React/Next.js Web Apps", "Progressive Web Apps", "UI/UX Design"]
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Custom CRM & Solutions",
      description: "From custom CRM platforms to bespoke enterprise software, we build robust solutions that solve unique business challenges and foster growth.",
      color: "from-[#E3D1FF] to-[#D0B5FF]",
      services: ["CRM Development", "ERP Solutions", "SaaS Platforms", "API Integration"]
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
            <span className="text-sm font-medium text-primary">The Inowix Network</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary via-[#CDC3FF] to-[#FFB9E3] bg-clip-text text-transparent">
            Creative Content & Advanced Technology
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A unified network of creative studios and tech experts. We deliver everything from cinematic ad films to advanced Agentic AI solutions, all under one roof.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-[#CDC3FF] hover:opacity-90" asChild>
                <a href="https://www.inowix.in/work">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    View Our Work
                </a>
            </Button>
            <Button size="lg" variant="outline">
              Get Started
            </Button>
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

      {/* Creative Networks Grid */}
      <section className="py-20 px-6">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Our Creative Network
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized studios working together to deliver exceptional content experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {creativeNetworks.map((network, index) => (
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

      {/* Tech Solutions Grid */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Advanced Technology Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building the future with custom AI, powerful applications, and robust software solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {techSolutions.map((solution, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${solution.color} mb-6`}>
                    <div className="text-foreground">
                      {solution.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {solution.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {solution.description}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground mb-3">Key Services:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {solution.services.map((service, idx) => (
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

      {/* Why Partner With Us Section */}
      <section className="py-20 px-6">
        <div className="max-w-container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Partner With Inowix?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We go beyond standard solutions. Our network is built on a foundation of deep expertise, allowing us to deliver truly unique, custom solutions that are tailored to your exact needs.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Fully Custom Solutions</h4>
                  <p className="text-muted-foreground">We don't use templates. Every project is a bespoke creation designed for your brand's unique challenges and goals.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Integrated Expertise</h4>
                  <p className="text-muted-foreground">Access a diverse team of creatives, engineers, and AI specialists working in synergy to bring your vision to life.</p>
                </div>
              </li>
               <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Future-Proof Technology</h4>
                  <p className="text-muted-foreground">We build with cutting-edge technology to ensure your solutions are scalable, robust, and ready for tomorrow.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <IllustrationPlaceholder />
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 px-6 bg-card/50">
          <div className="max-w-container mx-auto text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                  Powering Ambition for Industry Leaders
              </h2>
              <p className="text-muted-foreground mb-10">
                  We are proud to partner with big brands and innovative companies to create impactful results.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
                  {/* Replace these with your client logo SVGs or images */}
                  <span className="text-2xl font-medium text-muted-foreground/50">[ Brand Logo 1 ]</span>
                  <span className="text-2xl font-medium text-muted-foreground/50">[ Brand Logo 2 ]</span>
                  <span className="text-2xl font-medium text-muted-foreground/50">[ Brand Logo 3 ]</span>
                  <span className="text-2xl font-medium text-muted-foreground/50">[ Brand Logo 4 ]</span>
                  <span className="text-2xl font-medium text-muted-foreground/50">[ Brand Logo 5 ]</span>
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
              Let's bring your vision to life with our comprehensive creative and technology services. 
              From concept to delivery, we've got you covered.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-[#CDC3FF] hover:opacity-90" asChild>
                <a href="https://www.inowix.in/marketing">Start Your Project</a>
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
