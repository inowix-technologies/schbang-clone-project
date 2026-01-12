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
    <section className="py-24 px-4 relative overflow-hidden bg-black">
      <BackgroundBeams />

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Common <span className="text-blue-500">Queries</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
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
                className="border-b border-neutral-800 py-4"
              >
                <AccordionTrigger className="text-white hover:no-underline text-xl font-medium py-6 px-4 rounded-lg transition-colors hover:bg-white/5">
                  <div className="flex items-center gap-6 text-left">
                    <span className="text-blue-500 font-mono text-sm">
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-neutral-400 text-lg px-14 pb-8 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <button className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Ask Us Anything
          </button>
        </div>
      </div>
    </section>
  );
};