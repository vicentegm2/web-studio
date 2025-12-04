import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/contexts/language-context';

export const metadata: Metadata = {
  title: 'Vicente Gabriel Gómez Medina | .NET Backend Developer',
  description: 'Portfolio of Vicente Gabriel Gómez Medina, a .NET Backend Developer specializing in robust and scalable solutions.',
  metadataBase: new URL('https://vicentegm.dev/'),
  keywords: ['Vicente Gabriel Gómez Medina', '.NET', 'Backend', 'C#', 'SQL', 'APIs', 'Microservices', 'Portfolio'],
  authors: [{ name: 'Vicente Gabriel Gómez Medina' }],
  creator: 'Vicente Gabriel Gómez Medina',
  openGraph: {
    title: 'Vicente Gabriel Gómez Medina | .NET Backend Developer',
    description: 'Portfolio of Vicente Gabriel Gómez Medina, a .NET Backend Developer specializing in robust and scalable solutions.',
    url: 'https://vicentegm.dev/',
    siteName: 'Vicente GM Portfolio',
    images: [
      {
        url: '/images/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Vicente Gabriel Gómez Medina profile',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vicente GM | .NET Backend Developer',
    description: 'Portfolio of Vicente GM: .NET, C#, SQL, APIs',
    images: ['/images/profile.jpg'],
    creator: '@vicente_gm',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
        <link rel="preload" href="/images/profile.jpg" as="image" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
