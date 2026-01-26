import { ProfileSection } from '@/components/profile-section';
import { Separator } from '@/components/ui/separator';
import { ContactSection } from '@/components/contact-section';
import { TimelineSectionWrapper } from '@/components/timeline-section-wrapper';
import { TechStackSection } from '@/components/tech-stack-section';
import { sanityFetch } from '@/sanity/lib/client';
import { PROFILE_QUERY, SETTINGS_QUERY } from '@/sanity/lib/queries';

export default async function Home() {
  // Fetch profile and settings for SEO schema
  const profile = await sanityFetch<any>({
    query: PROFILE_QUERY,
    tags: ['profile'],
  });

  const settings = await sanityFetch<any>({
    query: SETTINGS_QUERY,
    tags: ['settings'],
  });

  // Determine locale (you can enhance this with Next.js i18n or headers)
  const locale = 'en'; // Default to English, can be enhanced later

  return (
    <div className="container mx-auto px-6 py-12 md:py-20">
      {/* JSON-LD Person schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: profile?.name || 'Vicente Gabriel Gómez Medina',
            jobTitle: profile?.headline || '.NET Backend Developer',
            url: settings?.title || 'https://vicentegm.dev',
            image: 'https://vicentegm.dev/images/ed083ba154de.webp',
            sameAs: settings?.socialLinks?.map((link: any) => link.url) || [
              'https://github.com/vicentegm2',
              'https://www.linkedin.com/in/vicentegabrielgomezmedina',
            ],
          }),
        }}
      />
      <div className="space-y-20 md:space-y-28">
        <ProfileSection locale={locale} />
        <Separator />
        <TechStackSection locale={locale} />
        <Separator />
        <TimelineSectionWrapper locale={locale} />
        <Separator />
        <ContactSection />
      </div>
    </div>
  );
}
