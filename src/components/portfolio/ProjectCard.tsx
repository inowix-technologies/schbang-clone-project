import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  colorVariant: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  delay?: number;
  slug: string;
  category?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  colorVariant, 
  className,
  delay = 0,
  slug,
  category
}: ProjectCardProps) => {
  const getBackgroundColor = (variant: 1 | 2 | 3 | 4 | 5 | 6) => {
    const colors = {
      1: "bg-[#FFF0BF] text-[#202224]",
      2: "bg-[#B9D9FF] text-[#202224]", 
      3: "bg-[#D8FCC7] text-[#202224]",
      4: "bg-[#FFB9E3] text-[#202224]",
      5: "bg-[#FFC8A9] text-[#202224]",
      6: "bg-[#FFB9E3] text-[#202224]",
    };
    return colors[variant];
  };

  return (
    <Link to={`/project/${slug}`} className="block">
      <div 
        className={cn(
          "group relative overflow-hidden rounded-3xl p-8 lg:p-12 cursor-pointer transition-all duration-700 ease-spring hover:scale-[1.02] hover:shadow-card-hover animate-slide-up",
          getBackgroundColor(colorVariant),
          className
        )}
        style={{ animationDelay: `${delay}ms` }}
        data-testid={`card-project-${slug}`}
      >
      <div className="relative z-10">
        {category && (
          <div className="mb-3">
            <span className="inline-block px-2 py-1 text-xs font-medium bg-white/20 rounded-full backdrop-blur-sm">
              {category}
            </span>
          </div>
        )}
        <h3 className="font-hero font-bold text-2xl lg:text-3xl xl:text-4xl mb-4 lg:mb-6">
          {title}
        </h3>
        <p className="font-body text-base lg:text-lg xl:text-xl leading-relaxed mb-8 lg:mb-12 max-w-md">
          {description}
        </p>
      </div>
      
      <div className="relative h-48 lg:h-64 xl:h-80 mt-8 lg:mt-12 overflow-hidden rounded-2xl shadow-card group-hover:scale-105 transition-transform duration-700 ease-spring">
  <img
    src={image}
    alt={title}
    className="w-full h-full object-contain  object-center"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
</div>
      
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </Link>
  );
};

export default ProjectCard;