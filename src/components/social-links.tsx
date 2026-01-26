'use client';

import { MagneticButton } from './ui/magnetic-button';

interface SocialLink {
    name: string;
    url: string;
    iconName: string;
}

interface SocialLinksProps {
    socialLinks: SocialLink[];
    iconMap: Record<string, any>;
}

export function SocialLinks({ socialLinks, iconMap }: SocialLinksProps) {
    return (
        <div className="mt-10 flex flex-wrap gap-6 justify-center sm:justify-start">
            {socialLinks.map((link) => {
                const Icon = iconMap[link.iconName] || iconMap['Mail'];
                return (
                    <MagneticButton
                        key={link.name}
                        variant="outline"
                        size="lg"
                        className="rounded-full h-12 w-12 p-0 border-2"
                        aria-label={`Open ${link.name} profile`}
                        asChild
                    >
                        <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                            <Icon className="w-5 h-5" />
                        </a>
                    </MagneticButton>
                );
            })}
        </div>
    );
}
