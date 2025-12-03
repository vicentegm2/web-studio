'use client';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function ProjectsSection() {
  const t = useTranslations('Projects');

  const projectsData = [
    {
      id: "project1",
      imageUrl: "https://picsum.photos/seed/project1/600/400",
      imageHint: "abstract technology",
      liveUrl: "#",
      githubUrl: "https://github.com/vicentegabrielgomezmedina",
    },
    {
      id: "project2",
      imageUrl: "https://picsum.photos/seed/project2/600/400",
      imageHint: "cloud architecture",
      liveUrl: "#",
      githubUrl: "https://github.com/vicentegabrielgomezmedina",
    },
    {
      id: "project3",
      imageUrl: "https://picsum.photos/seed/project3/600/400",
      imageHint: "data stream",
      liveUrl: "#",
      githubUrl: "https://github.com/vicentegabrielgomezmedina",
    },
  ];

  return (
    <section id="projects" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="text-3xl font-headline font-bold text-center mb-12 text-primary">
        {t('title')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => {
          const title = t(`${project.id}.title`);
          const description = t(`${project.id}.description`);
          const tags = t.get(`${project.id}.tags`) as string[];

          return (
            <Card key={project.id} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl dark:hover:shadow-primary/20">
              <div className="relative h-48 w-full">
                <Image
                  src={project.imageUrl}
                  alt={title}
                  fill
                  className="object-cover"
                  data-ai-hint={project.imageHint}
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-xl">{title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-foreground/80">{description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((tag: string, i: number) => (
                    <span key={i} className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                  <Button variant="ghost" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={t('codeAria', {title})}>
                          <Github className="mr-2" />
                          {t('code')}
                      </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={t('demoAria', {title})}>
                          <ExternalLink className="mr-2" />
                          {t('demo')}
                      </a>
                  </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </section>
  );
}
