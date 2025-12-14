import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/contexts/language-context';
import { ErrorBoundary } from '@/components/error-boundary';

export const metadata: Metadata = {
  title: 'Vicente Gabriel Gómez Medina | .NET Backend Developer',
  description: 'Backend developer specialized in .NET, C#, and SQL Server. Building clean, scalable APIs and microservices. Passionate about software architecture, AI, and geopolitics.',
  metadataBase: new URL('https://vicentegm.dev/'),
  keywords: [
    'Vicente Gabriel Gómez Medina',
    '.NET Developer',
    'Backend Developer',
    'C#',
    'SQL Server',
    'Angular',
    'REST APIs',
    'Microservices',
    'Clean Architecture',
    'Software Engineer',
    'Spain',
    'Portfolio'
  ],
  authors: [{ name: 'Vicente Gabriel Gómez Medina', url: 'https://vicentegm.dev' }],
  creator: 'Vicente Gabriel Gómez Medina',
  publisher: 'Vicente Gabriel Gómez Medina',
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
  alternates: {
    canonical: 'https://vicentegm.dev',
    languages: {
      'en': 'https://vicentegm.dev',
      'es': 'https://vicentegm.dev',
    },
  },
  openGraph: {
    title: 'Vicente Gabriel Gómez Medina | .NET Backend Developer',
    description: 'Backend developer specialized in .NET, C#, and SQL Server. Building clean, scalable APIs and microservices. Passionate about software architecture, AI, and geopolitics.',
    url: 'https://vicentegm.dev/',
    siteName: 'Vicente GM Portfolio',
    images: [
      {
        url: '/images/ed083ba154de.webp',
        width: 1200,
        height: 630,
        alt: 'Vicente Gabriel Gómez Medina - .NET Backend Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vicente GM | .NET Backend Developer',
    description: 'Backend developer specialized in .NET, C#, SQL Server, Angular. Building scalable software solutions.',
    images: ['/images/ed083ba154de.webp'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
  category: 'technology',
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
        <link rel="preload" href="/images/ed083ba154de.webp" as="image" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1FRNENPSXP"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1FRNENPSXP');
            `,
          }}
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <ErrorBoundary>
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
        </ErrorBoundary>
      </body>
    </html>
  );
}
