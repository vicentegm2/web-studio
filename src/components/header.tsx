'use client';
import { Code, Download, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Tecnologías', href: '#tech-stack' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Proyectos', href: '#projects' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-auto flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline">VGGM</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
             <Link key={link.name} href={link.href} className="transition-colors hover:text-primary">{link.name}</Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
           <div className="hidden md:flex gap-2">
            <Button asChild>
              <a href="/cv.pdf" download="VicenteGomez-CV.pdf">
                <Download className="mr-2 h-4 w-4" />
                Descargar CV
              </a>
            </Button>
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-6 text-lg font-medium mt-10">
                {navLinks.map((link) => (
                   <Link 
                     key={link.name} 
                     href={link.href} 
                     className="transition-colors hover:text-primary"
                     onClick={() => setIsOpen(false)}
                   >
                     {link.name}
                   </Link>
                ))}
              </nav>
              <div className="mt-8 flex flex-col gap-4">
                 <Button asChild>
                    <a href="/cv.pdf" download="VicenteGomez-CV.pdf">
                      <Download className="mr-2 h-4 w-4" />
                      Descargar CV
                    </a>
                  </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
