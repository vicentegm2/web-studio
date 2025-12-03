'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, HeartHandshake, CalendarCheck2 } from "lucide-react";
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
        role: ".NET Backend Developer",
        company: "Tech Solutions Inc.",
        period: "Jan 2021 - Present",
        achievements: [
          "Led the migration of a monolith to a microservices architecture, improving scalability and reducing deployment time by 40%.",
          "Designed and implemented a caching system with Redis that decreased API latency by 60% for the most frequent queries.",
          "Automated the CI/CD pipeline with Azure DevOps, enabling faster and more reliable software deliveries."
        ]
      },
      {
        role: "Junior Software Developer",
        company: "Innovatech Ltd.",
        period: "Jun 2019 - Dec 2020",
        achievements": [
          "Participated in the development of a web application with ASP.NET MVC, contributing to a 15% increase in customer satisfaction.",
          "Optimized complex SQL queries, resulting in a 30% reduction in critical report loading times.",
          "Implemented unit and integration tests, increasing code coverage from 20% to 75% in key modules."
        ]
      }
    ];
  const educationData = [
      {
        degree: "Higher Degree in Web Application Development",
        institution: "IES El Rincón",
        period: "2017 - 2019",
        status: "Completed"
      },
      {
        degree: "Advanced English Course C1",
        institution: "Official School of Languages",
        period: "2022 - Present",
        status: "In progress"
      },
      {
        degree: "Degree in Computer Engineering",
        institution: "University of Las Palmas de Gran Canaria",
        period: "2019 - 2021",
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
        name: "Annual Developers Conference",
        organization: "Global Tech",
        date: "June 2023",
        description: "Attended as a participant, joining talks on the latest trends in software development, serverless, and microservices architecture."
      },
      {
        name: "Social Innovation Hackathon",
        organization: "Code for Good",
        date: "March 2022",
        description: "Part of a team that developed an application prototype to connect volunteers with local NGOs, winning second place."
      }
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
