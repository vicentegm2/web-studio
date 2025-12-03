import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const professionalProfile = {
  name: "John Doe",
  jobTitle: "Backend .NET Developer",
  pkp: "Desarrollador Backend .NET", // Primary Keyword
  url: "https://your-domain.com", // Replace with your actual domain
  email: "john.doe@example.com", // Replace with your email
  linkedIn: "https://www.linkedin.com/in/johndoe", // Replace with your LinkedIn
  github: "https://github.com/johndoe", // Replace with your GitHub
  summary: "Desarrollador Backend .NET con experiencia en la creación de aplicaciones robustas y escalables. Apasionado por la arquitectura de software y la optimización del rendimiento para ofrecer soluciones eficientes y de alta calidad."
};

export const metadata: Metadata = {
  title: {
    template: `%s | ${professionalProfile.name} - ${professionalProfile.pkp}`,
    default: `${professionalProfile.name} | ${professionalProfile.pkp} & Software Architect`,
  },
  description: `Portafolio de ${professionalProfile.name}, ${professionalProfile.pkp}. Experto en C#, .NET Core, Azure y arquitecturas de microservicios. Contáctame para tu próximo proyecto.`,
  openGraph: {
    title: `${professionalProfile.name} - ${professionalProfile.jobTitle}`,
    description: professionalProfile.summary,
    url: professionalProfile.url,
    siteName: `${professionalProfile.name}'s Portfolio`,
    images: [
      {
        url: `https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&h=630&fit=crop`,
        width: 1200,
        height: 630,
        alt: 'Professional portfolio image for John Doe, Backend Developer'
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${professionalProfile.name} - ${professionalProfile.pkp}`,
    description: `Portafolio de un ${professionalProfile.pkp} especializado en soluciones de alto rendimiento.`,
    creator: '@yourtwitterhandle', // Replace with your Twitter handle
    images: [`https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&h=600&fit=crop`], // Replace with your Twitter image path
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  applicationName: "Skill Showcase",
  keywords: ["Desarrollador Backend .NET", ".NET", "C#", "Azure", "Microservicios", "SQL", "API REST", "Portfolio", "John Doe"],
  authors: [{ name: professionalProfile.name, url: professionalProfile.url }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: professionalProfile.name,
    url: professionalProfile.url,
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
    sameAs: [
      professionalProfile.linkedIn,
      professionalProfile.github,
    ],
    jobTitle: professionalProfile.jobTitle,
    email: professionalProfile.email,
    description: professionalProfile.summary,
    knowsAbout: ["Backend Development", ".NET", "C#", "Azure", "Software Architecture"]
  };

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
