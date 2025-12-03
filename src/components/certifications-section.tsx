'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";

export function CertificationsSection() {
  const certifications = [
    {
      title: "Introducción a Git y GitHub",
      issuer: "Google",
      date: "Issued Sep 2025",
      credentialId: "T4383QKK7UTL",
      skills: ["Revisión de código", "Control de versiones", "Git", "GitHub"],
      url: "#"
    },
    {
      title: "Introducción a GitHub Copilot",
      issuer: "Microsoft",
      date: "Issued Sep 2025",
      credentialId: "U4Y0N4C3F9BZ",
      skills: ["GitHub Copilot", "GitHub"],
      url: "#"
    },
    {
      title: "SQL para ciencia de los datos",
      issuer: "University of California, Davis",
      date: "Issued Jul 2025",
      credentialId: "ENLQ6J4KF3DIC",
      skills: ["Ciencia de datos", "SQL", "Diseño de bases de datos"],
      url: "#"
    },
    {
      title: "Fundamentos profesionales en ciberseguridad",
      issuer: "Microsoft y LinkedIn",
      date: "Issued Nov 2024",
      credentialId: null,
      skills: ["Gestión de amenazas y vulnerabilidades", "Seguridad de la información"],
      url: "#"
    },
    {
      title: "Ve a lo seguro: Gestiona los riesgos de seguridad",
      issuer: "Google",
      date: "Issued Nov 2024",
      credentialId: "QB6BRQKQTIR1",
      skills: ["Gestión de riesgos de TI"],
      url: "#"
    },
    {
      title: "Fundamentos de la ciberseguridad",
      issuer: "Google",
      date: "Issued Oct 2024",
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
    <section id="certifications" aria-labelledby="certifications-heading">
      <h2 id="certifications-heading" className="text-3xl font-headline font-bold text-center mb-12 text-primary">
        Licenses & Certifications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert) => (
          <Card key={cert.title} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl dark:hover:shadow-primary/20">
            <CardHeader className="flex flex-row items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full mt-1">
                    <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-grow">
                    <CardTitle className="font-headline text-lg">{cert.title}</CardTitle>
                    <CardDescription className="text-sm mt-1">
                        {cert.issuer} {cert.date && `· ${cert.date}`}
                    </CardDescription>
                </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center bg-muted/50 p-4">
                <span className="text-xs text-muted-foreground truncate">
                    {cert.credentialId ? `ID: ${cert.credentialId}` : 'No ID'}
                </span>
                <Button variant="ghost" size="sm" asChild>
                    <a href={cert.url} target="_blank" rel="noopener noreferrer" aria-label={`Show credential for ${cert.title}`}>
                        Show credential
                        <ExternalLink className="ml-2" />
                    </a>
                </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
