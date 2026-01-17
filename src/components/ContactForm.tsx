import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Send } from 'lucide-react';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000)
});

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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-white/50 text-xs font-medium uppercase tracking-wider">
          Name
        </Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12 focus:border-white/30 focus:ring-0 rounded-lg"
          placeholder="John Doe"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-white/50 text-xs font-medium uppercase tracking-wider">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12 focus:border-white/30 focus:ring-0 rounded-lg"
          placeholder="john@company.com"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-white/50 text-xs font-medium uppercase tracking-wider">
          Message
        </Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 min-h-[140px] focus:border-white/30 focus:ring-0 rounded-lg resize-none"
          placeholder="Tell us about your project..."
          required
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full h-12 bg-white text-black hover:bg-white/90 font-semibold rounded-lg transition-all disabled:opacity-50"
      >
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <span className="flex items-center justify-center gap-2">
            Send Message
            <Send className="w-4 h-4" />
          </span>
        )}
      </Button>
    </form>
  );
};
