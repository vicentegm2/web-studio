'use client';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

export function ProjectsSection() {
  const projectsData = [
    {
      title: "Angular Micro-Portfolio",
      description: "Angular Micro-Portfolio is a personal project built with Angular 22 focused on learning and applying best practices. Key Features: Responsive design, Dark Mode, and dynamic content loaded via JSON.",
      tags: ["Angular", "TypeScript", "MySQL", "JSON", "CI/CD", "GitHub Actions"],
      imageUrl: "https://picsum.photos/seed/project1/600/400",
      imageHint: "abstract technology",
      liveUrl: "https://vicentegm2.github.io/angular-micro-portfolio/",
      githubUrl: "https://github.com/vicentegm2/angular-micro-portfolio",
    },
  ];

  return (
    <section id="projects" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="text-3xl font-headline font-bold text-center mb-12 text-primary">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <Card key={project.title} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl dark:hover:shadow-primary/20">
            <div className="relative h-48 w-full">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
                data-ai-hint={project.imageHint}
              />
            </div>
            <CardHeader>
              <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-foreground/80">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
                <Button variant="ghost" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View code for ${project.title}`}>
                        <Github className="mr-2" />
                        Code
                    </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`View live demo for ${project.title}`}>
                        <ExternalLink className="mr-2" />
                        Demo
                    </a>
                </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
