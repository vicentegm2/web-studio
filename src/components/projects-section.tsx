'use client';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";
import { MotionWrapper } from "./ui/motion-wrapper";
import { motion } from "framer-motion";

export function ProjectsSection() {
  const { t } = useLanguage();

  const projectsData = [
    {
      title: t.projectsData.personalCRM.title,
      description: t.projectsData.personalCRM.description,
      tags: t.projectsData.personalCRM.tags,
      imageUrl: null,
      imageHint: "CRM dashboard screenshot",
      videoUrl: null,
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
      videoUrl: null,
      liveUrl: "#",
      githubUrl: "#",
      codeButton: t.projectsData.cleanArchitectureAPI.codeButton,
      demoButton: t.projectsData.cleanArchitectureAPI.demoButton,
    },
  ];

  const defaultImage = "/images/7e6fa9b613f3.webp";

  return (
    <section id="projects" aria-labelledby="projects-heading">
      <MotionWrapper animation="fade-up">
        <h2 id="projects-heading" className="text-3xl font-headline font-bold text-center mb-12 text-primary">
          {t.projectsTitle}
        </h2>
      </MotionWrapper>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <MotionWrapper key={project.title} animation="fade-up" delay={index * 0.1}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="h-full"
            >
              <Card className="flex flex-col overflow-hidden h-full shadow-md hover:shadow-xl dark:hover:shadow-primary/10 transition-shadow duration-300">
                <div className="relative h-48 w-full bg-muted overflow-hidden">
                  {project.videoUrl ? (
                    <video
                      src={project.videoUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    <Image
                      src={project.imageUrl || defaultImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      data-ai-hint={project.imageHint}
                    />
                  )}
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
            </motion.div>
          </MotionWrapper>
        ))}
      </div>
    </section>
  );
}
