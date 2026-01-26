import { NewslettersSection } from './newsletters-section';
import { sanityFetch } from '@/sanity/lib/client';
import { NEWSLETTERS_QUERY } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

interface NewsletterData {
    _id: string;
    title: string;
    slug: { current: string };
    description: string;
    link: string;
    coverImage?: any;
    tags: string[];
    featured: boolean;
}

export async function NewslettersSectionWrapper() {
    const newsletters = await sanityFetch<NewsletterData[]>({
        query: NEWSLETTERS_QUERY,
        tags: ['newsletter'],
    });

    // Transform Sanity data to match the component's expected format
    const transformedNewsletters = newsletters?.map((newsletter) => ({
        _id: newsletter._id,
        title: newsletter.title,
        description: newsletter.description,
        link: newsletter.link,
        coverImageUrl: newsletter.coverImage ? urlFor(newsletter.coverImage).width(600).height(400).url() : undefined,
        tags: newsletter.tags || [],
        featured: newsletter.featured || false,
    }));

    return <NewslettersSection newsletters={transformedNewsletters} />;
}
