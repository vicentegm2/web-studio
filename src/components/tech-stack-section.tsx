'use client';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { IconCSharp, IconDotNet, IconReact, IconJavaScript, IconTypeScript, IconTailwind } from "@/components/icons/tech-icons";
import { Database } from "lucide-react";
import { useTranslations } from "next-intl";

export function TechStackSection() {
  const t = useTranslations('TechStack');

  const techStack = [
    {
      name: "C# & .NET",
      icon: IconDotNet,
      description: t('dotnet'),
    },
    {
      name: "JavaScript",
      icon: IconJavaScript,
      description: t('javascript'),
    },
    {
      name: "React",
      icon: IconReact,
      description: t('react'),
    },
    {
      name: "TypeScript",
      icon: IconTypeScript,
      description: t('typescript'),
    },
    {
      name: "Tailwind CSS",
      icon: IconTailwind,
      description: t('tailwind'),
    },
    {
      name: "SQL & Databases",
      icon: Database,
      description: t('sql'),
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
