import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ProjectData } from "./GameFlow";

interface ProjectTypeSelectionProps {
  onComplete: (data: Partial<ProjectData>) => void;
}

const projectTypes = [
  {
    id: 'ai',
    name: 'AI & Machine Learning',
    icon: '🤖',
    power: 'High Automation',
    color: 'from-[#CDC3FF] to-[#B9D9FF]',
    bgColor: 'bg-[#CDC3FF]/20',
    borderColor: 'border-[#CDC3FF]/40',
    description: 'Intelligent solutions that learn and adapt'
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Platform',
    icon: '🛒',
    power: 'Sales Booster',
    color: 'from-[#D8FCC7] to-[#C7EFFC]',
    bgColor: 'bg-[#D8FCC7]/20',
    borderColor: 'border-[#D8FCC7]/40',
    description: 'Complete online selling solutions'
  },
  {
    id: 'mobile',
    name: 'Mobile Application',
    icon: '📱',
    power: 'User Engagement',
    color: 'from-[#FFB9E3] to-[#FFF0BF]',
    bgColor: 'bg-[#FFB9E3]/20',
    borderColor: 'border-[#FFB9E3]/40',
    description: 'Cross-platform mobile experiences'
  },
  {
    id: 'web',
    name: 'Web Application',
    icon: '💻',
    power: 'Digital Presence',
    color: 'from-[#B9D9FF] to-[#FFC8A9]',
    bgColor: 'bg-[#B9D9FF]/20',
    borderColor: 'border-[#B9D9FF]/40',
    description: 'Modern web solutions'
  },
  {
    id: 'automation',
    name: 'Business Automation',
    icon: '⚡',
    power: 'Efficiency Master',
    color: 'from-[#FFB9B9] to-[#FFF0BF]',
    bgColor: 'bg-[#FFB9B9]/20',
    borderColor: 'border-[#FFB9B9]/40',
    description: 'Streamline your workflows'
  },
  {
    id: 'blockchain',
    name: 'Blockchain & Web3',
    icon: '⛓️',
    power: 'Future Tech',
    color: 'from-[#FFC8A9] to-[#CDC3FF]',
    bgColor: 'bg-[#FFC8A9]/20',
    borderColor: 'border-[#FFC8A9]/40',
    description: 'Decentralized solutions'
  }
];

export const ProjectTypeSelection = ({ onComplete }: ProjectTypeSelectionProps) => {
  const [selectedType, setSelectedType] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!selectedType || !email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    onComplete({
      type: selectedType,
      email,
      phone,
      name
    });
  };

  return (
    <div className="bg-gradient-to-br from-[#CDC3FF]/20 via-[#B9D9FF]/20 to-[#D8FCC7]/20 backdrop-blur-md rounded-3xl p-8 border border-[#CDC3FF]/30">
      {/* Header */}
      <div className="text-center space-y-4 mb-8">
        <div className="text-6xl animate-bounce">🎯</div>
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#CDC3FF] via-[#B9D9FF] to-[#D8FCC7] bg-clip-text text-transparent">
          Choose Your Quest Type
        </h2>
        <p className="text-white/80 text-lg">Select your project adventure and unlock your character build!</p>
        
        {/* Progress Bar */}
        <div className="w-full max-w-md mx-auto bg-white/10 rounded-full h-3 backdrop-blur-sm border border-white/20">
          <div className="bg-gradient-to-r from-[#B9D9FF] to-[#D8FCC7] h-full rounded-full w-1/6 transition-all duration-500"></div>
        </div>
        <div className="text-white/60 text-xs">Level 1 of 6</div>
      </div>

      {/* Project Type Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {projectTypes.map((type) => (
          <div
            key={type.id}
            onClick={() => setSelectedType(type.id)}
            className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl group ${
              selectedType === type.id
                ? `${type.bgColor} ${type.borderColor} shadow-lg scale-105`
                : 'bg-white/5 border-white/20 hover:bg-white/10'
            }`}
          >
            {/* Power Level Badge */}
            <div className={`absolute -top-2 -right-2 bg-gradient-to-r ${type.color} text-black text-xs font-bold px-3 py-1 rounded-full`}>
              ⚡ {type.power}
            </div>
            
            <div className="text-center space-y-3">
              <div className="text-4xl group-hover:animate-bounce">{type.icon}</div>
              <h3 className="font-bold text-white">{type.name}</h3>
              <p className="text-white/70 text-sm">{type.description}</p>
            </div>

            {selectedType === type.id && (
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent animate-pulse"></div>
            )}
          </div>
        ))}
      </div>

      {/* Form Section */}
      {selectedType && (
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-2">Unlock Your Blueprint Scroll! 📜</h3>
            <p className="text-white/70">Enter your details to receive your custom project plan</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white/90">Hero Name (Optional)</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white/90">Secret Email Scroll *</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white/90">Bonus Reward Contact (Optional)</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Phone number for bonus rewards..."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
          </div>

          <Button
            onClick={handleSubmit}
            disabled={!selectedType || !email || isSubmitting}
            className="w-full bg-gradient-to-r from-[#B9D9FF] to-[#D8FCC7] hover:from-[#B9D9FF]/80 hover:to-[#D8FCC7]/80 text-black font-bold py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin mr-2">⚡</span>
                Forging Your Blueprint...
              </>
            ) : (
              <>
                <span className="mr-2">🚀</span>
                Launch Quest Mission!
              </>
            )}
          </Button>
        </div>
      )}

      {/* Mascot Guide */}
      <div className="mt-6 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-[#CDC3FF]/30 max-w-md mx-auto">
          <p className="text-white/90 text-sm">
            <span className="text-[#CDC3FF] font-bold">Inowix Bot</span> 🤖: 
            "Choose wisely, explorer! Each quest type has unique rewards and challenges ahead!"
          </p>
        </div>
      </div>
    </div>
  );
};