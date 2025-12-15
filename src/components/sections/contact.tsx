'use client';

import { useActionState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { submitContactForm } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Send, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const initialState = {
  message: '',
  success: false,
  errors: undefined,
};

const ContactSection = () => {
  const { toast } = useToast();
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  useEffect(() => {
    if (state?.success) {
      toast({
        title: 'Success!',
        description: state.message,
      });
      form.reset();
    } else if (state?.message && !state.success && state.errors) {
       toast({
        title: 'Error',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast, form]);

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
             <h3 className="text-2xl font-semibold">Contact Information</h3>
             <p className="text-muted-foreground">
                Have a project in mind or want to discuss data engineering opportunities? Feel free to reach out through the form or contact me directly.
             </p>
             <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-primary" />
                    <a href="mailto:cescor.0503@gmail.com" className="hover:text-primary">cescor.0503@gmail.com</a>
                </div>
                <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-primary" />
                    <a href="tel:+525545793120" className="hover:text-primary">+52 55 45 79 31 20</a>
                </div>
                <div className="flex items-center gap-4">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Edo. Méx | CDMX | Mérida</span>
                </div>
                <div className="flex items-center gap-4">
                    <Github className="w-5 h-5 text-primary" />
                    <a href="https://github.com/Cesar0ngas" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                      github.com/Cesar0ngas
                    </a>
                </div>
                <div className="flex items-center gap-4">
                    <Linkedin className="w-5 h-5 text-primary" />
                    <a href="https://linkedin.com/in/cesarcorreacastro" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                      LinkedIn Profile
                    </a>
                </div>
             </div>
          </div>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>I&apos;ll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form action={formAction} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Your message..." rows={5} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isPending} className="w-full bg-accent hover:bg-accent/90">
                    {isPending ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;