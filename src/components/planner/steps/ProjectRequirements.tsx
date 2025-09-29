import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectRequirementsData } from "../PlannerFlow";

interface ProjectRequirementsProps {
  projectData: ProjectRequirementsData;
  onComplete: (data: Partial<ProjectRequirementsData>) => void;
  onBack: () => void;
}

const projectTypes = [
  { id: 'web-app', name: 'Web Application', icon: '💻' },
  { id: 'mobile-app', name: 'Mobile Application', icon: '📱' },
  { id: 'ecommerce', name: 'E-Commerce Platform', icon: '🛒' },
  { id: 'ai-ml', name: 'AI & Machine Learning', icon: '🤖' },
  { id: 'automation', name: 'Business Automation', icon: '⚡' },
  { id: 'blockchain', name: 'Blockchain & Web3', icon: '⛓️' },
  { id: 'saas', name: 'SaaS Platform', icon: '☁️' },
  { id: 'custom', name: 'Custom Solution', icon: '🔧' },
];

const budgetRanges = [
  '₹25K - ₹50K',
  '₹50K - ₹100K',
  '₹100K - ₹150K',
  '₹150K - ₹200K',
  '₹250K+',
  'Not sure yet'
];

const timelineOptions = [
  '1-2 months',
  '3-4 months',
  '5-6 months',
  '6+ months',
  'Flexible'
];

export const ProjectRequirements = ({ projectData, onComplete, onBack }: ProjectRequirementsProps) => {
  const [formData, setFormData] = useState<ProjectRequirementsData>(projectData);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(projectData.features || []);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const commonFeatures = [
    'User Authentication',
    'Admin Dashboard',
    'Real-time Updates',
    'Payment Integration',
    'API Integration',
    'Mobile Responsive',
    'Search Functionality',
    'Analytics & Reporting',
    'Email Notifications',
    'File Upload/Management',
    'Multi-language Support',
    'Third-party Integrations'
  ];

  const handleInputChange = (field: keyof ProjectRequirementsData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleFeature = (feature: string) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  const handleSubmit = async () => {
    if (!formData.type || !formData.name || !formData.email) return;

    setIsSubmitting(true);
    
    // Simulate validation delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    onComplete({
      ...formData,
      features: selectedFeatures,
    });
    
    setIsSubmitting(false);
  };

  const isFormValid = formData.type && formData.name && formData.email;

  return (
    <div className="p-6 md:p-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-planner-text-primary">
          Tell us about your project
        </h2>
        <p className="text-planner-text-secondary">
          The more details you provide, the better we can tailor your plan.
        </p>
      </div>

      <div className="space-y-6">
        {/* Project Type Selection */}
        <div className="space-y-3">
          <Label className="text-sm font-medium text-planner-text-primary">
            What type of project are you building? *
          </Label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {projectTypes.map((type) => (
              <Card
                key={type.id}
                className={`cursor-pointer transition-all duration-200 ${
                  formData.type === type.id
                    ? 'bg-planner-accent/10 border-planner-accent'
                    : 'bg-planner-surface border-planner-border hover:border-planner-border-focus'
                }`}
                onClick={() => handleInputChange('type', type.id)}
              >
                <CardContent className="p-3 text-center">
                  <div className="text-2xl mb-2">{type.icon}</div>
                  <div className="text-xs font-medium text-planner-text-primary">
                    {type.name}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Basic Information */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-planner-text-primary">
              Project Name *
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="e.g., TaskFlow App"
              className="bg-planner-surface border-planner-border text-planner-text-primary placeholder:text-planner-text-muted"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-planner-text-primary">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="your@email.com"
              className="bg-planner-surface border-planner-border text-planner-text-primary placeholder:text-planner-text-muted"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-sm font-medium text-planner-text-primary">
              Budget Range
            </Label>
            <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
              <SelectTrigger className="bg-planner-surface border-planner-border text-planner-text-primary">
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent className="bg-planner-surface border-planner-border">
                {budgetRanges.map((range) => (
                  <SelectItem key={range} value={range} className="text-planner-text-primary">
                    {range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label className="text-sm font-medium text-planner-text-primary">
              Timeline
            </Label>
            <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
              <SelectTrigger className="bg-planner-surface border-planner-border text-planner-text-primary">
                <SelectValue placeholder="Select timeline" />
              </SelectTrigger>
              <SelectContent className="bg-planner-surface border-planner-border">
                {timelineOptions.map((timeline) => (
                  <SelectItem key={timeline} value={timeline} className="text-planner-text-primary">
                    {timeline}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Project Description */}
        <div className="space-y-2">
          <Label htmlFor="description" className="text-sm font-medium text-planner-text-primary">
            Project Description
          </Label>
          <Textarea
            id="description"
            value={formData.description || ''}
            onChange={(e) => handleInputChange('description', e.target.value)}
            placeholder="Describe your project vision, goals, and key requirements..."
            rows={4}
            className="bg-planner-surface border-planner-border text-planner-text-primary placeholder:text-planner-text-muted resize-none"
          />
        </div>

        {/* Key Features */}
        <div className="space-y-3">
          <Label className="text-sm font-medium text-planner-text-primary">
            Key Features (Select all that apply)
          </Label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {commonFeatures.map((feature) => (
              <Badge
                key={feature}
                variant={selectedFeatures.includes(feature) ? "default" : "outline"}
                className={`cursor-pointer text-center justify-center py-2 transition-all ${
                  selectedFeatures.includes(feature)
                    ? 'bg-planner-accent text-white hover:bg-planner-accent/90'
                    : 'border-planner-border text-planner-text-secondary hover:border-planner-border-focus'
                }`}
                onClick={() => toggleFeature(feature)}
              >
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        {/* Additional Requirements */}
        <div className="space-y-2">
          <Label htmlFor="technical" className="text-sm font-medium text-planner-text-primary">
            Technical Requirements or Preferences
          </Label>
          <Textarea
            id="technical"
            value={formData.technical_requirements || ''}
            onChange={(e) => handleInputChange('technical_requirements', e.target.value)}
            placeholder="Any specific technologies, integrations, or technical constraints..."
            rows={3}
            className="bg-planner-surface border-planner-border text-planner-text-primary placeholder:text-planner-text-muted resize-none"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between pt-6 border-t border-planner-border">
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-planner-text-secondary hover:text-planner-text-primary"
        >
          Back
        </Button>
        
        <Button
          onClick={handleSubmit}
          disabled={!isFormValid || isSubmitting}
          className="bg-planner-accent hover:bg-planner-accent/90 text-white px-6 disabled:opacity-50"
        >
          {isSubmitting ? 'Processing...' : 'Generate My Plan'}
        </Button>
      </div>
    </div>
  );
};