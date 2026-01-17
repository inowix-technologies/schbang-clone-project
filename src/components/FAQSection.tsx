import { useState } from 'react';
import { ChevronDown, HelpCircle, Zap, Shield, Rocket } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BackgroundBeams } from '@/components/ui/background-beams';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQ[];
  colorScheme?: 'blue' | 'green' | 'purple' | 'orange' | 'pink';
}

export const FAQSection = ({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about working with our digital agency",
  faqs,
}: FAQSectionProps) => {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden bg-background">
      <BackgroundBeams />

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight px-2 sm:px-0">
            Common <span className="text-blue-500">Queries</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            {subtitle}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-b border-border py-4"
              >
                <AccordionTrigger className="text-foreground hover:no-underline text-sm sm:text-base md:text-lg lg:text-xl font-medium py-3 sm:py-4 md:py-6 px-3 sm:px-4 rounded-lg transition-colors hover:bg-card/60">
                  <div className="flex items-start sm:items-center gap-2 sm:gap-3 md:gap-6 text-left">
                    <span className="text-blue-500 font-mono text-[10px] sm:text-xs md:text-sm flex-shrink-0 mt-0.5 sm:mt-0">
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    <span className="pr-2 sm:pr-0 text-left">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-4 md:px-8 lg:px-14 pb-4 sm:pb-6 md:pb-8 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16 md:mt-20">
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.25)]">
            Ask Us Anything
          </button>
        </div>
      </div>
    </section>
  );
};