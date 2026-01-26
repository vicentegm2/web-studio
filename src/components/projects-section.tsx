import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Play } from "lucide-react";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  mainImage: any;
  tags: string[];
  codeUrl?: string;
  demoUrl?: string;
  videoUrl?: string;
}

export async function ProjectsSection({ locale = 'en' }: { locale?: string }) {
  const projects = await sanityFetch<Project[]>({
    query: PROJECTS_QUERY,
    tags: ['project'],
  });

  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-16">
      <h2 id="projects-heading" className="text-3xl font-headline font-bold text-center mb-12 text-primary">
        {locale === 'es' ? 'Proyectos Destacados' : 'Featured Projects'}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => {
          const imageUrl = project.mainImage ? urlFor(project.mainImage).width(600).height(400).url() : '';

          return (
            <Card key={project._id} className="overflow-hidden flex flex-col hover:shadow-xl transition-shadow">
              {imageUrl && (
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
              )}

              <CardHeader>
                <CardTitle className="font-headline">{project.title}</CardTitle>
              </CardHeader>

              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>

              <CardFooter className="flex gap-2">
                {project.codeUrl && (
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      {locale === 'es' ? 'Código' : 'Code'}
                    </a>
                  </Button>
                )}

                {project.demoUrl && (
                  <Button size="sm" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {locale === 'es' ? 'Demo' : 'Demo'}
                    </a>
                  </Button>
                )}

                {project.videoUrl && (
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.videoUrl} target="_blank" rel="noopener noreferrer">
                      <Play className="w-4 h-4 mr-2" />
                      {locale === 'es' ? 'Video' : 'Video'}
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
