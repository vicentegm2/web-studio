import { CertificationsSection } from './certifications-section';
import { sanityFetch } from '@/sanity/lib/client';
import { CERTIFICATIONS_QUERY } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

interface CertificationData {
    _id: string;
    name: string;
    issuer: string;
    date: string;
    credentialUrl?: string;
    image?: any;
}

export async function CertificationsSectionWrapper() {
    const certifications = await sanityFetch<CertificationData[]>({
        query: CERTIFICATIONS_QUERY,
        tags: ['certification'],
    });

    // Transform Sanity data to match the component's expected format
    const transformedCertifications = certifications?.map((cert) => ({
        _id: cert._id,
        name: cert.name,
        title: cert.name,
        issuer: cert.issuer,
        date: cert.date,
        credentialUrl: cert.credentialUrl,
        url: cert.credentialUrl,
        imageUrl: cert.image ? urlFor(cert.image).width(400).height(300).url() : undefined,
        skills: [], // This could be added to the schema if needed
    }));

    return <CertificationsSection certifications={transformedCertifications} />;
}
