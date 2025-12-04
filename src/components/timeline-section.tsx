'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, HeartHandshake, CalendarCheck2, ExternalLink, Languages } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

export function TimelineSection() {

  const statusColors: Record<string, string> = {
    "Completed": "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-700",
    "In progress": "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/50 dark:text-blue-300 dark:border-blue-700",
    "On hold": "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/50 dark:text-yellow-300 dark:border-yellow-700",
  };

  const experienceData = [
    {
      role: "Informatic Programmer",
      company: "Amedida TI",
      period: "Nov 2023 - Aug 2025",
      achievements: [
        "Database design, .NET Framework, and other skills.",
        "Development of backend solutions using the .NET ecosystem.",
        "Maintenance and optimization of existing applications to improve performance and scalability."
      ]
    },
    {
      role: "Intern",
      company: "NTT DATA",
      period: "Mar 2022 - Jun 2022",
      achievements: [
        "Collaborated on software development projects, gaining practical experience with Microsoft SQL Server and SQL.",
        "Supported the team in various programming and analysis tasks."
      ]
    }
  ];
  const educationData = [
      {
        degree: "Grado en Ingeniería Informática",
        institution: "Universidad Nacional de Educación a Distancia - U.N.E.D.",
        period: "Previsto Sep 2025",
        status: "In progress",
      },
      {
        degree: "F.P. Desarrollo de Aplicaciones Web",
        institution: "UCAM Universidad Católica San Antonio de Murcia",
        period: "2020 - 2022",
        status: "Completed",
      },
      {
        degree: "Grado en Ciencias Políticas y Gobierno",
        institution: "Universidad Nacional de Educación a Distancia - U.N.E.D.",
        period: "En pausa",
        status: "On hold",
      }
    ];
  const languagesData = [
    {
      language: "Inglés",
      level: "Actualmente cursando para obtener el B2",
    }
  ];
  const volunteeringData = [
    {
      role: "Voluntario",
      organization: "Protección Civil",
      period: "Sep 2023 - Present",
      description: "Voluntario en Protección Civil de Las Torres de Cotillas.",
      images: [
        {
          src: "https://picsum.photos/seed/vol1/600/400",
          alt: "Grupo de voluntarios de Protección Civil",
          hint: "civil protection group"
        },
        {
          src: "https://picsum.photos/seed/vol2/600/400",
          alt: "Voluntario de Protección Civil en un evento",
          hint: "civil protection volunteer"
        }
      ]
    }
  ];
    const eventsData = [
       {
        name: "Nerdearla España",
        organization: "La Nave, Madrid",
        date: "Abr 2024",
        description: "Tuve el gran privilegio de asistir a la edición debut de Nerdearla en España, el encuentro de informática más grande de habla hispana. ¡Simplemente espectacular!",
        url: null,
        images: [
          {
            src: "https://picsum.photos/seed/nerd1/600/400",
            alt: "Acreditación de Nerdearla en forma de disquete",
            hint: "conference badge"
          }
        ]
      },
      {
        name: "V Curso de Experto en Seguridad y Defensa",
        organization: "Universidad Nacional de Educación a Distancia (UNED)",
        date: "Oct 2024 - Dic 2024",
        description: "Conocimientos teóricos sobre cultura de defensa, geopolítica y relaciones internacionales, enfocándose en conflictos contemporáneos, amenazas híbridas y ciberamenazas.",
        url: "https://extension.uned.es/actividad/idactividad/38109",
        images: []
      },
      {
        name: "Seminario de Relaciones Internacionales y Asuntos Exteriores",
        organization: "UCAM Universidad Católica San Antonio de Murcia",
        date: "Oct 2023",
        description: "Análisis sobre geopolítica, ciberseguridad, y el impacto de la inteligencia artificial en la seguridad nacional.",
        url: null,
        images: []
      },
    ];

  return (
    <section id="experience" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="text-3xl font-headline font-bold text-center mb-16 text-primary">
        My Professional Journey
      </h2>
      <Tabs defaultValue="experience" className="w-full">
        <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-2 md:grid-cols-5 h-auto">
          <TabsTrigger value="experience"><Briefcase className="mr-2"/>Experience</TabsTrigger>
          <TabsTrigger value="education"><GraduationCap className="mr-2"/>Education</TabsTrigger>
          <TabsTrigger value="languages"><Languages className="mr-2"/>Languages</TabsTrigger>
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

        <TabsContent value="languages" className="mt-12 max-w-3xl mx-auto">
            <div className="space-y-8">
                {languagesData.map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                    <div className="bg-primary/10 p-3 rounded-full mt-1 transition-colors group-hover:bg-primary">
                        <Languages className="w-6 h-6 text-primary transition-colors group-hover:text-white" />
                    </div>
                    <div className="flex-grow">
                        <h3 className="font-headline text-lg font-semibold">{item.language}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{item.level}</p>
                    </div>
                </div>
                ))}
            </div>
        </TabsContent>

        <TabsContent value="volunteering" className="mt-12 max-w-3xl mx-auto">
            <div className="space-y-8">
              {volunteeringData.map((item, index) => (
                <Card key={index} className="overflow-hidden transition-shadow duration-300 hover:shadow-xl dark:hover:shadow-primary/20">
                  <CardHeader className="flex flex-row items-start gap-4">
                     <div className="bg-primary/10 p-3 rounded-full mt-1 transition-colors">
                        <HeartHandshake className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-grow">
                        <CardTitle className="font-headline text-xl">{item.role}</CardTitle>
                        <div className="text-sm text-muted-foreground mt-1">
                            <p className="font-medium text-accent">{item.organization}</p>
                            <p>{item.period}</p>
                        </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                        <div>
                             <p className="text-sm text-foreground/80">{item.description}</p>
                        </div>
                        {item.images && item.images.length > 0 && (
                            <Carousel className="w-full max-w-xs mx-auto">
                                <CarouselContent>
                                    {item.images.map((image, imgIndex) => (
                                        <CarouselItem key={imgIndex}>
                                            <div className="relative h-64 w-full">
                                                <Image
                                                    src={image.src}
                                                    alt={image.alt}
                                                    width={600}
                                                    height={400}
                                                    className="rounded-lg object-cover w-full h-full"
                                                    data-ai-hint={image.hint}
                                                />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
                            </Carousel>
                        )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
        </TabsContent>

        <TabsContent value="events" className="mt-12 max-w-3xl mx-auto">
             <div className="space-y-8">
                {eventsData.map((item, index) => {
                  const EventCard = (
                    <Card key={index} className="overflow-hidden transition-shadow duration-300 hover:shadow-xl dark:hover:shadow-primary/20 h-full flex flex-col">
                      <CardHeader className="flex flex-row items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full mt-1">
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
                      <CardContent className="flex-grow">
                        <div className={`grid ${item.images && item.images.length > 0 ? 'md:grid-cols-2' : 'grid-cols-1'} gap-6 items-center`}>
                          <p className="text-sm text-foreground/80">{item.description}</p>
                           {item.images && item.images.length > 0 && (
                            <Carousel className="w-full max-w-xs mx-auto">
                                <CarouselContent>
                                    {item.images.map((image, imgIndex) => (
                                        <CarouselItem key={imgIndex}>
                                            <div className="relative h-56 w-full">
                                                <Image
                                                    src={image.src}
                                                    alt={image.alt}
                                                    width={600}
                                                    height={400}
                                                    className="rounded-lg object-cover w-full h-full"
                                                    data-ai-hint={image.hint}
                                                />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                {item.images.length > 1 && (
                                  <>
                                    <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                                    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
                                  </>
                                )}
                            </Carousel>
                        )}
                        </div>
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
