import { HoverEffect } from "@/components/ui/card-hover-effect";
import { GradientMesh } from "@/components/ui/gradient-mesh";
import { FloatingShapes } from "@/components/ui/floating-shapes";

const trendingPosts = [
  {
    title: "Inowix Wins Performance Mandate for Pyng; Launches Full-Funnel AI-Powered Campaign",
    description: "Discover how we're revolutionizing performance marketing with the latest AI tools from Google.",
    link: "/post/schbang-wins-performance-mandate-for-pyng"
  },
  {
    title: "Hajmola Sparks Viral Brand Banter on International Friendship Day",
    description: "A deep dive into the social media strategy that captured the nation's attention.",
    link: "/post/hajmola-sparks-viral-brand-banter"
  },
  {
    title: "CRIF Turns Independence Day Into a Call for Financial Freedom",
    description: "How storytelling and data come together to mirror India's economic rise.",
    link: "/post/crif-turns-independence-day-financial-freedom"
  }
];

export const TrendingSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-black relative overflow-hidden">
      <GradientMesh className="opacity-20" />
      <FloatingShapes count={5} className="opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 md:mb-8 px-2 sm:px-0">
          Trending <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Insights</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-neutral-400 max-w-2xl mb-8 sm:mb-10 md:mb-12 px-4 sm:px-0">
          Stay ahead of the curve with our latest case studies, press releases, and industry deep-dives.
        </p>

        <HoverEffect items={trendingPosts} />
      </div>
    </section>
  );
};