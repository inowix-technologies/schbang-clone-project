import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { PageShell } from "@/components/layout/PageShell";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Eye, Share2 } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface BlogPostData {
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
  const [blog, setBlog] = useState<BlogPostData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const { toast } = useToast();

  const fetchBlog = async () => {
    if (!slug) return;

    try {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("slug", slug)
        .eq("status", "published")
        .single();

      if (error) {
        if (error.code === "PGRST116") {
          setNotFound(true);
        } else {
          throw error;
        }
        return;
      }

      setBlog(data);

      await supabase
        .from("blogs")
        .update({ views: (data.views || 0) + 1 })
        .eq("id", data.id);
    } catch (error) {
      console.error("Error fetching blog:", error);
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
          title: "Link copied",
          description: "The article link has been copied to your clipboard.",
        });
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  if (isLoading) {
    return (
      <PageShell>
        <div className="max-w-[1600px] mx-auto px-4 pt-32 pb-20 text-center text-muted-foreground">
          Loading article...
        </div>
      </PageShell>
    );
  }

  if (notFound || !blog) {
    return (
      <PageShell>
        <div className="max-w-[1600px] mx-auto px-4 pt-32 pb-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild variant="outline" className="rounded-sm">
            <Link to="/blogs">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-20">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {blog.featured_image_url && (
          <div className="aspect-video mb-8 rounded-sm overflow-hidden border border-border/40">
            <img src={blog.featured_image_url} alt={blog.title} className="w-full h-full object-cover" />
          </div>
        )}

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
            {blog.title}
          </h1>

          {blog.excerpt && <p className="lead mb-6">{blog.excerpt}</p>}

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            <div className="flex items-center gap-5 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {format(new Date(blog.published_at), "MMMM d, yyyy")}
              </span>
              <span className="inline-flex items-center gap-2">
                <Eye className="w-4 h-4" />
                {blog.views} views
              </span>
            </div>

            <Button onClick={handleShare} variant="outline" size="sm" className="rounded-sm self-start sm:self-auto">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>

          {blog.tags && blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {blog.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="rounded-sm font-mono text-[10px] uppercase tracking-wider">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="text-foreground/90 leading-relaxed whitespace-pre-wrap">{blog.content}</div>
        </div>

        <footer className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <p className="text-sm text-muted-foreground">
            Published {format(new Date(blog.published_at), "MMMM d, yyyy")}
          </p>
          <Button onClick={handleShare} variant="outline" size="sm" className="rounded-sm">
            <Share2 className="w-4 h-4 mr-2" />
            Share article
          </Button>
        </footer>
      </article>
    </PageShell>
  );
};

export default BlogPost;
