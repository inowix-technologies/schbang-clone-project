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
import { ArrowRight, Lightbulb, Users, Target, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const items = [
  {
    title: "Challengers at Heart",
    description: "We constantly question the status quo and push boundaries.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />,
    icon: <Target className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Builders by Nature",
    description: "We don't just strategize; we build tangible solutions.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />,
    icon: <Rocket className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Global Ambition",
    description: "Taking the best of Indian creative talent to the world stage.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />,
    icon: <Users className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Integrated Core",
    description: "Seamlessly blending creativity, technology, and media.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />,
    icon: <Lightbulb className="h-4 w-4 text-neutral-500" />,
  },
];

export const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            What defines us
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            We're challengers at heart and builders by nature.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
             We're brand builders at heart, creators by design, tech enthusiasts in practice, and integrated at our core.
          </p>
        </div>

        <BentoGrid className="max-w-4xl mx-auto mb-12">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
        
        <div className="flex justify-center">
            <Button variant="outline" className="rounded-full px-8 py-3 text-foreground border-foreground hover:bg-foreground hover:text-background transition-all">
                Dive into our culture
                <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
        </div>
      </div>
    </section>
  );
};