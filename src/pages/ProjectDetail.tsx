import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/portfolio/Navigation";
import { getProjectBySlug } from "@/data/projects";
import { NotificationBanner } from "@/components/NotificationBanner";
import { Header } from "@/components/Header";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link to="/work" className="text-accent hover:underline">
            Return to portfolio
          </Link>
        </div>
      </div>
    );
  }

  const getBackgroundColor = (variant: number) => {
     const colors = {
      1: "bg-[#FFF0BF] text-[#202224]",
      2: "bg-[#B9D9FF] text-[#202224]", 
      3: "bg-[#D8FCC7] text-[#202224]",
      4: "bg-[#FFB9E3] text-[#202224]",
      5: "bg-[#FFC8A9] text-[#202224]",
      6: "bg-[#FFB9E3] text-[#202224]",
    };
    return colors[variant as keyof typeof colors];
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
     <NotificationBanner />
           <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link 
            to="/work" 
            className="inline-flex items-center text-accent hover:text-accent/80 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="font-hero font-bold text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6 animate-fade-in">
                  {project.title}
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '150ms' }}>
                  {project.subtitle}
                </p>
              </div>
              
              <p className="text-lg leading-relaxed animate-fade-in" style={{ animationDelay: '300ms' }}>
                {project.description}
              </p>
              
              <button 
                className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground rounded-2xl font-semibold hover:bg-accent/90 transition-all duration-300 hover:scale-105 animate-fade-in" 
                style={{ animationDelay: '450ms' }}
                data-testid="button-request-demo"
              >
                Request a Demo
                <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
              </button>
            </div>
            
            <div className="relative animate-scale-in" style={{ animationDelay: '300ms' }}>
              <div className={`rounded-3xl p-2 ${getBackgroundColor(project.colorVariant)}`}>
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-card"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">Results & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {project.stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-4">
                  <stat.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-24">
          {project.sections.map((section, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-accent rounded-lg mr-4"></div>
                <h3 className="text-sm uppercase tracking-wider text-accent font-semibold">
                  {section.type}
                </h3>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">{section.title}</h2>
              
              {typeof section.content === 'string' ? (
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  {section.content}
                </p>
              ) : (
                <ul className="space-y-4 mb-8">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span className="text-lg text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              {section.highlights && (
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold mb-4">Key Highlights:</h4>
                  <ul className="space-y-3">
                    {section.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <span className="text-lg">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-4 lg:px-8 bg-card/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Frameworks</h3>
              <div className="space-y-4">
                {project.techStack.frameworks.map((tech, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg mr-3"></div>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Languages</h3>
              <div className="space-y-4">
                {project.techStack.languages.map((tech, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg mr-3"></div>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Cloud & Hosting</h3>
              <div className="space-y-4">
                {project.techStack.cloud.map((tech, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg mr-3"></div>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Database</h3>
              <div className="space-y-4">
                {project.techStack.database.map((tech, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg mr-3"></div>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">App Features</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {project.features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card/40 rounded-2xl p-8 animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
                data-testid={`feature-${index}`}
              >
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 px-4 lg:px-8 bg-card/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">The Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {project.process.map((step, index) => (
              <div 
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
                data-testid={`process-step-${index}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-6">
                  <step.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">The Experts Behind {project.title.split(':')[0]}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {project.team.map((member, index) => (
              <div 
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`team-member-${index}`}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-xl mb-4">
                  <member.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-base font-semibold mb-2">{member.title}</h3>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-16 px-4 lg:px-8 bg-card/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-16">What Our Clients Say Matters Most to Us</h2>
            <div className="animate-fade-in">
              <blockquote className="text-xl lg:text-2xl leading-relaxed mb-8 italic">
                "{project.testimonial.content}"
              </blockquote>
              <div className="text-lg">
                <p className="font-semibold">{project.testimonial.company}</p>
                <p className="text-muted-foreground">{project.testimonial.position}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">Ready to Build Your Next Project?</h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Let's build something that helps your clients explore, decide, and act without needing to be there.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative animate-scale-in">
              <div className={`rounded-3xl p-2 ${getBackgroundColor(project.colorVariant)}`}>
                <img
                  src={project.heroImage}
                  alt="Ready to build"
                  className="w-full h-64 object-cover rounded-2xl shadow-card"
                />
              </div>
            </div>
            <div className="text-left space-y-6">
              <h3 className="text-2xl font-bold">Accelerate decision-making with scalable intelligence built for real-world outcomes.</h3>
              <button 
                className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground rounded-2xl font-semibold hover:bg-accent/90 transition-all duration-300 hover:scale-105"
                data-testid="button-connect"
              >
                Connect with us
                <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;