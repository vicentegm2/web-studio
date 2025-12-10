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
import { SettingsMenu } from './settings-menu';
import { useLanguage } from '@/contexts/language-context';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { name: t.technologies, href: '#tech-stack' },
    { name: t.experience, href: '#experience' },
    { name: t.projects, href: '#projects' },
    { name: t.certifications, href: '#certifications' },
    { name: t.newsletters, href: '#newsletters' },
    { name: t.contact, href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Code className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg hidden sm:inline">VGGM</span>
          </Link>
          
          {/* Desktop Navigation - centered */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
               <a key={link.name} href={link.href} className="transition-colors hover:text-primary whitespace-nowrap">{link.name}</a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <Button size="sm" asChild>
              <a 
                href={t.language === 'es' ? '/Currículum Vitae CV - Vicente Gabriel Gómez Medina.pdf' : '/Currículum Vitae CV - Vicente Gabriel Gómez Medina_english.pdf'} 
                download={t.language === 'es' ? 'VicenteGomez-CV-ES.pdf' : 'VicenteGomez-CV-EN.pdf'}
              >
                <Download className="mr-2 h-4 w-4" />
                {t.downloadCV}
              </a>
            </Button>
            <SettingsMenu />
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-2">
            <SettingsMenu />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">{t.openMenu}</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 text-lg font-medium mt-10">
                  {navLinks.map((link) => (
                     <a
                       key={link.name}
                       href={link.href}
                       className="transition-colors hover:text-primary"
                       onClick={() => setIsOpen(false)}
                     >
                       {link.name}
                     </a>
                  ))}
                </nav>
                <div className="mt-8 flex flex-col gap-4">
                   <Button asChild>
                      <a 
                        href={t.language === 'es' ? '/Currículum Vitae CV - Vicente Gabriel Gómez Medina.pdf' : '/Currículum Vitae CV - Vicente Gabriel Gómez Medina_english.pdf'} 
                        download={t.language === 'es' ? 'VicenteGomez-CV-ES.pdf' : 'VicenteGomez-CV-EN.pdf'}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        {t.downloadCV}
                      </a>
                    </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
