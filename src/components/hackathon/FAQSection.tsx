import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const FAQSection = () => {
  const faqs = [
    {
      question: "Is this online or offline?",
      answer: "This is a completely online hackathon. You can participate from anywhere in Delhi or Gurgaon."
    },
    {
      question: "Who is eligible to participate?",
      answer: "Anyone can participate, but we're primarily focused on tech talent from Delhi and Gurgaon. Students, professionals, and freelancers are all welcome."
    },
    {
      question: "What is the team size?",
      answer: "Teams must have a minimum of 3 members and a maximum of 5 members. Individual participation is not allowed."
    },
    {
      question: "What are the judging criteria?",
      answer: "Projects will be evaluated based on technical depth, algorithm implementation quality, project completion, code architecture, and presentation quality. Innovation and real-world applicability are key factors."
    },
    {
      question: "How long do we have to build the solution?",
      answer: "You'll have 1-2 weeks to develop your solution. This isn't a sprint—we want you to go deep and create something truly impressive."
    },
    {
      question: "What happens after winning?",
      answer: "The top 3 teams receive direct placement referrals to our partner companies in Gurgaon. The winning team also receives ₹5,000 as prize money."
    }
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Got questions? We've got answers.
          </p>
        </div>

        <Card className="p-8 bg-card border-border/50">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </section>
  );
};

export default FAQSection;
