import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experienceData = [
  {
    role: "Backend .NET Developer",
    company: "Tech Solutions Inc.",
    period: "Jan 2021 - Present",
    description: "Developed and maintained scalable backend services for enterprise clients using .NET Core, C#, and Azure. Implemented RESTful APIs and integrated with various third-party services. Collaborated in an Agile team to deliver high-quality software.",
  },
  {
    role: "Junior Software Developer",
    company: "Innovatech Ltd.",
    period: "Jun 2019 - Dec 2020",
    description: "Contributed to the development of web applications using ASP.NET MVC and SQL Server. Assisted in bug fixing and improving application performance. Gained experience in full-stack development and software development lifecycle.",
  },
  {
    role: "Founder & Lead Developer",
    company: "Project Showcase",
    period: "2018 - 2019",
    description: "Designed and built a full-stack project management tool as a personal portfolio piece. Utilized React for the frontend and Node.js with Express for the backend, showcasing skills in modern web technologies.",
  },
];

export function ExperienceTimeline() {
  return (
    <section id="experience" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="text-3xl font-headline font-bold text-center mb-12 text-primary">
        Professional Journey
      </h2>
      <div className="relative">
        <div className="absolute left-1/2 -ml-px w-0.5 h-full bg-border" aria-hidden="true"></div>
        {experienceData.map((item, index) => (
          <div key={index} className="relative mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-primary" />
              </div>
            </div>
            <Card className={`w-full max-w-md mx-auto transition-shadow duration-300 hover:shadow-xl ${index % 2 === 0 ? 'sm:mr-auto sm:ml-0' : 'sm:ml-auto sm:mr-0'}`}>
              <CardHeader>
                <CardTitle className="font-headline text-xl">{item.role}</CardTitle>
                <div className="text-sm text-muted-foreground">
                  <p className="font-semibold text-accent">{item.company}</p>
                  <p>{item.period}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/80">{item.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
