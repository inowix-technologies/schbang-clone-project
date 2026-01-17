import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Button as MovingButton } from "@/components/ui/moving-border";
import { ArrowRight, Clock, Calendar, Sparkles, TrendingUp, BookOpen, Filter, Eye, Star } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GradientMesh } from "@/components/ui/gradient-mesh";
import { FloatingShapes } from "@/components/ui/floating-shapes";
import { Particles } from "@/components/ui/particles";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const categories = ["All", "Industry Insights", "Case Studies", "Trends", "Tips & Guides"];

const articles = [
  {
    id: 1,
    title: "The Future of Digital Marketing in 2024",
    excerpt: "Exploring emerging trends and technologies that will shape digital marketing strategies.",
    category: "Trends",
    readTime: "5 min read",
    date: "Dec 15, 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    author: "Marketing Team",
    views: 1250,
    gradient: "from-blue-500/30 via-cyan-500/20 to-teal-500/20"
  },
  {
    id: 2,
    title: "How We Increased Brand Engagement by 300%",
    excerpt: "A deep dive into our award-winning campaign strategy and execution.",
    category: "Case Studies", 
    readTime: "8 min read",
    date: "Dec 12, 2024",
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=300&fit=crop",
    author: "Strategy Team",
    views: 2100,
    gradient: "from-purple-500/30 via-pink-500/20 to-rose-500/20"
  },
  {
    id: 3,
    title: "Building Brand Identity in the Digital Age",
    excerpt: "Essential principles for creating memorable and effective brand identities.",
    category: "Tips & Guides",
    readTime: "6 min read", 
    date: "Dec 10, 2024",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
    author: "Creative Team",
    views: 980,
    gradient: "from-orange-500/30 via-red-500/20 to-pink-500/20"
  },
  {
    id: 4,
    title: "The Rise of AI in Creative Industries",
    excerpt: "Understanding how artificial intelligence is transforming creative workflows.",
    category: "Industry Insights",
    readTime: "7 min read",
    date: "Dec 8, 2024", 
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    author: "Tech Team",
    views: 1500,
    gradient: "from-green-500/30 via-emerald-500/20 to-teal-500/20"
  },
  {
    id: 5,
    title: "Social Media Strategies That Actually Work",
    excerpt: "Proven tactics for building authentic connections with your audience.",
    category: "Tips & Guides",
    readTime: "4 min read",
    date: "Dec 5, 2024",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    author: "Social Media Team",
    views: 890,
    gradient: "from-indigo-500/30 via-blue-500/20 to-purple-500/20"
  },
  {
    id: 6,
    title: "Measuring Success in Brand Campaigns",
    excerpt: "Key metrics and KPIs that matter for evaluating campaign performance.",
    category: "Industry Insights", 
    readTime: "6 min read",
    date: "Dec 3, 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    author: "Analytics Team",
    views: 1100,
    gradient: "from-cyan-500/30 via-blue-500/20 to-indigo-500/20"
  }
];

const stats = [
  { icon: BookOpen, value: "50+", label: "Articles", gradient: "from-blue-500 to-cyan-500" },
  { icon: TrendingUp, value: "10K+", label: "Monthly Views", gradient: "from-purple-500 to-pink-500" },
  { icon: Star, value: "4.9", label: "Avg Rating", gradient: "from-yellow-500 to-orange-500" },
  { icon: Eye, value: "100K+", label: "Total Readers", gradient: "from-green-500 to-emerald-500" }
];

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles = activeCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0F172A] text-white selection:bg-blue-500/30 relative overflow-hidden">
      <GradientMesh className="opacity-30" />
      <FloatingShapes count={12} className="opacity-12" />
      <Particles count={40} color="#ffffff" className="opacity-15" />
      <Header />
      
      {/* Hero Section with Spotlight */}
      <section className="h-[85vh] w-full rounded-md flex md:items-center md:justify-center bg-[#0F172A] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <BackgroundBeams />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-20 md:pt-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 backdrop-blur-sm mb-10"
            >
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#D1D5DB]">Knowledge Hub</span>
              <Sparkles className="w-3 h-3 text-purple-400" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="hero-title mb-6 sm:mb-8 md:mb-10 px-2 sm:px-0"
            >
              Resources & <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Insights</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="lead max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-16 px-4 sm:px-0"
            >
              Stay ahead with industry insights, case studies, and expert guidance from our team
            </motion.p>

            {/* Stats Grid with 3D Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16"
            >
              {stats.map((stat, index) => (
                <CardContainer key={index} containerClassName="py-0">
                  <CardBody className="w-full h-full bg-[#111827] border border-[#374151] rounded-2xl p-6 backdrop-blur-xl group/card">
                    <CardItem translateZ="50" className="w-full">
                      <div className="flex flex-col items-center text-center">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4 group-hover/card:scale-110 transition-transform`}>
                          <stat.icon className="w-6 h-6 text-white" />
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

            {/* Category Filter */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full transition-all font-medium flex items-center gap-2 ${
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-card/60 border border-border text-muted-foreground hover:border-primary hover:text-foreground'
                  }`}
                >
                  {activeCategory === category && <Filter className="w-4 h-4" />}
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Article with 3D Card */}
      {filteredArticles.length > 0 && (
        <section className="py-32 bg-[#111827] border-y border-[#374151] relative overflow-hidden">
          <GradientMesh className="opacity-20" />
          <BackgroundBeams />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <CardContainer containerClassName="py-0">
                <CardBody className="relative aspect-[4/3] rounded-[3rem] overflow-hidden border border-[#374151] group cursor-pointer bg-[#111827] backdrop-blur-xl">
                  <CardItem translateZ="30" className="w-full h-full">
                    <div className={`absolute inset-0 bg-gradient-to-br ${filteredArticles[0].gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
                    <img
                      src={filteredArticles[0].image}
                      alt={filteredArticles[0].title}
                      className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent z-10" />
                    <div className="absolute bottom-6 left-6 right-6 z-20">
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-bold rounded-full uppercase tracking-widest backdrop-blur-sm mb-4">
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </span>
                      <h3 className="text-2xl font-bold text-white line-clamp-2">{filteredArticles[0].title}</h3>
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
              
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="px-4 py-2 rounded-full bg-[#111827] border border-[#374151] text-xs font-bold uppercase tracking-widest text-[#9CA3AF]">
                    {filteredArticles[0].category}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#9CA3AF]">
                    <Eye className="w-4 h-4" />
                    <span>{filteredArticles[0].views.toLocaleString()}</span>
                  </div>
                </div>
                
                <h2 className="h2 text-white mb-6">
                  {filteredArticles[0].title}
                </h2>
                <p className="text-base text-[#D1D5DB] mb-8 leading-relaxed">
                  {filteredArticles[0].excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-[#9CA3AF] mb-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{filteredArticles[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{filteredArticles[0].readTime}</span>
                  </div>
                  <span className="text-[#9CA3AF]">by {filteredArticles[0].author}</span>
                </div>
                <Link to="/blogs">
                  <MovingButton
                    borderRadius="1.75rem"
                    className="bg-[#111827] text-white border-[#374151] text-lg font-bold px-8 py-4"
                  >
                    Read Article
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </MovingButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Articles BentoGrid */}
      <section className="py-40 relative overflow-hidden">
        <GradientMesh className="opacity-15" />
        <FloatingShapes count={10} className="opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#D1D5DB]">Latest Articles</span>
            </div>
            <h2 className="section-title mb-3 sm:mb-4 px-2 sm:px-0">
              Explore Our <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Content</span>
            </h2>
            <p className="lead max-w-2xl mx-auto px-4 sm:px-0">
              Discover insights, strategies, and case studies from our expert team.
            </p>
          </motion.div>

          <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[22rem] gap-6">
            {filteredArticles.slice(1).map((article, index) => (
              <BentoGridItem
                key={article.id}
                title={article.title}
                description={article.excerpt}
                header={
                  <div className={`flex flex-1 w-full h-full min-h-[12rem] rounded-xl bg-gradient-to-br ${article.gradient} relative overflow-hidden group`}>
                    <img
                      src={article.image}
                      alt={article.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-widest text-white border border-white/20">
                          {article.category}
                        </span>
                        <div className="flex items-center gap-2 text-white/80 text-xs">
                          <Eye className="w-3 h-3" />
                          <span>{article.views.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-white/60 text-xs">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {article.date}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {article.readTime}
                        </div>
                      </div>
                    </div>
                  </div>
                }
                icon={
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-[#9CA3AF] uppercase tracking-widest font-medium">
                      by {article.author}
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#9CA3AF] group-hover/bento:translate-x-2 transition-transform" />
                  </div>
                }
                className="md:col-span-1"
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 relative overflow-hidden">
        <GradientMesh className="opacity-30" />
        <FloatingShapes count={12} className="opacity-12" />
        <BackgroundBeams />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-white/10 mb-8">
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#D1D5DB]">Stay Updated</span>
            </div>
            
            <h2 className="hero-title mb-6 sm:mb-8 md:mb-10 px-2 sm:px-0">
              Never Miss <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent italic">An Insight</span>
            </h2>
            
            <p className="lead mb-10 sm:mb-12 md:mb-16 max-w-3xl mx-auto px-4 sm:px-0">
              Subscribe to our newsletter and get the latest articles, case studies, and industry insights delivered to your inbox.
            </p>
            
            <Link to="/contact-us">
              <MovingButton
                borderRadius="1.75rem"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent text-lg font-bold px-8 sm:px-14 py-6"
              >
                Subscribe Now
                <ArrowRight className="w-6 h-6 ml-3" />
              </MovingButton>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
