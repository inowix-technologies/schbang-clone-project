import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Palette, Zap, Camera, Layers, Users, Target, Globe, Sparkles, Shield, Rocket, Brain } from "lucide-react";
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
  // About FAQ data
  const aboutFAQs = [
    {
      id: 'company-story',
      question: 'What is the story behind Inowix?',
      answer: 'Inowix was founded with a mission to bridge the gap between Indian creative talent and global opportunities. Our name, derived from the UNIX shebang (#!), represents our technical roots and commitment to delivering "the whole shebang" - comprehensive, integrated solutions for our clients.'
    },
    {
      id: 'team-size',
      question: 'How large is your team?',
      answer: 'We have a diverse team of 1200+ specialists across various domains including development, design, marketing, content creation, and project management. Our global team works from multiple locations to provide 24/7 support to our clients.'
    },
    {
      id: 'company-culture',
      question: 'What makes your company culture unique?',
      answer: 'Our culture is built on seven core principles: client success, accountability, creative excellence, win-win partnerships, cultural relevance, technology simplification, and fearless execution. We believe in creating an environment where creativity thrives and innovation flourishes.'
    },
    {
      id: 'client-approach',
      question: 'How do you approach client relationships?',
      answer: 'We view every client as a long-term partner. Our approach is consultative, collaborative, and results-driven. We invest time in understanding your business goals and work as an extension of your team to achieve sustainable growth.'
    },
    {
      id: 'quality-assurance',
      question: 'How do you ensure quality in your deliverables?',
      answer: 'Quality is embedded in our process through multiple checkpoints, peer reviews, automated testing, and client feedback loops. Our in-house production teams follow industry best practices and maintain high standards across all deliverables.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Enhanced Hero Section with Brand Colors */}
      <section className="py-section relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-[hsl(var(--light-blue))] to-[hsl(var(--light-purple))] rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-br from-[hsl(var(--light-green))] to-[hsl(var(--white-green))] rounded-full blur-2xl opacity-20 animate-pulse delay-1000"></div>
        
        <div className="max-w-container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 p-4 bg-gradient-to-r from-[hsl(var(--light-purple))] to-[hsl(var(--light-blue))] rounded-2xl shadow-[var(--glow-purple)] mb-8">
              <Brain className="w-8 h-8 text-purple-600" />
              <Sparkles className="w-6 h-6 text-blue-600 animate-pulse" />
              <Rocket className="w-6 h-6 text-indigo-600" />
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold mb-8 text-balance leading-tight bg-gradient-to-r from-white via-[hsl(var(--light-blue))] to-[hsl(var(--light-purple))] bg-clip-text text-transparent">
              We Bring The Whole Inowix!
            </h1>
            <div className="text-xl md:text-2xl text-foreground mb-6">
              <strong className="bg-gradient-to-r from-[hsl(var(--light-green))] to-[hsl(var(--white-green))] bg-clip-text text-transparent">
                Our mission - taking the best of Indian Creative Talent to the World!
              </strong>
            </div>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
              Inowix originally spelt as Shebang is a word created in the 17th Century and added to the lexicon of the English language, 
              and usually used as the phrase "the whole Inowix." At Inowix, we strive to deliver fully integrated and holistic marketing 
              solutions to our clients and unite interrelated services like creative, media and technology under one roof.
            </p>
            
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-[hsl(var(--light-blue))]">
                <Users className="w-4 h-4 text-[hsl(var(--light-blue))]" />
                <span className="text-sm text-white/80">1200+ Specialists</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-[hsl(var(--light-green))]">
                <Globe className="w-4 h-4 text-[hsl(var(--light-green))]" />
                <span className="text-sm text-white/80">300+ Brands</span>
              </div>
            </div>
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

      {/* Enhanced Our Principles with Brand Colors */}
      <section className="py-section bg-secondary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-[hsl(var(--light-blue))]/5 to-[hsl(var(--light-purple))]/5"></div>
        
        <div className="max-w-container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 p-4 bg-gradient-to-r from-[hsl(var(--light-orange))] to-[hsl(var(--light-yellow))] rounded-2xl shadow-lg mb-6">
              <Shield className="w-8 h-8 text-orange-600" />
              <Target className="w-6 h-6 text-yellow-600" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-[hsl(var(--light-orange))] to-[hsl(var(--light-yellow))] bg-clip-text text-transparent">
              Our Principles
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => {
              const colorSchemes = [
                { bg: 'from-[hsl(var(--light-blue))] to-[hsl(var(--white-green))]', icon: 'text-blue-600', border: 'border-[hsl(var(--light-blue))]' },
                { bg: 'from-[hsl(var(--light-green))] to-[hsl(var(--light-yellow))]', icon: 'text-green-600', border: 'border-[hsl(var(--light-green))]' },
                { bg: 'from-[hsl(var(--light-purple))] to-[hsl(var(--light-pink))]', icon: 'text-purple-600', border: 'border-[hsl(var(--light-purple))]' },
                { bg: 'from-[hsl(var(--light-orange))] to-[hsl(var(--light-yellow))]', icon: 'text-orange-600', border: 'border-[hsl(var(--light-orange))]' },
                { bg: 'from-[hsl(var(--light-pink))] to-[hsl(var(--light-purple))]', icon: 'text-pink-600', border: 'border-[hsl(var(--light-pink))]' },
                { bg: 'from-[hsl(var(--light-blue))] to-[hsl(var(--light-purple))]', icon: 'text-indigo-600', border: 'border-[hsl(var(--light-blue))]' },
                { bg: 'from-[hsl(var(--white-green))] to-[hsl(var(--light-green))]', icon: 'text-teal-600', border: 'border-[hsl(var(--white-green))]' }
              ];
              const scheme = colorSchemes[index % colorSchemes.length];
              
              return (
                <div 
                  key={index} 
                  className={`bg-background/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 border ${scheme.border} group`}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${scheme.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <principle.icon className={`w-8 h-8 ${scheme.icon}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              );
            })}
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

      {/* Enhanced CTA Section */}
      <section className="py-section bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--light-blue))]/20 via-transparent to-[hsl(var(--light-purple))]/20"></div>
        
        <div className="max-w-container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-3 p-4 bg-white/20 backdrop-blur-sm rounded-2xl mb-8">
            <Rocket className="w-8 h-8 text-white" />
            <Sparkles className="w-6 h-6 text-white animate-pulse" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-8">
            Ready to Create a Inowix?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's work together to transform your brand and create something extraordinary.
          </p>
          <Button variant="secondary" className="rounded-full px-8 py-3 text-lg hover:scale-105 transition-transform duration-300 shadow-lg">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        title="About Inowix FAQ"
        subtitle="Learn more about our company, culture, and approach to delivering exceptional results"
        faqs={aboutFAQs}
        colorScheme="green"
      />

      <Footer />
    </div>
  );
};

export default About;