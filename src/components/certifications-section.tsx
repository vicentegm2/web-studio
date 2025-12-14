'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";
import { useLanguage } from "@/contexts/language-context";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { trackCertificate } from "@/lib/analytics";

export function CertificationsSection() {
  const { t } = useLanguage();
  
  const certifications = [
    {
      title: "Introducción a Git y GitHub",
      issuer: "Google",
      date: "Sep 2025",
      credentialId: "T4383QKK7UTL",
      skills: ["Revisión de código", "Control de versiones", "Git", "GitHub"],
      url: "https://www.coursera.org/account/accomplishments/verify/T4383QKK7UTL",
      imageUrl: null
    },
    {
      title: "Introducción a GitHub Copilot",
      issuer: "Microsoft",
      date: "Sep 2025",
      credentialId: "U4Y0N4C3F9BZ",
      skills: ["GitHub Copilot", "GitHub"],
      url: "https://www.coursera.org/account/accomplishments/verify/U4Y0N4C3F9BZ",
      imageUrl: null
    },
    {
      title: "SQL para ciencia de los datos",
      issuer: "University of California, Davis",
      date: "Jul 2025",
      credentialId: "ENLQ6J4KF3DI",
      skills: ["Ciencia de datos", "SQL", "Diseño de bases de datos"],
      url: "https://www.coursera.org/account/accomplishments/verify/ENLQ6J4KF3DI",
      imageUrl: null
    },
    {
      title: "Fundamentos profesionales en ciberseguridad",
      issuer: "Microsoft y LinkedIn",
      date: "Nov 2024",
      credentialId: null,
      skills: ["Gestión de amenazas y vulnerabilidades", "Seguridad de la información"],
      url: "https://www.linkedin.com/learning/certificates/d5a2676d072342cc169dd16f31f43fdaacd7f90a5caa58d33a85a3ec2b5d1c0c",
      imageUrl: null
    },
    {
      title: "Ve a lo seguro: Gestiona los riesgos de seguridad",
      issuer: "Google",
      date: "Nov 2024",
      credentialId: "QB6BRQKQTIR1",
      skills: ["Gestión de riesgos de TI"],
      url: "https://www.coursera.org/account/accomplishments/verify/QB6BRQKQTIR1",
      imageUrl: null
    },
    {
      title: "Fundamentos de la ciberseguridad",
      issuer: "Google",
      date: "Oct 2024",
      credentialId: "7IR0C6VBMCLD",
      skills: ["Gestión de riesgos de TI"],
      url: "https://www.coursera.org/account/accomplishments/verify/7IR0C6VBMCLD",
      imageUrl: null
    },
    {
      title: "VI Curso de Experto en Seguridad y Defensa",
      issuer: "Universidad Nacional de Educación a Distancia (UNED)",
      date: "Oct 2024 - Feb 2025",
      credentialId: null,
      skills: ["Cultura de defensa", "Geopolítica", "Relaciones internacionales", "Amenazas híbridas"],
      url: null,
      imageUrl: null
    },
    {
      title: "Desarrollo con IA",
      issuer: "BIG school",
      date: null,
      credentialId: null,
      skills: ["Inteligencia artificial", "Desarrollo de software", "Prompts de IA"],
      url: "https://drive.google.com/file/d/1kSK1c0PgE6K891fho10SGqCOIWzVO4EA/view",
      imageUrl: "/images/bbb522d7992a.webp"
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
          {certifications.map((cert, index) => (
            <CarouselItem key={cert.title} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="flex flex-col h-full overflow-hidden hover-lift hover-glow smooth-transition group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                {cert.imageUrl && (
                  <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                    <Image
                      src={cert.imageUrl}
                      alt={cert.title}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                      draggable="false"
                    />
                  </div>
                )}
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full mt-1 flex-shrink-0 transition-colors duration-300 group-hover:bg-primary/20">
                    <Award className="w-6 h-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
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
                      <Badge key={skill} variant="secondary" className="text-xs hover:scale-105 transition-transform duration-200">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center bg-muted/50 p-4">
                  <span className="text-xs text-muted-foreground truncate flex-1 mr-2">
                    {cert.credentialId ? `${t.credentialId}: ${cert.credentialId}` : t.noId}
                  </span>
                  {cert.url && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      asChild 
                      className="flex-shrink-0 hover-scale"
                      onClick={() => trackCertificate('click', cert.title)}
                    >
                      <a href={cert.url} target="_blank" rel="noopener noreferrer" aria-label={`Show credential for ${cert.title}`}>
                        {t.showCredential}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
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
