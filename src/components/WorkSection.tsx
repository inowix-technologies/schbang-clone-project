import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { GradientMesh } from "@/components/ui/gradient-mesh";
import { FloatingShapes } from "@/components/ui/floating-shapes";

const projects = [
  {
    id: 1,
    title: "AI-Powered Analytics",
    description: "State-of-the-art business intelligence and predictive modeling.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    id: 2,
    title: "Intelligent Automation",
    description: "Next-gen manufacturing systems powered by computer vision.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop&q=80",
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    id: 3,
    title: "Agentic AI Optimization",
    description: "Autonomous agents streamlining complex enterprise workflows.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&q=80",
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    id: 4,
    title: "Smart Chatbot",
    description: "Conversational AI that truly understands your customers.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop&q=80",
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    id: 5,
    title: "AI Marketing",
    description: "Precision-targeted marketing automation for exponential growth.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
    className: "md:col-span-1",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    id: 6,
    title: "Inventory System",
    description: "Real-time inventory management with AI stock prediction.",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&h=400&fit=crop&q=80",
    className: "md:col-span-1",
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  }
];

export const WorkSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-black relative overflow-hidden" id="work">
      <GradientMesh className="opacity-25" />
      <FloatingShapes count={6} className="opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 text-center px-2 sm:px-0">
          Our Latest <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Work</span>
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 text-center mb-10 sm:mb-12 md:mb-16 max-w-2xl mx-auto px-4 sm:px-0">
          Explore our portfolio of cutting-edge solutions across AI, design, and digital transformation.
        </p>

        <BentoGrid className="max-w-7xl mx-auto">
          {projects.map((project, i) => (
            <BentoGridItem
              key={i}
              title={project.title}
              description={project.description}
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover/bento:scale-110 transition-transform duration-500"
                  />
                </div>
              }
              icon={project.icon}
              className={project.className}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};