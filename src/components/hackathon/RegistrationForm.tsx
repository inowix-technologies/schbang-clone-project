import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ChevronRight, ChevronLeft, CheckCircle2 } from "lucide-react";

interface MemberData {
  name: string;
  email: string;
  status: string;
  roleOrCollege: string;
  profileLink: string;
}

const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [teamSize, setTeamSize] = useState<number>(3);
  const [formData, setFormData] = useState({
    teamName: "",
    track: "",
    members: Array(5).fill({ name: "", email: "", status: "", roleOrCollege: "", profileLink: "" }) as MemberData[],
    teamPortfolio: "",
    achievements: "",
    superpower: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Submitted!",
      description: "Redirecting to payment gateway...",
    });
  };

  const handleMemberChange = (index: number, field: keyof MemberData, value: string) => {
    const newMembers = [...formData.members];
    newMembers[index] = { ...newMembers[index], [field]: value };
    setFormData({ ...formData, members: newMembers });
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const canProceedStep1 = formData.teamName && formData.track && teamSize;
  const canProceedStep2 = formData.members.slice(0, teamSize).every(
    m => m.name && m.email && m.status && m.roleOrCollege && m.profileLink
  );

  return (
    <section id="registration" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Register Your <span className="text-gradient">Elite Team</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-2">
            Secure your spot now. Only <span className="text-gradient font-bold">10 team slots</span> are available.
          </p>
          <p className="text-lg text-muted-foreground">
            A one-time registration fee of <span className="text-[hsl(var(--accent-green))] font-bold">₹500 per team</span> is required upon submission.
          </p>
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center items-center gap-2 mb-8">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div 
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                  currentStep === step 
                    ? 'border-[#FFF0BF] bg-[#FFF0BF] text-[#202224] scale-110' 
                    : currentStep > step 
                      ? 'border-[hsl(var(--accent-green))] bg-[hsl(var(--accent-green))] text-[hsl(var(--accent-green-foreground))]'
                      : 'border-border bg-card text-muted-foreground'
                }`}
              >
                {currentStep > step ? <CheckCircle2 className="w-5 h-5" /> : step}
              </div>
              {step < 3 && (
                <div className={`w-12 h-1 mx-1 transition-all duration-300 ${
                  currentStep > step ? 'bg-[hsl(var(--accent-green))]' : 'bg-[#CDC3FF]'
                }`}></div>
              )}
            </div>
          ))}
        </div>

        <Card className="p-8 bg-card border-border/50 glow-card-purple">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Step 1: Team & Track */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fade-in-up">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Step 1: Team & Track</h3>
                  <p className="text-muted-foreground">Tell us about your team</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="teamName" className="text-lg">Team Name</Label>
                  <Input
                    id="teamName"
                    placeholder="Enter your team name"
                    value={formData.teamName}
                    onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                    required
                    className="bg-[#202224] border-border text-bg focus:border-[#CDC3FF]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="track" className="text-lg">Select Your Track</Label>
                  <Select value={formData.track} onValueChange={(value) => setFormData({ ...formData, track: value })}>
                    <SelectTrigger className="bg-[#202224] border-border focus:border-[#CDC3FF]">
                      <SelectValue placeholder="Choose a tech track" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ai-ml">AI / ML Solutions</SelectItem>
                      <SelectItem value="backend">Core Backend Development</SelectItem>
                      <SelectItem value="apk">APK Core Development</SelectItem>
                      <SelectItem value="automation">Advanced Automation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="teamSize" className="text-lg">Team Size</Label>
                  <Select value={teamSize.toString()} onValueChange={(value) => setTeamSize(parseInt(value))}>
                    <SelectTrigger className="bg-[#202224] border-border focus:border-[#CDC3FF]">
                      <SelectValue placeholder="Select team size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3">3 Members</SelectItem>
                      <SelectItem value="4">4 Members</SelectItem>
                      <SelectItem value="5">5 Members</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="default" 
                  onClick={nextStep} 
                  disabled={!canProceedStep1}
                  size="lg" 
                  className="w-full"
                >
                  Next Step
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            )}

            {/* Step 2: Member Details */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fade-in-up">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Step 2: Member Details</h3>
                  <p className="text-muted-foreground">Provide information for all {teamSize} team members</p>
                </div>

                <div className="space-y-6">
                  {Array.from({ length: teamSize }).map((_, index) => (
                    <Card key={index} className="p-6 bg-[#202224] border-border space-y-4">
                      <h4 className="font-semibold text-gradient flex items-center gap-2">
                        Member {index + 1} 
                        {index === 0 && <span className="text-[hsl(var(--accent-green))] text-sm">(Team Lead)</span>}
                      </h4>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor={`member-${index}-name`}>Full Name</Label>
                          <Input
                            id={`member-${index}-name`}
                            placeholder="Full name"
                            value={formData.members[index]?.name || ""}
                            onChange={(e) => handleMemberChange(index, "name", e.target.value)}
                            required
                            className="bg-background"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor={`member-${index}-email`}>Email</Label>
                          <Input
                            id={`member-${index}-email`}
                            type="email"
                            placeholder="email@example.com"
                            value={formData.members[index]?.email || ""}
                            onChange={(e) => handleMemberChange(index, "email", e.target.value)}
                            required
                            className="bg-background"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor={`member-${index}-status`}>Current Status</Label>
                        <Select 
                          value={formData.members[index]?.status || ""} 
                          onValueChange={(value) => handleMemberChange(index, "status", value)}
                        >
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="student">Student</SelectItem>
                            <SelectItem value="professional">Working Professional</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor={`member-${index}-role`}>Current Role / College</Label>
                        <Input
                          id={`member-${index}-role`}
                          placeholder="e.g., Sr. Backend Developer @ Inowix or 4th Year CSE @ NSUT"
                          value={formData.members[index]?.roleOrCollege || ""}
                          onChange={(e) => handleMemberChange(index, "roleOrCollege", e.target.value)}
                          required
                          className="bg-background"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor={`member-${index}-profile`}>LinkedIn / GitHub Profile</Label>
                        <Input
                          id={`member-${index}-profile`}
                          type="url"
                          placeholder="https://linkedin.com/in/username"
                          value={formData.members[index]?.profileLink || ""}
                          onChange={(e) => handleMemberChange(index, "profileLink", e.target.value)}
                          required
                          className="bg-background"
                        />
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button type="button" onClick={prevStep} variant="outline" size="lg" className="flex-1">
                    <ChevronLeft className="w-5 h-5" />
                    Previous
                  </Button>
                  <Button 
                    type="button" 
                    onClick={nextStep}
                    disabled={!canProceedStep2}
                    size="lg" 
                    className="flex-1"
                  >
                    Next Step
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Team Portfolio & Pitch */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fade-in-up">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Step 3: Team Portfolio & Pitch</h3>
                  <p className="text-muted-foreground">Tell us what makes your team special</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="portfolio" className="text-lg">Team GitHub or Portfolio Link</Label>
                  <Input
                    id="portfolio"
                    type="url"
                    placeholder="https://github.com/your-team"
                    value={formData.teamPortfolio}
                    onChange={(e) => setFormData({ ...formData, teamPortfolio: e.target.value })}
                    required
                    className="bg-[#202224] border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="achievements" className="text-lg">Team Achievements (Optional)</Label>
                  <Textarea
                    id="achievements"
                    placeholder="Tell us about your team's past projects or achievements..."
                    value={formData.achievements}
                    onChange={(e) => setFormData({ ...formData, achievements: e.target.value })}
                    className="bg-[#202224] border-border focus:border-primary min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="superpower" className="text-lg">Our Team's Superpower</Label>
                  <Textarea
                    id="superpower"
                    placeholder="In 1-2 sentences, what makes your team unique?"
                    value={formData.superpower}
                    onChange={(e) => setFormData({ ...formData, superpower: e.target.value })}
                    required
                    className="bg-[#202224] border-border focus:border-primary min-h-[80px]"
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="button" onClick={prevStep} variant="outline" size="lg" className="flex-1">
                    <ChevronLeft className="w-5 h-5" />
                    Previous
                  </Button>
                  <Button 
                    type="submit" 
                    size="lg" 
                    variant="green" 
                    className="flex-1 glow-card-green"
                  >
                    Submit & Proceed to Pay ₹500
                  </Button>
                </div>
              </div>
            )}

          </form>
        </Card>
      </div>
    </section>
  );
};

export default RegistrationForm;
