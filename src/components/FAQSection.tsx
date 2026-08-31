import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { fadeUp, defaultViewport } from "@/components/home/HomepageMotion";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: "services" | "process" | "products";
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQ[];
  colorScheme?: "blue" | "green" | "purple" | "orange" | "pink";
}

const categories = [
  { id: "all", label: "All" },
  { id: "services", label: "Services" },
  { id: "process", label: "Process" },
  { id: "products", label: "Products" },
] as const;

const renderAnswer = (answer: string) => {
  const parts = answer.split(/(\/services|\/products|\/work)/g);
  return parts.map((part, i) => {
    if (part === "/services" || part === "/products" || part === "/work") {
      const label = part === "/services" ? "services" : part === "/products" ? "products" : "work";
      return (
        <Link key={i} to={part} className="text-primary hover:underline">
          {label}
        </Link>
      );
    }
    return part;
  });
};

export const FAQSection = ({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about working with Inowix",
  faqs,
}: FAQSectionProps) => {
  const reduced = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]["id"]>("all");

  const filteredFaqs = useMemo(() => {
    if (activeCategory === "all") return faqs;
    return faqs.filter((faq) => faq.category === activeCategory);
  }, [activeCategory, faqs]);

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden bg-inowix-bg border-t border-border/40">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={reduced ? false : fadeUp.hidden}
          whileInView={fadeUp.visible}
          viewport={defaultViewport}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">FAQ</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">{title}</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "font-mono text-[10px] uppercase tracking-wider px-4 py-2 rounded-sm border transition-colors",
                activeCategory === cat.id
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border/40 text-muted-foreground hover:text-foreground"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <Accordion type="single" collapsible className="w-full space-y-2">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              layout={!reduced}
              initial={reduced ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
            >
              <AccordionItem
                value={faq.id}
                className="border border-border/40 rounded-sm px-4 sm:px-6 bg-inowix-surface/10 data-[state=open]:border-primary/30 data-[state=open]:border-l-[3px] data-[state=open]:border-l-primary"
              >
                <AccordionTrigger className="text-foreground hover:no-underline text-sm sm:text-base font-medium py-4 sm:py-5 text-left">
                  <div className="flex items-start gap-4 text-left">
                    <span className="font-mono text-[10px] text-primary flex-shrink-0 mt-1">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm sm:text-base pb-5 pl-10 leading-relaxed">
                  {renderAnswer(faq.answer)}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
