'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const formSchema = z.object({
    subject: z.string().min(1, 'Subject is required'),
    message: z.string().min(1, 'Message is required'),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting me, I will get back to you as soon as possible.",
        });
        form.reset();
      } else {
        throw new Error('Something went wrong sending the message.');
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error Sending',
        description: 'There was a problem sending your message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="text-3xl font-headline font-bold text-center mb-12 text-primary">
        Contact
      </h2>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Send me a message</CardTitle>
          <CardDescription>
            Complete the form to send me a message directly from the web.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Collaboration Proposal" {...field} />
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
                      <Textarea
                        placeholder="Write your message here..."
                        className="resize-none"
                        rows={6}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end">
                <Button type="submit" disabled={isSubmitting}>
                  <Send className="mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}
