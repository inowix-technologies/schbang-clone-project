import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export const testimonials = [
  {
    projectSlug: "daraz-ecommerce",
    name: "Bjarke Mikkelsen",
    position: "Co-CEO, Daraz Group",
    content: "When we integrated advanced analytics and streamlined seller operations, we saw platform efficiencies improve dramatically. The time to onboard new merchants went down by over 40%, and customer satisfaction rose in every major market.",
  },
  {
    projectSlug: "fintrack-financial-management",
    name: "Farida Orujova",
    position: "Founder, FinTrack",
    content: "With FinTrack, we aimed to simplify money management. Once we rolled out personalized dashboards and spending alerts, users reported feeling more control in their daily finances — and our retention rates increased significantly.",
  },
  {
    projectSlug: "bigohealth-telemedicine",
    name: "Gaurav Kumar",
    position: "Co-Founder & CEO, BigOHealth",
    content: "Before this collaboration, reaching patients in rural districts was a constant struggle. The improved scheduling and remote care capabilities we achieved have dramatically increased trust and accessibility. Today, patients in remote Bihar are getting consultations without traveling 50-100 km.",
  },
  {
    projectSlug: "nationwide-visas-immigration",
    name: "Rajiv Arora",
    position: "Founder & CEO, Nationwide Immigration Services",
    content: "With the updated digital workflow, our applicants now face far fewer delays. Documentation, tracking, and communication have become seamless, and we’ve noticed a rise in successful visa applications and better client satisfaction across all countries we serve.",
  },
  {
    projectSlug: "siya-ayurveda-ecommerce",
    name: "Dr. Megha Chaturvedi",
    position: "Founder, Siya Ayurveda",
    content: "Customers tell us they’ve never felt more confident buying our herbal products online—clearer product details, faster checkout, and reliable shipping. The platform has helped us build deeper trust with our wellness community.",
  },
  {
    projectSlug: "luvloop-dating",
    name: "Suresh",
    position: "Founder & CEO, LuvLoop",
    content: "Building LuvLoop was always about making meaningful connections. When we added AI-backed conversation starters and safety verification, users said they felt more comfortable and engaged. The rate of repeated daily sessions rose sharply.",
  },
  {
    projectSlug: "bayut-realestate",
    name: "Haider Al Khan",
    position: "CEO, Bayut",
    content: "In the UAE real estate market, clarity and trust matter. Our updated UX for Bayut, with enhanced 3D tours and analytics, has helped buyers feel more confident. We've seen more qualified leads and faster decisions from agents using our platform.",
  }
];


export const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-section bg-secondary">
      <div className="max-w-container mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Hear from our partners
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

        <div className="max-w-4xl mx-auto">
          <div className="bg-card p-8 md:p-12 rounded-2xl border border-border">
            <Quote className="w-12 h-12 text-primary mb-6" />
            
            <blockquote className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
              "{testimonials[currentSlide].content}"
            </blockquote>
            
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">
                  {testimonials[currentSlide].name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  {testimonials[currentSlide].name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[currentSlide].position}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
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
