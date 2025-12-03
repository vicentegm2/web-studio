import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { HeartHandshake } from "lucide-react";

const volunteeringData = [
  {
    role: "Community Mentor",
    organization: "Code for All",
    period: "2022 - Present",
    description: "Guiando a futuros desarrolladores a través de mentorías, compartiendo buenas prácticas y consejos de carrera.",
  },
  {
    role: "Event Volunteer",
    organization: "Tech Conference 2023",
    period: "Oct 2023",
    description: "Colaboré en la logística para asegurar una experiencia fluida para más de 500 asistentes.",
  },
];

export function VolunteeringSection() {
  return (
    <section id="volunteering" aria-labelledby="volunteering-heading">
      <h2 id="volunteering-heading" className="text-3xl font-headline font-bold text-center mb-12 text-primary">
        Voluntariado
      </h2>
      <div className="space-y-8">
        {volunteeringData.map((item, index) => (
          <div key={index} className="flex items-start gap-4 group">
             <div className="bg-primary/10 p-3 rounded-full mt-1 transition-colors group-hover:bg-primary">
                <HeartHandshake className="w-6 h-6 text-primary transition-colors group-hover:text-white" />
            </div>
            <div className="flex-grow">
                <h3 className="font-headline text-lg font-semibold">{item.role}</h3>
                <div className="text-sm text-muted-foreground mt-1">
                  <p className="font-medium text-accent">{item.organization}</p>
                  <p>{item.period}</p>
                </div>
                <p className="text-sm text-foreground/80 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
