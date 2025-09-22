import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";

const categories = ["All", "Brand Strategy", "Digital Marketing", "Web Development", "Film & Photography"];

const projects = [
  {
    id: 1,
    title: "Winning Domino's 43K Followers in <6 hours",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop",
    description: "A viral social media campaign that garnered massive engagement."
  },
  {
    id: 2,
    title: "New-age website experience for India's most trusted bank",
    category: "Web Development", 
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    description: "Complete digital transformation for a leading financial institution."
  },
  {
    id: 3,
    title: "#BrighterThanEver Film for a Global Fashion Brand",
    category: "Film & Photography",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    description: "Creative film production for international fashion campaign."
  },
  {
    id: 4,
    title: "Stickiest Social Distancing Campaign for Fevicol",
    category: "Brand Strategy",
    image: "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?w=800&h=600&fit=crop",
    description: "Award-winning creative campaign during the pandemic."
  },
  {
    id: 5,
    title: "Creative Road Safety Awareness Campaign with Mumbai Police",
    category: "Brand Strategy",
    image: "https://images.unsplash.com/photo-1545073508-7d8ffbc7dfce?w=800&h=600&fit=crop",
    description: "Public service campaign for road safety awareness."
  },
  {
    id: 6,
    title: "Raising Tuberculosis Awareness for a healthcare brand",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
    description: "Health awareness campaign with social impact."
  }
];

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-section">
        <div className="max-w-container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
              Our Work
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Award-winning campaigns and solutions for 300+ brands worldwide
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

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-3">
                  <span className="text-sm text-primary font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Work;