import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Winning Domino's 43K Followers in <6 hours",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "New-age website experience for India's most trusted bank",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "#BrighterThanEver Film for a Global Fashion Brand",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Stickiest Social Distancing Campaign for Fevicol",
    image: "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Creative Road Safety Awareness Campaign with Mumbai Police",
    image: "https://images.unsplash.com/photo-1545073508-7d8ffbc7dfce?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Raising Tuberculosis Awareness for a healthcare brand",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
  },
  {
    id: 7,
    title: "Finding #CoffeeKaBetterHalf with Karan Johar",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
  },
];

export const WorkSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-section" id="work">
      <div className="max-w-container mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Our latest work
          </h2>
          
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full w-12 h-12"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full w-12 h-12"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Desktop carousel */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(currentSlide, currentSlide + 3).map((project, index) => (
              <div
                key={project.id}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bold text-muted-foreground">
                    {String(currentSlide + index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden mb-6">
            <img
              src={projects[currentSlide].image}
              alt={projects[currentSlide].title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl font-bold text-muted-foreground">
              {String(currentSlide + 1).padStart(2, '0')}
            </span>
            <h3 className="text-xl font-semibold text-foreground">
              {projects[currentSlide].title}
            </h3>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-primary' : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};