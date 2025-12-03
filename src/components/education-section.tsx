import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

type Status = "Finalizado" | "En curso" | "En pausa";

const educationData = [
  {
    degree: "Grado Superior en Desarrollo de Aplicaciones Web",
    institution: "IES El Rincón",
    period: "2017 - 2019",
    status: "Finalizado" as Status,
  },
  {
    degree: "Curso de Inglés Avanzado C1",
    institution: "Escuela Oficial de Idiomas",
    period: "2022 - Presente",
    status: "En curso" as Status,
  },
  {
    degree: "Grado en Ingeniería Informática",
    institution: "Universidad de Las Palmas de Gran Canaria",
    period: "2019 - 2021",
    status: "En pausa" as Status,
  },
];

const statusColors: Record<Status, string> = {
  "Finalizado": "bg-green-100 text-green-800",
  "En curso": "bg-blue-100 text-blue-800",
  "En pausa": "bg-yellow-100 text-yellow-800",
};

export function EducationSection() {
  return (
    <section id="education" aria-labelledby="education-heading">
      <h2 id="education-heading" className="text-3xl font-headline font-bold text-center mb-12 text-primary">
        Formación Académica
      </h2>
      <div className="space-y-8">
        {educationData.map((item, index) => (
          <Card key={index} className="transition-shadow duration-300 hover:shadow-lg">
            <CardHeader>
                <div className="flex justify-between items-start">
                    <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                            <GraduationCap className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <CardTitle className="font-headline text-xl">{item.degree}</CardTitle>
                            <div className="text-sm text-muted-foreground mt-1">
                                <p className="font-semibold text-accent">{item.institution}</p>
                                <p>{item.period}</p>
                            </div>
                        </div>
                    </div>
                    <Badge className={`${statusColors[item.status]} border-transparent`}>{item.status}</Badge>
                </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}