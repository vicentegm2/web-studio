'use client';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('Footer');
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/vicentegabrielgomezmedina' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/vicentegabrielgomezmedina' },
    { name: 'Email', icon: Mail, url: 'mailto:vicentegabrielgomezmedina@gmail.com' },
  ];

  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Vicente Gabriel Gómez Medina. {t('rights')}
          </p>
          <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                size="icon"
                asChild
                aria-label={`Visit my ${link.name}`}
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <link.icon className="w-5 h-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
