export interface ProjectPlan {
  title: string;
  description: string;
  phases: Array<{
    name: string;
    duration: string;
    tasks: string[];
    deliverables: string[];
  }>;
  timeline: string;
  budget: {
    range: string;
    breakdown: Array<{
      category: string;
      amount: string;
      description: string;
    }>;
  };
  risks: string[];
  recommendations: string[];
}

export interface PlanGenerationRequest {
  projectType: string;
  budget: string;
  timeline: string;
  requirements: string[];
  additionalInfo?: string;
}

export interface PlanGenerationResponse {
  success: boolean;
  plan?: ProjectPlan;
  error?: string;
}