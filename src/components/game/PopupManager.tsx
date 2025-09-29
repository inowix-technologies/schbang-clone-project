import { useState, useEffect } from "react";
import { GameFlow } from "./GameFlow";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface PopupManagerProps {
  children: React.ReactNode;
}

export const PopupManager = ({ children }: PopupManagerProps) => {
  const [showGameFlow, setShowGameFlow] = useState(false);
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [showScrollPopup, setShowScrollPopup] = useState(false);
  const [showTimePopup, setShowTimePopup] = useState(false);
  const [hasShownInitialPopup, setHasShownInitialPopup] = useState(false);

  // Exit Intent Detection
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownInitialPopup && !showExitIntent) {
        setShowExitIntent(true);
        setHasShownInitialPopup(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [hasShownInitialPopup, showExitIntent]);

  // Scroll-based Popup
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercent > 50 && !hasShownInitialPopup && !showScrollPopup) {
        setShowScrollPopup(true);
        setHasShownInitialPopup(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasShownInitialPopup, showScrollPopup]);

  // Time-based Popup
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasShownInitialPopup && !showTimePopup) {
        setShowTimePopup(true);
        setHasShownInitialPopup(true);
      }
    }, 30000); // Show after 30 seconds

    return () => clearTimeout(timer);
  }, [hasShownInitialPopup, showTimePopup]);

  const handleStartGame = () => {
    setShowGameFlow(true);
    setShowExitIntent(false);
    setShowScrollPopup(false);
    setShowTimePopup(false);
  };

  return (
    <>
      {children}

      {/* Game Flow Modal */}
      <GameFlow 
        isOpen={showGameFlow} 
        onClose={() => setShowGameFlow(false)} 
      />

      {/* Exit Intent Popup */}
      {showExitIntent && !showGameFlow && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-[#FFB9B9]/90 via-[#FFC8A9]/90 to-[#FFF0BF]/90 backdrop-blur-md rounded-3xl p-8 max-w-lg mx-auto border border-[#FFB9B9]/50 relative animate-scale-in">
            <button
              onClick={() => setShowExitIntent(false)}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="text-center space-y-6">
              <div className="text-6xl animate-bounce">🚨</div>
              <h3 className="text-2xl font-bold text-white">
                Wait! Don't Leave Without Your Treasure! 🏴‍☠️
              </h3>
              <p className="text-white/90 leading-relaxed">
                You're about to miss out on our <strong>exclusive interactive quest</strong> that 
                reveals your perfect project blueprint! Join 1,200+ explorers who've unlocked their digital dreams!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleStartGame}
                  className="bg-gradient-to-r from-[#D8FCC7] to-[#CDC3FF] hover:from-[#D8FCC7]/80 hover:to-[#CDC3FF]/80 text-black font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                  🎮 Start My Quest!
                </Button>
                <Button
                  onClick={() => setShowExitIntent(false)}
                  variant="ghost"
                  className="text-white/80 hover:text-white hover:bg-white/10 px-6 py-3 rounded-full"
                >
                  Maybe Later
                </Button>
              </div>

              <div className="text-sm text-white/70">
                ⚡ Takes only 5 minutes • 🎁 Free project blueprint • 🏆 Join the winners!
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scroll-based Popup */}
      {showScrollPopup && !showGameFlow && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-[#B9D9FF]/90 via-[#CDC3FF]/90 to-[#D8FCC7]/90 backdrop-blur-md rounded-3xl p-8 max-w-lg mx-auto border border-[#B9D9FF]/50 relative animate-scale-in">
            <button
              onClick={() => setShowScrollPopup(false)}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="text-center space-y-6">
              <div className="text-6xl animate-bounce">🎯</div>
              <h3 className="text-2xl font-bold text-white">
                Loving What You See? Let's Make It Yours! ✨
              </h3>
              <p className="text-white/90 leading-relaxed">
                Since you're exploring our work, why not discover what we can build for 
                <strong> YOUR</strong> vision? Our interactive quest creates a custom project plan just for you!
              </p>
              
              <div className="bg-white/20 rounded-xl p-4 border border-white/30">
                <div className="text-sm text-white/90 mb-2">What you'll get:</div>
                <div className="space-y-1 text-sm text-white/80">
                  <div>✅ Custom project timeline & cost estimate</div>
                  <div>✅ Recommended tech stack for your needs</div>
                  <div>✅ Free consultation with our experts</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleStartGame}
                  className="bg-gradient-to-r from-[#B9D9FF] to-[#D8FCC7] hover:from-[#B9D9FF]/80 hover:to-[#D8FCC7]/80 text-black font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                  🚀 Get My Custom Plan!
                </Button>
                <Button
                  onClick={() => setShowScrollPopup(false)}
                  variant="ghost"
                  className="text-white/80 hover:text-white hover:bg-white/10 px-6 py-3 rounded-full"
                >
                  Continue Browsing
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Time-based Popup */}
      {showTimePopup && !showGameFlow && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-[#FFB9E3]/90 via-[#FFF0BF]/90 to-[#FFC8A9]/90 backdrop-blur-md rounded-3xl p-8 max-w-lg mx-auto border border-[#FFB9E3]/50 relative animate-scale-in">
            <button
              onClick={() => setShowTimePopup(false)}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="text-center space-y-6">
              <div className="text-6xl animate-bounce">🎁</div>
              <h3 className="text-2xl font-bold text-white">
                Ready to Turn Your Idea Into Reality? 🌟
              </h3>
              <p className="text-white/90 leading-relaxed">
                You've been browsing for a while - that tells us you're serious about your project! 
                Let's create something amazing together with our <strong>interactive project builder</strong>.
              </p>
              
              <div className="bg-white/20 rounded-xl p-4 border border-white/30">
                <div className="text-lg font-bold text-white mb-2">🎮 Special Offer - Today Only!</div>
                <div className="text-white/90">
                  Complete our quest and get a <strong>FREE detailed project blueprint</strong> 
                  + 30-minute consultation with our experts!
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleStartGame}
                  className="bg-gradient-to-r from-[#FFB9E3] to-[#FFC8A9] hover:from-[#FFB9E3]/80 hover:to-[#FFC8A9]/80 text-black font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                  🎯 Claim My Blueprint!
                </Button>
                <Button
                  onClick={() => setShowTimePopup(false)}
                  variant="ghost"
                  className="text-white/80 hover:text-white hover:bg-white/10 px-6 py-3 rounded-full"
                >
                  Not Right Now
                </Button>
              </div>

              <div className="text-xs text-white/60">
                💝 Limited time offer • ⏰ Expires in 24 hours • 🎪 No credit card required
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};