import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

type SubmissionType = 'volunteer' | 'program' | 'partner' | 'spread';

interface SubmissionFormProps {
  isOpen: boolean;
  onClose: () => void;
  type: SubmissionType;
  title: string;
}

const SubmissionForm = ({ isOpen, onClose, type, title }: SubmissionFormProps) => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast({
        title: t.form.error,
        description: t.form.fillRequired,
        variant: "destructive",
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: t.form.error,
        description: t.form.invalidEmail,
        variant: "destructive",
      });
      return;
    }

    // Basic phone validation (at least 10 digits)
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      toast({
        title: t.form.error,
        description: t.form.invalidPhone,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('submissions')
        .insert({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          submission_type: type,
          message: formData.message.trim() || null,
        });

      if (error) throw error;

      toast({
        title: t.form.success,
        description: t.form.successMessage,
      });

      setFormData({ name: '', email: '', phone: '', message: '' });
      onClose();
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: t.form.error,
        description: t.form.errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-foreground">
            {title}
          </DialogTitle>
          <DialogDescription>
            {t.form.subtitle}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">{t.form.name} *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={t.form.namePlaceholder}
              required
              maxLength={100}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">{t.form.email} *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder={t.form.emailPlaceholder}
              required
              maxLength={255}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">{t.form.phone} *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder={t.form.phonePlaceholder}
              required
              maxLength={20}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">{t.form.message}</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={t.form.messagePlaceholder}
              rows={3}
              maxLength={1000}
            />
          </div>
          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              {t.form.cancel}
            </Button>
            <Button
              type="submit"
              className="flex-1 gradient-bg-primary text-primary-foreground"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t.form.submitting}
                </>
              ) : (
                t.form.submit
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SubmissionForm;
