import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote: "When Inowix presented the concept and storyboard to Sony Music and us, they brought a rich visual language to our song and we knew, immediately, that they were the right partners for Roz Roz.",
    name: "The Yellow Diary Team",
    title: "Sony Music",
  },
  {
    quote: "India is a key market for our growth agenda and investing in building the Date Crown brand is key to the long-term success of this agenda. Our partnership with Inowix has been a great stepping stone in building a strong Date Crown brand.",
    name: "Paul O'Neill",
    title: "Vice President Marketing, Date Crown",
  },
  {
    quote: "Fevicol has over the years come to epitomize strong bonds. The Friendship Day campaign with Inowix provided us with an apt opportunity to bring alive this proposition; fantastic to see such a wide array of brands interact with Fevicol through this medium!",
    name: "Giridhar Seetharam",
    title: "Chief Business Officer, Fevicol",
  },
  {
    quote: "The campaign #MoodHiBadalDiya for Tata Neu has received a wonderful response from our social community. This campaign has seen excellent effort from every single one of the team members involved behind the scenes. Thank you for being part of this journey Inowix!",
    name: "Isha Shroff",
    title: "Associate Director Social Media, Tata Neu",
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-grid-white/[0.02] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground px-2 sm:px-0">
          Hear from our partners
        </h2>
      </div>
      
      <div className="h-[20rem] sm:h-[22rem] md:h-[25rem] rounded-md flex flex-col antialiased bg-transparent dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
};