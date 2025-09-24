import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import image1 from "../assets/ow1.png"
import image6 from "../assets/ow6.png"
import image7 from "../assets/ow7.png"
import image8 from "../assets/ow8.png"
import image2 from "../assets/ow2.png"
import image3 from "../assets/ow3.png"
import image4 from "../assets/ow4.png"
import image5 from "../assets/ow5.png"



const projects = [
  {
    id: 1,
    title: "AI-Powered Business Analytics Platform",
    image: image1,
  },
  {
    id: 2,
    title: "Intelligent Automation System for Manufacturing",
    image: image2,
  },
  {
    id: 3,
    title: "Agentic AI Workflow Optimization for Enterprises",
    image: image3,
  },
  {
    id: 4,
    title: "Smart Customer Engagement Chatbot for E-commerce",
    image: image4,
  },
  {
    id: 5,
    title: "AI-Driven Marketing Automation for SMEs",
    image: image5,
  },
  {
    id: 6,
    title: "Small Business Inventory Management System",
    image: image6,
  },
  {
    id: 7,
    title: "Personalized AI Recommendation Engine for Retail",
    image: image7,
  },
  {
    id: 8,
    title: "Automated Appointment & Booking System for Clinics",
    image: image8,
  },
  {
    id: 9,
    title: "Digital Transformation Website for Local Businesses",
    image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=800&h=600&fit=crop",
  },
  {
    id: 10,
    title: "AI-Driven Financial Insights Dashboard",
    image: image8,
  }
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