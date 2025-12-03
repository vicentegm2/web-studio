'use client';
import { Code, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Header() {
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/johndoe' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/johndoe' },
    { name: 'Email', icon: Mail, url: 'mailto:john.doe@example.com' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-auto flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline">John Doe</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#experience" className="transition-colors hover:text-primary">Experience</Link>
          <Link href="#education" className="transition-colors hover:text-primary">Education</Link>
          <Link href="#events" className="transition-colors hover:text-primary">Events</Link>
          <Link href="#tech-stack" className="transition-colors hover:text-primary">Tech Stack</Link>
          <Link href="#volunteering" className="transition-colors hover:text-primary">Volunteering</Link>
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
                <a href="/cv.pdf" download="JohnDoe-CV.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
        </div>
      </div>
    </header>
  );
}