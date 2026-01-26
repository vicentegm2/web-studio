
import { ProfileSection } from '@/components/profile-section';
import { Separator } from '@/components/ui/separator';
import { ContactSection } from '@/components/contact-section';
import { TimelineSection } from '@/components/timeline-section';
import { TechStackSection } from '@/components/tech-stack-section';

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20">
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
            image: 'https://vicentegm.dev/images/ed083ba154de.webp',
            sameAs: [
              'https://github.com/vicentegm2',
              'https://www.linkedin.com/in/vicentegabrielgomezmedina',
            ],
          }),
        }}
      />
      <div className="space-y-20 md:space-y-28">
        <ProfileSection />
        <Separator />
        <TechStackSection />
        <Separator />
        <TimelineSection />
        <Separator />
        <ContactSection />
      </div>
    </div>
  );
}
