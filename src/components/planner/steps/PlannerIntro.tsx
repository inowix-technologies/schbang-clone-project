import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Clock, FileText, Sparkles } from "lucide-react";

interface PlannerIntroProps {
  onNext: () => void;
}

export const PlannerIntro = ({ onNext }: PlannerIntroProps) => {
  return (
    <div className="p-6 md:p-8 space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-planner-accent/10 rounded-full mb-4">
          <Sparkles className="w-8 h-8 text-planner-accent" />
        </div>
        
        <h1 className="text-2xl md:text-3xl font-bold text-planner-text-primary">
          Let's Build Your Vision
        </h1>
        
        <p className="text-planner-text-secondary max-w-lg mx-auto leading-relaxed">
          Get a personalized project roadmap, timeline, and technology recommendations 
          tailored specifically to your requirements.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="bg-planner-surface border-planner-border">
          <CardContent className="p-4 text-center space-y-3">
            <div className="inline-flex items-center justify-center w-10 h-10 bg-planner-accent/10 rounded-lg">
              <Lightbulb className="w-5 h-5 text-planner-accent" />
            </div>
            <h3 className="font-semibold text-planner-text-primary">Smart Analysis</h3>
            <p className="text-sm text-planner-text-secondary">
              AI-powered recommendations based on your specific needs
            </p>
          </CardContent>
        </Card>

        <Card className="bg-planner-surface border-planner-border">
          <CardContent className="p-4 text-center space-y-3">
            <div className="inline-flex items-center justify-center w-10 h-10 bg-planner-success/10 rounded-lg">
              <Clock className="w-5 h-5 text-planner-success" />
            </div>
            <h3 className="font-semibold text-planner-text-primary">Quick Process</h3>
            <p className="text-sm text-planner-text-secondary">
              Complete the planner in under 3 minutes
            </p>
          </CardContent>
        </Card>

        <Card className="bg-planner-surface border-planner-border">
          <CardContent className="p-4 text-center space-y-3">
            <div className="inline-flex items-center justify-center w-10 h-10 bg-planner-warning/10 rounded-lg">
              <FileText className="w-5 h-5 text-planner-warning" />
            </div>
            <h3 className="font-semibold text-planner-text-primary">Detailed Plan</h3>
            <p className="text-sm text-planner-text-secondary">
              Comprehensive PDF with timeline, tech stack & costs
            </p>
          </CardContent>
        </Card>
      </div>

      {/* What You'll Get */}
      <div className="bg-planner-surface-elevated border border-planner-border rounded-lg p-6">
        <h3 className="font-semibold text-planner-text-primary mb-4">
          What you'll receive:
        </h3>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-planner-accent rounded-full"></div>
            <span className="text-sm text-planner-text-secondary">
              Custom project timeline with key milestones
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-planner-accent rounded-full"></div>
            <span className="text-sm text-planner-text-secondary">
              Recommended technology stack and architecture
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-planner-accent rounded-full"></div>
            <span className="text-sm text-planner-text-secondary">
              Budget estimation and resource requirements
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-planner-accent rounded-full"></div>
            <span className="text-sm text-planner-text-secondary">
              Risk assessment and mitigation strategies
            </span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center pt-4">
        <Button
          onClick={onNext}
          className="bg-planner-accent hover:bg-planner-accent/90 text-white px-8 py-3 rounded-lg font-medium transition-colors"
        >
          Start Planning
        </Button>
        
        <p className="text-xs text-planner-text-muted mt-3">
          No commitment required • Free consultation included
        </p>
      </div>
    </div>
  );
};