'use client';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users, Mic, MessageSquare, BrainCircuit } from "lucide-react";

export function SoftSkillsSection() {
  const softSkills = [
    {
      name: "Trabajo en equipo",
      icon: Users,
      description: "Colaboración efectiva para lograr objetivos comunes, aportando y recibiendo feedback.",
    },
    {
      name: "Oratoria",
      icon: Mic,
      description: "Habilidad para presentar ideas de forma clara y persuasiva en público.",
    },
    {
      name: "Comunicación",
      icon: MessageSquare,
      description: "Comunicación asertiva y clara, tanto de forma oral como escrita, en entornos técnicos y no técnicos.",
    },
    {
      name: "Aprendizaje continuo",
      icon: BrainCircuit,
      description: "Proactividad para adquirir nuevos conocimientos y mantenerme actualizado en un sector en constante evolución.",
    },
  ];

  return (
    <section id="soft-skills" aria-labelledby="soft-skills-heading">
      <h2 id="soft-skills-heading" className="text-3xl font-headline font-bold text-center mb-12 text-primary">
        Soft Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {softSkills.map((skill) => (
          <Card key={skill.name} className="flex flex-col items-center text-center p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg dark:hover:shadow-primary/20">
            <skill.icon className="h-16 w-16 mb-4 text-accent" />
            <CardHeader className="p-0">
              <CardTitle className="font-headline text-lg">{skill.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-2">
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
