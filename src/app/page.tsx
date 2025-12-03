import { Header } from '@/components/header';
import { ProfileSection } from '@/components/profile-section';
import { ProjectsSection } from '@/components/projects-section';
import { TechStackSection } from '@/components/tech-stack-section';
import { TimelineSection } from '@/components/timeline-section';
import { Footer } from '@/components/footer';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <ProfileSection />
        <div className="container mx-auto px-6 py-12 md:py-20">
          <div className="max-w-5xl mx-auto space-y-20 md:space-y-28">
            <TechStackSection />
            <Separator />
            <TimelineSection />
            <Separator />
            <ProjectsSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}