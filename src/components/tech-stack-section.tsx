'use client';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { IconDotNet, IconReact, IconJavaScript, IconTypeScript, IconTailwind } from "@/components/icons/tech-icons";
import { Database } from "lucide-react";
import { useTranslations } from "next-intl";

export function TechStackSection() {
  const t = useTranslations('TechStack');
  
  const techStack = [
    {
      name: t('csharp.title'),
      icon: IconDotNet,
      description: t('csharp.description'),
    },
    {
      name: t('javascript.title'),
      icon: IconJavaScript,
      description: t('javascript.description'),
    },
    {
      name: t('react.title'),
      icon: IconReact,
      description: t('react.description'),
    },
    {
      name: t('typescript.title'),
      icon: IconTypeScript,
      description: t('typescript.description'),
    },
    {
      name: t('tailwind.title'),
      icon: IconTailwind,
      description: t('tailwind.description'),
    },
    {
      name: t('sql.title'),
      icon: Database,
      description: t('sql.description'),
    },
  ];

  return (
    <section id="tech-stack" aria-labelledby="tech-stack-heading">
      <h2 id="tech-stack-heading" className="text-3xl font-headline font-bold text-center mb-12 text-primary">
        {t('title')}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {techStack.map((tech) => (
          <Card key={tech.name} className="flex flex-col items-center text-center p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg dark:hover:shadow-primary/20">
            <tech.icon className="h-16 w-16 mb-4 text-accent" />
            <CardHeader className="p-0">
              <CardTitle className="font-headline text-lg">{tech.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-2">
              <p className="text-sm text-muted-foreground">{tech.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
