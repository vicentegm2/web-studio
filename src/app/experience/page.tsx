import { TimelineSection } from '@/components/timeline-section';
import { CertificationsSection } from '@/components/certifications-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { Separator } from '@/components/ui/separator';

export default function ExperiencePage() {
    return (
        <div className="container mx-auto px-6 py-12 md:py-20">
            <div className="max-w-5xl mx-auto space-y-20 md:space-y-28">
                <TimelineSection />
                <Separator />
                <CertificationsSection />
                <Separator />
                <TestimonialsSection />
            </div>
        </div>
    );
}
