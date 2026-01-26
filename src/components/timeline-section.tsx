'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface Experience {
  _id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  logoUrl?: string;
}

interface TimelineSectionProps {
  experiences?: Experience[];
  locale?: string;
}

export function TimelineSection({ experiences, locale = 'en' }: TimelineSectionProps) {
  // If no experiences from Sanity, show empty state
  if (!experiences || experiences.length === 0) {
    return (
      <section id="experience" aria-labelledby="experience-heading">
        <h2 id="experience-heading" className="text-3xl font-headline font-bold text-center mb-16 text-primary">
          {locale === 'es' ? 'Experiencia' : 'Experience'}
        </h2>
        <div className="text-center text-muted-foreground">
          <p>{locale === 'es' ? 'No hay experiencias disponibles. Añade experiencias en Sanity Studio.' : 'No experiences available. Add experiences in Sanity Studio.'}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="text-3xl font-headline font-bold text-center mb-16 text-primary">
        {locale === 'es' ? 'Experiencia Profesional' : 'Professional Experience'}
      </h2>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 sm:left-1/2 -ml-0.5 w-1 h-full bg-border" aria-hidden="true"></div>
        {experiences.map((item, index) => (
          <div key={item._id} className="relative mb-12 pl-12 sm:pl-0 sm:flex sm:items-center sm:gap-8 even:flex-row-reverse">
            <div className="sm:w-1/2">{/* Empty container to push card to one side */}</div>
            <div className="absolute left-0 sm:left-1/2 -translate-x-1/2 transform">
              <div className="w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-primary" />
              </div>
            </div>
            <Card className={`w-full sm:w-1/2 transition-shadow duration-300 hover:shadow-xl dark:hover:shadow-primary/20`}>
              <CardHeader>
                {item.logoUrl && (
                  <div className="mb-4 flex justify-center">
                    <Image
                      src={item.logoUrl}
                      alt={`${item.company} logo`}
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                )}
                <CardTitle className="font-headline text-xl text-primary">{item.role}</CardTitle>
                <div className="text-sm text-muted-foreground">
                  <p className="font-semibold text-primary">{item.company}</p>
                  <p>{item.period}</p>
                </div>
              </CardHeader>
              <CardContent>
                {item.description && item.description.length > 0 && (
                  <ul className="space-y-2 text-sm text-foreground/80 list-disc pl-5">
                    {item.description.map((desc: string, i: number) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
