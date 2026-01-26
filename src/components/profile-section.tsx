import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "./ui/badge";
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { sanityFetch } from "@/sanity/lib/client";
import { PROFILE_QUERY, SETTINGS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { SocialLinks } from "./social-links";

// Icon mapping
const iconMap: Record<string, any> = {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
};

interface ProfileData {
  name: string;
  headline: string;
  headline_es?: string;
  bio_en: string;
  bio_es: string;
  avatar: any;
  softSkills: string[];
  softSkills_es?: string[];
}

interface SettingsData {
  socialLinks: Array<{
    name: string;
    url: string;
    iconName: string;
  }>;
}

export async function ProfileSection({ locale = 'en' }: { locale?: string }) {
  const profile = await sanityFetch<ProfileData>({
    query: PROFILE_QUERY,
    tags: ['profile'],
  });

  const settings = await sanityFetch<SettingsData>({
    query: SETTINGS_QUERY,
    tags: ['settings'],
  });

  // Debug logging (only in development)
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Profile Data:', profile);
    console.log('⚙️ Settings Data:', settings);
  }

  if (!profile) {
    console.warn('⚠️ No profile data found. Make sure to create a Profile document in Sanity Studio with ID "profile"');
    return null;
  }

  const bio = locale === 'es' ? profile.bio_es : profile.bio_en;
  const headline = locale === 'es' && profile.headline_es ? profile.headline_es : profile.headline;
  const softSkills = locale === 'es' && profile.softSkills_es ? profile.softSkills_es : profile.softSkills;
  const avatarUrl = profile.avatar ? urlFor(profile.avatar).width(224).height(224).url() : '';

  return (
    <section id="profile" aria-labelledby="profile-heading" className="py-16 sm:py-24 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center gap-12 sm:gap-20">
          {/* Avatar */}
          <div className="relative">
            <div className="animate-float">
              <Avatar className="h-40 w-40 sm:h-56 sm:w-56 border-4 border-primary/20 shadow-2xl">
                {avatarUrl && (
                  <AvatarImage asChild src={avatarUrl}>
                    <Image
                      src={avatarUrl}
                      alt={profile.name}
                      width={224}
                      height={224}
                      className="object-cover"
                      priority
                      draggable="false"
                    />
                  </AvatarImage>
                )}
                <AvatarFallback className="text-4xl font-headline">
                  {profile.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl -z-10 scale-150 animate-pulse" />
          </div>

          <div className="text-center sm:text-left flex-1">
            <h2 className="text-lg font-medium text-muted-foreground font-headline tracking-wider mb-2">
              {locale === 'es' ? 'Hola, soy' : 'Hello, I\'m'}
            </h2>

            <h1
              id="profile-heading"
              className="text-4xl sm:text-6xl lg:text-7xl font-bold font-headline text-primary leading-tight"
            >
              {headline}
            </h1>

            <div className="mt-6 space-y-4 max-w-2xl text-foreground/80 leading-relaxed text-lg">
              <p>{bio}</p>
            </div>

            {softSkills && softSkills.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2 justify-center sm:justify-start">
                {softSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-4 py-1 text-sm hover:scale-105 transition-transform origin-center cursor-default">
                    {skill}
                  </Badge>
                ))}
              </div>
            )}

            {settings?.socialLinks && settings.socialLinks.length > 0 && (
              <SocialLinks socialLinks={settings.socialLinks} iconMap={iconMap} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
