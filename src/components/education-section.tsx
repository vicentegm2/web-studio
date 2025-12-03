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
  "Finalizado": "bg-green-100 text-green-800 border-green-200",
  "En curso": "bg-blue-100 text-blue-800 border-blue-200",
  "En pausa": "bg-yellow-100 text-yellow-800 border-yellow-200",
};

export function EducationSection() {
  return (
    <section id="education" aria-labelledby="education-heading">
      <h2 id="education-heading" className="text-3xl font-headline font-bold text-center mb-12 text-primary">
        Formación
      </h2>
      <div className="space-y-8">
        {educationData.map((item, index) => (
          <div key={index} className="flex items-start gap-4 group">
            <div className="bg-primary/10 p-3 rounded-full mt-1 transition-colors group-hover:bg-primary">
                <GraduationCap className="w-6 h-6 text-primary transition-colors group-hover:text-white" />
            </div>
            <div className="flex-grow">
                <div className="flex justify-between items-center">
                    <h3 className="font-headline text-lg font-semibold">{item.degree}</h3>
                    <Badge className={`${statusColors[item.status]}`}>{item.status}</Badge>
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                    <p className="font-medium text-accent">{item.institution}</p>
                    <p>{item.period}</p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
