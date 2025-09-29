import { useState } from "react";
import { Button } from "@/components/ui/button";

interface FinalChallengeProps {
  onComplete: () => void;
}

const challenges = [
  {
    id: 'riddle',
    name: 'Riddle of the Code',
    icon: '🧩',
    question: 'I am the language that makes websites come alive, I run in browsers and help things jive. What am I?',
    options: ['Python', 'JavaScript', 'HTML', 'CSS'],
    correct: 'JavaScript',
    hint: 'Think about what makes web pages interactive!'
  },
  {
    id: 'wheel',
    name: 'Wheel of Fortune',
    icon: '🎡',
    question: 'Spin the magical wheel to unlock your destiny!',
    options: [],
    correct: '',
    hint: 'Trust your luck, brave explorer!'
  },
  {
    id: 'button',
    name: 'Magic Button Challenge',
    icon: '🔮',
    question: 'Find the magical button that glows with the power of creation!',
    options: [],
    correct: '',
    hint: 'Look for the one that sparkles differently!'
  }
];

export const FinalChallenge = ({ onComplete }: FinalChallengeProps) => {
  const [selectedChallenge, setSelectedChallenge] = useState<string>('');
  const [currentAnswer, setCurrentAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [wheelSpinning, setWheelSpinning] = useState(false);
  const [magicButtons, setMagicButtons] = useState<number[]>([]);

  const handleChallengeSelect = (challengeId: string) => {
    setSelectedChallenge(challengeId);
    setShowResult(false);
    setCurrentAnswer('');
    setIsCorrect(false);
    
    if (challengeId === 'button') {
      // Generate random positions for magic buttons
      setMagicButtons([Math.floor(Math.random() * 9)]);
    }
  };

  const handleRiddleAnswer = (answer: string) => {
    const challenge = challenges.find(c => c.id === 'riddle');
    const correct = answer === challenge?.correct;
    setCurrentAnswer(answer);
    setIsCorrect(correct);
    setShowResult(true);
    
    if (correct) {
      setTimeout(() => {
        onComplete();
      }, 2000);
    }
  };

  const handleWheelSpin = () => {
    setWheelSpinning(true);
    setTimeout(() => {
      setWheelSpinning(false);
      setIsCorrect(true);
      setShowResult(true);
      setTimeout(() => {
        onComplete();
      }, 2000);
    }, 3000);
  };

  const handleMagicButton = (index: number) => {
    const correct = magicButtons.includes(index);
    setIsCorrect(correct);
    setShowResult(true);
    
    if (correct) {
      setTimeout(() => {
        onComplete();
      }, 2000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#FFB9B9]/20 via-[#FFC8A9]/20 to-[#FFF0BF]/20 backdrop-blur-md rounded-3xl p-8 border border-[#FFB9B9]/30">
      {/* Header */}
      <div className="text-center space-y-4 mb-8">
        <div className="text-6xl animate-bounce">⚔️</div>
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FFB9B9] via-[#FFC8A9] to-[#FFF0BF] bg-clip-text text-transparent">
          Final Challenge - Unlock the PDF
        </h2>
        <p className="text-white/80 text-lg">Complete this challenge to earn your legendary project blueprint!</p>
        
        {/* Progress Bar */}
        <div className="w-full max-w-md mx-auto bg-white/10 rounded-full h-3 backdrop-blur-sm border border-white/20">
          <div className="bg-gradient-to-r from-[#FFB9B9] to-[#FFF0BF] h-full rounded-full w-4/6 transition-all duration-500"></div>
        </div>
        <div className="text-white/60 text-xs">Level 4 of 6</div>
      </div>

      {/* Challenge Selection */}
      {!selectedChallenge && (
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Choose Your Challenge Path</h3>
            <p className="text-white/70">Each path leads to victory, but the journey is different!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {challenges.map((challenge) => (
              <div
                key={challenge.id}
                onClick={() => handleChallengeSelect(challenge.id)}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-white/20 group text-center"
              >
                <div className="text-4xl mb-4 group-hover:animate-bounce">{challenge.icon}</div>
                <h4 className="font-bold text-white text-lg mb-2">{challenge.name}</h4>
                <p className="text-white/70 text-sm mb-4">{challenge.hint}</p>
                <div className="text-[#FFC8A9] text-sm font-bold">Click to Begin →</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Riddle Challenge */}
      {selectedChallenge === 'riddle' && !showResult && (
        <div className="space-y-6">
          <div className="text-center">
            <div className="text-4xl mb-4">🧩</div>
            <h3 className="text-2xl font-bold text-white mb-4">Riddle of the Code</h3>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-lg text-white/90 mb-6">{challenges[0].question}</p>
              <div className="grid grid-cols-2 gap-4">
                {challenges[0].options.map((option) => (
                  <Button
                    key={option}
                    onClick={() => handleRiddleAnswer(option)}
                    className="bg-gradient-to-r from-[#FFB9B9]/20 to-[#FFC8A9]/20 hover:from-[#FFB9B9]/40 hover:to-[#FFC8A9]/40 text-white border border-white/20 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Wheel Challenge */}
      {selectedChallenge === 'wheel' && !showResult && (
        <div className="text-center space-y-6">
          <div className="text-4xl mb-4">🎡</div>
          <h3 className="text-2xl font-bold text-white mb-4">Wheel of Fortune</h3>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className={`w-32 h-32 mx-auto mb-6 rounded-full border-4 border-[#FFC8A9] bg-gradient-to-br from-[#FFB9B9]/30 to-[#FFF0BF]/30 flex items-center justify-center text-4xl ${
              wheelSpinning ? 'animate-spin' : ''
            }`}>
              🎯
            </div>
            <Button
              onClick={handleWheelSpin}
              disabled={wheelSpinning}
              className="bg-gradient-to-r from-[#FFC8A9] to-[#FFF0BF] hover:from-[#FFC8A9]/80 hover:to-[#FFF0BF]/80 text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
            >
              {wheelSpinning ? (
                <>
                  <span className="animate-spin mr-2">⚡</span>
                  Spinning...
                </>
              ) : (
                <>
                  <span className="mr-2">🎡</span>
                  Spin the Wheel!
                </>
              )}
            </Button>
          </div>
        </div>
      )}

      {/* Magic Button Challenge */}
      {selectedChallenge === 'button' && !showResult && (
        <div className="text-center space-y-6">
          <div className="text-4xl mb-4">🔮</div>
          <h3 className="text-2xl font-bold text-white mb-4">Magic Button Challenge</h3>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <p className="text-white/90 mb-6">Find the magical button that sparkles with creation power!</p>
            <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
              {Array.from({ length: 9 }, (_, index) => (
                <Button
                  key={index}
                  onClick={() => handleMagicButton(index)}
                  className={`w-16 h-16 rounded-xl transition-all duration-300 hover:scale-110 ${
                    magicButtons.includes(index)
                      ? 'bg-gradient-to-r from-[#FFF0BF] to-[#FFB9B9] animate-pulse shadow-[0_0_20px_rgba(255,240,191,0.8)]'
                      : 'bg-white/10 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  {magicButtons.includes(index) ? '✨' : '🔘'}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Result Display */}
      {showResult && (
        <div className="text-center space-y-6 animate-fade-in">
          <div className="text-8xl animate-bounce">
            {isCorrect ? '🎉' : '😅'}
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            {isCorrect ? (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#D8FCC7]">Challenge Completed! 🏆</h3>
                <p className="text-white/90">Magnificent! You've proven yourself worthy of the legendary blueprint!</p>
                <div className="text-4xl animate-pulse">⚡ UNLOCKING PDF ⚡</div>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#FFB9B9]">Almost there! 💪</h3>
                <p className="text-white/90">Don't give up, brave explorer! Try another path to victory!</p>
                <Button
                  onClick={() => setSelectedChallenge('')}
                  className="bg-gradient-to-r from-[#FFB9B9] to-[#FFC8A9] text-black font-bold px-6 py-3 rounded-full"
                >
                  Try Another Challenge
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Back Button */}
      {selectedChallenge && !showResult && (
        <div className="text-center mt-6">
          <Button
            onClick={() => setSelectedChallenge('')}
            variant="ghost"
            className="text-white/80 hover:text-white hover:bg-white/10 px-6 py-2 rounded-full"
          >
            ← Choose Different Challenge
          </Button>
        </div>
      )}

      {/* Mascot Speech */}
      <div className="mt-6 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-[#FFC8A9]/30 max-w-md mx-auto">
          <p className="text-white/90 text-sm">
            <span className="text-[#FFC8A9] font-bold">Inowix Bot</span> 🤖: 
            "This is it! The final test of your worthiness. Choose wisely and claim your legendary reward!"
          </p>
        </div>
      </div>
    </div>
  );
};