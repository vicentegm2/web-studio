'use client';
import { Header } from '@/components/header';
import { ProfileSection } from '@/components/profile-section';
import { ProjectsSection } from '@/components/projects-section';
import { TechStackSection } from '@/components/tech-stack-section';
import { TimelineSection } from '@/components/timeline-section';
import { Footer } from '@/components/footer';
import { Separator } from '@/components/ui/separator';
import { ContactSection } from '@/components/contact-section';
import { CertificationsSection } from '@/components/certifications-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* JSON-LD Person schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Vicente Gabriel Gómez Medina',
            jobTitle: '.NET Backend Developer',
            url: 'https://vicentegm.dev',
            image: 'https://vicentegm.dev/images/profile.jpg',
            sameAs: [
              'https://github.com/vicentegm2',
              'https://www.linkedin.com/in/vicentegabrielgomezmedina',
            ],
          }),
        }}
      />
      <Header />
      <main className="flex-grow">
        <ProfileSection />
        <div className="container mx-auto px-6 py-12 md:py-20">
          <div className="max-w-5xl mx-auto space-y-20 md:space-y-28">
            <TechStackSection />
            <Separator />
            <TimelineSection />
            <Separator />
            <ProjectsSection />
            <Separator />
            <CertificationsSection />
            <Separator />
            <ContactSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
