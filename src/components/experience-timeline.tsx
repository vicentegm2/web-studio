import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experienceData = [
  {
    role: "Backend .NET Developer",
    company: "Tech Solutions Inc.",
    period: "Ene 2021 - Actualidad",
    achievements: [
        "Lideré la migración de un monolito a una arquitectura de microservicios, mejorando la escalabilidad y reduciendo el tiempo de despliegue en un 40%.",
        "Diseñé e implementé un sistema de caché con Redis que disminuyó la latencia de la API en un 60% para las consultas más frecuentes.",
        "Automaticé el pipeline CI/CD con Azure DevOps, permitiendo entregas de software más rápidas y fiables.",
    ]
  },
  {
    role: "Junior Software Developer",
    company: "Innovatech Ltd.",
    period: "Jun 2019 - Dic 2020",
    achievements: [
        "Participé en el desarrollo de una aplicación web con ASP.NET MVC, contribuyendo a un aumento del 15% en la satisfacción del cliente.",
        "Optimicé consultas SQL complejas, lo que resultó en una reducción del 30% en los tiempos de carga de los informes críticos.",
        "Implementé tests unitarios y de integración, aumentando la cobertura de código del 20% al 75% en módulos clave.",
    ]
  },
];

export function ExperienceTimeline() {
  return (
    <section id="experience" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="text-3xl font-headline font-bold text-center mb-16 text-primary">
        Experiencia Profesional
      </h2>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 sm:left-1/2 -ml-0.5 w-1 h-full bg-border" aria-hidden="true"></div>
        {experienceData.map((item, index) => (
          <div key={index} className="relative mb-12 pl-12 sm:pl-0 sm:flex sm:items-center sm:gap-8 even:flex-row-reverse">
             <div className="sm:w-1/2">
                {/* Contenedor vacío para empujar la tarjeta a un lado en desktop */}
             </div>
               <div className="absolute left-0 sm:left-1/2 -translate-x-1/2 transform">
                 <div className="w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-primary" />
                  </div>
               </div>
              <Card className={`w-full sm:w-1/2 transition-shadow duration-300 hover:shadow-xl`}>
                <CardHeader>
                  <CardTitle className="font-headline text-xl text-primary">{item.role}</CardTitle>
                  <div className="text-sm text-muted-foreground">
                    <p className="font-semibold text-accent">{item.company}</p>
                    <p>{item.period}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-foreground/80 list-disc pl-5">
                    {item.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
