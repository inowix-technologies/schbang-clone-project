import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Button as MovingButton } from "@/components/ui/moving-border";
import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Code2, Megaphone, BarChart3, Users, Target, Palette, Zap, Link as LinkIcon, Sparkles, CheckCircle2, TrendingUp, Award, Clock, Globe, Rocket, Star } from "lucide-react";
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
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const solutions = [
  {
    title: "Brand Solutions",
    description: "We provide customised solutions to meet partner needs. We understand the objectives and requirements to develop strategies & create holistic consumer experiences.",
    services: ["Brand Strategy", "Brand Identity", "Brand Positioning", "Brand Guidelines"],
    href: "/solutions/brand-strategy",
    image: creativeIllustration,
    icon: Palette,
    color: "from-orange-500/30 via-red-500/20 to-pink-500/20",
    iconColor: "text-orange-400",
    gradient: "from-orange-500/30 via-red-500/20 to-pink-500/20",
    stats: { projects: "500+", satisfaction: "98%", awards: "25+" },
    bentoSize: "md:col-span-1",
    featured: false
  },
  {
    title: "Tech Solutions", 
    description: "We optimize People, Processes and Technology. Map processes, align to objectives and maximize team efficiency with tech to improve the customer experience.",
    services: ["Web Development", "Mobile Apps", "E-commerce", "UI/UX Design"],
    href: "/solutions/technology-solutions",
    image: techIllustration,
    icon: Code2,
    color: "from-blue-500/30 via-purple-500/20 to-indigo-500/20",
    iconColor: "text-blue-400",
    gradient: "from-blue-500/30 via-purple-500/20 to-indigo-500/20",
    stats: { projects: "800+", satisfaction: "99%", awards: "40+" },
    bentoSize: "md:col-span-2",
    featured: true
  },
  {
    title: "Media Solutions",
    description: "Drive results through strategic, audience-aligned ad placement across channels using the right messaging at the optimal time.",
    services: ["Media Planning", "Paid Advertising", "Performance Marketing", "Media Analytics"],
    href: "/solutions/media-solutions", 
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=400&fit=crop",
    icon: Megaphone,
    color: "from-green-500/30 via-teal-500/20 to-emerald-500/20",
    iconColor: "text-green-400",
    gradient: "from-green-500/30 via-teal-500/20 to-emerald-500/20",
    stats: { projects: "600+", satisfaction: "97%", awards: "30+" },
    bentoSize: "md:col-span-1",
    featured: false
  },
  {
    title: "Research Solutions",
    description: "We provide specialized market research for businesses using qualitative and quantitative methods. We integrate market research with our services to connect research, strategy and implementation.",
    services: ["Market Research", "Consumer Insights", "Data Analytics", "Competitive Analysis"],
    href: "/solutions/research-data-and-analytics-solutions",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    icon: BarChart3,
    color: "from-purple-500/30 via-pink-500/20 to-rose-500/20",
    iconColor: "text-purple-400",
    gradient: "from-purple-500/30 via-pink-500/20 to-rose-500/20",
    stats: { projects: "400+", satisfaction: "96%", awards: "20+" },
    bentoSize: "md:col-span-1",
    featured: false
  }
];

const features = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay ahead of trends and implement cutting-edge strategies for maximum impact.",
    stat: "50+",
    statLabel: "Awards Won",
    gradient: "from-yellow-500/20 via-orange-500/10 to-red-500/10"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "1200+ specialists across all disciplines working collaboratively on your success.",
    stat: "300+",
    statLabel: "Global Brands",
    gradient: "from-blue-500/20 via-cyan-500/10 to-teal-500/10"
  },
  {
    icon: Target,
    title: "Results Driven", 
    description: "Every solution is designed to deliver measurable business outcomes and ROI.",
    stat: "300%",
    statLabel: "Avg ROI",
    gradient: "from-green-500/20 via-emerald-500/10 to-teal-500/10"
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Rapid turnaround times without compromising on quality or attention to detail.",
    stat: "24hr",
    statLabel: "Response Time",
    gradient: "from-purple-500/20 via-pink-500/10 to-rose-500/10"
  }
];

const stats = [
  { icon: Rocket, value: "300+", label: "Global Brands", color: "text-blue-400", gradient: "from-blue-500 to-cyan-500" },
  { icon: Award, value: "50+", label: "Industry Awards", color: "text-purple-400", gradient: "from-purple-500 to-pink-500" },
  { icon: TrendingUp, value: "300%", label: "Average ROI", color: "text-green-400", gradient: "from-green-500 to-emerald-500" },
  { icon: Clock, value: "10+", label: "Years Excellence", color: "text-orange-400", gradient: "from-orange-500 to-red-500" }
];

const testimonials = [
  { quote: "Transformed our digital presence completely", name: "Tech Startup", title: "CEO" },
  { quote: "Best ROI we've ever seen from an agency", name: "Fortune 500", title: "CMO" },
  { quote: "Innovative solutions that drive results", name: "E-commerce Giant", title: "Director" },
];

const Solutions = () => {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white selection:bg-blue-500/30 relative overflow-hidden">
      <GradientMesh className="opacity-30" />
      <FloatingShapes count={12} className="opacity-12" />
      <Particles count={40} color="#ffffff" className="opacity-15" />
      <Header />
      
      <main className="pt-32 relative z-10">
        {/* Hero Section with Spotlight */}
        <section className="h-[90vh] w-full rounded-md flex md:items-center md:justify-center bg-[#0F172A] antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          <BackgroundBeams />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-20 md:pt-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-6xl mx-auto"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 backdrop-blur-sm mb-10"
              >
                <Zap className="w-4 h-4 text-blue-400 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#D1D5DB]">Comprehensive Solutions</span>
                <Sparkles className="w-3 h-3 text-purple-400" />
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="hero-title mb-6 sm:mb-8 md:mb-10 px-2 sm:px-0"
              >
                Integrated <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent italic">Excellence.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="lead mb-10 sm:mb-12 md:mb-16 max-w-4xl mx-auto px-4 sm:px-0"
              >
                From brand strategy to technology implementation, we deliver end-to-end solutions that drive measurable growth and lasting impact.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
              >
                <Link to="/contact-us">
                  <MovingButton
                    borderRadius="1.75rem"
                    className="bg-[#111827] text-white border-[#374151] text-lg font-bold px-10 py-6"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </MovingButton>
                </Link>
                <Button asChild variant="outline" className="h-16 px-10 rounded-full border-[#374151] text-white hover:bg-[#1F2937] transition-all text-lg font-bold">
                  <Link to="/work">View Case Studies</Link>
                </Button>
              </motion.div>

              {/* Stats Grid with 3D Cards */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
              >
                {stats.map((stat, index) => (
                  <CardContainer key={index} containerClassName="py-0">
                    <CardBody className="w-full h-full bg-[#111827] border border-[#374151] rounded-2xl p-6 backdrop-blur-xl group/card">
                      <CardItem
                        translateZ="50"
                        className="w-full"
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4 group-hover/card:scale-110 transition-transform`}>
                            <stat.icon className={`w-6 h-6 ${stat.color}`} />
                          </div>
                          <div className="text-3xl font-bold mb-2 bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
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
            </motion.div>
          </div>
        </section>

        {/* Features BentoGrid Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                <Target className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#D1D5DB]">Our Advantages</span>
              </div>
              <h2 className="section-title mb-4 sm:mb-6 px-2 sm:px-0">
                Why Choose Our <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Solutions?</span>
              </h2>
              <p className="lead max-w-2xl mx-auto px-4 sm:px-0">Unmatched expertise and results-driven approach.</p>
            </motion.div>
            
            <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem]">
              {features.map((feature, index) => (
                <BentoGridItem
                  key={index}
                  title={
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`text-4xl font-bold bg-gradient-to-br ${feature.gradient} bg-clip-text text-transparent`}>
                        {feature.stat}
                      </div>
                      <div className="text-xs uppercase tracking-widest text-[#9CA3AF] font-medium">
                        {feature.statLabel}
                      </div>
                    </div>
                  }
                  description={feature.description}
                  header={
                      <div className={`flex flex-1 w-full h-full min-h-[8rem] rounded-xl bg-gradient-to-br ${feature.gradient} relative overflow-hidden group`}>
                      <div className="absolute inset-0 bg-[#0F172A]/20 group-hover:bg-[#0F172A]/10 transition-colors" />
                      <feature.icon className="absolute top-4 right-4 w-12 h-12 text-white/60 group-hover:text-white group-hover:scale-110 transition-all" />
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                      </div>
                    </div>
                  }
                  icon={
                    <feature.icon className="w-6 h-6 text-neutral-500 dark:text-neutral-300" />
                  }
                  className="md:col-span-1"
                />
              ))}
            </BentoGrid>
          </div>
        </section>

        {/* Solutions BentoGrid Section */}
        <section className="py-40 relative overflow-hidden">
          <GradientMesh className="opacity-20" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#D1D5DB]">Our Solutions</span>
              </div>
              <h2 className="section-title mb-4 sm:mb-6 px-2 sm:px-0">
                Comprehensive <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="lead max-w-3xl mx-auto px-4 sm:px-0">
                End-to-end solutions designed to transform your business and drive measurable results.
              </p>
            </motion.div>

            <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[24rem] gap-6">
              {solutions.map((solution, index) => (
                <BentoGridItem
                  key={index}
                  title={solution.title}
                  description={solution.description}
                  header={
                    <div className={`flex flex-1 w-full h-full min-h-[12rem] rounded-xl bg-gradient-to-br ${solution.color} relative overflow-hidden group`}>
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div>
                            <div className="text-2xl font-bold text-white mb-1">{solution.stats.projects}</div>
                            <div className="text-xs text-[#9CA3AF] uppercase tracking-widest">Projects</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-white mb-1">{solution.stats.satisfaction}</div>
                            <div className="text-xs text-[#9CA3AF] uppercase tracking-widest">Satisfaction</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-white mb-1">{solution.stats.awards}</div>
                            <div className="text-xs text-[#9CA3AF] uppercase tracking-widest">Awards</div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {solution.services.slice(0, 2).map((service, i) => (
                            <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white border border-white/20">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform`}>
                          <solution.icon className={`w-6 h-6 ${solution.iconColor}`} />
                        </div>
                      </div>
                    </div>
                  }
                  icon={
                    <div className="flex items-center justify-between">
                      <solution.icon className={`w-6 h-6 ${solution.iconColor}`} />
                      <ArrowRight className="w-4 h-4 text-neutral-500 group-hover/bento:translate-x-2 transition-transform" />
                    </div>
                  }
                  className={solution.bentoSize}
                />
              ))}
            </BentoGrid>
          </div>
        </section>

        {/* Testimonials Infinite Scroll */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#D1D5DB]">Client Testimonials</span>
              </div>
              <h2 className="section-title mb-3 sm:mb-4 px-2 sm:px-0">
                Trusted by <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Industry Leaders</span>
              </h2>
            </motion.div>
            
            <InfiniteMovingCards
              items={testimonials}
              direction="left"
              speed="normal"
              pauseOnHover={true}
              className="max-w-7xl mx-auto"
            />
          </div>
        </section>

        {/* CTA Section with Background Beams */}
        <section className="py-40 relative overflow-hidden">
          <GradientMesh className="opacity-30" />
          <FloatingShapes count={12} className="opacity-12" />
          <BackgroundBeams />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent pointer-events-none" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-white/10 mb-8">
                <Rocket className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#D1D5DB]">Get Started Today</span>
              </div>
              
              <h2 className="hero-title mb-6 sm:mb-8 md:mb-10 px-2 sm:px-0">
                Ready to <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent italic">Transform?</span>
              </h2>
              
              <p className="lead mb-10 sm:mb-12 md:mb-16 max-w-3xl mx-auto px-4 sm:px-0">
                Let's discuss how our integrated solutions can help you achieve your business goals and create lasting impact in your industry.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                <Link to="/contact-us">
                  <MovingButton
                    borderRadius="1.75rem"
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent text-lg font-bold px-8 sm:px-14 py-6"
                  >
                    Get Started
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </MovingButton>
                </Link>
                <Button asChild variant="outline" className="h-16 px-8 sm:px-14 rounded-full text-lg border-border text-foreground hover:bg-card transition-all font-bold">
                  <Link to="/work">View Case Studies</Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-[#9CA3AF]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
                  <span>24hr Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
                  <span>No Commitment</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Solutions;
