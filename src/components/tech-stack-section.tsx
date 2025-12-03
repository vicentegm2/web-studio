import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { IconCSharp, IconDotNet, IconReact, IconJavaScript, IconTypeScript, IconTailwind } from "@/components/icons/tech-icons";
import { Database } from "lucide-react";

const techStack = [
  {
    name: "C# & .NET",
    icon: IconDotNet,
    description: "Construcción de servicios backend y APIs robustas y escalables con el ecosistema .NET.",
  },
  {
    name: "JavaScript",
    icon: IconJavaScript,
    description: "Lenguaje versátil para frontends web dinámicos e interactivos.",
  },
  {
    name: "React",
    icon: IconReact,
    description: "Creación de interfaces de usuario modernas, rápidas y escalables con esta potente librería.",
  },
  {
    name: "TypeScript",
    icon: IconTypeScript,
    description: "Mejora de JavaScript con tipos estáticos para un código más fiable y mantenible.",
  },
  {
    name: "Tailwind CSS",
    icon: IconTailwind,
    description: "Framework CSS utility-first para construir rápidamente interfaces de usuario personalizadas.",
  },
  {
    name: "SQL & Databases",
    icon: Database,
    description: "Diseño y gestión de bases de datos relacionales, principalmente con SQL Server.",
  },
];

export function TechStackSection() {
  return (
    <section id="tech-stack" aria-labelledby="tech-stack-heading">
      <h2 id="tech-stack-heading" className="text-3xl font-headline font-bold text-center mb-12 text-primary">
        Tecnologías con las que trabajo
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {techStack.map((tech) => (
          <Card key={tech.name} className="flex flex-col items-center text-center p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
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