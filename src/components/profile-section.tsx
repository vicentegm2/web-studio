import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function ProfileSection() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture');

  return (
    <section id="profile" aria-labelledby="profile-heading">
      <div className="flex flex-col sm:flex-row items-center gap-8">
        <Avatar className="h-32 w-32 sm:h-40 sm:w-40 border-4 border-primary/20">
          {profileImage && (
            <AvatarImage asChild src={profileImage.imageUrl}>
                <Image
                    src={profileImage.imageUrl}
                    alt={profileImage.description}
                    width={160}
                    height={160}
                    data-ai-hint={profileImage.imageHint}
                    className="object-cover"
                />
            </AvatarImage>
          )}
          <AvatarFallback className="text-3xl font-headline">JD</AvatarFallback>
        </Avatar>
        <div className="text-center sm:text-left">
          <h1 id="profile-heading" className="text-4xl sm:text-5xl font-bold font-headline text-primary">
            John Doe
          </h1>
          <p className="mt-2 text-xl sm:text-2xl font-medium text-accent font-headline">
            Software Developer / Backend .NET Developer
          </p>
          <p className="mt-4 max-w-xl text-foreground/80">
            A passionate and experienced software developer specializing in backend development with .NET technologies. Proven ability to design, develop, and deploy robust and scalable applications.
          </p>
          <div className="mt-6 flex gap-4 justify-center sm:justify-start">
            <Button size="lg" asChild>
              <a href="/cv.pdf" download="JohnDoe-CV.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
               <a href="mailto:john.doe@example.com">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
