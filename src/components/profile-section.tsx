'use client';
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { Badge } from "./ui/badge";
import { useLanguage } from "@/contexts/language-context";
import { trackSocialClick } from "@/lib/analytics";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const MagneticButton = ({ children, onClick, ...props }: any) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    if (!ref.current) return;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      style={{ position: "relative" }}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
    >
      <Button ref={ref} onClick={onClick} {...props}>
        {children}
      </Button>
    </motion.div>
  );
};

export function ProfileSection() {
  const { t } = useLanguage();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/vicentegm2',
      icon: Github,
      ariaLabel: 'Open GitHub profile of Vicente Gabriel Gómez Medina'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/vicentegabrielgomezmedina',
      icon: Linkedin,
      ariaLabel: 'Open LinkedIn profile of Vicente Gabriel Gómez Medina'
    },
  ];

  const softSkills = [
    t.softSkills.teamwork,
    t.softSkills.publicspeaking,
    t.softSkills.communication,
    t.softSkills.continuousLearning,
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
  };

  return (
    <section id="profile" aria-labelledby="profile-heading" className="py-16 sm:py-24 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center gap-12 sm:gap-20">
          {/* Floating Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Avatar className="h-40 w-40 sm:h-56 sm:w-56 border-4 border-primary/20 shadow-2xl">
                <AvatarImage asChild src="/images/ed083ba154de.webp">
                  <Image
                    src="/images/ed083ba154de.webp"
                    alt="Vicente Gabriel Gómez Medina"
                    width={224}
                    height={224}
                    className="object-cover"
                    priority
                    draggable="false"
                  />
                </AvatarImage>
                <AvatarFallback className="text-4xl font-headline">VG</AvatarFallback>
              </Avatar>
            </motion.div>
            {/* Decorative circle behind */}
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl -z-10 scale-150 animate-pulse" />
          </motion.div>

          <motion.div
            className="text-center sm:text-left flex-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants} className="text-lg font-medium text-muted-foreground font-headline tracking-wider mb-2">
              {t.hello}
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              id="profile-heading"
              className="text-4xl sm:text-6xl lg:text-7xl font-bold font-headline text-primary leading-tight"
            >
              {t.jobTitle}
            </motion.h2>

            <motion.div variants={itemVariants} className="mt-6 space-y-4 max-w-2xl text-foreground/80 leading-relaxed text-lg">
              <p>{t.profileDescription1}</p>
              <p>{t.profileDescription2}</p>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8">
              <Button asChild size="lg" className="btn-primary hover:scale-105 transition-transform">
                <a href={`/${useLanguage().language}#contact`}>
                  {t.contact}
                </a>
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-2 justify-center sm:justify-start">
              {softSkills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="px-4 py-1 text-sm bg-primary/5 border-primary/20 text-foreground hover:bg-primary/10 hover:border-primary/40 hover:scale-105 transition-all duration-300 origin-center cursor-default backdrop-blur-sm"
                >
                  {skill}
                </Badge>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-6 justify-center sm:justify-start">
              {socialLinks.map((link) => (
                <MagneticButton
                  key={link.name}
                  variant="outline"
                  size="lg"
                  className="rounded-full h-12 w-12 p-0 border-2"
                  aria-label={link.ariaLabel}
                  asChild
                  onClick={() => trackSocialClick(link.name)}
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                    <link.icon className="w-5 h-5" />
                  </a>
                </MagneticButton>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
