import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { IconCSharp, IconDotNet, IconReact, IconGit } from "@/components/icons/tech-icons";
import { Database, Share2 } from "lucide-react";
import { sanityFetch } from "@/sanity/lib/client";
import { TECH_STACK_QUERY } from "@/sanity/lib/queries";

// Icon mapping
const iconMap: Record<string, any> = {
  IconCSharp,
  IconDotNet,
  IconReact,
  Database,
  IconGit,
  Share2,
};

interface TechStackItem {
  _id: string;
  name: string;
  icon: string;
  description_en: string;
  description_es: string;
}

export async function TechStackSection({ locale = 'en' }: { locale?: string }) {
  const techStack = await sanityFetch<TechStackItem[]>({
    query: TECH_STACK_QUERY,
    tags: ['techStack'],
  });

  if (!techStack || techStack.length === 0) {
    return null;
  }

  return (
    <section id="tech-stack" aria-labelledby="tech-stack-heading">
      <h2 id="tech-stack-heading" className="text-3xl font-headline font-bold text-center mb-12 text-primary">
        {locale === 'es' ? 'Stack Tecnológico' : 'Tech Stack'}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {techStack.map((tech) => {
          const Icon = iconMap[tech.icon] || Database;
          const description = locale === 'es' ? tech.description_es : tech.description_en;

          return (
            <div
              key={tech._id}
              className="h-full hover-lift"
            >
              <Card className="flex flex-col items-center text-center p-6 h-full hover:border-primary/50 transition-colors">
                <Icon className="h-16 w-16 mb-4 text-primary" />
                <CardHeader className="p-0">
                  <CardTitle className="font-headline text-lg">{tech.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <p className="text-sm text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
}
