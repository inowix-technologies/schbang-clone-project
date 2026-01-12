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
      <CardBody className="bg-neutral-900/40 backdrop-blur-md relative group/card border-white/5 w-full h-auto rounded-2xl p-5 border hover:border-blue-500/30 transition-all duration-500">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl mb-4">
          <CardItem translateZ="100" className="w-full h-full">
            <img
              src={image}
              className="h-full w-full object-cover group-hover/card:scale-110 transition-transform duration-700"
              alt={title}
            />
          </CardItem>
          <div className="absolute top-3 left-3">
            <CardItem
              translateZ="50"
              className="px-2 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold text-blue-400 uppercase tracking-wider"
            >
              {category || "Case Study"}
            </CardItem>
          </div>
        </div>

        <div className="space-y-2">
          <CardItem
            translateZ="60"
            className="text-lg font-bold text-white line-clamp-1"
          >
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="50"
            className="text-neutral-400 text-xs line-clamp-2 leading-relaxed"
          >
            {description}
          </CardItem>
        </div>

        <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/5">
          <CardItem
            translateZ={20}
            as={Link}
            to={`/project/${slug}`}
            className="text-[10px] font-bold text-neutral-400 hover:text-blue-400 transition-colors flex items-center gap-1"
          >
            EXPLORE CASE <ArrowUpRight className="w-3 h-3" />
          </CardItem>
          <CardItem
            translateZ={20}
            className="text-[10px] font-mono text-neutral-600"
          >
            ID: {slug.slice(0, 6).toUpperCase()}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;