'use client';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";

export function ProjectsSection() {
  const { t } = useLanguage();
  
  const projectsData = [
    {
      title: t.projectsData.personalCRM.title,
      description: t.projectsData.personalCRM.description,
      tags: t.projectsData.personalCRM.tags,
      imageUrl: null,
      imageHint: "CRM dashboard screenshot",
      liveUrl: "#",
      githubUrl: "#",
      codeButton: t.projectsData.personalCRM.codeButton,
      demoButton: t.projectsData.personalCRM.demoButton,
    },
    {
      title: t.projectsData.cleanArchitectureAPI.title,
      description: t.projectsData.cleanArchitectureAPI.description,
      tags: t.projectsData.cleanArchitectureAPI.tags,
      imageUrl: null,
      imageHint: "Clean Architecture API diagram",
      liveUrl: "#",
      githubUrl: "#",
      codeButton: t.projectsData.cleanArchitectureAPI.codeButton,
      demoButton: t.projectsData.cleanArchitectureAPI.demoButton,
    },
  ];

  const defaultImage = "/images/icon_default.png";

  return (
    <section id="projects" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="text-3xl font-headline font-bold text-center mb-12 text-primary">
        {t.projectsTitle}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <Card key={project.title} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl dark:hover:shadow-primary/20">
            <div className="relative h-48 w-full bg-muted">
              <Image
                src={project.imageUrl || defaultImage}
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
                        {project.codeButton}
                    </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`View live demo for ${project.title}`}>
                        <ExternalLink className="mr-2" />
                        {project.demoButton}
                    </a>
                </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
