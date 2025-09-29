import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ProjectData } from "./GameFlow";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface VictoryScreenProps {
  projectData: ProjectData;
  onClose: () => void;
}

export const VictoryScreen = ({ projectData, onClose }: VictoryScreenProps) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [shareMessage, setShareMessage] = useState('');

  useEffect(() => {
    setShowConfetti(true);
    setShareMessage(`I just built my dream ${projectData.type} project blueprint on Inowix! 🚀 #InowixQuest #ProjectBuilding`);
    submitLeadData();
  }, []);

  const submitLeadData = async () => {
    try {
      const { error } = await supabase
        .from('contact_leads')
        .insert({
          name: projectData.name || 'Quest Hero',
          email: projectData.email,
          phone: projectData.phone,
          subject: `Dream Project Quest - ${projectData.type}`,
          message: `Completed the interactive quest for a ${projectData.type} project. Ready to turn this blueprint into reality!`,
          source: 'interactive_game',
          status: 'new'
        });

      if (error) {
        console.error('Error submitting lead:', error);
      }
    } catch (error) {
      console.error('Failed to submit lead data:', error);
    }
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    
    // Simulate PDF generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Create a simple text file as demo (in real implementation, this would be a PDF)
    const content = `
🏆 PROJECT BLUEPRINT - ${projectData.type.toUpperCase()} QUEST COMPLETED!

Hero Name: ${projectData.name || 'Brave Explorer'}
Quest Type: ${projectData.type}
Contact: ${projectData.email}
${projectData.phone ? `Phone: ${projectData.phone}` : ''}

🎯 MISSION ACCOMPLISHED!
You have successfully completed the Inowix Interactive Quest and unlocked your custom project blueprint!

📋 NEXT STEPS:
1. Review your project specifications
2. Contact our Project Wizards for detailed consultation
3. Transform your blueprint into reality

🚀 READY TO BUILD?
Contact us at info@inowix.in or call +91 6283075131

Built with ❤️ by Inowix - Your Digital Dreams, Our Reality
`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${projectData.name || 'Hero'}-Project-Blueprint.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    setIsDownloading(false);
    toast.success("Blueprint downloaded successfully! 🎉");
  };

  const handleCopyToClipboard = () => {
    const blueprintText = `🏆 I completed the Inowix Interactive Quest and got my ${projectData.type} project blueprint! Contact: ${projectData.email}`;
    navigator.clipboard.writeText(blueprintText);
    toast.success("Blueprint details copied to clipboard! 📋");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'I built my dream project blueprint!',
        text: shareMessage,
        url: window.location.origin
      });
    } else {
      navigator.clipboard.writeText(shareMessage);
      toast.success("Share message copied to clipboard! 📱");
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#D8FCC7]/20 via-[#FFF0BF]/20 to-[#FFB9E3]/20 backdrop-blur-md rounded-3xl p-8 border border-[#D8FCC7]/30 relative overflow-hidden">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 50 }, (_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              {['🎉', '🏆', '⭐', '✨', '🎊', '🥳'][Math.floor(Math.random() * 6)]}
            </div>
          ))}
        </div>
      )}

      {/* Header */}
      <div className="text-center space-y-6 mb-8 relative z-10">
        <div className="text-8xl animate-bounce">🏆</div>
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#D8FCC7] via-[#FFF0BF] to-[#FFB9E3] bg-clip-text text-transparent">
          QUEST COMPLETED!
        </h2>
        <p className="text-xl text-white/90">
          Congratulations! You've earned your Project Blueprint and become a true Digital Warrior! 🛡️
        </p>
        
        {/* Final Progress Bar */}
        <div className="w-full max-w-md mx-auto bg-white/10 rounded-full h-4 backdrop-blur-sm border border-white/20">
          <div className="bg-gradient-to-r from-[#D8FCC7] to-[#FFF0BF] h-full rounded-full w-full transition-all duration-1000 animate-pulse"></div>
        </div>
        <div className="text-white/90 font-bold">Level 6 of 6 - LEGENDARY STATUS ACHIEVED! 👑</div>
      </div>

      {/* Achievement Summary */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-8 relative z-10">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-[#D8FCC7]">🎖️ Achievement Unlocked</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#D8FCC7]/20 rounded-xl p-4 border border-[#D8FCC7]/30">
              <div className="text-2xl mb-2">🏅</div>
              <div className="font-bold text-white">Project Type Master</div>
              <div className="text-white/80 text-sm">{projectData.type.toUpperCase()}</div>
            </div>
            <div className="bg-[#FFF0BF]/20 rounded-xl p-4 border border-[#FFF0BF]/30">
              <div className="text-2xl mb-2">📜</div>
              <div className="font-bold text-white">Blueprint Acquired</div>
              <div className="text-white/80 text-sm">Custom Plan Ready</div>
            </div>
            <div className="bg-[#FFB9E3]/20 rounded-xl p-4 border border-[#FFB9E3]/30">
              <div className="text-2xl mb-2">⚡</div>
              <div className="font-bold text-white">Quest Warrior</div>
              <div className="text-white/80 text-sm">All Challenges Conquered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Stats */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-8 relative z-10">
        <h3 className="text-xl font-bold text-white mb-4 text-center">🗃️ Hero Profile</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-white/80">Hero Name:</span>
            <span className="text-[#D8FCC7] font-bold">{projectData.name || 'Anonymous Champion'}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/80">Quest Specialization:</span>
            <span className="text-[#FFF0BF] font-bold">{projectData.type}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/80">Blueprint Delivery:</span>
            <span className="text-[#FFB9E3] font-bold">{projectData.email}</span>
          </div>
          {projectData.phone && (
            <div className="flex justify-between items-center">
              <span className="text-white/80">Bonus Contact:</span>
              <span className="text-white font-bold">{projectData.phone}</span>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-4 relative z-10">
        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-4">🎁 Claim Your Rewards</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button
            onClick={handleDownload}
            disabled={isDownloading}
            className="bg-gradient-to-r from-[#D8FCC7] to-[#FFF0BF] hover:from-[#D8FCC7]/80 hover:to-[#FFF0BF]/80 text-black font-bold py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(216,252,199,0.5)]"
          >
            {isDownloading ? (
              <>
                <span className="animate-spin mr-2">⚡</span>
                Crafting PDF...
              </>
            ) : (
              <>
                <span className="mr-2">⬇</span>
                Download Blueprint
              </>
            )}
          </Button>

          <Button
            onClick={handleCopyToClipboard}
            variant="outline"
            className="bg-white/10 border-[#FFB9E3]/40 text-white hover:bg-[#FFB9E3]/20 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
          >
            <span className="mr-2">📋</span>
            Copy Details
          </Button>

          <Button
            onClick={handleShare}
            variant="outline"
            className="bg-white/10 border-[#FFC8A9]/40 text-white hover:bg-[#FFC8A9]/20 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
          >
            <span className="mr-2">📱</span>
            Share Victory
          </Button>
        </div>

        <div className="text-center pt-4">
          <Button
            onClick={() => window.open('mailto:info@inowix.in?subject=Ready to Build My Dream Project', '_self')}
            className="bg-gradient-to-r from-[#FFB9E3] to-[#FFC8A9] hover:from-[#FFB9E3]/80 hover:to-[#FFC8A9]/80 text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,185,227,0.5)]"
          >
            <span className="mr-2">🧙‍♂️</span>
            Talk to a Project Wizard
            <span className="ml-2">✨</span>
          </Button>
        </div>
      </div>

      {/* Final Mascot Message */}
      <div className="mt-8 text-center relative z-10">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-[#D8FCC7]/30">
          <div className="text-4xl mb-4">🤖👑</div>
          <p className="text-white/90 text-lg leading-relaxed">
            <span className="text-[#D8FCC7] font-bold">Inowix Bot</span>: 
            "LEGENDARY! You've completed the ultimate quest and proven yourself a true Digital Warrior! 
            Your blueprint is ready, and our Project Wizards are standing by to bring your vision to life. 
            Welcome to the Hall of Fame, Champion! 🏆✨"
          </p>
        </div>
      </div>

      {/* Close Button */}
      <div className="text-center mt-6 relative z-10">
        <Button
          onClick={onClose}
          variant="ghost"
          className="text-white/80 hover:text-white hover:bg-white/10 px-6 py-2 rounded-full"
        >
          Continue Exploring Inowix →
        </Button>
      </div>
    </div>
  );
};