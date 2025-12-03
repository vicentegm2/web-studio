import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const professionalProfile = {
  name: "John Doe",
  jobTitle: "Software Developer / Backend .NET Developer",
  url: "https://your-domain.com", // Replace with your actual domain
  email: "john.doe@example.com", // Replace with your email
  linkedIn: "https://www.linkedin.com/in/johndoe", // Replace with your LinkedIn
  github: "https://github.com/johndoe", // Replace with your GitHub
  summary: "A passionate and experienced software developer specializing in backend development with .NET technologies. Proven ability to design, develop, and deploy robust and scalable applications."
};

export const metadata: Metadata = {
  title: {
    template: '%s | John Doe - Software Developer',
    default: 'John Doe - Software Developer',
  },
  description: professionalProfile.summary,
  openGraph: {
    title: `${professionalProfile.name} - ${professionalProfile.jobTitle}`,
    description: professionalProfile.summary,
    url: professionalProfile.url,
    siteName: `${professionalProfile.name}'s Portfolio`,
    images: [
      {
        url: `${professionalProfile.url}/og-image.png`, // Replace with your OG image path
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${professionalProfile.name} - ${professionalProfile.jobTitle}`,
    description: professionalProfile.summary,
    creator: '@yourtwitterhandle', // Replace with your Twitter handle
    images: [`${professionalProfile.url}/twitter-image.png`], // Replace with your Twitter image path
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
  keywords: ["Software Developer", ".NET", "Backend", "React", "Portfolio", "John Doe"],
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
    sameAs: [
      professionalProfile.linkedIn,
      professionalProfile.github,
    ],
    jobTitle: professionalProfile.jobTitle,
    email: professionalProfile.email,
    description: professionalProfile.summary,
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
