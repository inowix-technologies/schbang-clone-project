import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Palette, Zap, Camera, Layers, Users, Target, Globe } from "lucide-react";
import techIllustration from "@/assets/tech-illustration.jpg";
import creativeIllustration from "@/assets/creative-illustration.jpg";

const principles = [
  {
    icon: Target,
    title: "Client's Business Wins, We Win.",
    description: "Fundamentally, we will always be a services-first company that ensures our clients' businesses fit their definition of success. As Inowix, we must deliver the whole Inowix by pushing ourselves and those around us to work in the best interests of our partners."
  },
  {
    icon: Users,
    title: "Our Word is our Bond.",
    description: "We work in fast and complex environments where we deal with multiple stakeholders to deliver speed, agility and results to our clients. It is integral to hold ourselves accountable for our promises and strive to deliver on those promises without fail."
  },
  {
    icon: Palette,
    title: "Creativity is Sacred, Aesthetics are God.",
    description: "We create path-breaking work that challenges the status quo and positively impacts our clients' businesses. We make sure how we communicate, and design helps our brand stand out."
  },
  {
    icon: Globe,
    title: "Partnerships with Win-Win Attitude.",
    description: "We view all our stakeholders as equal partners and approach all partnerships with a win-win attitude to ensure both parties succeed."
  },
  {
    icon: Zap,
    title: "Be Culturally Relevant, Always.",
    description: "We exist to make brands culturally relevant by being consumer-centric, ensuring seamless communication, and providing top-notch consumer experiences."
  },
  {
    icon: Code,
    title: "Technology to Simplify.",
    description: "We believe any technology's governing principle is to simplify the consumer's life and provide immersive user experiences. Therefore, technology to simplify is our guiding light to create effortless and effective outputs for our clients."
  },
  {
    icon: Layers,
    title: "Think. Plan. And then execute fearlessly.",
    description: "Raw energy is powerful, but raw energy channeled correctly is advantageous. We internalize this to think deeply, plan purposefully, and execute fearlessly."
  }
];

const whatDefinesUs = [
  {
    title: "We're Technology-Focused.",
    description: "We believe in embracing new possibilities, whether it's some of the sites we've created on Magento where a completely customised checkout process linked with deep remarketing tools prevails or the customisations on WordPress where we've built front ends on react.js to deliver the fastest load times possible.",
    image: techIllustration,
    reverse: false
  },
  {
    title: "We're Not Just Advertisers. We're Creators.",
    description: "Advertising, we believe, is all about creating culture. And we can't be calling ourselves creators of culture if we aren't making attempts to shape some of it ourselves. For example, look up our work with Humans of Bombay, Our work on Mental Health Awareness, and our project on Kindness Unlimited.",
    image: creativeIllustration,
    reverse: true
  },
  {
    title: "We're Design and Digital.",
    description: "Inowix is derived from a UNIX code operative which is a testament to our digital DNA. Every piece of work we create is created built to elevate customer experience which we believe comes with finesse in design. You'll see it in the work we deliver across brands for their creative or experiential work.",
    image: techIllustration,
    reverse: false
  },
  {
    title: "We're Your Personal Production House.",
    description: "Inowix Motion Pictures, Inowix 808 and Global Content Hub, our in-house production teams deliver blazing-fast turnarounds with the least possible iterations, resulting in not just a high-quality product but workflows that are sustainable in the long term.",
    image: creativeIllustration,
    reverse: true
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-section">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-7xl font-bold text-foreground mb-8 text-balance leading-tight">
              We Bring The Whole Inowix!
            </h1>
            <div className="text-xl md:text-2xl text-foreground mb-6">
              <strong>Our mission - taking the best of Indian Creative Talent to the World!</strong>
            </div>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
              Inowix originally spelt as Shebang is a word created in the 17th Century and added to the lexicon of the English language, 
              and usually used as the phrase "the whole Inowix." At Inowix, we strive to deliver fully integrated and holistic marketing 
              solutions to our clients and unite interrelated services like creative, media and technology under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-section">
        <div className="max-w-container mx-auto px-6">
          <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-primary/40 rounded-2xl overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-background/10 backdrop-blur-sm rounded-full p-8 group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[12px] border-l-background border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 text-background">
              <p className="text-sm opacity-80">Meet Inowix | Agency Reel</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Defines Us Sections */}
      <section className="py-section">
        <div className="max-w-container mx-auto px-6">
          <div className="space-y-32">
            {whatDefinesUs.map((item, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                item.reverse ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={item.reverse ? 'lg:col-start-2' : ''}>
                  <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
                    {item.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className={item.reverse ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Principles */}
      <section className="py-section bg-secondary">
        <div className="max-w-container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
              Our Principles
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="bg-background rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <principle.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-section">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="text-5xl md:text-7xl font-bold text-primary mb-4">1200+</div>
              <p className="text-xl text-muted-foreground">Specialists</p>
            </div>
            <div className="p-8">  
              <div className="text-5xl md:text-7xl font-bold text-primary mb-4">300+</div>
              <p className="text-xl text-muted-foreground">Brands Worldwide</p>
            </div>
            <div className="p-8">
              <div className="text-5xl md:text-7xl font-bold text-primary mb-4">10+</div>
              <p className="text-xl text-muted-foreground">Years</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section bg-primary">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-8">
            Ready to Create a Inowix?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's work together to transform your brand and create something extraordinary.
          </p>
          <Button variant="secondary" className="rounded-full px-8 py-3 text-lg">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;