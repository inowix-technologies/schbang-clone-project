import { ArrowRight, Clock } from "lucide-react";

const trendingPosts = [
  {
    title: "Schbang Wins Performance Mandate for Pyng; Launches Full-Funnel AI-Powered Campaign Using Google Veo 3",
    readTime: "2 Minutes",
    category: "Press Release",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    href: "/post/schbang-wins-performance-mandate-for-pyng"
  },
  {
    title: "Hajmola Sparks Viral Brand Banter on International Friendship Day",
    readTime: "2 Minutes", 
    category: "Press Release",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    href: "/post/hajmola-sparks-viral-brand-banter"
  },
  {
    title: "CRIF Turns Independence Day Into a Call for Financial Freedom with Campaign That Mirrors India's Economic Rise",
    readTime: "2 Minutes",
    category: "Press Release", 
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop",
    href: "/post/crif-turns-independence-day-financial-freedom"
  }
];

export const TrendingSection = () => {
  return (
    <section className="py-section">
      <div className="max-w-container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-16">
          Trending now
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingPosts.map((post, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="px-3 py-1 bg-muted rounded-full">{post.category}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
                
                <a
                  href={post.href}
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
                >
                  <span>Read Now</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};