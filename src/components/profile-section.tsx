import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from 'next/link';

export function ProfileSection() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture');

  return (
    <section id="profile" aria-labelledby="profile-heading" className="py-12 sm:py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center gap-10">
          <Avatar className="h-36 w-36 sm:h-48 sm:w-48 border-4 border-primary/20 shadow-lg">
            {profileImage && (
              <AvatarImage asChild src={profileImage.imageUrl}>
                  <Image
                      src={profileImage.imageUrl}
                      alt="Fotografía profesional de Vicente Gabriel Gómez Medina, Desarrollador Backend .NET."
                      width={192}
                      height={192}
                      data-ai-hint={profileImage.imageHint}
                      className="object-cover"
                      priority
                  />
              </AvatarImage>
            )}
            <AvatarFallback className="text-4xl font-headline">VG</AvatarFallback>
          </Avatar>
          <div className="text-center sm:text-left flex-1">
            <h1 id="profile-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold font-headline text-primary leading-tight">
              Construyendo el motor de aplicaciones complejas
            </h1>
            <p className="mt-4 text-xl sm:text-2xl font-medium text-accent font-headline">
              Desarrollador Backend .NET & Arquitecto de Software
            </p>
            <p className="mt-6 max-w-2xl text-foreground/80 leading-relaxed">
              Apasionado por transformar ideas en soluciones de software robustas y escalables. Mi enfoque se centra en la arquitectura limpia, el rendimiento y la creación de APIs que impulsan experiencias de usuario excepcionales.
            </p>
            <div className="mt-8 flex gap-4 justify-center sm:justify-start">
              <Button size="lg" asChild>
                 <a href="#projects">Ver Proyectos</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                 <a href="/cv.pdf" download="VicenteGomez-CV.pdf">
                   <Download className="mr-2 h-5 w-5" />
                   Descargar CV
                 </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
