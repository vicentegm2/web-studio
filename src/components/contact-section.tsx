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

const formSchema = z.object({
  subject: z.string().min(1, 'El asunto es requerido.'),
  message: z.string().min(1, 'El mensaje es requerido.'),
});

export function ContactSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const recipient = 'vicente280228@gmail.com';
    const subject = encodeURIComponent(values.subject);
    const body = encodeURIComponent(values.message);
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="text-3xl font-headline font-bold text-center mb-12 text-primary">
        Contacto
      </h2>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Envíame un mensaje</CardTitle>
          <CardDescription>
            Completa el formulario y se abrirá tu cliente de correo para enviarme un mensaje directamente.
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
                    <FormLabel>Asunto</FormLabel>
                    <FormControl>
                      <Input placeholder="Ej: Propuesta de colaboración" {...field} />
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
                    <FormLabel>Mensaje</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Escribe tu mensaje aquí..."
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
                <Button type="submit">
                  <Send className="mr-2" />
                  Enviar Mensaje
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}
