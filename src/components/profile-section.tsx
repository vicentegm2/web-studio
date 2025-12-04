'use client';
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin } from "lucide-react";
import { Badge } from "./ui/badge";
import { useLanguage } from "@/contexts/language-context";

export function ProfileSection() {
  const { t } = useLanguage();
  
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/vicentegm2', ariaLabel: "Visit my GitHub" },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/vicentegabrielgomezmedina', ariaLabel: "Visit my LinkedIn" },
  ];

  const softSkills = [
    t.softSkills.teamwork,
    t.softSkills.publicspeaking,
    t.softSkills.communication,
    t.softSkills.continuousLearning
  ];

  return (
    <section id="profile" aria-labelledby="profile-heading" className="py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center gap-10">
          <Avatar className="h-36 w-36 sm:h-48 sm:w-48 border-4 border-primary/20 shadow-lg">
            <AvatarImage asChild src="/images/profile.jpg">
                <Image
                    src="/images/profile.jpg"
                    alt="Vicente Gabriel Gómez Medina"
                    width={192}
                    height={192}
                    className="object-cover"
                    priority
                />
            </AvatarImage>
            <AvatarFallback className="text-4xl font-headline">VG</AvatarFallback>
          </Avatar>
          <div className="text-center sm:text-left flex-1">
            <h2 className="text-lg font-medium text-accent font-headline tracking-wider">{t.hello}</h2>
            <h1 id="profile-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold font-headline text-primary leading-tight mt-2">
              {t.jobTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-foreground/80 leading-relaxed">
              {t.profileDescription1}
            </p>
            <p className="mt-4 max-w-2xl text-foreground/80 leading-relaxed">
              {t.profileDescription2}
            </p>

            <div className="mt-6 flex flex-wrap gap-2 justify-center sm:justify-start">
              {softSkills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm">{skill}</Badge>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4 justify-center sm:justify-start">
              <Button size="lg" asChild>
                 <a href="/cv.pdf" download="VicenteGomez-CV.pdf">
                   <Download className="mr-2 h-5 w-5" />
                   {t.downloadCV}
                 </a>
              </Button>
               <div className="flex items-center space-x-2">
                {socialLinks.map((link) => (
                  <Button
                    key={link.name}
                    variant="outline"
                    size="icon"
                    asChild
                    aria-label={link.ariaLabel}
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <link.icon className="w-5 h-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
