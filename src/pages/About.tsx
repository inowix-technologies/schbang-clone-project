import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Button as MovingButton } from "@/components/ui/moving-border";
import { motion } from "framer-motion";
import { ArrowRight, Code, Palette, Zap, Camera, Layers, Users, Target, Globe, Sparkles, Shield, Rocket, Brain, Play, Award, TrendingUp, Clock, Search, Lightbulb, GitBranch, CheckCircle2, Monitor, Repeat } from "lucide-react";
import { Link } from "react-router-dom";
import techIllustration from "@/assets/tech-illustration.jpg";
import creativeIllustration from "@/assets/creative-illustration.jpg";
import { GradientMesh } from "@/components/ui/gradient-mesh";
import { FloatingShapes } from "@/components/ui/floating-shapes";
import { Particles } from "@/components/ui/particles";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

const principles = [
  {
    icon: Target,
    title: "Client's Business Wins, We Win.",
    description: "Fundamentally, we will always be a services-first company that ensures our clients' businesses fit their definition of success.",
    gradient: "from-orange-500/20 via-red-500/10 to-pink-500/10",
    iconColor: "text-orange-400"
  },
  {
    icon: Users,
    title: "Our Word is our Bond.",
    description: "We work in fast and complex environments where we deal with multiple stakeholders to deliver speed, agility and results.",
    gradient: "from-blue-500/20 via-cyan-500/10 to-teal-500/10",
    iconColor: "text-blue-400"
  },
  {
    icon: Palette,
    title: "Creativity is Sacred, Aesthetics are God.",
    description: "We create path-breaking work that challenges the status quo and positively impacts our clients' businesses.",
    gradient: "from-purple-500/20 via-pink-500/10 to-rose-500/10",
    iconColor: "text-purple-400"
  },
  {
    icon: Globe,
    title: "Partnerships with Win-Win Attitude.",
    description: "We view all our stakeholders as equal partners and approach all partnerships with a win-win attitude.",
    gradient: "from-green-500/20 via-emerald-500/10 to-teal-500/10",
    iconColor: "text-green-400"
  },
  {
    icon: Zap,
    title: "Be Culturally Relevant, Always.",
    description: "We exist to make brands culturally relevant by being consumer-centric and providing top-notch consumer experiences.",
    gradient: "from-yellow-500/20 via-orange-500/10 to-red-500/10",
    iconColor: "text-yellow-400"
  },
  {
    icon: Code,
    title: "Technology to Simplify.",
    description: "We believe any technology's governing principle is to simplify the consumer's life and provide immersive user experiences.",
    gradient: "from-indigo-500/20 via-blue-500/10 to-purple-500/10",
    iconColor: "text-indigo-400"
  },
  {
    icon: Layers,
    title: "Think. Plan. And then execute fearlessly.",
    description: "Raw energy channeled correctly is advantageous. We internalize this to think deeply, plan purposefully, and execute fearlessly.",
    gradient: "from-cyan-500/20 via-blue-500/10 to-indigo-500/10",
    iconColor: "text-cyan-400",
    featured: true
  }
];

const whatDefinesUs = [
  {
    title: "We're Technology-Focused.",
    description: "We believe in embracing new possibilities, whether it's some of the sites we've created on Magento where a completely customised checkout process linked with deep remarketing tools prevails or the customisations on WordPress where we've built front ends on react.js to deliver the fastest load times possible.",
    image: techIllustration,
    reverse: false,
    gradient: "from-blue-500/30 via-purple-500/20 to-indigo-500/20"
  },
  {
    title: "We're Not Just Advertisers. We're Creators.",
    description: "Advertising, we believe, is all about creating culture. And we can't be calling ourselves creators of culture if we aren't making attempts to shape some of it ourselves. For example, look up our work with Humans of Bombay, Our work on Mental Health Awareness, and our project on Kindness Unlimited.",
    image: creativeIllustration,
    reverse: true,
    gradient: "from-purple-500/30 via-pink-500/20 to-rose-500/20"
  },
  {
    title: "We're Design and Digital.",
    description: "Inowix is derived from a UNIX code operative which is a testament to our digital DNA. Every piece of work we create is created built to elevate customer experience which we believe comes with finesse in design.",
    image: techIllustration,
    reverse: false,
    gradient: "from-cyan-500/30 via-blue-500/20 to-purple-500/20"
  },
  {
    title: "We're Your Personal Production House.",
    description: "Inowix Motion Pictures, Inowix 808 and Global Content Hub, our in-house production teams deliver blazing-fast turnarounds with the least possible iterations, resulting in not just a high-quality product but workflows that are sustainable in the long term.",
    image: creativeIllustration,
    reverse: true,
    gradient: "from-orange-500/30 via-red-500/20 to-pink-500/20"
  }
];

const stats = [
  { icon: Users, value: "1200+", label: "Specialists", gradient: "from-blue-500 to-cyan-500" },
  { icon: Globe, value: "300+", label: "Global Brands", gradient: "from-purple-500 to-pink-500" },
  { icon: Clock, value: "10+", label: "Years Excellence", gradient: "from-green-500 to-emerald-500" }
];

const About = () => {
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
    <div className="min-h-screen bg-[#0F172A] text-white selection:bg-purple-500/30 relative overflow-hidden">
      <GradientMesh className="opacity-10" />
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-[70vh] sm:h-[80vh] md:h-[90vh] w-full flex md:items-center md:justify-center bg-[#0F172A] relative overflow-hidden py-12 sm:py-16 md:py-0">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full pt-20 md:pt-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 sm:mb-8"
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-purple-200">The Whole Inowix</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="hero-title mb-6 sm:mb-8 px-2 sm:px-0"
            >
              We Bring The <br />
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent italic">Whole Inowix!</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="lead max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 px-4 sm:px-0"
            >
              Taking the best of Indian Creative Talent to the World stage with integrated and holistic solutions.
            </motion.p>

            {/* Stats Grid with 3D Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-6 mb-16"
            >
              {stats.map((stat, index) => (
                <CardContainer key={index} containerClassName="py-0">
                  <CardBody className="w-full h-full bg-[#111827] border border-[#374151] rounded-2xl p-8 backdrop-blur-xl group/card min-w-[180px]">
                    <CardItem translateZ="50" className="w-full">
                      <div className="flex flex-col items-center text-center">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4 group-hover/card:scale-110 transition-transform`}>
                          <stat.icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="text-4xl font-bold mb-2 bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                        <div className="text-xs uppercase tracking-widest text-[#9CA3AF] font-medium">
                          {stat.label}
                        </div>
                      </div>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center"
            >
              <a href="#process">
                <MovingButton
                  borderRadius="1.75rem"
                  className="bg-[#111827] text-white border-[#374151] text-lg font-bold px-10 py-6"
                >
                  Explore Our Story
                  <ArrowRight className="w-5 h-5 ml-2" />
                </MovingButton>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 relative px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-[#374151] bg-[#111827] group cursor-pointer">
            <img 
              src={creativeIllustration} 
              alt="Agency Reel" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                <div className="w-0 h-0 border-l-[15px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-2" />
              </div>
            </div>
            <div className="absolute bottom-8 left-8 z-20">
              <div className="text-sm font-bold uppercase tracking-widest text-white/60 mb-2">Watch Now</div>
              <div className="text-2xl font-bold text-white">Inowix | Agency Reel 2024</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Identity - Development Process */}
      <section id="process" className="py-24 bg-[#0F172A] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <Rocket className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-200">Our Process</span>
            </div>
            <h2 className="section-title mb-4 px-2 sm:px-0">
              Our <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Identity</span>
            </h2>
            <p className="lead max-w-2xl mx-auto px-4 sm:px-0">
              How we build digital products that drive results
            </p>
          </motion.div>

          {/* Process Steps - Clean Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We understand your business goals, audience, and market to create a strategic foundation.",
                icon: Search,
                color: "text-blue-400"
              },
              {
                step: "02",
                title: "Design",
                description: "Our team creates intuitive interfaces and prototypes to validate concepts early.",
                icon: Palette,
                color: "text-purple-400"
              },
              {
                step: "03",
                title: "Development",
                description: "We build scalable solutions using cutting-edge tech and agile methodology.",
                icon: Code,
                color: "text-indigo-400"
              },
              {
                step: "04",
                title: "Quality",
                description: "Rigorous testing ensures flawless functionality across all devices and scenarios.",
                icon: CheckCircle2,
                color: "text-green-400"
              },
              {
                step: "05",
                title: "Launch",
                description: "Deployment with zero-downtime strategies, monitoring, and comprehensive documentation.",
                icon: Rocket,
                color: "text-orange-400"
              },
              {
                step: "06",
                title: "Growth",
                description: "Continuous iteration based on analytics, feedback, and performance optimization.",
                icon: Repeat,
                color: "text-cyan-400"
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-8 rounded-2xl bg-[#111827] border border-[#374151] hover:border-[#4B5563] transition-all duration-300">
                  {/* Step Number */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors`}>
                      <process.icon className={`w-6 h-6 ${process.color}`} />
                    </div>
                    <span className="text-sm font-mono text-[#9CA3AF]">{process.step}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">{process.title}</h3>
                  <p className="text-base text-[#D1D5DB] leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Simple CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-12 rounded-2xl bg-[#111827] border border-[#374151]"
          >
            <h3 className="h3 text-white mb-4">
              End-to-End Solutions That Drive Growth
            </h3>
            <p className="text-base text-[#D1D5DB] max-w-2xl mx-auto mb-8">
              Our integrated approach ensures every project is delivered with precision, from concept to optimization.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {["Technology-Focused", "Design-Driven", "Results-Oriented"].map((tag, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-[#D1D5DB]">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Principles - BentoGrid */}
      <section className="py-24 bg-zinc-950/50 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <Target className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-purple-200">Our Principles</span>
            </div>
            <h2 className="section-title mb-4 sm:mb-6 px-2 sm:px-0">
              Guided by <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-[#9CA3AF] text-base px-4 sm:px-0">Principles that drive excellence and impact.</p>
          </motion.div>
          
          <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem] gap-6">
            {principles.map((principle, index) => (
              <BentoGridItem
                key={index}
                title={principle.title}
                description={principle.description}
                header={
                  <div className={`flex flex-1 w-full h-full min-h-[10rem] rounded-xl bg-gradient-to-br ${principle.gradient} relative overflow-hidden group`}>
                    <div className="absolute inset-0 bg-[#0F172A]/20 group-hover:bg-[#0F172A]/10 transition-colors" />
                    <principle.icon className={`absolute top-4 right-4 w-16 h-16 ${principle.iconColor} opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all`} />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2 line-clamp-2">{principle.title}</h3>
                    </div>
                  </div>
                }
                icon={
                  <principle.icon className={`w-6 h-6 ${principle.iconColor}`} />
                }
                className={principle.featured ? "md:col-span-2" : "md:col-span-1"}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="hero-title mb-6 sm:mb-8 md:mb-10 px-2 sm:px-0">
              Ready to Create <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">Something New?</span>
            </h2>
            <p className="lead mb-10 sm:mb-12 md:mb-16 max-w-3xl mx-auto px-4 sm:px-0">
              Let's work together to transform your brand and create something extraordinary.
            </p>
            <Link to="/contact-us">
              <MovingButton
                borderRadius="1.75rem"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-transparent text-lg font-bold px-8 sm:px-12 py-6"
              >
                Get Started
                <ArrowRight className="w-6 h-6 ml-3" />
              </MovingButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        title="About Inowix FAQ"
        subtitle="Learn more about our company, culture, and approach to delivering exceptional results"
        faqs={aboutFAQs}
      />

      <Footer />
    </div>
  );
};

export default About;
