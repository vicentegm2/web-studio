import { NewslettersSectionWrapper } from '@/components/newsletters-section-wrapper';

export default async function BlogPage() {
    return (
        <div className="container mx-auto px-6 py-12 md:py-20">
            <div className="max-w-4xl mx-auto">
                <NewslettersSectionWrapper />
            </div>
        </div>
    );
}
