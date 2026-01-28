import { NewslettersSection } from '@/components/newsletters-section';

export default function BlogPage() {
    return (
        <div className="container mx-auto px-6 py-12 md:py-20">
            <div className="max-w-5xl mx-auto space-y-20 md:space-y-28">
                <NewslettersSection />
            </div>
        </div>
    );
}
