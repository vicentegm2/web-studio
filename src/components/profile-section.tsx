'use client';
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, TrendingUp } from "lucide-react";
import { Badge } from "./ui/badge";
import { useLanguage } from "@/contexts/language-context";
 
export function ProfileSection() {
  const { t } = useLanguage();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/vicentegm2',
      icon: Github,
      ariaLabel: 'Open GitHub profile of Vicente Gabriel Gómez Medina'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/vicentegabrielgomezmedina',
      icon: Linkedin,
      ariaLabel: 'Open LinkedIn profile of Vicente Gabriel Gómez Medina'
    },
    {
      name: 'eToro',
      url: 'https://www.etoro.com/people/vicentegm2',
      icon: TrendingUp,
      ariaLabel: 'Open eToro profile of Vicente Gabriel Gómez Medina'
    },
  ];

  const softSkills = [
    t.softSkills.teamwork,
    t.softSkills.publicspeaking,
    t.softSkills.communication,
    t.softSkills.continuousLearning,
  ];

  return (
    <section id="profile" aria-labelledby="profile-heading" className="py-16 sm:py-24 animate-fade-in">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center gap-10">
          <Avatar className="h-36 w-36 sm:h-48 sm:w-48 border-4 border-primary/20 shadow-lg animate-scale-in">
            <AvatarImage asChild src="/images/ed083ba154de.webp">
              <Image
                    src="/images/ed083ba154de.webp"
                    alt="Vicente Gabriel Gómez Medina"
                    width={192}
                    height={192}
                    className="object-cover"
                    priority
                    draggable="false"
                />
            </AvatarImage>
            <AvatarFallback className="text-4xl font-headline">VG</AvatarFallback>
          </Avatar>
          <div className="text-center sm:text-left flex-1 animate-slide-in-right">
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
    </section>
  );
}
