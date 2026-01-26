import { Separator } from '@/components/ui/separator';
import { TimelineSectionWrapper } from '@/components/timeline-section-wrapper';
import { CertificationsSectionWrapper } from '@/components/certifications-section-wrapper';
import { TestimonialsSection } from '@/components/testimonials-section';

export default async function ExperiencePage() {
  const locale = 'en'; // Can be enhanced with Next.js i18n

  return (
    <div className="container mx-auto px-6 py-12 md:py-20">
      <div className="max-w-5xl mx-auto space-y-20 md:space-y-28">
        <TimelineSectionWrapper locale={locale} />
        <Separator />
        <CertificationsSectionWrapper />
        <Separator />
        <TestimonialsSection />
      </div>
    </div>
  );
}
