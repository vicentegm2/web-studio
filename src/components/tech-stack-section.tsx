'use client';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { IconDotNet, IconReact, IconJavaScript, IconTypeScript, IconTailwind, IconAzure, IconDocker, IconGit } from "@/components/icons/tech-icons";
import { Database } from "lucide-react";

export function TechStackSection() {
  const techStack = [
    {
      name: "C# & .NET",
      icon: IconDotNet,
      description: "Building robust and scalable backend services and APIs with the .NET ecosystem.",
    },
    {
      name: "SQL & Databases",
      icon: Database,
      description: "Designing and managing relational databases, primarily with SQL Server.",
    },
    {
      name: "Azure",
      icon: IconAzure,
      description: "Leveraging cloud services for hosting scalable applications and serverless functions.",
    },
    {
      name: "Docker",
      icon: IconDocker,
      description: "Using containers to build, ship, and run distributed applications.",
    },
    {
      name: "Git & GitHub",
      icon: IconGit,
      description: "Applying version control best practices for collaborative and efficient development.",
    },
    {
      name: "TypeScript",
      icon: IconTypeScript,
      description: "Enhancing JavaScript with static types for more reliable and maintainable code.",
    },
  ];

  return (
    <section id="tech-stack" aria-labelledby="tech-stack-heading">
      <h2 id="tech-stack-heading" className="text-3xl font-headline font-bold text-center mb-12 text-primary">
        Technologies I work with
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
