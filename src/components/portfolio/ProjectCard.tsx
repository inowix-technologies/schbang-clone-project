import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { ArrowUpRight } from "lucide-react";

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
  return (
    <CardContainer className="inter-var w-full">
      <CardBody className="bg-zinc-950/50 relative group/card border-zinc-800/50 w-full h-auto rounded-2xl sm:rounded-3xl p-4 sm:p-5 border hover:border-primary/30 transition-all duration-300">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl mb-4">
          <CardItem translateZ="100" className="w-full h-full">
            <img
              src={image}
              className="h-full w-full object-cover group-hover/card:scale-105 transition-transform duration-500"
              alt={title}
              loading="lazy"
            />
          </CardItem>
          <div className="absolute top-3 left-3">
            <CardItem
              translateZ="50"
              className="px-3 py-1.5 rounded-lg bg-zinc-950/80 backdrop-blur-sm border border-zinc-800/50 text-xs sm:text-sm font-medium text-primary uppercase tracking-wider"
            >
              {category || "Case Study"}
            </CardItem>
          </div>
        </div>

        <div className="space-y-2">
          <CardItem
            translateZ="60"
            className="text-base sm:text-lg font-medium text-white line-clamp-1"
          >
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="50"
            className="text-[#9CA3AF] text-sm sm:text-base line-clamp-2 leading-relaxed font-light"
          >
            {description}
          </CardItem>
        </div>

        <div className="flex justify-between items-center mt-5 sm:mt-6 pt-4 border-t border-zinc-800/50">
          <CardItem
            translateZ={20}
            as={Link}
            to={`/project/${slug}`}
            className="text-xs sm:text-sm font-medium text-[#9CA3AF] hover:text-primary transition-colors duration-200 flex items-center gap-1.5"
          >
            EXPLORE CASE <ArrowUpRight className="w-3.5 h-3.5" />
          </CardItem>
          <CardItem
            translateZ={20}
            className="text-xs font-mono text-[#6B7280]"
          >
            ID: {slug.slice(0, 6).toUpperCase()}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;