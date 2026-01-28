import { ProjectsSection } from '@/components/projects-section';
import { GithubActivitySection } from '@/components/github-activity-section';
import { TechStackSection } from '@/components/tech-stack-section';
import { Separator } from '@/components/ui/separator';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Projects | Vicente GM',
    description: 'Explore my portfolio of .NET backend projects, APIs, and GitHub contributions.',
};

export default function ProjectsPage() {
    return (
        <div className="container mx-auto px-6 py-12 md:py-20">
            <div className="max-w-5xl mx-auto space-y-20 md:space-y-28">
                <ProjectsSection />
                <Separator />
                <GithubActivitySection />
                <Separator />
                <TechStackSection />
            </div>
        </div>
    );
}
