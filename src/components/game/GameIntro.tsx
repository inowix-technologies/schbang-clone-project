import { useState } from "react";
import { Button } from "@/components/ui/button";

interface GameIntroProps {
  onNext: () => void;
}

export const GameIntro = ({ onNext }: GameIntroProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleStart = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onNext();
    }, 1000);
  };

  return (
    <div className={`bg-gradient-to-br from-[#CDC3FF]/20 via-[#B9D9FF]/20 to-[#D8FCC7]/20 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-[#CDC3FF]/30 transition-all duration-1000 ${
      isAnimating ? 'scale-110 opacity-0' : 'scale-100 opacity-100'
    }`}>
      {/* Animated Background Effects */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#B9D9FF]/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#CDC3FF]/20 rounded-full blur-xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#D8FCC7]/20 rounded-full blur-lg animate-pulse delay-300"></div>
      </div>

      <div className="relative z-10 text-center space-y-8">
        {/* Game Logo/Icon */}
        <div className="relative">
          <div className="text-8xl animate-bounce">🎮</div>
          <div className="absolute -top-2 -right-2 text-2xl animate-spin">⚡</div>
        </div>

        {/* Game Title */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#CDC3FF] via-[#B9D9FF] to-[#D8FCC7] bg-clip-text text-transparent">
            Mission: Build Your Dream Project!
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Embark on an epic quest to unlock your custom project blueprint through interactive challenges and rewards!
          </p>
        </div>

        {/* Game Stats */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-[#B9D9FF]/30">
            <span className="text-[#B9D9FF]">⭐</span> 1,247 Players Today
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-[#D8FCC7]/30">
            <span className="text-[#D8FCC7]">🏆</span> 98% Success Rate
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-[#CDC3FF]/30">
            <span className="text-[#CDC3FF]">⚡</span> 5 Minute Quest
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="space-y-3">
          <div className="text-white/60 text-sm">Quest Progress</div>
          <div className="w-full max-w-md mx-auto bg-white/10 rounded-full h-3 backdrop-blur-sm border border-white/20">
            <div className="bg-gradient-to-r from-[#B9D9FF] to-[#D8FCC7] h-full rounded-full w-0 animate-pulse"></div>
          </div>
          <div className="text-white/60 text-xs">Level 0 of 6</div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            onClick={handleStart}
            className="bg-gradient-to-r from-[#B9D9FF] to-[#D8FCC7] hover:from-[#B9D9FF]/80 hover:to-[#D8FCC7]/80 text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(185,217,255,0.5)] group"
          >
            <span className="mr-2">▶</span>
            Start Quest
            <span className="ml-2 group-hover:animate-bounce">🚀</span>
          </Button>
          
          <Button
            variant="ghost"
            className="text-white/80 hover:text-white hover:bg-white/10 px-6 py-4 rounded-full"
          >
            <span className="mr-2">❌</span>
            Maybe Later
          </Button>
        </div>

        {/* Mascot Speech Bubble */}
        <div className="relative inline-block">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-[#CDC3FF]/30 max-w-sm">
            <p className="text-white/90 text-sm">
              "Welcome, brave explorer! I'm <span className="text-[#CDC3FF] font-bold">Inowix Bot</span> 🤖 
              I'll guide you through this epic journey to create your perfect project!"
            </p>
          </div>
          <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white/10 border-l border-b border-[#CDC3FF]/30 rotate-45"></div>
        </div>
      </div>
    </div>
  );
};