'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, HeartHandshake, CalendarCheck2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Status = "Finalizado" | "En curso" | "En pausa";
const statusColors: Record<Status, string> = {
  "Finalizado": "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-700",
  "En curso": "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/50 dark:text-blue-300 dark:border-blue-700",
  "En pausa": "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/50 dark:text-yellow-300 dark:border-yellow-700",
};

export function TimelineSection() {
  const experienceData = [
    {
      role: 'Backend .NET Developer',
      company: 'Tech Solutions Inc.',
      period: 'Ene 2021 - Actualidad',
      achievements: [
          'Lideré la migración de un monolito a una arquitectura de microservicios, mejorando la escalabilidad y reduciendo el tiempo de despliegue en un 40%.',
          'Diseñé e implementé un sistema de caché con Redis que disminuyó la latencia de la API en un 60% para las consultas más frecuentes.',
          'Automaticé el pipeline CI/CD con Azure DevOps, permitiendo entregas de software más rápidas y fiables.'
      ]
    },
    {
      role: 'Junior Software Developer',
      company: 'Innovatech Ltd.',
      period: 'Jun 2019 - Dic 2020',
      achievements: [
        'Participé en el desarrollo de una aplicación web con ASP.NET MVC, contribuyendo a un aumento del 15% en la satisfacción del cliente.',
        'Optimicé consultas SQL complejas, lo que resultó en una reducción del 30% en los tiempos de carga de los informes críticos.',
        'Implementé tests unitarios y de integración, aumentando la cobertura de código del 20% al 75% en módulos clave.'
      ]
    },
  ];

  const educationData = [
    {
      degree: 'Grado Superior en Desarrollo de Aplicaciones Web',
      institution: 'IES El Rincón',
      period: '2017 - 2019',
      status: 'Finalizado' as Status,
    },
    {
      degree: 'Curso de Inglés Avanzado C1',
      institution: 'Escuela Oficial de Idiomas',
      period: '2022 - Presente',
      status: 'En curso' as Status,
    },
    {
      degree: 'Grado en Ingeniería Informática',
      institution: 'Universidad de Las Palmas de Gran Canaria',
      period: '2019 - 2021',
      status: 'En pausa' as Status,
    },
  ];

  const volunteeringData = [
    {
      role: 'Community Mentor',
      organization: 'Code for All',
      period: '2022 - Presente',
      description: 'Guiando a futuros desarrolladores a través de mentorías, compartiendo buenas prácticas y consejos de carrera.',
    },
    {
      role: 'Event Volunteer',
      organization: 'Tech Conference 2023',
      period: 'Oct 2023',
      description: 'Colaboré en la logística para asegurar una experiencia fluida para más de 500 asistentes.',
    },
  ];

  const eventsData = [
    {
      name: 'Conferencia Anual de Desarrolladores',
      organization: 'Global Tech',
      date: 'Junio 2023',
      description: 'Participé como asistente, atendiendo a charlas sobre las últimas tendencias en desarrollo de software, serverless y arquitectura de microservicios.',
    },
    {
      name: 'Hackathon de Innovación Social',
      organization: 'Code for Good',
      date: 'Marzo 2022',
      description: 'Formé parte de un equipo que desarrolló un prototipo de aplicación para conectar a voluntarios con ONGs locales, obteniendo el segundo lugar.',
    },
  ];


  return (
    <section id="experience" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="text-3xl font-headline font-bold text-center mb-16 text-primary">
        Mi Trayectoria Profesional
      </h2>
      <Tabs defaultValue="experience" className="w-full">
        <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 md:grid-cols-4 h-auto">
          <TabsTrigger value="experience"><Briefcase className="mr-2"/>Experiencia</TabsTrigger>
          <TabsTrigger value="education"><GraduationCap className="mr-2"/>Formación</TabsTrigger>
          <TabsTrigger value="volunteering"><HeartHandshake className="mr-2"/>Voluntariado</TabsTrigger>
          <TabsTrigger value="events"><CalendarCheck2 className="mr-2"/>Eventos</TabsTrigger>
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
                            {item.achievements.map((ach, i) => (
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
                {eventsData.map((item, index) => (
                <Card key={index} className="transition-shadow duration-300 hover:shadow-lg dark:hover:shadow-primary/20">
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
                    </CardHeader>
                    <CardContent>
                    <p className="text-sm text-foreground/80 ml-[68px] -mt-2">{item.description}</p>
                    </CardContent>
                </Card>
                ))}
            </div>
        </TabsContent>

      </Tabs>
    </section>
  );
}
