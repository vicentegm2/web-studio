import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import '../globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/contexts/language-context';
import { ErrorBoundary } from '@/components/error-boundary';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const baseUrl = 'https://vicentegm.dev';

  return {
    title: 'Vicente Gabriel Gómez Medina | .NET Backend Developer',
    description: 'Backend developer specialized in .NET, C#, and SQL Server. Building clean, scalable APIs and microservices. Passionate about software architecture, AI, and geopolitics.',
    metadataBase: new URL(baseUrl),
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
    authors: [{ name: 'Vicente Gabriel Gómez Medina', url: baseUrl }],
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
      canonical: `${baseUrl}/${lang}`,
      languages: {
        'en': `${baseUrl}/en`,
        'es': `${baseUrl}/es`,
      },
    },
    openGraph: {
      title: 'Vicente Gabriel Gómez Medina | .NET Backend Developer',
      description: 'Backend developer specialized in .NET, C#, and SQL Server. Building clean, scalable APIs and microservices. Passionate about software architecture, AI, and geopolitics.',
      url: `${baseUrl}/${lang}`,
      siteName: 'Vicente GM Portfolio',
      images: [
        {
          url: '/images/ed083ba154de.webp',
          width: 1200,
          height: 630,
          alt: 'Vicente Gabriel Gómez Medina - .NET Backend Developer',
        },
      ],
      locale: lang === 'es' ? 'es_ES' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Vicente GM | .NET Backend Developer',
      description: 'Backend developer specialized in .NET, C#, SQL Server, Angular. Building scalable software solutions.',
      images: ['/images/ed083ba154de.webp'],
    },
    verification: {
      google: 'google-site-verification-code', // Needs to be updated with real code
    },
    category: 'technology',
  };
}

// Generate static params for static export compatibility if needed
export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const language = (lang === 'es' ? 'es' : 'en') as 'es' | 'en';

  return (
    <html lang={language} className="scroll-smooth" suppressHydrationWarning>
      <head>
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
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-body antialiased bg-background text-foreground`}>
        <div className="bg-noise" />
        <ErrorBoundary>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <LanguageProvider initialLang={language}>
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                  {children}
                </main>
                <Footer />
              </div>
              <Toaster />
            </LanguageProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
