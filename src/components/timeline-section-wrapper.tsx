import { TimelineSection } from './timeline-section';
import { sanityFetch } from '@/sanity/lib/client';
import { EXPERIENCE_QUERY } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

interface ExperienceData {
    _id: string;
    company: string;
    role: string;
    period: string;
    description: string[];
    logo?: any;
    order: number;
}

export async function TimelineSectionWrapper({ locale = 'en' }: { locale?: string }) {
    const experiences = await sanityFetch<ExperienceData[]>({
        query: EXPERIENCE_QUERY,
        tags: ['experience'],
    });

    // Transform Sanity data to match the component's expected format
    const transformedExperiences = experiences?.map((exp) => ({
        _id: exp._id,
        company: exp.company,
        role: exp.role,
        period: exp.period,
        description: exp.description || [],
        logoUrl: exp.logo ? urlFor(exp.logo).width(100).height(100).url() : undefined,
    }));

    return <TimelineSection experiences={transformedExperiences} locale={locale} />;
}
