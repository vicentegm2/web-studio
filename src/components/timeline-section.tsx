'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, HeartHandshake, CalendarCheck2, ExternalLink } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function TimelineSection() {

  const statusColors: Record<string, string> = {
    "Completed": "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-700",
    "In progress": "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/50 dark:text-blue-300 dark:border-blue-700",
    "On hold": "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/50 dark:text-yellow-300 dark:border-yellow-700",
  };

  const experienceData = [
      {
        role: "Programador informático",
        company: "Amedida TI",
        period: "Nov 2023 - Ago 2025",
        achievements: [
          "Diseño de bases de datos, .NET Framework y otras habilidades.",
          "Desarrollo de soluciones backend utilizando el ecosistema .NET.",
          "Mantenimiento y optimización de aplicaciones existentes para mejorar el rendimiento y la escalabilidad."
        ]
      },
      {
        role: "Becario",
        company: "NTT DATA",
        period: "Mar 2022 - Jun 2022",
        achievements: [
          "Colaboración en proyectos de desarrollo de software, adquiriendo experiencia práctica con Microsoft SQL Server y SQL.",
          "Apoyo al equipo en diversas tareas de programación y análisis."
        ]
      }
    ];
  const educationData = [
      {
        degree: "F.P. Desarrollo de Aplicaciones Web",
        institution: "UCAM Universidad Católica San Antonio de Murcia",
        period: "2020 - 2022",
        status: "Completed"
      },
      {
        degree: "Grado en Ingeniería Informática",
        institution: "Universidad Nacional de Educación a Distancia - U.N.E.D.",
        period: "Previsto Sep 2025",
        status: "In progress"
      },
      {
        degree: "Grado en Ciencias Políticas y Gobierno",
        institution: "Universidad Nacional de Educación a Distancia - U.N.E.D.",
        period: "En pausa",
        status: "On hold"
      }
    ];
  const volunteeringData = [
    {
      role: "Community Mentor",
      organization: "Code for All",
      period: "2022 - Present",
      description: "Guiding future developers through mentoring, sharing best practices and career advice."
    },
    {
      role: "Event Volunteer",
      organization: "Tech Conference 2023",
      period: "Oct 2023",
      description: "Collaborated on logistics to ensure a smooth experience for over 500 attendees."
    }
  ];
    const eventsData = [
      {
        name: "V Curso de Experto en Seguridad y Defensa",
        organization: "Universidad Nacional de Educación a Distancia (UNED)",
        date: "Oct 2024 - Dic 2024",
        description: "Conocimientos teóricos sobre cultura de defensa, geopolítica y relaciones internacionales, enfocándose en conflictos contemporáneos, amenazas híbridas y ciberamenazas.",
        url: "https://extension.uned.es/actividad/idactividad/38109"
      },
      {
        name: "Seminario de Relaciones Internacionales y Asuntos Exteriores",
        organization: "UCAM Universidad Católica San Antonio de Murcia",
        date: "Oct 2023",
        description: "Análisis sobre geopolítica, ciberseguridad, y el impacto de la inteligencia artificial en la seguridad nacional."
      },
    ];

  return (
    <section id="experience" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="text-3xl font-headline font-bold text-center mb-16 text-primary">
        My Professional Journey
      </h2>
      <Tabs defaultValue="experience" className="w-full">
        <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 md:grid-cols-4 h-auto">
          <TabsTrigger value="experience"><Briefcase className="mr-2"/>Experience</TabsTrigger>
          <TabsTrigger value="education"><GraduationCap className="mr-2"/>Education</TabsTrigger>
          <TabsTrigger value="volunteering"><HeartHandshake className="mr-2"/>Volunteering</TabsTrigger>
          <TabsTrigger value="events"><CalendarCheck2 className="mr-2"/>Events</TabsTrigger>
        </TabsList>
        
        <TabsContent value="experience" className="mt-12">
            <div className="relative max-w-3xl mx-auto">
                <div className="absolute left-4 sm:left-1/2 -ml-0.5 w-1 h-full bg-border" aria-hidden="true"></div>
                {experienceData.map((item, index) => (
                <div key={index} className="relative mb-12 pl-12 sm:pl-0 sm:flex sm:items-center sm:gap-8 even:flex-row-reverse">
                    <div className="sm:w-1/2">{/* Empty container to push card to one side */}</div>
                    <div className="absolute left-0 sm:left-1/2 -translate-x-1/2 transform">
                        <div className="w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                            <Briefcase className="w-4 h-4 text-primary" />
                        </div>
                    </div>
                    <Card className={`w-full sm:w-1/2 transition-shadow duration-300 hover:shadow-xl dark:hover:shadow-primary/20`}>
                        <CardHeader>
                        <CardTitle className="font-headline text-xl text-primary">{item.role}</CardTitle>
                        <div className="text-sm text-muted-foreground">
                            <p className="font-semibold text-accent">{item.company}</p>
                            <p>{item.period}</p>
                        </div>
                        </CardHeader>
                        <CardContent>
                        <ul className="space-y-2 text-sm text-foreground/80 list-disc pl-5">
                            {item.achievements.map((ach: string, i: number) => (
                            <li key={i}>{ach}</li>
                            ))}
                        </ul>
                        </CardContent>
                    </Card>
                </div>
                ))}
            </div>
        </TabsContent>

        <TabsContent value="education" className="mt-12 max-w-3xl mx-auto">
            <div className="space-y-8">
                {educationData.map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                    <div className="bg-primary/10 p-3 rounded-full mt-1 transition-colors group-hover:bg-primary">
                        <GraduationCap className="w-6 h-6 text-primary transition-colors group-hover:text-white" />
                    </div>
                    <div className="flex-grow">
                        <div className="flex justify-between items-center">
                            <h3 className="font-headline text-lg font-semibold">{item.degree}</h3>
                            <Badge className={`${statusColors[item.status]}`}>{item.status}</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                            <p className="font-medium text-accent">{item.institution}</p>
                            <p>{item.period}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </TabsContent>

        <TabsContent value="volunteering" className="mt-12 max-w-3xl mx-auto">
            <div className="space-y-8">
                {volunteeringData.map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                    <div className="bg-primary/10 p-3 rounded-full mt-1 transition-colors group-hover:bg-primary">
                        <HeartHandshake className="w-6 h-6 text-primary transition-colors group-hover:text-white" />
                    </div>
                    <div className="flex-grow">
                        <h3 className="font-headline text-lg font-semibold">{item.role}</h3>
                        <div className="text-sm text-muted-foreground mt-1">
                        <p className="font-medium text-accent">{item.organization}</p>
                        <p>{item.period}</p>
                        </div>
                        <p className="text-sm text-foreground/80 mt-2">{item.description}</p>
                    </div>
                </div>
                ))}
            </div>
        </TabsContent>

        <TabsContent value="events" className="mt-12 max-w-3xl mx-auto">
             <div className="space-y-8">
                {eventsData.map((item, index) => {
                  const EventCard = (
                     <Card className="transition-shadow duration-300 hover:shadow-lg dark:hover:shadow-primary/20 h-full">
                      <CardHeader className="flex flex-row items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <CalendarCheck2 className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-grow">
                          <CardTitle className="font-headline text-xl">{item.name}</CardTitle>
                          <div className="text-sm text-muted-foreground mt-1">
                            <p className="font-semibold text-accent">{item.organization}</p>
                            <p>{item.date}</p>
                          </div>
                        </div>
                         {item.url && <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0" />}
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-foreground/80 ml-[68px] -mt-2">{item.description}</p>
                      </CardContent>
                    </Card>
                  );

                  if (item.url) {
                    return (
                      <a href={item.url} key={index} target="_blank" rel="noopener noreferrer" className="block group">
                        {EventCard}
                      </a>
                    )
                  }
                  
                  return <div key={index}>{EventCard}</div>;
                })}
            </div>
        </TabsContent>

      </Tabs>
    </section>
  );
}
