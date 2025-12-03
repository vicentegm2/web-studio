import { Header } from '@/components/header';
import { ProfileSection } from '@/components/profile-section';
import { TechStackSection } from '@/components/tech-stack-section';
import { ExperienceTimeline } from '@/components/experience-timeline';
import { VolunteeringSection } from '@/components/volunteering-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto space-y-20 md:space-y-28">
          <ProfileSection />
          <TechStackSection />
          <ExperienceTimeline />
          <VolunteeringSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
