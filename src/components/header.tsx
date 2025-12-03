'use client';
import { Code, Download, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export function Header() {
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/vicentegabrielgomezmedina' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/vicentegabrielgomezmedina' },
    { name: 'Email', icon: Mail, url: 'mailto:vicentegabrielgomezmedina@gmail.com' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-auto flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline">VGGM | Backend .NET Developer</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#projects" className="transition-colors hover:text-primary">Proyectos</Link>
          <Link href="#experience" className="transition-colors hover:text-primary">Experiencia</Link>
          <Link href="#tech-stack" className="transition-colors hover:text-primary">Tecnologías</Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1">
                Más
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="#education">Formación</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#events">Eventos</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#volunteering">Voluntariado</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                size="icon"
                asChild
                className="hidden sm:inline-flex"
                aria-label={`Visit my ${link.name}`}
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <link.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
             <Button asChild>
                <a href="/cv.pdf" download="VicenteGomez-CV.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Descargar CV
                </a>
              </Button>
        </div>
      </div>
    </header>
  );
}
