'use client';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

export function ProjectsSection() {
  const projectsData = [
    {
      title: "Proyecto Alfa",
      description: "Una API RESTful de alto rendimiento construida con .NET 7 para gestionar datos de clientes, optimizando las consultas en un 50%.",
      imageUrl: "https://picsum.photos/seed/project1/600/400",
      imageHint: "abstract technology",
      tags: [".NET 7", "Azure Functions", "SQL Server"],
      liveUrl: "#",
      githubUrl: "https://github.com/vicentegabrielgomezmedina",
    },
    {
      title: "Proyecto Beta",
      description: "Migración de una aplicación monolítica a una arquitectura de microservicios, mejorando la escalabilidad y el mantenimiento.",
      imageUrl: "https://picsum.photos/seed/project2/600/400",
      imageHint: "cloud architecture",
      tags: ["C#", "Docker", "Kubernetes"],
      liveUrl: "#",
      githubUrl: "https://github.com/vicentegabrielgomezmedina",
    },
    {
      title: "Proyecto Gamma",
      description: "Desarrollo de un sistema de procesamiento de datos en tiempo real utilizando SignalR y colas de mensajes para notificaciones instantáneas.",
      imageUrl: "https://picsum.photos/seed/project3/600/400",
      imageHint: "data stream",
      tags: ["SignalR", "RabbitMQ", ".NET Core"],
      liveUrl: "#",
      githubUrl: "https://github.com/vicentegabrielgomezmedina",
    },
  ];

  return (
    <section id="projects" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="text-3xl font-headline font-bold text-center mb-12 text-primary">
        Proyectos Destacados
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl dark:hover:shadow-primary/20">
            <div className="relative h-48 w-full">
              <Image
                src={project.imageUrl}
                alt={`Imagen del proyecto ${project.title}`}
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
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
                <Button variant="ghost" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver código de ${project.title}`}>
                        <Github className="mr-2" />
                        Código
                    </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver demo en vivo de ${project.title}`}>
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
