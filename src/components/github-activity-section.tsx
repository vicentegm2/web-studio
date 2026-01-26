'use client';

import { GitHubCalendar } from 'react-github-calendar';
import { useLanguage } from "@/contexts/language-context";
import { MotionWrapper } from "./ui/motion-wrapper";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Github } from "lucide-react";

export function GithubActivitySection() {
    const { t } = useLanguage();
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section id="github-activity" aria-labelledby="github-activity-heading" className="py-12">
            <MotionWrapper animation="fade-up">
                <div className="text-center mb-10">
                    <h2 id="github-activity-heading" className="text-3xl font-headline font-bold text-primary mb-3">
                        {t.githubActivityTitle}
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                        {t.githubActivitySubtitle}
                    </p>
                </div>
            </MotionWrapper>

            <div className="flex justify-center items-center w-full px-4 overflow-x-auto">
                <MotionWrapper animation="zoom-in" delay={0.2}>
                    <div className="p-8 border border-border/50 rounded-2xl bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
                        {mounted ? (
                            <GitHubCalendar
                                username="vicentegm2"
                                colorScheme={theme === 'dark' ? 'dark' : 'light'}
                                fontSize={12}
                                blockSize={14}
                                blockMargin={4}
                                style={{ color: 'inherit' }}
                            />
                        ) : (
                            <div className="h-[150px] w-full flex items-center justify-center text-muted-foreground">
                                Loading GitHub stats...
                            </div>
                        )}
                        <div className="mt-6 flex justify-center">
                            <Button variant="outline" size="sm" asChild className="text-xs">
                                <a href="https://github.com/vicentegm2" target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 h-4 w-4" />
                                    @vicentegm2
                                </a>
                            </Button>
                        </div>
                    </div>
                </MotionWrapper>
            </div>
        </section>
    );
}
