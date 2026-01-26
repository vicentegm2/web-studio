'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Globe, Zap, ArrowRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { useLanguage } from "@/contexts/language-context";
import Image from "next/image";
import { motion } from "framer-motion";

interface Newsletter {
  _id: string;
  title: string;
  description: string;
  link: string;
  coverImageUrl?: string;
  tags?: string[];
  featured?: boolean;
  // Fallback for icons or colors from static data
  icon?: any;
  color?: string;
}

interface NewslettersSectionProps {
  newsletters?: Newsletter[];
}

export function NewslettersSection({ newsletters: propNewsletters }: NewslettersSectionProps) {
  const { t } = useLanguage();

  const staticNewsletters: Newsletter[] = [
    {
      _id: "n1",
      title: t.newslettersBitacoraPoliticaTitle,
      description: t.newslettersBitacoraPoliticaDescription,
      link: "https://www.linkedin.com/newsletters/bitamcora-polamtica-7327356071713370112/",
      coverImageUrl: "/images/eb7ea69ae8c7.webp",
      tags: t.newslettersBitacoraPoliticaTags as unknown as string[],
      featured: true,
      icon: Globe,
      color: "text-blue-500"
    },
    {
      _id: "n2",
      title: t.newslettersBitacoraDigitalTitle,
      description: t.newslettersBitacoraDigitalDescription,
      link: "https://www.linkedin.com/newsletters/bitamcora-digital-7386341987249176576/",
      coverImageUrl: "/images/fe93560fd251.webp",
      tags: t.newslettersBitacoraDigitalTags as unknown as string[],
      featured: false,
      icon: Zap,
      color: "text-purple-500"
    },
    {
      _id: "n3",
      title: t.newslettersBitacoraNaturalTitle,
      description: t.newslettersBitacoraNaturalDescription,
      link: "https://www.linkedin.com/newsletters/bitamcora-natural-7387151322833108993/",
      coverImageUrl: "/images/c8ccee04d910.webp",
      tags: t.newslettersBitacoraNaturalTags as unknown as string[],
      featured: false,
      icon: BookOpen,
      color: "text-green-500"
    }
  ];

  const newsletters = propNewsletters && propNewsletters.length > 0 ? propNewsletters : staticNewsletters;

  const featuredArticle = newsletters.find(n => n.featured) || newsletters[0];
  const otherNewsletters = newsletters.filter(n => n._id !== featuredArticle?._id);

  return (
    <section id="newsletters" aria-labelledby="newsletters-heading" className="py-16 space-y-12">
      <div className="text-center mb-12">
        <h2 id="newsletters-heading" className="text-3xl font-headline font-bold text-primary">
          {t.newslettersTitle}
        </h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          {t.newslettersSubtitle}
        </p>
      </div>

      {/* Featured Article - Hero Style */}
      {featuredArticle && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Card className="overflow-hidden border-primary/20 bg-muted/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto overflow-hidden group">
                <Image
                  src={featuredArticle.coverImageUrl || "/images/us_venezuela_article.jpg"}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="default" className="bg-primary text-primary-foreground hover:bg-primary shadow-lg">
                    {t.newslettersFeaturedArticleBadge || "Featured"}
                  </Badge>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    {featuredArticle.icon ? <featuredArticle.icon className="h-4 w-4" /> : <Globe className="h-4 w-4" />}
                    <span className={`font-medium ${featuredArticle.color || 'text-primary'}`}>
                      {featuredArticle.title.includes("Politica") || featuredArticle.tags?.includes("Geopolítica") ? "Bitácora Política" : "Featured Article"}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-headline mb-3 text-primary leading-tight">{featuredArticle.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featuredArticle.description}
                  </p>
                </div>
                <Button className="w-fit group" asChild>
                  <a href={featuredArticle.link} target="_blank" rel="noopener noreferrer">
                    {t.newslettersReadArticle || "Read Article"} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {otherNewsletters.map((newsletter, index) => (
          <motion.div
            key={newsletter._id || index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl dark:hover:shadow-primary/20 hover:scale-[1.02]">
              {newsletter.coverImageUrl && (
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={newsletter.coverImageUrl}
                    alt={newsletter.title}
                    fill
                    className="object-cover"
                    draggable="false"
                  />
                </div>
              )}
              <CardHeader className="flex flex-row items-start gap-4">
                <div className={`bg-primary/10 p-3 rounded-full mt-1 flex-shrink-0 ${newsletter.color || ''}`}>
                  {newsletter.icon ? <newsletter.icon className="h-6 w-6" /> : <BookOpen className="h-6 w-6" />}
                </div>
                <div className="flex-1">
                  <CardTitle className="font-headline text-xl">{newsletter.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-foreground/80 line-clamp-3">
                  {newsletter.description}
                </CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  {newsletter.tags?.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <a href={newsletter.link} target="_blank" rel="noopener noreferrer" aria-label={`Read ${newsletter.title}`}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {t.newslettersReadMore}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
