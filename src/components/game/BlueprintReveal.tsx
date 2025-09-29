import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ProjectData } from "./GameFlow";

interface BlueprintRevealProps {
  projectData: ProjectData;
  onNext: () => void;
}

const projectDetails = {
  ai: {
    timeline: '12-16 weeks',
    techStack: ['Python', 'TensorFlow', 'React', 'FastAPI', 'PostgreSQL'],
    features: ['Machine Learning Models', 'Real-time Analytics', 'API Integration', 'Admin Dashboard'],
    complexity: 'Advanced'
  },
  ecommerce: {
    timeline: '8-12 weeks',
    techStack: ['React', 'Node.js', 'Stripe', 'MongoDB', 'AWS'],
    features: ['Product Management', 'Payment Gateway', 'Order Tracking', 'User Authentication'],
    complexity: 'Intermediate'
  },
  mobile: {
    timeline: '10-14 weeks',
    techStack: ['React Native', 'Firebase', 'Redux', 'Expo', 'TypeScript'],
    features: ['Cross-platform', 'Push Notifications', 'Offline Mode', 'App Store Ready'],
    complexity: 'Intermediate'
  },
  web: {
    timeline: '6-10 weeks',
    techStack: ['React', 'Next.js', 'Tailwind', 'Vercel', 'Supabase'],
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Modern UI/UX'],
    complexity: 'Basic to Intermediate'
  },
  automation: {
    timeline: '8-12 weeks',
    techStack: ['Python', 'Zapier', 'APIs', 'Webhooks', 'Cloud Functions'],
    features: ['Workflow Automation', 'Data Processing', 'Third-party Integration', 'Monitoring'],
    complexity: 'Intermediate'
  },
  blockchain: {
    timeline: '14-20 weeks',
    techStack: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS'],
    features: ['Smart Contracts', 'DeFi Integration', 'NFT Support', 'Wallet Connection'],
    complexity: 'Advanced'
  }
};

export const BlueprintReveal = ({ projectData, onNext }: BlueprintRevealProps) => {
  const [isRevealing, setIsRevealing] = useState(false);
  const [showContent, setShowContent] = useState(false);
  
  const details = projectDetails[projectData.type as keyof typeof projectDetails] || projectDetails.web;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRevealing(true);
      setTimeout(() => setShowContent(true), 1000);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#FFF0BF]/20 via-[#FFB9E3]/20 to-[#FFC8A9]/20 backdrop-blur-md rounded-3xl p-8 border border-[#FFF0BF]/30">
      {/* Header */}
      <div className="text-center space-y-4 mb-8">
        <div className="text-6xl animate-bounce">🎉</div>
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FFF0BF] via-[#FFB9E3] to-[#FFC8A9] bg-clip-text text-transparent">
          You Unlocked Your Project Blueprint!
        </h2>
        <p className="text-white/80 text-lg">Behold! Your custom project plan has been forged!</p>
        
        {/* Progress Bar */}
        <div className="w-full max-w-md mx-auto bg-white/10 rounded-full h-3 backdrop-blur-sm border border-white/20">
          <div className="bg-gradient-to-r from-[#FFF0BF] to-[#FFB9E3] h-full rounded-full w-2/6 transition-all duration-500"></div>
        </div>
        <div className="text-white/60 text-xs">Level 2 of 6</div>
      </div>

      {/* Scroll Animation */}
      <div className="relative">
        <div className={`transform transition-all duration-2000 ${isRevealing ? 'scale-100 rotate-0' : 'scale-50 rotate-12'}`}>
          {/* Scroll Background */}
          <div className="bg-gradient-to-b from-[#FFF0BF]/30 to-[#FFB9E3]/30 rounded-3xl p-8 border-2 border-dashed border-[#FFF0BF]/50 relative overflow-hidden">
            {/* Animated Sparkles */}
            <div className="absolute inset-0">
              <div className="absolute top-4 left-4 text-2xl animate-pulse">✨</div>
              <div className="absolute top-8 right-8 text-xl animate-pulse delay-300">⭐</div>
              <div className="absolute bottom-6 left-8 text-lg animate-pulse delay-600">💫</div>
              <div className="absolute bottom-4 right-4 text-2xl animate-pulse delay-900">🌟</div>
            </div>

            {showContent && (
              <div className="relative z-10 space-y-6 animate-fade-in">
                {/* Project Title */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    🏆 {projectData.name || 'Hero'}'s Epic {projectData.type.toUpperCase()} Quest
                  </h3>
                  <div className="bg-gradient-to-r from-[#FFF0BF] to-[#FFB9E3] text-black px-4 py-2 rounded-full text-sm font-bold inline-block">
                    Complexity: {details.complexity}
                  </div>
                </div>

                {/* Blueprint Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Timeline */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <h4 className="text-lg font-bold text-[#FFF0BF] mb-3 flex items-center">
                      ⏰ Quest Duration
                    </h4>
                    <p className="text-white text-xl font-bold">{details.timeline}</p>
                  </div>

                  {/* Tech Stack */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <h4 className="text-lg font-bold text-[#FFB9E3] mb-3 flex items-center">
                      🛠️ Magic Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {details.techStack.map((tech, index) => (
                        <span key={index} className="bg-[#FFB9E3]/20 text-white px-2 py-1 rounded-full text-sm border border-[#FFB9E3]/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <h4 className="text-lg font-bold text-[#FFC8A9] mb-3 flex items-center">
                    ⚡ Epic Features Unlocked
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {details.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <span className="text-[#D8FCC7]">✅</span>
                        <span className="text-white">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Info Display */}
                <div className="bg-gradient-to-r from-[#CDC3FF]/20 to-[#B9D9FF]/20 rounded-xl p-4 border border-[#CDC3FF]/30">
                  <h4 className="text-lg font-bold text-[#CDC3FF] mb-2">📧 Blueprint Delivery Address</h4>
                  <p className="text-white">{projectData.email}</p>
                  {projectData.phone && (
                    <p className="text-white/80">📱 Bonus Contact: {projectData.phone}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Button */}
      {showContent && (
        <div className="text-center mt-8">
          <Button
            onClick={onNext}
            className="bg-gradient-to-r from-[#FFF0BF] to-[#FFB9E3] hover:from-[#FFF0BF]/80 hover:to-[#FFB9E3]/80 text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,185,227,0.5)]"
          >
            <span className="mr-2">🎯</span>
            Continue Quest
            <span className="ml-2">🚀</span>
          </Button>
        </div>
      )}

      {/* Mascot Speech */}
      <div className="mt-6 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-[#FFF0BF]/30 max-w-md mx-auto">
          <p className="text-white/90 text-sm">
            <span className="text-[#FFF0BF] font-bold">Inowix Bot</span> 🤖: 
            "Magnificent! Your blueprint scroll has been generated. Next, let me show you our Hall of Fame!"
          </p>
        </div>
      </div>
    </div>
  );
};