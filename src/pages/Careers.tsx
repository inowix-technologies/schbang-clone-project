import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Clock, Users } from "lucide-react";

const openings = [
  {
    title: "Senior Creative Director",
    department: "Creative", 
    location: "Mumbai",
    type: "Full-time",
    experience: "8+ years",
    description: "Lead creative vision and strategy for major brand campaigns."
  },
  {
    title: "Frontend Developer",
    department: "Technology",
    location: "Bangalore", 
    type: "Full-time",
    experience: "3+ years",
    description: "Build responsive web experiences using modern technologies."
  },
  {
    title: "Digital Marketing Manager",
    department: "Media",
    location: "Delhi",
    type: "Full-time", 
    experience: "5+ years",
    description: "Drive digital marketing strategies across multiple channels."
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Mumbai",
    type: "Full-time",
    experience: "4+ years", 
    description: "Create intuitive and engaging user experiences."
  },
  {
    title: "Account Manager",
    department: "Client Services",
    location: "Bangalore",
    type: "Full-time",
    experience: "3+ years",
    description: "Manage client relationships and project delivery."
  }
];

const benefits = [
  "Competitive salary and equity",
  "Health and wellness benefits",
  "Flexible working arrangements",
  "Learning and development programs",
  "Creative freedom and ownership",
  "International exposure"
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-section">
        <div className="max-w-container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Be part of a team that's reshaping the creative landscape and building the future of brand experiences
            </p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-section bg-secondary">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Schbang?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We're not just building campaigns; we're building careers. At Schbang, you'll work 
                alongside some of the most talented professionals in the industry, on projects that 
                matter for brands that inspire.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-square bg-muted rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-section">
        <div className="max-w-container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-muted-foreground">
              Find your next opportunity to make an impact
            </p>
          </div>

          <div className="space-y-6">
            {openings.map((opening, index) => (
              <div key={index} className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  <div className="lg:col-span-2">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {opening.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {opening.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{opening.department}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{opening.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{opening.type}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center lg:text-left">
                    <div className="text-sm text-muted-foreground mb-1">Experience</div>
                    <div className="font-semibold text-foreground">{opening.experience}</div>
                  </div>
                  
                  <div className="text-center lg:text-right">
                    <Button className="rounded-full px-6">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section bg-primary text-primary-foreground">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't see the right fit?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We're always looking for exceptional talent. Send us your portfolio and let's start a conversation.
          </p>
          <Button variant="secondary" className="rounded-full px-8 py-3">
            Send Your Portfolio
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;