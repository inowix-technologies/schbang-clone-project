import { useState, useEffect } from "react";
import { PlannerFlow } from "./PlannerFlow";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, X } from "lucide-react";
import { toast } from "sonner";

interface EngagementOrchestratorProps {
  children: React.ReactNode;
}

interface EngagementState {
  hasSeenPrompt: boolean;
  lastPromptTime: number;
  sessionInteractions: number;
}

const ENGAGEMENT_COOLDOWN = 7 * 24 * 60 * 60 * 1000; // 7 days
const MAX_PROMPTS_PER_SESSION = 1;

export const EngagementOrchestrator = ({ children }: EngagementOrchestratorProps) => {
  const [showPlannerFlow, setShowPlannerFlow] = useState(false);
  const [showInlinePrompt, setShowInlinePrompt] = useState(false);
  const [engagementState, setEngagementState] = useState<EngagementState>({
    hasSeenPrompt: false,
    lastPromptTime: 0,
    sessionInteractions: 0,
  });

  // Load engagement state from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('inowix-engagement-state');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setEngagementState(parsed);
      } catch (e) {
        console.warn('Failed to parse engagement state');
      }
    }
  }, []);

  // Save engagement state to localStorage
  const saveEngagementState = (newState: EngagementState) => {
    setEngagementState(newState);
    localStorage.setItem('inowix-engagement-state', JSON.stringify(newState));
  };

  // Check if we should show a prompt
  const shouldShowPrompt = () => {
    const now = Date.now();
    const timeSinceLastPrompt = now - engagementState.lastPromptTime;
    
    return (
      !engagementState.hasSeenPrompt &&
      engagementState.sessionInteractions < MAX_PROMPTS_PER_SESSION &&
      timeSinceLastPrompt > ENGAGEMENT_COOLDOWN
    );
  };

  // Contextual scroll-based engagement
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      if (!shouldShowPrompt()) return;
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        
        // Show prompt when user has scrolled through 60% of content (showing genuine interest)
        if (scrollPercent > 60 && !showInlinePrompt && !showPlannerFlow) {
          setShowInlinePrompt(true);
          saveEngagementState({
            ...engagementState,
            hasSeenPrompt: true,
            lastPromptTime: Date.now(),
            sessionInteractions: engagementState.sessionInteractions + 1,
          });
        }
      }, 1000); // Debounce for 1 second
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [engagementState, showInlinePrompt, showPlannerFlow]);

  // Gentle exit intent detection (only mouse leave from top)
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && shouldShowPrompt() && !showInlinePrompt && !showPlannerFlow) {
        // Show a subtle toast instead of blocking popup
        toast("💡 Want a custom project plan? We can help!", {
          description: "Get a personalized roadmap for your project in 3 minutes.",
          action: {
            label: "Get Started",
            onClick: () => {
              setShowPlannerFlow(true);
              saveEngagementState({
                ...engagementState,
                hasSeenPrompt: true,
                lastPromptTime: Date.now(),
                sessionInteractions: engagementState.sessionInteractions + 1,
              });
            },
          },
          duration: 8000,
        });
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [engagementState, showInlinePrompt, showPlannerFlow]);

  const handleStartPlanner = () => {
    setShowPlannerFlow(true);
    setShowInlinePrompt(false);
  };

  const handleDismissPrompt = () => {
    setShowInlinePrompt(false);
    saveEngagementState({
      ...engagementState,
      hasSeenPrompt: true,
      lastPromptTime: Date.now(),
    });
  };

  return (
    <>
      {children}

      {/* Professional Planner Flow Dialog */}
      <PlannerFlow 
        isOpen={showPlannerFlow} 
        onClose={() => setShowPlannerFlow(false)} 
      />

      {/* Minimal Inline Prompt - Non-blocking */}
      {showInlinePrompt && !showPlannerFlow && (
        <div className="fixed bottom-6 right-6 z-40 max-w-sm animate-in slide-in-from-bottom-2 duration-300">
          <div className="bg-planner-surface-elevated backdrop-blur-sm border border-planner-border rounded-lg shadow-lg p-4">
            <button
              onClick={handleDismissPrompt}
              className="absolute top-2 right-2 text-planner-text-muted hover:text-planner-text-primary transition-colors"
              aria-label="Dismiss"
            >
              <X size={16} />
            </button>
            
            <div className="flex items-start gap-3 pr-6">
              <div className="p-2 bg-planner-accent/10 rounded-lg">
                <Sparkles className="w-5 h-5 text-planner-accent" />
              </div>
              
              <div className="flex-1">
                <h4 className="text-sm font-medium text-planner-text-primary mb-1">
                  Ready to build something amazing?
                </h4>
                <p className="text-xs text-planner-text-secondary mb-3">
                  Get a custom project roadmap tailored to your vision.
                </p>
                
                <div className="flex gap-2">
                  <Button
                    onClick={handleStartPlanner}
                    size="sm"
                    className="bg-planner-accent hover:bg-planner-accent/90 text-white h-8 px-3 text-xs"
                  >
                    Get Started
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                  <Button
                    onClick={handleDismissPrompt}
                    variant="ghost"
                    size="sm"
                    className="text-planner-text-muted hover:text-planner-text-primary h-8 px-3 text-xs"
                  >
                    Maybe later
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};