import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Loader2, Download, CheckCircle, AlertTriangle, Clock, DollarSign, Code, Shield, Zap } from "lucide-react";
import { generateProjectPlan, type ProjectPlan } from "@/lib/openai";
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
        
        const generatedPlan = await generateProjectPlan(projectData);
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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-planner-error text-white';
      case 'Medium': return 'bg-planner-warning text-black';
      case 'Low': return 'bg-planner-success text-white';
      default: return 'bg-planner-text-muted text-white';
    }
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'High': return 'text-planner-error';
      case 'Medium': return 'text-planner-warning';
      case 'Low': return 'text-planner-success';
      default: return 'text-planner-text-muted';
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
            Complete roadmap for {plan.project_overview.name}
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
            <p className="text-planner-text-secondary">{plan.project_overview.description}</p>
          </div>
          <div>
            <h4 className="font-medium text-planner-text-primary mb-1">Target Audience</h4>
            <p className="text-planner-text-secondary">{plan.project_overview.target_audience}</p>
          </div>
        </CardContent>
      </Card>

      {/* Timeline & Budget */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-planner-surface border-planner-border">
          <CardHeader>
            <CardTitle className="text-planner-text-primary flex items-center gap-2">
              <Clock className="w-5 h-5 text-planner-accent" />
              Timeline ({plan.timeline.total_duration})
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {plan.timeline.phases.map((phase, index) => (
              <div key={index} className="border-l-2 border-planner-accent/30 pl-4">
                <h4 className="font-medium text-planner-text-primary">{phase.name}</h4>
                <p className="text-sm text-planner-text-secondary mb-2">{phase.duration}</p>
                <p className="text-sm text-planner-text-muted">{phase.description}</p>
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
                {plan.budget_estimation.total_estimated_cost}
              </div>
              <div className="text-sm text-planner-text-secondary">Total Project Cost</div>
            </div>
            
            <div className="space-y-2">
              {plan.budget_estimation.cost_breakdown.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm text-planner-text-secondary">{item.category}</span>
                  <span className="text-sm font-medium text-planner-text-primary">{item.cost}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Technology Stack */}
      <Card className="bg-planner-surface border-planner-border">
        <CardHeader>
          <CardTitle className="text-planner-text-primary flex items-center gap-2">
            <Zap className="w-5 h-5 text-planner-accent" />
            Technology Stack
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {Object.entries(plan.technology_stack).map(([category, technologies]) => (
            <div key={category}>
              <h4 className="font-medium text-planner-text-primary mb-2 capitalize">
                {category.replace('_', ' ')}
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge key={index} variant="outline" className="border-planner-border text-planner-text-secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Key Features */}
      <Card className="bg-planner-surface border-planner-border">
        <CardHeader>
          <CardTitle className="text-planner-text-primary">Key Features</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {plan.features.map((feature, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-planner-surface-elevated rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-planner-text-primary">{feature.name}</h4>
                  <p className="text-sm text-planner-text-secondary">
                    {feature.complexity} complexity • ~{feature.estimated_hours}
                  </p>
                </div>
                <Badge className={getPriorityColor(feature.priority)}>
                  {feature.priority}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Risk Assessment */}
      <Card className="bg-planner-surface border-planner-border">
        <CardHeader>
          <CardTitle className="text-planner-text-primary flex items-center gap-2">
            <Shield className="w-5 h-5 text-planner-accent" />
            Risk Assessment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {plan.risk_assessment.map((risk, index) => (
              <div key={index} className="p-4 bg-planner-surface-elevated rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-planner-text-primary">{risk.risk}</h4>
                  <div className="flex gap-2">
                    <Badge variant="outline" className={`${getRiskColor(risk.probability)} border-current`}>
                      {risk.probability} Probability
                    </Badge>
                    <Badge variant="outline" className={`${getRiskColor(risk.impact)} border-current`}>
                      {risk.impact} Impact
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-planner-text-secondary">{risk.mitigation}</p>
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
        <CardContent className="space-y-4">
          {Object.entries(plan.recommendations).map(([key, value]) => (
            <div key={key}>
              <h4 className="font-medium text-planner-text-primary mb-1 capitalize">
                {key.replace('_', ' ')}
              </h4>
              <p className="text-sm text-planner-text-secondary">{value}</p>
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
            {plan.next_steps.map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-planner-accent/10 rounded-full flex items-center justify-center text-xs font-medium text-planner-accent mt-0.5">
                  {index + 1}
                </div>
                <p className="text-sm text-planner-text-secondary flex-1">{step}</p>
              </div>
            ))}
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