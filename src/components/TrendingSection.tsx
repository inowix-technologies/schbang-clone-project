import { HoverEffect } from "@/components/ui/card-hover-effect";

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
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
          Trending <span className="text-blue-500">Insights</span>
        </h2>
        <p className="text-neutral-400 max-w-2xl mb-12 text-lg">
          Stay ahead of the curve with our latest case studies, press releases, and industry deep-dives.
        </p>

        <HoverEffect items={trendingPosts} />
      </div>
    </section>
  );
};