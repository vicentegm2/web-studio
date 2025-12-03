'use client';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/vicentegabrielgomezmedina', ariaLabel: "Visit my GitHub" },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/vicentegabrielgomezmedina', ariaLabel: "Visit my LinkedIn" },
    { name: 'Email', icon: Mail, url: 'mailto:vicentegabrielgomezmedina@gmail.com', ariaLabel: "Send me an email" },
  ];

  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vicente Gabriel Gómez Medina. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
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
    </footer>
  );
}
