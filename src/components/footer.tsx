'use client';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';

export function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/vicentegm2', ariaLabel: "Visit my GitHub" },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/vicentegabrielgomezmedina', ariaLabel: "Visit my LinkedIn" },

    { name: 'Email', icon: Mail, url: 'mailto:vicentegabrielgomezmedina@gmail.com', ariaLabel: "Send me an email" },
  ];

  return (
    <footer className="bg-secondary border-t">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-sm text-muted-foreground">
              © 2024-{new Date().getFullYear()} Vicente Gabriel Gómez Medina
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {t.allRightsReserved} • {t.lastUpdate}: {t.currentUpdate}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                size="icon"
                asChild
                aria-label={link.ariaLabel}
                className="hover:text-primary transition-colors"
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
