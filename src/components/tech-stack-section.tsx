'use client';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { IconCSharp, IconDotNet, IconReact, IconGit } from "@/components/icons/tech-icons";
import { Database, Share2 } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { MotionWrapper } from "./ui/motion-wrapper";
import { motion } from "framer-motion";

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
      name: t.techStack.microservices.name,
      icon: Share2,
      description: t.techStack.microservices.description,
    },
  ];

  return (
    <section id="tech-stack" aria-labelledby="tech-stack-heading">
      <MotionWrapper animation="fade-up">
        <h2 id="tech-stack-heading" className="text-3xl font-headline font-bold text-center mb-12 text-primary">
          {t.techStackTitle}
        </h2>
      </MotionWrapper>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {techStack.map((tech, index) => (
          <MotionWrapper key={tech.name} animation="zoom-in" delay={index * 0.1}>
            <motion.div
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
              className="h-full"
            >
              <Card
                className="flex flex-col items-center text-center p-6 h-full hover:border-primary/50 transition-colors"
              >
                <tech.icon className="h-16 w-16 mb-4 text-primary" />
                <CardHeader className="p-0">
                  <CardTitle className="font-headline text-lg">{tech.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          </MotionWrapper>
        ))}
      </div>
    </section>
  );
}
