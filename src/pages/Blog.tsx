import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { PageSection } from "@/components/layout/PageSection";
import { FAQSection } from "@/components/FAQSection";
import { useBlogs } from "@/hooks/useBlogs";
import { Search, Calendar, Eye, ArrowRight } from "lucide-react";
import { format } from "date-fns";

const blogFAQs = [
  {
    id: "blog-freq",
    question: "How often do you publish new posts?",
    answer:
      "We publish engineering insights on product development, AI, cloud infrastructure, and security — covering what we learn building client systems and Inowix Labs products.",
  },
  {
    id: "blog-topics",
    question: "What topics do you cover?",
    answer:
      "Full-stack engineering, mobile development, AI/ML integration, DevOps, cybersecurity, system architecture, and lessons from shipping production platforms.",
  },
  {
    id: "blog-authors",
    question: "Who writes the content?",
    answer:
      "Our engineering team — developers and architects who build the systems we write about. Real experience, not outsourced content.",
  },
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("");

  const { blogs, isLoading, allTags, filterBlogs } = useBlogs(false, "published");
  const filteredBlogs = filterBlogs(searchQuery, selectedTag);

  return (
    <PageShell>
      <PageHero
        label="Engineering Insights"
        title={
          <>
            <span className="block">From the team</span>
            <span className="block text-primary">building production systems.</span>
          </>
        }
        subtitle="Deep dives into technology, architecture, and engineering — from Inowix."
      />

      <PageSection border={false} className="pt-0 pb-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search articles, topics, keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-11 rounded-sm bg-inowix-surface/30 border-border/40"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag("")}
              className={`px-4 py-1.5 rounded-sm text-sm font-medium transition-all ${
                selectedTag === ""
                  ? "bg-primary text-primary-foreground"
                  : "border border-border/40 text-muted-foreground hover:text-foreground"
              }`}
            >
              All Topics
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-1.5 rounded-sm text-sm font-medium transition-all ${
                  selectedTag === tag
                    ? "bg-primary text-primary-foreground"
                    : "border border-border/40 text-muted-foreground hover:text-foreground"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection border={false} className="pt-0">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-[4/5] rounded-sm bg-inowix-surface/30 animate-pulse border border-border/40" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredBlogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                >
                  <Link to={`/blog/${blog.slug}`} className="group block h-full">
                    <article className="h-full p-5 rounded-sm border border-border/40 bg-inowix-surface/20 hover:bg-inowix-surface/40 transition-colors flex flex-col">
                      {blog.featured_image_url && (
                        <div className="aspect-video rounded-sm overflow-hidden mb-5 border border-border/30">
                          <img
                            src={blog.featured_image_url}
                            alt={blog.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      )}

                      <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground font-mono uppercase tracking-wider">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {format(new Date(blog.published_at), "MMM d, yyyy")}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {blog.views}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                        {blog.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-5 flex-1 leading-relaxed">
                        {blog.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1.5">
                          {blog.tags?.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 border border-border/40 rounded-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <ArrowRight className="w-4 h-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {!isLoading && filteredBlogs.length === 0 && (
          <div className="text-center py-24">
            <h3 className="text-xl font-semibold mb-2">No articles found</h3>
            <p className="text-muted-foreground">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </PageSection>

      <FAQSection
        title="Blog FAQ"
        subtitle="About our engineering content"
        faqs={blogFAQs}
      />
    </PageShell>
  );
};

export default Blog;
