import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, Clock, Loader2, ShieldCheck } from 'lucide-react';
import { z } from 'zod';
import { cn } from '@/lib/utils';

const MESSAGE_MAX = 1000;

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(1, "Message is required").max(MESSAGE_MAX)
});

// Chrome autofill paints its own light background and dark text unless overridden.
const fieldClass = cn(
  "bg-inowix-bg/80 border-border/60 text-foreground placeholder:text-muted-foreground/60 rounded-sm",
  "transition-colors hover:border-border focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/25 focus-visible:ring-offset-0",
  "[&:-webkit-autofill]:shadow-[inset_0_0_0_1000px_hsl(var(--theme-bg-primary))] [&:-webkit-autofill]:[-webkit-text-fill-color:hsl(var(--foreground))]"
);

const labelClass = "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground";

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const validatedData = contactSchema.parse(formData);
      const { error } = await supabase
        .from('contact_leads')
        .insert([{
          name: validatedData.name,
          email: validatedData.email,
          message: validatedData.message,
          company: null,
          phone: null,
          subject: null,
          source: 'website',
          status: 'new'
        }]);

      if (error) throw error;

      toast({
        title: "Message sent",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof z.ZodError ? error.errors[0].message : "Failed to send message.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-sm border border-border/50 bg-inowix-surface/40 p-5 sm:p-8 shadow-[0_0_80px_hsl(var(--primary)/0.06)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-2">Start a project</p>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">Tell us what you're building</h2>
        </div>
        <span className="inline-flex w-fit items-center gap-1.5 rounded-sm border border-inowix-com-ai/30 bg-inowix-com-ai/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-inowix-com-ai">
          <Clock className="h-3 w-3" />
          Reply in 24h
        </span>
      </div>

      <form onSubmit={handleSubmit} className="relative space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name" className={labelClass}>Name</Label>
            <Input
              id="name"
              autoComplete="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={cn(fieldClass, "h-12")}
              placeholder="John Doe"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className={labelClass}>Email</Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={cn(fieldClass, "h-12")}
              placeholder="john@company.com"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="message" className={labelClass}>Message</Label>
            <span className="font-mono text-[10px] text-muted-foreground/60">
              {formData.message.length}/{MESSAGE_MAX}
            </span>
          </div>
          <Textarea
            id="message"
            value={formData.message}
            maxLength={MESSAGE_MAX}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={cn(fieldClass, "min-h-[150px] resize-none py-3 text-base md:text-sm")}
            placeholder="Tell us about your project — goals, timeline, and anything we should know..."
            required
          />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={isLoading}
          className="group w-full h-12 rounded-sm font-semibold"
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <span className="flex items-center justify-center gap-2">
              Send Message
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          )}
        </Button>

        <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground/70">
          <ShieldCheck className="h-3.5 w-3.5" />
          Your details stay private. No spam, ever.
        </p>
      </form>
    </div>
  );
};
