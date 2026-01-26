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
import { motion } from "framer-motion";

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
    <section id="certifications" aria-labelledby="certifications-heading" className="max-w-7xl mx-auto py-12">
      <div className="text-center mb-16">
        <h2 id="certifications-heading" className="text-4xl font-headline font-bold text-foreground mb-4">
          {t.certificationsTitle}
        </h2>
        <p className="text-lg text-muted-foreground">
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
        <CarouselContent className="-ml-6 py-6"> {/* Added vertical padding to prevent clipping on hover */}
          {certifications.map((cert, index) => (
            <CarouselItem key={cert.title} className="pl-6 md:basis-1/2 lg:basis-1/3">
              <div className="h-full transform transition-transform hover:-translate-y-2 duration-300"> {/* Replaced motion.div with CSS transition to avoid potential conflict, kept simple lift */}
                <Card className="flex flex-col h-full overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-xl dark:shadow-none dark:hover:shadow-primary/10">
                  {cert.imageUrl && (
                    <div className="relative h-48 w-full overflow-hidden bg-muted/30 p-6 flex items-center justify-center border-b border-border/50">
                      <Image
                        src={cert.imageUrl}
                        alt={cert.title}
                        fill
                        className="object-contain drop-shadow-sm transition-transform duration-500 hover:scale-105"
                        draggable="false"
                      />
                    </div>
                  )}
                  <CardHeader className="flex flex-row items-start gap-4 pb-2">
                    <div className="bg-primary/10 p-2.5 rounded-xl flex-shrink-0">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-grow min-w-0">
                      <CardTitle className="font-headline text-lg font-semibold leading-tight line-clamp-2 mb-1.5 text-card-foreground">{cert.title}</CardTitle>
                      <CardDescription className="text-sm text-foreground/80 font-medium"> {/* Increased contrast */}
                        {cert.issuer}
                      </CardDescription>
                      <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="text-[10px] px-2 py-0.5 border-border bg-secondary/30 text-secondary-foreground hover:bg-secondary/50 font-medium"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center p-5 pt-0 mt-auto border-t border-border/50 bg-muted/10">
                    <div className="text-[10px] text-muted-foreground truncate flex-1 mr-4 pt-4 font-mono">
                      {cert.credentialId ? <span className="opacity-90">{t.credentialId}: {cert.credentialId}</span> : <span className="opacity-70">{t.noId}</span>}
                    </div>
                    {cert.url && (
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="mt-4 hover:bg-primary/10 hover:text-primary transition-colors h-8 px-3 text-xs font-medium"
                        onClick={() => trackCertificate('click', cert.title)}
                      >
                        <a href={cert.url} target="_blank" rel="noopener noreferrer" aria-label={`Show credential for ${cert.title}`}>
                          {t.showCredential}
                          <ExternalLink className="ml-1.5 h-3 w-3" />
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-4 mt-8">
          <CarouselPrevious className="static translate-y-0 h-10 w-10 border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all" />
          <CarouselNext className="static translate-y-0 h-10 w-10 border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all" />
        </div>
      </Carousel>
    </section>
  );
}
