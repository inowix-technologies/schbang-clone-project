import { useState } from "react";
import { GameIntro } from "./GameIntro";
import { ProjectTypeSelection } from "./ProjectTypeSelection";
import { BlueprintReveal } from "./BlueprintReveal";
import { ProjectShowcase } from "./ProjectShowcase";
import { FinalChallenge } from "./FinalChallenge";
import { VictoryScreen } from "./VictoryScreen";

export type GameStep = 'intro' | 'selection' | 'blueprint' | 'showcase' | 'challenge' | 'victory';

export interface ProjectData {
  type: string;
  email: string;
  phone?: string;
  name?: string;
  details?: string;
}

interface GameFlowProps {
  onClose: () => void;
  isOpen: boolean;
}

export const GameFlow = ({ onClose, isOpen }: GameFlowProps) => {
  const [currentStep, setCurrentStep] = useState<GameStep>('intro');
  const [projectData, setProjectData] = useState<ProjectData>({
    type: '',
    email: '',
  });

  const handleStepComplete = (step: GameStep, data?: Partial<ProjectData>) => {
    if (data) {
      setProjectData(prev => ({ ...prev, ...data }));
    }
    
    const stepOrder: GameStep[] = ['intro', 'selection', 'blueprint', 'showcase', 'challenge', 'victory'];
    const currentIndex = stepOrder.indexOf(step);
    if (currentIndex < stepOrder.length - 1) {
      setCurrentStep(stepOrder[currentIndex + 1]);
    } else {
      // Game completed
      onClose();
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'intro':
        return <GameIntro onNext={() => handleStepComplete('intro')} />;
      case 'selection':
        return <ProjectTypeSelection onComplete={(data) => handleStepComplete('selection', data)} />;
      case 'blueprint':
        return <BlueprintReveal projectData={projectData} onNext={() => handleStepComplete('blueprint')} />;
      case 'showcase':
        return <ProjectShowcase onNext={() => handleStepComplete('showcase')} />;
      case 'challenge':
        return <FinalChallenge onComplete={() => handleStepComplete('challenge')} />;
      case 'victory':
        return <VictoryScreen projectData={projectData} onClose={onClose} />;
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-all duration-200"
        >
          ✕
        </button>
        {renderCurrentStep()}
      </div>
    </div>
  );
};