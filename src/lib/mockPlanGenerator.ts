import { ProjectPlan, PlanGenerationRequest } from '../types/plan';

// Mock plan generator for development - replace with real API call in production
export const generateMockPlan = async (request: PlanGenerationRequest): Promise<ProjectPlan> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  const mockPlan: ProjectPlan = {
    title: `${request.projectType} Project`,
    description: `A comprehensive ${request.projectType.toLowerCase()} solution tailored to your specific requirements and budget constraints. This project will deliver a modern, scalable, and user-friendly solution that meets industry standards.`,
    phases: [
      {
        name: "Planning & Discovery",
        duration: "2-3 weeks",
        tasks: [
          "Requirements gathering",
          "Technical analysis",
          "Architecture design",
          "Project roadmap creation"
        ],
        deliverables: [
          "Project specification document",
          "Technical architecture",
          "Project timeline"
        ]
      },
      {
        name: "Development Phase 1",
        duration: "4-6 weeks",
        tasks: [
          "Core functionality development",
          "Database setup",
          "User interface creation",
          "Initial testing"
        ],
        deliverables: [
          "MVP version",
          "Core features",
          "Initial user interface"
        ]
      },
      {
        name: "Development Phase 2",
        duration: "3-4 weeks",
        tasks: [
          "Advanced features",
          "Integration testing",
          "Performance optimization",
          "Security implementation"
        ],
        deliverables: [
          "Complete application",
          "Performance report",
          "Security audit"
        ]
      },
      {
        name: "Testing & Deployment",
        duration: "1-2 weeks",
        tasks: [
          "Comprehensive testing",
          "Bug fixes",
          "Deployment setup",
          "User training"
        ],
        deliverables: [
          "Tested application",
          "Deployment documentation",
          "User manual"
        ]
      }
    ],
    timeline: request.timeline,
    budget: {
      range: request.budget,
      breakdown: [
        {
          category: "Development",
          amount: "60%",
          description: "Core development work including frontend and backend"
        },
        {
          category: "Design & UX",
          amount: "20%",
          description: "User experience design and visual design work"
        },
        {
          category: "Testing & QA",
          amount: "15%",
          description: "Quality assurance and testing processes"
        },
        {
          category: "Project Management",
          amount: "5%",
          description: "Project coordination and management overhead"
        }
      ]
    },
    risks: [
      "Scope creep during development phase",
      "Integration complexity with existing systems",
      "Timeline delays due to unforeseen technical challenges",
      "Third-party service dependencies and reliability"
    ],
    recommendations: [
      "Implement agile development methodology for flexibility",
      "Set up continuous integration and deployment pipelines",
      "Conduct regular stakeholder reviews and feedback sessions",
      "Plan for post-launch maintenance and support",
      "Consider scalability requirements from the beginning"
    ]
  };

  return mockPlan;
};