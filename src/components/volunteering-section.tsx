import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { HeartHandshake } from "lucide-react";

const volunteeringData = [
  {
    role: "Community Mentor",
    organization: "Code for All",
    period: "2022 - Present",
    description: "Mentoring aspiring developers from underrepresented backgrounds, providing guidance on coding best practices, career advice, and project support.",
  },
  {
    role: "Event Volunteer",
    organization: "Tech Conference 2023",
    period: "Oct 2023",
    description: "Assisted with event logistics, attendee registration, and speaker coordination at the annual technology conference, ensuring a smooth experience for over 500 participants.",
  },
];

export function VolunteeringSection() {
  return (
    <section id="volunteering" aria-labelledby="volunteering-heading">
      <h2 id="volunteering-heading" className="text-3xl font-headline font-bold text-center mb-12 text-primary">
        Volunteering & Community
      </h2>
      <div className="space-y-8">
        {volunteeringData.map((item, index) => (
          <Card key={index} className="transition-shadow duration-300 hover:shadow-lg">
            <CardHeader className="flex flex-row items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <HeartHandshake className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-grow">
                <CardTitle className="font-headline text-xl">{item.role}</CardTitle>
                <div className="text-sm text-muted-foreground mt-1">
                  <p className="font-semibold text-accent">{item.organization}</p>
                  <p>{item.period}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/80 ml-[68px] -mt-2">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
