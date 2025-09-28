import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Zap, Shield, Rocket } from 'lucide-react';
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

const colorSchemes = {
  blue: {
    gradient: 'bg-gradient-to-br from-[hsl(var(--light-blue))] to-[hsl(var(--white-green))]',
    icon: 'text-blue-600',
    border: 'border-blue-200',
    glow: 'shadow-[var(--glow-blue)]'
  },
  green: {
    gradient: 'bg-gradient-to-br from-[hsl(var(--light-green))] to-[hsl(var(--white-green))]',
    icon: 'text-green-600',
    border: 'border-green-200',
    glow: 'shadow-[var(--glow-green)]'
  },
  purple: {
    gradient: 'bg-gradient-to-br from-[hsl(var(--light-purple))] to-[hsl(var(--light-pink))]',
    icon: 'text-purple-600',
    border: 'border-purple-200',
    glow: 'shadow-[var(--glow-purple)]'
  },
  orange: {
    gradient: 'bg-gradient-to-br from-[hsl(var(--light-orange))] to-[hsl(var(--light-yellow))]',
    icon: 'text-orange-600',
    border: 'border-orange-200',
    glow: 'shadow-[0_0_20px_hsl(var(--light-orange)_/_0.5)]'
  },
  pink: {
    gradient: 'bg-gradient-to-br from-[hsl(var(--light-pink))] to-[hsl(var(--light-purple))]',
    icon: 'text-pink-600',
    border: 'border-pink-200',
    glow: 'shadow-[0_0_20px_hsl(var(--light-pink)_/_0.5)]'
  }
};

export const FAQSection = ({ 
  title = "Frequently Asked Questions", 
  subtitle = "Find answers to the most common questions about our services",
  faqs,
  colorScheme = 'blue'
}: FAQSectionProps) => {
  const colors = colorSchemes[colorScheme];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-card/50"></div>
      <div className={`absolute top-10 right-10 w-32 h-32 ${colors.gradient} rounded-full blur-3xl opacity-20 animate-pulse`}></div>
      <div className={`absolute bottom-20 left-10 w-24 h-24 ${colors.gradient} rounded-full blur-2xl opacity-20 animate-pulse delay-1000`}></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-3 p-4 ${colors.gradient} rounded-2xl ${colors.glow} mb-6`}>
            <HelpCircle className={`w-8 h-8 ${colors.icon}`} />
            <Zap className={`w-6 h-6 ${colors.icon} animate-pulse`} />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className={`bg-white/5 backdrop-blur-sm border ${colors.border} rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group hover:${colors.glow}`}
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline [&[data-state=open]>div>div:last-child]:rotate-180">
                  <div className="flex items-center gap-4 w-full">
                    <div className={`flex-shrink-0 w-12 h-12 ${colors.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-lg font-bold text-gray-800">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white text-left flex-1">
                      {faq.question}
                    </h3>
                    <div className="flex items-center gap-2">
                      <ChevronDown className="w-5 h-5 text-white/70 transition-transform duration-300" />
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="ml-16 text-white/80 leading-relaxed">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className={`inline-flex items-center gap-2 px-6 py-3 ${colors.gradient} rounded-xl ${colors.glow} text-gray-800 font-medium hover:scale-105 transition-transform duration-300 cursor-pointer`}>
            <Shield className="w-5 h-5" />
            Still have questions? 
            <Rocket className="w-4 h-4 ml-1" />
          </div>
        </div>
      </div>
    </section>
  );
};