'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { useLanguage } from "@/contexts/language-context";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CertificationsSection() {
  const { t } = useLanguage();
  
  const certifications = [
    {
      title: "Introducción a Git y GitHub",
      issuer: "Google",
      date: "Sep 2025",
      credentialId: "T4383QKK7UTL",
      skills: ["Revisión de código", "Control de versiones", "Git", "GitHub"],
      url: "#"
    },
    {
      title: "Introducción a GitHub Copilot",
      issuer: "Microsoft",
      date: "Sep 2025",
      credentialId: "U4Y0N4C3F9BZ",
      skills: ["GitHub Copilot", "GitHub"],
      url: "#"
    },
    {
      title: "SQL para ciencia de los datos",
      issuer: "University of California, Davis",
      date: "Jul 2025",
      credentialId: "ENLQ6J4KF3DIC",
      skills: ["Ciencia de datos", "SQL", "Diseño de bases de datos"],
      url: "#"
    },
    {
      title: "Fundamentos profesionales en ciberseguridad",
      issuer: "Microsoft y LinkedIn",
      date: "Nov 2024",
      credentialId: null,
      skills: ["Gestión de amenazas y vulnerabilidades", "Seguridad de la información"],
      url: "#"
    },
    {
      title: "Ve a lo seguro: Gestiona los riesgos de seguridad",
      issuer: "Google",
      date: "Nov 2024",
      credentialId: "QB6BRQKQTIR1",
      skills: ["Gestión de riesgos de TI"],
      url: "#"
    },
    {
      title: "Fundamentos de la ciberseguridad",
      issuer: "Google",
      date: "Oct 2024",
      credentialId: "7IR0C6VBMCLD",
      skills: ["Gestión de riesgos de TI"],
      url: "#"
    },
    {
      title: "Desarrollo con IA",
      issuer: "BIG school",
      date: null,
      credentialId: null,
      skills: ["Inteligencia artificial", "Desarrollo de software", "Prompts de IA"],
      url: "#"
    },
  ];

  return (
    <section id="certifications" aria-labelledby="certifications-heading" className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 id="certifications-heading" className="text-3xl font-headline font-bold text-primary">
          {t.certificationsTitle}
        </h2>
        <p className="text-muted-foreground mt-2">
          {certifications.length} {t.certificationsCount}
        </p>
      </div>
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {certifications.map((cert) => (
            <CarouselItem key={cert.title} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl dark:hover:shadow-primary/20 hover:scale-[1.02]">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full mt-1 flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <CardTitle className="font-headline text-lg line-clamp-2">{cert.title}</CardTitle>
                    <CardDescription className="text-sm mt-1">
                      {cert.issuer} {cert.date && `· ${t.issued} ${cert.date}`}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center bg-muted/50 p-4">
                  <span className="text-xs text-muted-foreground truncate flex-1 mr-2">
                    {cert.credentialId ? `${t.credentialId}: ${cert.credentialId}` : t.noId}
                  </span>
                  <Button variant="ghost" size="sm" asChild className="flex-shrink-0">
                    <a href={cert.url} target="_blank" rel="noopener noreferrer" aria-label={`Show credential for ${cert.title}`}>
                      {t.showCredential}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-2 mt-8">
          <CarouselPrevious className="static translate-y-0" />
          <CarouselNext className="static translate-y-0" />
        </div>
      </Carousel>
    </section>
  );
}
