import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Header } from '@/components/Header';
import { NotificationBanner } from '@/components/NotificationBanner';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Eye, Share2 } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image_url: string | null;
  published_at: string;
  views: number;
  tags: string[] | null;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const { toast } = useToast();

  const fetchBlog = async () => {
    if (!slug) return;

    try {
      // Fetch the blog post
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          setNotFound(true);
        } else {
          throw error;
        }
        return;
      }

      setBlog(data);

      // Increment view count
      await supabase
        .from('blogs')
        .update({ views: (data.views || 0) + 1 })
        .eq('id', data.id);

    } catch (error) {
      console.error('Error fetching blog:', error);
      setNotFound(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  const handleShare = async () => {
    try {
      if (navigator.share && blog) {
        await navigator.share({
          title: blog.title,
          text: blog.excerpt,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link copied!",
          description: "The blog post link has been copied to your clipboard.",
        });
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-hero">
        <NotificationBanner />
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="text-white/80 text-lg">Loading article...</div>
        </div>
      </div>
    );
  }

  if (notFound || !blog) {
    return (
      <div className="min-h-screen bg-gradient-hero">
        <NotificationBanner />
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold text-white mb-4">Article Not Found</h1>
            <p className="text-white/80 mb-8">
              The article you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/blog">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      <NotificationBanner />
      <Header />
      
      <article className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog */}
          <Link 
            to="/blog"
            className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          {/* Featured Image */}
          {blog.featured_image_url && (
            <div className="aspect-video mb-8 rounded-2xl overflow-hidden">
              <img
                src={blog.featured_image_url}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight">
              {blog.title}
            </h1>
            
            {blog.excerpt && (
              <p className="text-xl text-white/80 mb-6 leading-relaxed">
                {blog.excerpt}
              </p>
            )}

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
              <div className="flex items-center gap-6 text-white/60">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {format(new Date(blog.published_at), 'MMMM d, yyyy')}
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  {blog.views} views
                </div>
              </div>
              
              <Button
                onClick={handleShare}
                variant="outline"
                size="sm"
                className="border-white/20 text-white hover:bg-white/10 self-start sm:self-auto"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {blog.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="border-white/20 text-white/70">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </header>

          {/* Article Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="text-white/90 leading-relaxed whitespace-pre-wrap">
              {blog.content}
            </div>
          </div>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <div className="text-white/60">
                <p>Published on {format(new Date(blog.published_at), 'MMMM d, yyyy')}</p>
              </div>
              
              <div className="flex gap-2">
                <Button
                  onClick={handleShare}
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Article
                </Button>
              </div>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;