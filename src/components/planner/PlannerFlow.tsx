import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

// Import the new professional planner step components
import { PlannerIntro } from "./steps/PlannerIntro";
import { ProjectRequirements } from "./steps/ProjectRequirements";
import { PlanGeneration } from "./steps/PlanGeneration";

export type PlannerStep = 'intro' | 'requirements' | 'generation';

export interface ProjectRequirementsData {
  type: string;
  name: string;
  email: string;
  phone?: string;
  budget?: string;
  timeline?: string;
  description?: string;
  features?: string[];
  target_audience?: string;
  technical_requirements?: string;
}

interface PlannerFlowProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PlannerFlow = ({ isOpen, onClose }: PlannerFlowProps) => {
  const [currentStep, setCurrentStep] = useState<PlannerStep>('intro');
  const [projectData, setProjectData] = useState<ProjectRequirementsData>({
    type: '',
    name: '',
    email: '',
  });
  const isMobile = useIsMobile();

  const steps: PlannerStep[] = ['intro', 'requirements', 'generation'];
  const currentStepIndex = steps.indexOf(currentStep);
  const progress = ((currentStepIndex + 1) / steps.length) * 100;

  const handleStepComplete = (step: PlannerStep, data?: Partial<ProjectRequirementsData>) => {
    if (data) {
      setProjectData(prev => ({ ...prev, ...data }));
    }
    
    const currentIndex = steps.indexOf(step);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    } else {
      // All steps completed
      onClose();
    }
  };

  const handleBack = () => {
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    }
  };

  const handleClose = () => {
    setCurrentStep('intro');
    setProjectData({
      type: '',
      name: '',
      email: '',
    });
    onClose();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'intro':
        return <PlannerIntro onNext={() => handleStepComplete('intro')} />;
      case 'requirements':
        return (
          <ProjectRequirements 
            projectData={projectData}
            onComplete={(data) => handleStepComplete('requirements', data)}
            onBack={handleBack}
          />
        );
      case 'generation':
        return (
          <PlanGeneration 
            projectData={projectData}
            onClose={handleClose}
            onBack={handleBack}
          />
        );
      default:
        return null;
    }
  };

  const plannerContent = (
  <div className="bg-planner-bg flex flex-col h-full">
    {/* Header with Progress */}
    <div className="bg-planner-surface border-b border-planner-border p-4 md:p-6 sticky top-0 z-10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          {currentStepIndex > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBack}
              className="text-planner-text-secondary hover:text-planner-text-primary p-2"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
          )}
          <h2 className="text-lg font-semibold text-planner-text-primary">
            Project Planner
          </h2>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={handleClose}
          className="text-planner-text-secondary hover:text-planner-text-primary p-2"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-planner-text-secondary">
            Step {currentStepIndex + 1} of {steps.length}
          </span>
          <span className="text-planner-text-secondary">
            {Math.round(progress)}% complete
          </span>
        </div>
        <Progress 
          value={progress} 
          className="h-2 bg-planner-surface-elevated [&>div]:bg-planner-accent"
        />
      </div>
    </div>

    {/* Step Content (scrollable) */}
    <div className="flex-1 overflow-y-auto">
      {renderStep()}
    </div>
  </div>
);


  if (isMobile) {
    return (
     <Sheet open={isOpen} onOpenChange={handleClose}>
  <SheetContent 
    side="bottom" 
    className="h-[95vh] p-0 bg-planner-bg border-planner-border overflow-hidden flex flex-col"
  >
    <div className="flex-1 overflow-y-auto">
      {plannerContent}
    </div>
  </SheetContent>
</Sheet>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
  <DialogContent 
    className="max-w-2xl max-h-[90vh] p-0 bg-planner-bg border-planner-border 
             [&>button]:hidden overflow-hidden flex flex-col 
             [&>[data-state=open]]:bg-white/60 [&>[data-state=open]]:backdrop-blur-sm mt-[3rem]"  >
    <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
      {plannerContent}
    </div>
  </DialogContent>
</Dialog>


  );
};