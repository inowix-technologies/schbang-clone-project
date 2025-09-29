import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Code2, Megaphone, BarChart3, Users, Target, Palette, Zap, Link } from "lucide-react";
import techIllustration from "@/assets/tech-illustration.jpg";
import creativeIllustration from "@/assets/creative-illustration.jpg";

const solutions = [
  {
    title: "Brand Solutions",
    description: "We provide customised solutions to meet partner needs. We understand the objectives and requirements to develop strategies & create holistic consumer experiences and fully serve clients.",
    services: ["Brand Strategy", "Brand Identity", "Brand Positioning", "Brand Guidelines"],
    href: "/solutions/brand-strategy",
    image: creativeIllustration,
    icon: Palette,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Tech Solutions", 
    description: "We optimize People, Processes and Technology. Map processes, align to objectives and maximize team efficiency with tech to improve the customer experience.",
    services: ["Web Development", "Mobile Apps", "E-commerce", "UI/UX Design"],
    href: "/solutions/technology-solutions",
    image: techIllustration,
    icon: Code2,
    color: "from-blue-500 to-purple-500"
  },
  {
    title: "Media Solutions",
    description: "Drive results through strategic, audience-aligned ad placement across channels using the right messaging at the optimal time.",
    services: ["Media Planning", "Paid Advertising", "Performance Marketing", "Media Analytics"],
    href: "/solutions/media-solutions", 
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=400&fit=crop",
    icon: Megaphone,
    color: "from-green-500 to-teal-500"
  },
  {
    title: "Research Solutions",
    description: "We provide specialized market research for businesses using qualitative and quantitative methods. We integrate market research with our services to connect research, strategy and implementation.",
    services: ["Market Research", "Consumer Insights", "Data Analytics", "Competitive Analysis"],
    href: "/solutions/research-data-and-analytics-solutions",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    icon: BarChart3,
    color: "from-purple-500 to-pink-500"
  }
];

const features = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay ahead of trends and implement cutting-edge strategies for maximum impact."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "1200+ specialists across all disciplines working collaboratively on your success."
  },
  {
    icon: Target,
    title: "Results Driven", 
    description: "Every solution is designed to deliver measurable business outcomes and ROI."
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Rapid turnaround times without compromising on quality or attention to detail."
  }
];

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
        <div className="max-w-container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-2 text-primary font-medium mb-6">
              <Zap className="w-4 h-4" />
              Comprehensive Solutions
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-foreground mb-8 text-balance leading-tight">
              Transform Your Business with Integrated Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              From brand strategy to technology implementation, we deliver end-to-end solutions 
              that drive measurable growth and lasting impact for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-section bg-secondary">
        <div className="max-w-container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
              Why Choose Our Solutions?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-background rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-section">
        <div className="max-w-container mx-auto px-6">
          <div className="space-y-32">
            {solutions.map((solution, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                      {solution.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="font-semibold text-foreground mb-6 text-xl">Key Services:</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {solution.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-foreground font-medium">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="rounded-full px-8 py-3">
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="relative">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Floating gradient */}
                    <div className={`absolute -inset-4 bg-gradient-to-r ${solution.color} rounded-2xl blur-2xl opacity-20 -z-10`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section bg-primary">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
            Let's discuss how our integrated solutions can help you achieve your business goals 
            and create lasting impact in your industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" className="rounded-full px-8 py-3 text-lg">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button variant="outline" className="rounded-full px-8 py-3 text-lg border-primary-foreground/20 text-white hover:bg-primary-foreground/10">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;