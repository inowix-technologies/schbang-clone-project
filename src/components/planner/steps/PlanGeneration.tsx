import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Download, CheckCircle, AlertTriangle, Clock, DollarSign, Code, Shield, Zap } from "lucide-react";
import { ProjectPlan, PlanGenerationRequest } from "@/types/plan";
import { generateMockPlan } from "@/lib/mockPlanGenerator";
import { generatePDF } from "@/lib/pdfGenerator";
import { ProjectRequirementsData } from "../PlannerFlow";
import { toast } from "sonner";

interface PlanGenerationProps {
  projectData: ProjectRequirementsData;
  onClose: () => void;
  onBack: () => void;
}

export const PlanGeneration = ({ projectData, onClose, onBack }: PlanGenerationProps) => {
  const [isGenerating, setIsGenerating] = useState(true);
  const [plan, setPlan] = useState<ProjectPlan | null>(null);

  // Generate plan using mock data for now
  const generatePlanFromAPI = async (data: ProjectRequirementsData): Promise<ProjectPlan> => {
    const request: PlanGenerationRequest = {
      projectType: data.projectType,
      budget: data.budget,
      timeline: data.timeline,
      requirements: data.requirements,
      additionalInfo: data.additionalInfo
    };

    // Use mock generator for now - can be replaced with real API later
    return await generateMockPlan(request);
  };
  const [error, setError] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  // Generate the plan when component mounts
  useEffect(() => {
    const generatePlan = async () => {
      try {
        setIsGenerating(true);
        setError(null);
        
        // Simulate some loading time for better UX
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const generatedPlan = await generatePlanFromAPI(projectData);
        setPlan(generatedPlan);
      } catch (err) {
        console.error('Plan generation error:', err);
        setError(err instanceof Error ? err.message : 'An error occurred while generating your plan');
      } finally {
        setIsGenerating(false);
      }
    };

    generatePlan();
  }, [projectData]);

  const handleDownloadPDF = async () => {
    if (!plan) return;
    
    try {
      setIsDownloading(true);
      await generatePDF(plan, projectData);
      toast.success("PDF downloaded successfully!");
    } catch (error) {
      console.error('PDF generation error:', error);
      toast.error("Failed to generate PDF. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };


  if (isGenerating) {
    return (
      <div className="p-6 md:p-8 flex flex-col items-center justify-center min-h-[400px] space-y-6">
        <div className="text-center space-y-4">
          <div className="relative">
            <div className="w-16 h-16 bg-planner-accent/10 rounded-full flex items-center justify-center">
              <Loader2 className="w-8 h-8 text-planner-accent animate-spin" />
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-planner-text-primary">
              Generating Your Custom Plan
            </h3>
            <p className="text-planner-text-secondary">
              Our AI is analyzing your requirements and creating a comprehensive project roadmap...
            </p>
          </div>
        </div>

        <div className="w-full max-w-md space-y-3 text-sm text-planner-text-secondary">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-4 h-4 text-planner-success" />
            <span>Analyzing project requirements</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-4 h-4 text-planner-success" />
            <span>Selecting optimal technology stack</span>
          </div>
          <div className="flex items-center gap-3">
            <Loader2 className="w-4 h-4 text-planner-accent animate-spin" />
            <span>Creating detailed timeline & budget</span>
          </div>
          <div className="flex items-center gap-3 opacity-50">
            <Clock className="w-4 h-4" />
            <span>Generating risk assessment</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 md:p-8 space-y-6">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-planner-error/10 rounded-full flex items-center justify-center mx-auto">
            <AlertTriangle className="w-8 h-8 text-planner-error" />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-planner-text-primary">
              Oops! Something went wrong
            </h3>
            <p className="text-planner-text-secondary">
              {error}
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-planner-text-secondary hover:text-planner-text-primary"
          >
            Go Back
          </Button>
          <Button
            onClick={() => window.location.reload()}
            className="bg-planner-accent hover:bg-planner-accent/90 text-white"
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  if (!plan) return null;

  return (
    <div className="p-6 md:p-8 space-y-8">
      {/* Header with Download */}
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-planner-text-primary">
            Your Custom Project Plan
          </h2>
          <p className="text-planner-text-secondary">
            Complete roadmap for {plan.title}
          </p>
        </div>
        
        <Button
          onClick={handleDownloadPDF}
          disabled={isDownloading}
          className="bg-planner-accent hover:bg-planner-accent/90 text-white"
        >
          {isDownloading ? (
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <Download className="w-4 h-4 mr-2" />
          )}
          Download PDF
        </Button>
      </div>

      {/* Project Overview */}
      <Card className="bg-planner-surface border-planner-border">
        <CardHeader>
          <CardTitle className="text-planner-text-primary flex items-center gap-2">
            <Code className="w-5 h-5 text-planner-accent" />
            Project Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium text-planner-text-primary mb-1">Description</h4>
            <p className="text-planner-text-secondary">{plan.description}</p>
          </div>
        </CardContent>
      </Card>

      {/* Timeline & Budget */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-planner-surface border-planner-border">
          <CardHeader>
            <CardTitle className="text-planner-text-primary flex items-center gap-2">
              <Clock className="w-5 h-5 text-planner-accent" />
              Timeline
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-2 border-planner-accent/30 pl-4">
              <h4 className="font-medium text-planner-text-primary">Project Timeline</h4>
              <p className="text-sm text-planner-text-secondary mb-2">{plan.timeline}</p>
            </div>
            {plan.phases.map((phase, index) => (
              <div key={index} className="border-l-2 border-planner-accent/30 pl-4">
                <h4 className="font-medium text-planner-text-primary">{phase.name}</h4>
                <p className="text-sm text-planner-text-secondary mb-2">{phase.duration}</p>
                <div className="text-sm text-planner-text-muted">
                  <div>Tasks: {phase.tasks.join(', ')}</div>
                  <div>Deliverables: {phase.deliverables.join(', ')}</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-planner-surface border-planner-border">
          <CardHeader>
            <CardTitle className="text-planner-text-primary flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-planner-accent" />
              Budget Estimation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-planner-surface-elevated rounded-lg p-4">
              <div className="text-2xl font-bold text-planner-accent mb-1">
                {plan.budget.range}
              </div>
              <div className="text-sm text-planner-text-secondary">Budget Range</div>
            </div>
            
            <div className="space-y-2">
              {plan.budget.breakdown.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm text-planner-text-secondary">{item.category}</span>
                  <span className="text-sm font-medium text-planner-text-primary">{item.amount}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>


      {/* Risk Assessment */}
      <Card className="bg-planner-surface border-planner-border">
        <CardHeader>
          <CardTitle className="text-planner-text-primary flex items-center gap-2">
            <Shield className="w-5 h-5 text-planner-accent" />
            Risk Assessment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {plan.risks.map((risk, index) => (
              <div key={index} className="p-3 bg-planner-surface-elevated rounded-lg">
                <p className="text-sm text-planner-text-secondary">{risk}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card className="bg-planner-surface border-planner-border">
        <CardHeader>
          <CardTitle className="text-planner-text-primary">Expert Recommendations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {plan.recommendations.map((recommendation, index) => (
            <div key={index} className="p-3 bg-planner-surface-elevated rounded-lg">
              <p className="text-sm text-planner-text-secondary">{recommendation}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="bg-planner-surface border-planner-border">
        <CardHeader>
          <CardTitle className="text-planner-text-primary">Next Steps</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-planner-accent/10 rounded-full flex items-center justify-center text-xs font-medium text-planner-accent mt-0.5">
                1
              </div>
              <p className="text-sm text-planner-text-secondary flex-1">Review and approve this project plan</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-planner-accent/10 rounded-full flex items-center justify-center text-xs font-medium text-planner-accent mt-0.5">
                2
              </div>
              <p className="text-sm text-planner-text-secondary flex-1">Finalize project scope and requirements</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-planner-accent/10 rounded-full flex items-center justify-center text-xs font-medium text-planner-accent mt-0.5">
                3
              </div>
              <p className="text-sm text-planner-text-secondary flex-1">Set up project timeline and milestones</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-planner-accent/10 rounded-full flex items-center justify-center text-xs font-medium text-planner-accent mt-0.5">
                4
              </div>
              <p className="text-sm text-planner-text-secondary flex-1">Begin project kickoff phase</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex justify-between pt-6 border-t border-planner-border">
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-planner-text-secondary hover:text-planner-text-primary"
        >
          Back to Edit
        </Button>
        
        <div className="flex gap-3">
          <Button
            onClick={handleDownloadPDF}
            disabled={isDownloading}
            variant="outline"
            className="border-planner-border text-planner-text-primary hover:bg-planner-surface-elevated"
          >
            {isDownloading ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <Download className="w-4 h-4 mr-2" />
            )}
            Download PDF
          </Button>
          
          <Button
            onClick={onClose}
            className="bg-planner-accent hover:bg-planner-accent/90 text-white"
          >
            Done
          </Button>
        </div>
      </div>
    </div>
  );
};