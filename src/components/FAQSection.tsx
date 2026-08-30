import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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
  subtitle = "Everything you need to know about working with Inowix",
  faqs,
}: FAQSectionProps) => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden bg-inowix-bg border-t border-border/40">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">FAQ</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">{title}</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border border-border/40 rounded-sm px-4 sm:px-6 bg-inowix-surface/10 data-[state=open]:border-primary/30 data-[state=open]:border-l-[3px] data-[state=open]:border-l-primary"
            >
              <AccordionTrigger className="text-foreground hover:no-underline text-sm sm:text-base font-medium py-4 sm:py-5 text-left">
                <div className="flex items-start gap-4 text-left">
                  <span className="font-mono text-[10px] text-primary flex-shrink-0 mt-1">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base pb-5 pl-10 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
