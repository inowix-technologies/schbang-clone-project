import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Send } from 'lucide-react';
import { z } from 'zod';
import { motion } from 'framer-motion';

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  company: z.string().trim().max(255).optional(),
  phone: z.string().trim().max(50).optional(),
  subject: z.string().trim().max(255).optional(),
  message: z.string().trim().min(1, "Message is required").max(1000)
});

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
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
          company: validatedData.company || null,
          phone: validatedData.phone || null,
          subject: validatedData.subject || null,
          source: 'website',
          status: 'new'
        }]);

      if (error) throw error;

      toast({
        title: "Message received",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({ name: '', email: '', company: '', phone: '', subject: '', message: '' });

    } catch (error) {
      toast({
        title: "Entry Error",
        description: error instanceof z.ZodError ? error.errors[0].message : "Failed to send message.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const inputClasses = "bg-transparent border-zinc-800 focus:border-primary focus:ring-primary/20 transition-all duration-300 rounded-xl h-12 text-white placeholder:text-zinc-600";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 ml-1">
            Full Name *
          </Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={inputClasses}
            placeholder="John Doe"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 ml-1">
            Email Address *
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={inputClasses}
            placeholder="john@company.com"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="company" className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 ml-1">
            Company
          </Label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className={inputClasses}
            placeholder="Company Ltd."
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 ml-1">
            Phone Number
          </Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={inputClasses}
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 ml-1">
          Message *
        </Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`${inputClasses} min-h-[160px] py-4 resize-none`}
          placeholder="Tell us about your project..."
          required
        />
      </div>

      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/20 overflow-hidden relative group"
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <span className="flex items-center gap-2">
              Send Proposal
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
          )}
        </Button>
      </motion.div>
    </form>
  );
};