import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CalendarCheck2 } from "lucide-react";

const eventsData = [
  {
    name: "Conferencia Anual de Desarrolladores",
    organization: "Global Tech",
    date: "Junio 2023",
    description: "Participé como asistente, atendiendo a charlas sobre las últimas tendencias en desarrollo de software, serverless y arquitectura de microservicios.",
  },
  {
    name: "Hackathon de Innovación Social",
    organization: "Code for Good",
    date: "Marzo 2022",
    description: "Formé parte de un equipo que desarrolló un prototipo de aplicación para conectar a voluntarios con ONGs locales, obteniendo el segundo lugar.",
  },
];

export function EventsSection() {
  return (
    <section id="events" aria-labelledby="events-heading">
      <h2 id="events-heading" className="text-3xl font-headline font-bold text-center mb-12 text-primary">
        Eventos y Conferencias
      </h2>
      <div className="space-y-8">
        {eventsData.map((item, index) => (
          <Card key={index} className="transition-shadow duration-300 hover:shadow-lg">
            <CardHeader className="flex flex-row items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <CalendarCheck2 className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-grow">
                <CardTitle className="font-headline text-xl">{item.name}</CardTitle>
                <div className="text-sm text-muted-foreground mt-1">
                  <p className="font-semibold text-accent">{item.organization}</p>
                  <p>{item.date}</p>
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