import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ProjectShowcaseProps {
  onNext: () => void;
}

const legendaryProjects = [
  {
    id: 1,
    title: "AI-Powered E-Commerce Platform",
    category: "Legendary Build",
    image: "/src/assets/retailx-dashboard.jpg",
    description: "Revolutionary shopping experience with ML recommendations",
    stats: { users: "50K+", rating: "4.9", performance: "99.9%" },
    badges: ["AI", "E-commerce", "Mobile-First"],
    rarity: "legendary"
  },
  {
    id: 2,
    title: "FinTech Mobile Application",
    category: "Epic Creation",
    image: "/src/assets/fintrackImage.png",
    description: "Next-gen financial tracking with blockchain integration",
    stats: { users: "25K+", rating: "4.8", performance: "99.5%" },
    badges: ["FinTech", "Blockchain", "Security"],
    rarity: "epic"
  },
  {
    id: 3,
    title: "Smart Automation Suite",
    category: "Rare Artifact",
    image: "/src/assets/taskflow.png",
    description: "Business process automation with AI workflow optimization",
    stats: { users: "15K+", rating: "4.7", performance: "98.9%" },
    badges: ["Automation", "AI", "Enterprise"],
    rarity: "rare"
  },
  {
    id: 4,
    title: "Travel Discovery App",
    category: "Epic Creation",
    image: "/src/assets/architour-app.jpg",
    description: "Immersive travel experiences with AR integration",
    stats: { users: "30K+", rating: "4.9", performance: "99.2%" },
    badges: ["Travel", "AR", "Social"],
    rarity: "epic"
  }
];

const rarityColors = {
  legendary: {
    border: "border-[#FFF0BF]",
    bg: "from-[#FFF0BF]/30 to-[#FFB9E3]/20",
    glow: "shadow-[0_0_30px_rgba(255,240,191,0.3)]"
  },
  epic: {
    border: "border-[#CDC3FF]",
    bg: "from-[#CDC3FF]/30 to-[#B9D9FF]/20",
    glow: "shadow-[0_0_20px_rgba(205,195,255,0.3)]"
  },
  rare: {
    border: "border-[#D8FCC7]",
    bg: "from-[#D8FCC7]/30 to-[#C7EFFC]/20",
    glow: "shadow-[0_0_15px_rgba(216,252,199,0.3)]"
  }
};

export const ProjectShowcase = ({ onNext }: ProjectShowcaseProps) => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <div className="bg-gradient-to-br from-[#CDC3FF]/20 via-[#B9D9FF]/20 to-[#D8FCC7]/20 backdrop-blur-md rounded-3xl p-8 border border-[#CDC3FF]/30">
      {/* Header */}
      <div className="text-center space-y-4 mb-8">
        <div className="text-6xl animate-bounce">🏛️</div>
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#CDC3FF] via-[#B9D9FF] to-[#D8FCC7] bg-clip-text text-transparent">
          Inowix Arsenal - Hall of Fame
        </h2>
        <p className="text-white/80 text-lg">Behold the legendary artifacts we've forged before!</p>
        
        {/* Progress Bar */}
        <div className="w-full max-w-md mx-auto bg-white/10 rounded-full h-3 backdrop-blur-sm border border-white/20">
          <div className="bg-gradient-to-r from-[#B9D9FF] to-[#D8FCC7] h-full rounded-full w-3/6 transition-all duration-500"></div>
        </div>
        <div className="text-white/60 text-xs">Level 3 of 6</div>
      </div>

      {/* Stats Banner */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-[#FFF0BF]/30">
          <span className="text-[#FFF0BF]">🏆</span> 127 Legendary Builds
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-[#D8FCC7]/30">
          <span className="text-[#D8FCC7]">⭐</span> 4.8 Avg Rating
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-[#CDC3FF]/30">
          <span className="text-[#CDC3FF]">👥</span> 250K+ Active Users
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {legendaryProjects.map((project) => {
          const rarity = rarityColors[project.rarity as keyof typeof rarityColors];
          return (
            <div
              key={project.id}
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              className={`relative bg-gradient-to-br ${rarity.bg} backdrop-blur-sm rounded-2xl p-6 border-2 ${rarity.border} cursor-pointer transition-all duration-300 hover:scale-105 ${rarity.glow} group overflow-hidden`}
            >
              {/* Rarity Badge */}
              <div className={`absolute top-4 right-4 bg-gradient-to-r ${rarity.bg} border ${rarity.border} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                {project.category}
              </div>

              {/* Animated Background */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-20 h-20 bg-white rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-white rounded-full blur-lg animate-pulse delay-700"></div>
              </div>

              <div className="relative z-10">
                {/* Project Image Placeholder */}
                <div className="w-full h-32 bg-white/10 rounded-xl mb-4 flex items-center justify-center border border-white/20">
                  <div className="text-4xl">🚀</div>
                </div>

                {/* Project Info */}
                <div className="space-y-3">
                  <h3 className="font-bold text-white text-lg group-hover:text-[#D8FCC7] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm">{project.description}</p>

                  {/* Stats */}
                  <div className="flex justify-between text-xs">
                    <span className="text-[#D8FCC7]">👥 {project.stats.users}</span>
                    <span className="text-[#FFF0BF]">⭐ {project.stats.rating}</span>
                    <span className="text-[#CDC3FF]">⚡ {project.stats.performance}</span>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.badges.map((badge, index) => (
                      <span
                        key={index}
                        className="bg-white/20 text-white px-2 py-1 rounded-full text-xs border border-white/30"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expansion Content */}
                {selectedProject === project.id && (
                  <div className="mt-4 pt-4 border-t border-white/20 animate-fade-in">
                    <div className="space-y-2 text-sm text-white/80">
                      <p><strong>🎯 Achievement:</strong> Successfully deployed and scaled</p>
                      <p><strong>⚡ Power Level:</strong> {project.rarity.charAt(0).toUpperCase() + project.rarity.slice(1)}</p>
                      <p><strong>🔮 Special Abilities:</strong> High performance, User-friendly, Scalable</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Click indicator */}
              <div className="absolute bottom-2 right-2 text-white/50 text-xs">
                {selectedProject === project.id ? "↑ Collapse" : "↓ Expand"}
              </div>
            </div>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="text-center space-y-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <h3 className="text-xl font-bold text-white mb-3">Ready to Create Your Own Legend? 🌟</h3>
          <p className="text-white/80 mb-4">
            Your project could be the next legendary artifact in our Hall of Fame!
          </p>
          <Button
            onClick={onNext}
            className="bg-gradient-to-r from-[#D8FCC7] to-[#CDC3FF] hover:from-[#D8FCC7]/80 hover:to-[#CDC3FF]/80 text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(216,252,199,0.5)]"
          >
            <span className="mr-2">⚔️</span>
            Accept Final Challenge
            <span className="ml-2">🏆</span>
          </Button>
        </div>
      </div>

      {/* Mascot Speech */}
      <div className="mt-6 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-[#CDC3FF]/30 max-w-md mx-auto">
          <p className="text-white/90 text-sm">
            <span className="text-[#CDC3FF] font-bold">Inowix Bot</span> 🤖: 
            "Impressive, right? These legendary projects were once just ideas like yours. Ready for the final challenge?"
          </p>
        </div>
      </div>
    </div>
  );
};