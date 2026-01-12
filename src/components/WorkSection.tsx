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
import image1 from "../assets/ow1.png"
import image6 from "../assets/ow6.png"
import image7 from "../assets/ow7.png"
import image8 from "../assets/ow8.png"
import image2 from "../assets/ow2.png"
import image3 from "../assets/ow3.png"
import image4 from "../assets/ow4.png"
import image5 from "../assets/ow5.png"

const projects = [
  {
    id: 1,
    title: "AI-Powered Analytics",
    description: "State-of-the-art business intelligence and predictive modeling.",
    image: image1,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    id: 2,
    title: "Intelligent Automation",
    description: "Next-gen manufacturing systems powered by computer vision.",
    image: image2,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    id: 3,
    title: "Agentic AI Optimization",
    description: "Autonomous agents streamlining complex enterprise workflows.",
    image: image3,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    id: 4,
    title: "Smart Chatbot",
    description: "Conversational AI that truly understands your customers.",
    image: image4,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    id: 5,
    title: "AI Marketing",
    description: "Precision-targeted marketing automation for exponential growth.",
    image: image5,
    className: "md:col-span-1",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    id: 6,
    title: "Inventory System",
    description: "Real-time inventory management with AI stock prediction.",
    image: image6,
    className: "md:col-span-1",
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  }
];

export const WorkSection = () => {
  return (
    <section className="py-20 bg-black relative" id="work">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center">
          Our Latest <span className="text-blue-500">Work</span>
        </h2>
        <p className="text-neutral-400 text-center mb-16 max-w-2xl mx-auto">
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