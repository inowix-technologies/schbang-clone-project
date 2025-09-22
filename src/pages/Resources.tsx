import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { useState } from "react";

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
    author: "Marketing Team"
  },
  {
    id: 2,
    title: "How We Increased Brand Engagement by 300%",
    excerpt: "A deep dive into our award-winning campaign strategy and execution.",
    category: "Case Studies", 
    readTime: "8 min read",
    date: "Dec 12, 2024",
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=300&fit=crop",
    author: "Strategy Team"
  },
  {
    id: 3,
    title: "Building Brand Identity in the Digital Age",
    excerpt: "Essential principles for creating memorable and effective brand identities.",
    category: "Tips & Guides",
    readTime: "6 min read", 
    date: "Dec 10, 2024",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
    author: "Creative Team"
  },
  {
    id: 4,
    title: "The Rise of AI in Creative Industries",
    excerpt: "Understanding how artificial intelligence is transforming creative workflows.",
    category: "Industry Insights",
    readTime: "7 min read",
    date: "Dec 8, 2024", 
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    author: "Tech Team"
  },
  {
    id: 5,
    title: "Social Media Strategies That Actually Work",
    excerpt: "Proven tactics for building authentic connections with your audience.",
    category: "Tips & Guides",
    readTime: "4 min read",
    date: "Dec 5, 2024",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    author: "Social Media Team"
  },
  {
    id: 6,
    title: "Measuring Success in Brand Campaigns",
    excerpt: "Key metrics and KPIs that matter for evaluating campaign performance.",
    category: "Industry Insights", 
    readTime: "6 min read",
    date: "Dec 3, 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    author: "Analytics Team"
  }
];

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles = activeCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-section">
        <div className="max-w-container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
              Resources & Insights
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay ahead with industry insights, case studies, and expert guidance from our team
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full transition-colors ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-primary/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {filteredArticles.length > 0 && (
        <section className="py-section bg-secondary">
          <div className="max-w-container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden">
                <img
                  src={filteredArticles[0].image}
                  alt={filteredArticles[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full mb-4">
                  Featured
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {filteredArticles[0].title}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {filteredArticles[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{filteredArticles[0].date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{filteredArticles[0].readTime}</span>
                  </div>
                  <span>by {filteredArticles[0].author}</span>
                </div>
                <a
                  href={`/blog/${filteredArticles[0].id}`}
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium"
                >
                  Read Article
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-section">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.slice(1).map((article) => (
              <article key={article.id} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden mb-6">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                    {article.category}
                  </span>
                  
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <a
                    href={`/blog/${article.id}`}
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;