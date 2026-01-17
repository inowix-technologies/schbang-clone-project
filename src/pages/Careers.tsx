import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Button as MovingButton } from "@/components/ui/moving-border";
import { ArrowRight, MapPin, Clock, Users, Sparkles, Briefcase, Zap, Globe, Target, Award, TrendingUp, Rocket, Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import inowixImage from "../assets/career.png";
import { motion } from "framer-motion";
import { GradientMesh } from "@/components/ui/gradient-mesh";
import { FloatingShapes } from "@/components/ui/floating-shapes";
import { Particles } from "@/components/ui/particles";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

const openings = [
  {
    title: "Frontend Developer",
    department: "Technology",
    location: "Bangalore", 
    type: "Full-time",
    experience: "3+ years",
    description: "Build responsive web experiences using modern technologies like React, Next.js and Framer Motion.",
    icon: Zap,
    gradient: "from-blue-500/30 via-cyan-500/20 to-teal-500/20",
    iconColor: "text-blue-400"
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Mumbai",
    type: "Full-time",
    experience: "4+ years", 
    description: "Create intuitive and engaging user experiences for global brands and cutting-edge startups.",
    icon: Sparkles,
    gradient: "from-purple-500/30 via-pink-500/20 to-rose-500/20",
    iconColor: "text-purple-400"
  },
  {
    title: "Account Manager",
    department: "Client Services",
    location: "Bangalore",
    type: "Full-time",
    experience: "3+ years",
    description: "Manage client relationships and ensure seamless project delivery across cross-functional teams.",
    icon: Users,
    gradient: "from-green-500/30 via-emerald-500/20 to-teal-500/20",
    iconColor: "text-green-400"
  }
];

const benefits = [
  { 
    title: "Competitive Salary", 
    icon: TrendingUp, 
    description: "Industry-leading compensation and equity options.",
    gradient: "from-green-500/20 via-emerald-500/10 to-teal-500/10",
    iconColor: "text-green-400",
    stat: "$120K+",
    statLabel: "Avg Salary"
  },
  { 
    title: "Global Exposure", 
    icon: Globe, 
    description: "Work with international brands and diverse teams.",
    gradient: "from-blue-500/20 via-cyan-500/10 to-teal-500/10",
    iconColor: "text-blue-400",
    stat: "50+",
    statLabel: "Countries"
  },
  { 
    title: "Creative Freedom", 
    icon: Sparkles, 
    description: "We value your unique perspective and innovation.",
    gradient: "from-purple-500/20 via-pink-500/10 to-rose-500/10",
    iconColor: "text-purple-400",
    stat: "100%",
    statLabel: "Autonomy"
  },
  { 
    title: "Growth & Learning", 
    icon: Rocket, 
    description: "Continuous learning and professional development.",
    gradient: "from-orange-500/20 via-red-500/10 to-pink-500/10",
    iconColor: "text-orange-400",
    stat: "$5K",
    statLabel: "Learning Budget"
  }
];

const stats = [
  { icon: Users, value: "1200+", label: "Team Members", gradient: "from-blue-500 to-cyan-500" },
  { icon: Globe, value: "50+", label: "Countries", gradient: "from-purple-500 to-pink-500" },
  { icon: Award, value: "50+", label: "Awards Won", gradient: "from-green-500 to-emerald-500" },
  { icon: Star, value: "4.9/5", label: "Employee Rating", gradient: "from-yellow-500 to-orange-500" }
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white selection:bg-orange-500/30 relative overflow-hidden">
      <GradientMesh className="opacity-30" />
      <FloatingShapes count={12} className="opacity-12" />
      <Particles count={40} color="#ffffff" className="opacity-15" />
      <Header />
      
      <main className="pt-24 sm:pt-28 md:pt-32 relative z-10">
        {/* Hero Section with Spotlight */}
        <section className="min-h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[85vh] w-full rounded-md flex md:items-center md:justify-center bg-[#0F172A] antialiased bg-grid-white/[0.02] relative overflow-hidden py-8 sm:py-12 md:py-0">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          <BackgroundBeams />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full pt-12 sm:pt-16 md:pt-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-5xl mx-auto"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 border border-white/10 backdrop-blur-sm mb-4 sm:mb-6 md:mb-8"
              >
                <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400 animate-pulse" />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-orange-200">We are hiring</span>
                <Heart className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-red-400" />
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="hero-title mb-4 sm:mb-6 md:mb-8 px-2 sm:px-0"
              >
                Shape the <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent italic">Future.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="lead mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto px-4 sm:px-0"
              >
                Join a team of creators, builders, and challengers who are redefining the digital landscape.
              </motion.p>

              {/* Stats Grid with 3D Cards */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-16"
              >
                {stats.map((stat, index) => (
                  <CardContainer key={index} containerClassName="py-0">
                    <CardBody className="w-full h-full bg-[#111827] border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 backdrop-blur-xl group/card">
                      <CardItem translateZ="50" className="w-full">
                        <div className="flex flex-col items-center text-center">
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-3 sm:mb-4 group-hover/card:scale-110 transition-transform`}>
                            <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          </div>
                          <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
                            {stat.value}
                          </div>
                          <div className="text-[10px] sm:text-xs uppercase tracking-widest text-[#9CA3AF] font-medium">
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
                <a href="#openings">
                  <MovingButton
                    borderRadius="1.75rem"
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-transparent text-lg font-bold px-10 py-6"
                  >
                    View Openings
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </MovingButton>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Culture & Benefits - BentoGrid */}
        <section className="py-16 sm:py-24 md:py-32 lg:py-40 bg-zinc-950/50 border-y border-white/5 relative overflow-hidden">
          <GradientMesh className="opacity-15" />
          <FloatingShapes count={8} className="opacity-8" />
          <BackgroundBeams />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                <Target className="w-4 h-4 text-orange-400" />
                <span className="text-xs font-bold uppercase tracking-widest text-orange-200">Why Inowix?</span>
              </div>
              <h2 className="section-title mb-4 sm:mb-6 px-2 sm:px-0">
                Building <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">Careers</span> & Culture
              </h2>
              <p className="lead max-w-3xl mx-auto px-4 sm:px-0">We're building more than just campaigns; we're building careers and defining culture.</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 md:gap-16 items-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
              <div className="lg:col-span-7">
                <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[18rem] gap-4 sm:gap-6">
                  {benefits.map((benefit, index) => (
                    <BentoGridItem
                      key={index}
                      title={
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <div className="text-3xl font-bold mb-1 bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
                              {benefit.stat}
                            </div>
                            <div className="text-xs uppercase tracking-widest text-[#9CA3AF] font-medium">
                              {benefit.statLabel}
                            </div>
                          </div>
                        </div>
                      }
                      description={benefit.description}
                      header={
                        <div className={`flex flex-1 w-full h-full min-h-[10rem] rounded-xl bg-gradient-to-br ${benefit.gradient} relative overflow-hidden group`}>
                          <div className="absolute inset-0 bg-[#0F172A]/20 group-hover:bg-[#0F172A]/10 transition-colors" />
                          <benefit.icon className={`absolute top-4 right-4 w-16 h-16 ${benefit.iconColor} opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all`} />
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                          </div>
                        </div>
                      }
                      icon={
                        <benefit.icon className={`w-6 h-6 ${benefit.iconColor}`} />
                      }
                      className="md:col-span-1"
                    />
                  ))}
                </BentoGrid>
              </div>

              <CardContainer containerClassName="lg:col-span-5 py-0">
                <CardBody className="relative aspect-[4/5] rounded-2xl sm:rounded-3xl md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group bg-[#111827] backdrop-blur-xl">
                  <CardItem translateZ="30" className="w-full h-full">
                    <img 
                      src={inowixImage} 
                      alt="Inowix Culture" 
                      className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 relative z-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                    <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8 z-20">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 italic text-white">Creator first culture.</div>
                      <div className="text-xs sm:text-sm text-zinc-300">Join the movement.</div>
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        </section>

        {/* Positions - BentoGrid */}
        <section id="openings" className="py-16 sm:py-24 md:py-32 lg:py-40 container mx-auto px-4 sm:px-6 relative overflow-hidden">
          <GradientMesh className="opacity-20" />
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                <Briefcase className="w-4 h-4 text-orange-400" />
                <span className="text-xs font-bold uppercase tracking-widest text-orange-200">Open Positions</span>
              </div>
              <h2 className="section-title mb-4 sm:mb-6 px-2 sm:px-0">
                Find Your <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">Adventure</span>
              </h2>
              <p className="lead max-w-2xl mx-auto px-4 sm:px-0">Your next big opportunity is waiting.</p>
            </motion.div>

            <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[16rem] gap-4 sm:gap-6">
              {openings.map((opening, index) => (
                <BentoGridItem
                  key={index}
                  title={opening.title}
                  description={opening.description}
                  header={
                    <div className={`flex flex-1 w-full h-full min-h-[10rem] rounded-xl bg-gradient-to-br ${opening.gradient} relative overflow-hidden group`}>
                      <div className="absolute inset-0 bg-[#0F172A]/20 group-hover:bg-[#0F172A]/10 transition-colors" />
                      <opening.icon className={`absolute top-4 right-4 w-16 h-16 ${opening.iconColor} opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all`} />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-widest text-white border border-white/20">
                            {opening.department}
                          </span>
                          <span className="text-white/60 text-xs uppercase tracking-widest font-medium">
                            {opening.experience}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-white/80 text-xs mb-2">
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5" />
                            {opening.location}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            {opening.type}
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                  icon={
                    <div className="flex items-center justify-between">
                      <opening.icon className={`w-6 h-6 ${opening.iconColor}`} />
                      <ArrowRight className="w-4 h-4 text-neutral-500 group-hover/bento:translate-x-2 transition-transform" />
                    </div>
                  }
                  className="md:col-span-1"
                />
              ))}
            </BentoGrid>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 md:py-32 lg:py-40 relative overflow-hidden">
          <GradientMesh className="opacity-30" />
          <FloatingShapes count={12} className="opacity-12" />
          <BackgroundBeams />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/10 to-transparent pointer-events-none" />
          
          <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500/20 via-red-500/20 to-pink-500/20 border border-white/10 mb-8">
                <Rocket className="w-4 h-4 text-orange-400" />
                <span className="text-xs font-bold uppercase tracking-widest text-orange-200">Join Us</span>
              </div>
              
              <h2 className="hero-title mb-6 sm:mb-8 md:mb-10 px-2 sm:px-0">
                Don't see <br />
                <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent italic">your role?</span>
              </h2>
              
              <p className="lead mb-10 sm:mb-12 md:mb-16 max-w-3xl mx-auto px-4 sm:px-0">
                We're always looking for exceptional talent. If you don't see a position that fits but love what we do, reaching out is the first step.
              </p>
              
              <Link to="/contact-us">
                <MovingButton
                  borderRadius="1.75rem"
                  className="bg-card text-foreground border-border text-lg font-bold px-8 sm:px-14 py-6"
                >
                  Send Your Portfolio
                  <ArrowRight className="w-6 h-6 ml-3" />
                </MovingButton>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
