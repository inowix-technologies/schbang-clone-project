import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    title: "Brand Solutions",
    description: "We provide customised solutions to meet partner needs. We understand the objectives and requirements to develop strategies & create holistic consumer experiences and fully serve clients.",
    services: ["Brand Strategy", "Brand Identity", "Brand Positioning", "Brand Guidelines"],
    href: "/solutions/brand-strategy",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
  },
  {
    title: "Tech Solutions", 
    description: "We optimise People, Processes and Technology. Map processes, align to objectives and maximise team efficiency with tech to improve the customer experience.",
    services: ["Web Development", "Mobile Apps", "E-commerce", "UI/UX Design"],
    href: "/solutions/technology-solutions",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
  },
  {
    title: "Media Solutions",
    description: "Drive results through strategic, audience-aligned ad placement across channels using the right messaging at the optimal time.",
    services: ["Media Planning", "Paid Advertising", "Performance Marketing", "Media Analytics"],
    href: "/solutions/media-solutions", 
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=400&fit=crop"
  },
  {
    title: "Research Solutions",
    description: "We provide specialised market research for businesses using qualitative and quantitative methods. We integrate market research with our services to connect research, strategy and implementation.",
    services: ["Market Research", "Consumer Insights", "Data Analytics", "Competitive Analysis"],
    href: "/solutions/research-data-and-analytics-solutions",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
  }
];

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-section">
        <div className="max-w-container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
              Our Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions tailored to transform your business and drive growth
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-section">
        <div className="max-w-container mx-auto px-6">
          <div className="space-y-24">
            {solutions.map((solution, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    {solution.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="font-semibold text-foreground mb-4">Key Services:</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {solution.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <a
                    href={solution.href}
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;