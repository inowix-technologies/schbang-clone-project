import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/Header';
import { NotificationBanner } from '@/components/NotificationBanner';
import { FAQSection } from '@/components/FAQSection';
import { Footer } from '@/components/Footer';
import { useBlogs } from '@/hooks/useBlogs';
import { Search, Calendar, Eye, ArrowRight, Sparkles, BookOpen, TrendingUp } from 'lucide-react';
import { format } from 'date-fns';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('');
  
  // Use the custom hook to fetch blogs
  const { blogs, isLoading, allTags, filterBlogs } = useBlogs(false, 'published');
  
  // Filter blogs based on search and tag
  const filteredBlogs = filterBlogs(searchQuery, selectedTag);

  // Blog FAQ data
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
    },
    {
      id: 'blog-suggest',
      question: 'Can I suggest topics for future blog posts?',
      answer: 'Absolutely! We welcome topic suggestions from our community. Reach out to us through our contact form or social media channels with your ideas, and we\'ll consider them for future content.'
    },
    {
      id: 'blog-guest',
      question: 'Do you accept guest posts?',
      answer: 'Yes, we accept high-quality guest posts from industry experts. Guest posts should provide value to our audience and align with our content standards. Contact us with your proposal and writing samples.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <NotificationBanner />
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section with Brand Colors */}
        <div className="text-center mb-12 relative">
          <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-[hsl(var(--light-blue))] to-[hsl(var(--light-purple))] rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-[hsl(var(--light-green))] to-[hsl(var(--white-green))] rounded-full blur-2xl opacity-20 animate-pulse delay-1000"></div>
          
          <div className="inline-flex items-center gap-3 p-4 bg-gradient-to-r from-[hsl(var(--light-blue))] to-[hsl(var(--light-purple))] rounded-2xl shadow-[var(--glow-blue)] mb-6">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <Sparkles className="w-6 h-6 text-purple-600 animate-pulse" />
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white via-[hsl(var(--light-blue))] to-[hsl(var(--light-purple))] bg-clip-text text-transparent">
            Knowledge Hub
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Insights, tutorials, and stories from our team about technology, development, and innovation.
          </p>
          
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-[hsl(var(--light-green))]">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-sm text-white/80">{blogs.length} Articles</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-[hsl(var(--light-orange))]">
              <Eye className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-white/80">Weekly Updates</span>
            </div>
          </div>
        </div>

        {/* Enhanced Search and Filter with Brand Colors */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8 max-w-4xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[hsl(var(--light-blue))] w-5 h-5" />
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 bg-white/10 border-[hsl(var(--light-blue))] text-white placeholder:text-white/50 h-12 focus:border-[hsl(var(--light-purple))] focus:shadow-[var(--glow-blue)] transition-all duration-300"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            <Badge
              variant={selectedTag === '' ? 'default' : 'outline'}
              className={`cursor-pointer whitespace-nowrap transition-all duration-300 ${
                selectedTag === '' 
                  ? 'bg-gradient-to-r from-[hsl(var(--light-blue))] to-[hsl(var(--light-purple))] text-gray-800 font-semibold shadow-[var(--glow-blue)]' 
                  : 'border-[hsl(var(--light-blue))] text-white/70 hover:bg-[hsl(var(--light-blue))]/20 hover:border-[hsl(var(--light-purple))]'
              }`}
              onClick={() => setSelectedTag('')}
            >
              All Topics
            </Badge>
            {allTags.map((tag, index) => {
              const colorClasses = [
                'border-[hsl(var(--light-green))] hover:bg-[hsl(var(--light-green))]/20',
                'border-[hsl(var(--light-orange))] hover:bg-[hsl(var(--light-orange))]/20',
                'border-[hsl(var(--light-pink))] hover:bg-[hsl(var(--light-pink))]/20',
                'border-[hsl(var(--light-yellow))] hover:bg-[hsl(var(--light-yellow))]/20'
              ];
              const activeColorClasses = [
                'bg-gradient-to-r from-[hsl(var(--light-green))] to-[hsl(var(--white-green))] text-gray-800',
                'bg-gradient-to-r from-[hsl(var(--light-orange))] to-[hsl(var(--light-yellow))] text-gray-800',
                'bg-gradient-to-r from-[hsl(var(--light-pink))] to-[hsl(var(--light-purple))] text-gray-800',
                'bg-gradient-to-r from-[hsl(var(--light-yellow))] to-[hsl(var(--light-orange))] text-gray-800'
              ];
              
              return (
                <Badge
                  key={tag}
                  variant={selectedTag === tag ? 'default' : 'outline'}
                  className={`cursor-pointer whitespace-nowrap transition-all duration-300 ${
                    selectedTag === tag 
                      ? `${activeColorClasses[index % activeColorClasses.length]} font-semibold shadow-lg` 
                      : `${colorClasses[index % colorClasses.length]} text-white/70`
                  }`}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </Badge>
              );
            })}
          </div>
        </div>

        {/* Blog Grid */}
        {isLoading ? (
          <div className="text-center py-16">
            <div className="text-white/80 text-lg">Loading articles...</div>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-white/80 text-lg">
              {searchQuery || selectedTag ? 'No articles found matching your criteria.' : 'No published articles yet.'}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredBlogs.map((blog, index) => {
              // Rotate colors for each card
              const cardColors = [
                'border-[hsl(var(--light-blue))] hover:shadow-[var(--glow-blue)]',
                'border-[hsl(var(--light-green))] hover:shadow-[var(--glow-green)]',
                'border-[hsl(var(--light-purple))] hover:shadow-[var(--glow-purple)]',
                'border-[hsl(var(--light-orange))] hover:shadow-[0_0_20px_hsl(var(--light-orange)_/_0.5)]'
              ];
              
              return (
                <Link key={blog.id} to={`/blog/${blog.slug}`}>
                  <Card className={`bg-white/5 backdrop-blur-sm ${cardColors[index % cardColors.length]} hover:bg-white/15 transition-all duration-500 hover:scale-105 h-full group relative overflow-hidden`}>
                    {/* Gradient overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {blog.featured_image_url && (
                      <div className="aspect-video overflow-hidden rounded-t-lg relative">
                        <img
                          src={blog.featured_image_url}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    )}
                    <CardHeader className="relative z-10">
                      <CardTitle className="text-white text-xl line-clamp-2 group-hover:bg-gradient-to-r group-hover:from-[hsl(var(--light-blue))] group-hover:to-[hsl(var(--light-purple))] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {blog.title}
                      </CardTitle>
                      <CardDescription className="text-white/70 line-clamp-3">
                        {blog.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0 relative z-10">
                      <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1 text-[hsl(var(--light-blue))]">
                            <Calendar className="w-4 h-4" />
                            {format(new Date(blog.published_at), 'MMM d, yyyy')}
                          </div>
                          <div className="flex items-center gap-1 text-[hsl(var(--light-green))]">
                            <Eye className="w-4 h-4" />
                            {blog.views}
                          </div>
                        </div>
                      </div>
                      
                      {blog.tags && blog.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {blog.tags.slice(0, 3).map((tag, tagIndex) => {
                            const tagColors = [
                              'border-[hsl(var(--light-green))] text-[hsl(var(--light-green))]',
                              'border-[hsl(var(--light-orange))] text-[hsl(var(--light-orange))]',
                              'border-[hsl(var(--light-pink))] text-[hsl(var(--light-pink))]'
                            ];
                            return (
                              <Badge key={tagIndex} variant="outline" className={`text-xs ${tagColors[tagIndex % tagColors.length]}`}>
                                {tag}
                              </Badge>
                            );
                          })}
                        </div>
                      )}
                      
                      <div className="flex items-center text-white font-medium group-hover:gap-2 transition-all group-hover:text-[hsl(var(--light-blue))]">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        )}
      </div>
      
      {/* FAQ Section */}
      <FAQSection 
        title="Blog & Content FAQ"
        subtitle="Everything you need to know about our blog and content strategy"
        faqs={blogFAQs}
        colorScheme="blue"
      />
      
      <Footer />
    </div>
  );
};

export default Blog;