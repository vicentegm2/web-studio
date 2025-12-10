'use client';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { IconCSharp, IconDotNet, IconReact, IconGit, IconDocker } from "@/components/icons/tech-icons";
import { Database, Share2 } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function TechStackSection() {
  const { t } = useLanguage();
  
  const techStack = [
    {
      name: t.techStack.csharp.name,
      icon: IconCSharp,
      description: t.techStack.csharp.description,
    },
    {
      name: t.techStack.dotnet.name,
      icon: IconDotNet,
      description: t.techStack.dotnet.description,
    },
    {
      name: t.techStack.react.name,
      icon: IconReact,
      description: t.techStack.react.description,
    },
    {
      name: t.techStack.sqlserver.name,
      icon: Database,
      description: t.techStack.sqlserver.description,
    },
    {
      name: t.techStack.git.name,
      icon: IconGit,
      description: t.techStack.git.description,
    },
    {
      name: t.techStack.docker.name,
      icon: IconDocker,
      description: t.techStack.docker.description,
    },
    {
      name: t.techStack.microservices.name,
      icon: Share2,
      description: t.techStack.microservices.description,
    },
  ];

  return (
    <section id="tech-stack" aria-labelledby="tech-stack-heading">
      <h2 id="tech-stack-heading" className="text-3xl font-headline font-bold text-center mb-12 text-primary">
        {t.techStackTitle}
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
