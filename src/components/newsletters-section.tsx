'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Globe, Zap } from "lucide-react";
import { Badge } from "./ui/badge";
import { useLanguage } from "@/contexts/language-context";
import Image from "next/image";

export function NewslettersSection() {
  const { t } = useLanguage();
  
  const newsletters = [
    {
      title: t.newslettersBitacoraPoliticaTitle,
      description: t.newslettersBitacoraPoliticaDescription,
      icon: Globe,
      tags: t.newslettersBitacoraPoliticaTags,
      url: "https://www.linkedin.com/newsletters/bit%C3%A1cora-pol%C3%ADtica-7327356071713370112/",
      imageUrl: "/images/eb7ea69ae8c7.webp",
      color: "text-blue-500"
    },
    {
      title: t.newslettersBitacoraDigitalTitle,
      description: t.newslettersBitacoraDigitalDescription,
      icon: Zap,
      tags: t.newslettersBitacoraDigitalTags,
      url: "https://www.linkedin.com/newsletters/bit%C3%A1cora-digital-7386341987249176576/",
      imageUrl: "/images/fe93560fd251.webp",
      color: "text-purple-500"
    },
    {
      title: t.newslettersBitacoraNaturalTitle,
      description: t.newslettersBitacoraNaturalDescription,
      icon: BookOpen,
      tags: t.newslettersBitacoraNaturalTags,
      url: "https://www.linkedin.com/newsletters/bit%C3%A1cora-natural-7387151322833108993/",
      imageUrl: "/images/c8ccee04d910.webp",
      color: "text-green-500"
    }
  ];

  return (
    <section id="newsletters" aria-labelledby="newsletters-heading" className="py-16">
      <div className="text-center mb-12">
        <h2 id="newsletters-heading" className="text-3xl font-headline font-bold text-primary">
          {t.newslettersTitle}
        </h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          {t.newslettersSubtitle}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsletters.map((newsletter) => (
          <Card key={newsletter.title} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl dark:hover:shadow-primary/20 hover:scale-[1.02]">
            {newsletter.imageUrl && (
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={newsletter.imageUrl}
                  alt={newsletter.title}
                  fill
                  className="object-cover"
                  draggable="false"
                />
              </div>
            )}
            <CardHeader className="flex flex-row items-start gap-4">
              <div className={`bg-primary/10 p-3 rounded-full mt-1 flex-shrink-0 ${newsletter.color}`}>
                <newsletter.icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <CardTitle className="font-headline text-xl">{newsletter.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-foreground/80">
                {newsletter.description}
              </CardDescription>
              <div className="mt-4 flex flex-wrap gap-2">
                {newsletter.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <a href={newsletter.url} target="_blank" rel="noopener noreferrer" aria-label={`Read ${newsletter.title}`}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {t.newslettersReadMore}
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
