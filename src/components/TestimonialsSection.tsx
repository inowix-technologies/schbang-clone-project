import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "When Inowix presented the concept and storyboard to Sony Music and us, they brought a rich visual language to our song and we knew, immediately, that they were the right partners for Roz Roz.",
    author: "The Yellow Diary Team",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=80&h=80&fit=crop&crop=face"
  },
  {
    quote: "India is a key market for our growth agenda and investing in building the Date Crown brand is key to the long-term success of this agenda. Our partnership with Inowix has been a great stepping stone in building a strong Date Crown brand.",
    author: "Paul O'Neill, Vice President Marketing, Date Crown", 
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
  },
  {
    quote: "Fevicol has over the years come to epitomize strong bonds. The Friendship Day campaign with Inowix provided us with an apt opportunity to bring alive this proposition; fantastic to see such a wide array of brands interact with Fevicol through this medium!",
    author: "Giridhar Seetharam, Chief Business Officer, Fevicol",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face"
  },
  {
    quote: "The campaign #MoodHiBadalDiya for Tata Neu has received a wonderful response from our social community. This campaign has seen excellent effort from every single one of the team members involved behind the scenes. Thank you for being part of this journey Inowix!",
    author: "Isha Shroff, Associate Director Social Media, Tata Neu",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b172?w=80&h=80&fit=crop&crop=face"
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
              "{testimonials[currentSlide].quote}"
            </blockquote>
            
            <div className="flex items-center gap-4">
              <img
                src={testimonials[currentSlide].image}
                alt={testimonials[currentSlide].author}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-foreground">
                  {testimonials[currentSlide].author}
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