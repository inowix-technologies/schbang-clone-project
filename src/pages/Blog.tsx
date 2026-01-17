import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/Header';
import { NotificationBanner } from '@/components/NotificationBanner';
import { FAQSection } from '@/components/FAQSection';
import { Footer } from '@/components/Footer';
import { GradientMesh } from '@/components/ui/gradient-mesh';
import { FloatingShapes } from '@/components/ui/floating-shapes';
import { Particles } from '@/components/ui/particles';
import { CreativeBackground } from '@/components/ui/creative-background';
import { useBlogs } from '@/hooks/useBlogs';
import { Search, Calendar, Eye, ArrowRight, Sparkles, BookOpen, TrendingUp, Clock } from 'lucide-react';
import { format } from 'date-fns';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('');
  
  const { blogs, isLoading, allTags, filterBlogs } = useBlogs(false, 'published');
  const filteredBlogs = filterBlogs(searchQuery, selectedTag);

  const blogFAQs = [
    {
      id: 'blog-freq',
      question: 'How often do you publish new blog posts?',
      answer: 'We publish new blog posts 2-3 times per week, covering the latest trends in technology, development practices, AI innovations, and industry insights. Subscribe to our newsletter to stay updated!'
    },
    {
      id: 'blog-topics',
      question: 'What topics do your blog posts cover?',
      answer: 'Our blog covers web development, mobile app development, AI/ML, cloud computing, DevOps, cybersecurity, UI/UX design, startup insights, and technology trends. We focus on practical tutorials and industry best practices.'
    },
    {
      id: 'blog-authors',
      question: 'Who writes your blog content?',
      answer: 'Our blog content is written by our experienced team of developers, designers, and technology experts. Each author brings real-world experience and deep expertise in their respective fields.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-white selection:bg-blue-500/30 relative overflow-hidden">
      <GradientMesh className="opacity-30" />
      <FloatingShapes count={12} className="opacity-12" />
      <Particles count={40} color="#ffffff" className="opacity-15" />
      <CreativeBackground variant="gradient" className="opacity-20" />
      <NotificationBanner />
      <Header />
      
      <main className="pt-32 pb-20 relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-6 mb-20 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent blur-3xl pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-200">Insights & Perspectives</span>
            </div>
            
            <h1 className="hero-title mb-6 sm:mb-8 px-2 sm:px-0">
              Knowledge <span className="italic text-[#9CA3AF]">Hub.</span>
            </h1>
            <p className="lead mb-8 sm:mb-10 md:mb-12 px-4 sm:px-0">
              Deep dives into technology, design, and the future of digital experiences from the team at Inowix.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium">{blogs.length} Articles</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10">
                <Clock className="w-4 h-4 text-[#9CA3AF]" />
                <span className="text-sm font-medium text-[#D1D5DB]">Weekly Updates</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Search & Filters */}
        <div className="container mx-auto px-6 mb-16 relative z-10">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] group-focus-within:text-blue-400 transition-colors" />
              <Input
                placeholder="Search articles, topics, keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-16 pl-12 pr-6 bg-zinc-900/50 border-white/5 rounded-2xl focus:border-blue-500/50 focus:ring-blue-500/20 text-lg transition-all"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag('')}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedTag === '' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-white/5 border border-white/10 text-[#D1D5DB] hover:border-white/20'
                }`}
              >
                All Topics
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedTag === tag 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-white/5 border border-white/10 text-[#D1D5DB] hover:border-blue-500/30 hover:text-blue-300'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="container mx-auto px-6 relative z-10">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-[4/5] rounded-3xl bg-zinc-900/50 animate-pulse border border-white/5" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <AnimatePresence mode="popLayout">
                {filteredBlogs.map((blog, index) => (
                  <motion.div
                    key={blog.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Link to={`/blog/${blog.slug}`} className="group block h-full">
                      <div className="relative h-full p-6 rounded-[2rem] bg-zinc-900/30 border border-white/5 hover:border-blue-500/30 transition-all duration-500 overflow-hidden flex flex-col">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {blog.featured_image_url && (
                          <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 border border-white/5">
                            <img
                              src={blog.featured_image_url}
                              alt={blog.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-[#0F172A]/20 group-hover:bg-transparent transition-colors duration-500" />
                          </div>
                        )}

                        <div className="flex-1 flex flex-col">
                          <div className="flex items-center gap-4 mb-4 text-xs font-bold uppercase tracking-widest text-[#9CA3AF]">
                             <div className="flex items-center gap-1.5">
                               <Calendar className="w-3.5 h-3.5" />
                               {format(new Date(blog.published_at), 'MMM d, yyyy')}
                             </div>
                             <div className="w-1 h-1 bg-zinc-700 rounded-full" />
                             <div className="flex items-center gap-1.5">
                               <Eye className="w-3.5 h-3.5" />
                               {blog.views}
                             </div>
                          </div>

                          <h3 className="h3 mb-4 group-hover:text-blue-400 transition-colors">
                            {blog.title}
                          </h3>
                          <p className="text-[#9CA3AF] text-base line-clamp-3 mb-8 flex-1 leading-relaxed">
                            {blog.excerpt}
                          </p>

                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-1.5">
                               {blog.tags?.slice(0, 2).map((tag, i) => (
                                 <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase font-bold text-[#D1D5DB]">
                                   {tag}
                                 </span>
                               ))}
                            </div>
                            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                              <ArrowRight className="w-5 h-5 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          {!isLoading && filteredBlogs.length === 0 && (
            <div className="text-center py-40">
              <h3 className="text-3xl font-bold mb-4 text-[#9CA3AF]">No stories found.</h3>
              <p className="text-zinc-600">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </div>
      </main>
      
      <FAQSection 
        title="Blog & Content FAQ"
        subtitle="Everything you need to know about our blog and content strategy"
        faqs={blogFAQs}
      />
      
      <Footer />
    </div>
  );
};

export default Blog;