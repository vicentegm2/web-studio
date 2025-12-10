'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, HeartHandshake, CalendarCheck2, ExternalLink, Languages } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { useLanguage } from "@/contexts/language-context";

export function TimelineSection() {
  const { t } = useLanguage();

  const statusColors: Record<string, string> = {
    "Completed": "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-700",
    "In progress": "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/50 dark:text-blue-300 dark:border-blue-700",
    "On hold": "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/50 dark:text-yellow-300 dark:border-yellow-700",
  };

  const experienceData = [
    {
      role: t.experiences.amedida.role,
      company: t.experiences.amedida.company,
      period: t.experiences.amedida.period,
      achievements: t.experiences.amedida.achievements
    },
    {
      role: t.experiences.nttdata.role,
      company: t.experiences.nttdata.company,
      period: t.experiences.nttdata.period,
      achievements: t.experiences.nttdata.achievements
    }
  ];
  const educationData = [
      {
        degree: t.education.uned.degree,
        institution: t.education.uned.institution,
        period: t.education.uned.period,
        status: t.education.uned.status,
      },
      {
        degree: t.education.ucam.degree,
        institution: t.education.ucam.institution,
        period: t.education.ucam.period,
        status: t.education.ucam.status,
      },
      {
        degree: t.education.politics.degree,
        institution: t.education.politics.institution,
        period: t.education.politics.period,
        status: t.education.politics.status,
      }
    ];
  const languagesData = [
    {
      language: t.languages.english.language,
      level: t.languages.english.level,
    }
  ];
  const volunteeringData = [
    {
      role: t.volunteering.civilProtection.role,
      organization: t.volunteering.civilProtection.organization,
      period: t.volunteering.civilProtection.period,
      description: t.volunteering.civilProtection.description,
      images: [
        {
          src: "/images/4fb5fceb2854.webp",
          alt: "Grupo de voluntarios de Protección Civil",
          hint: "civil protection group"
        },
        {
          src: "/images/4828deb5d4f6.webp",
          alt: "Voluntario de Protección Civil en un evento",
          hint: "civil protection volunteer"
        }
      ]
    }
  ];
    const eventsData = [
       {
        name: t.events.nerdearla.name,
        organization: t.events.nerdearla.organization,
        date: t.events.nerdearla.date,
        description: t.events.nerdearla.description,
        url: null,
        images: [
          {
            src: "/images/44b4549185a9.webp",
            alt: "Acreditación de Nerdearla en forma de disquete",
            hint: "conference badge"
          }
        ]
      },
      {
        name: t.events.securityCourse.name,
        organization: t.events.securityCourse.organization,
        date: t.events.securityCourse.date,
        description: t.events.securityCourse.description,
        url: "https://extension.uned.es/actividad/idactividad/38109",
        images: []
      },
      {
        name: t.events.internationalRelations.name,
        organization: t.events.internationalRelations.organization,
        date: t.events.internationalRelations.date,
        description: t.events.internationalRelations.description,
        url: null,
        images: []
      },
    ];

  return (
    <section id="experience" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="text-3xl font-headline font-bold text-center mb-16 text-primary">
        {t.timelineTitle}
      </h2>
      <Tabs defaultValue="experience" className="w-full">
        <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-2 md:grid-cols-5 h-auto">
          <TabsTrigger value="experience"><Briefcase className="mr-2"/>{t.experienceTab}</TabsTrigger>
          <TabsTrigger value="education"><GraduationCap className="mr-2"/>{t.educationTab}</TabsTrigger>
          <TabsTrigger value="languages"><Languages className="mr-2"/>{t.languagesTab}</TabsTrigger>
          <TabsTrigger value="volunteering"><HeartHandshake className="mr-2"/>{t.volunteeringTab}</TabsTrigger>
          <TabsTrigger value="events"><CalendarCheck2 className="mr-2"/>{t.eventsTab}</TabsTrigger>
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
