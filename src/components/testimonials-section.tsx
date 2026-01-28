'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useLanguage } from '@/contexts/language-context';
import { Quote } from 'lucide-react';

export function TestimonialsSection() {
    const { t } = useLanguage();

    const testimonials = [
        {
            name: "Jorge Hierro Álvarez",
            role: "CEO of Salta Comunicación y Formación Digital",
            content: "Ha sido un placer seguir la actividad de Vicente en todas las redes sociales. Su seriedad como participante en los programas realizados en la Universidad Católica San Antonio de Murcia (UCAM), me ha permitido conocer la capacidad y habilidad en temas relacionados con el emprendimiento, comunicación, desarrollo de aplicaciones y sistemas de información. Me gustaría destacar su flexibilidad y adaptación a todas las áreas de las acciones formativas que hemos visto, sobre todo en materia de redes sociales, marketing digital, informática y telecomunicaciones. Además, ha participado en todos los grupos de trabajo liderando las acciones, tareas y presentaciones llevadas a cabo. Su mejoría desde el mes de febrero de 2023 hasta la fecha así como su interés en seguir aprendiendo sobre el desarrollo de la empresa, ponen de manifiesto un perfil serio, competitivo y con ganas de superación. Seguir su actividad y constancia forma parte de aquellos perfiles que comunican temas de interés y que son tendencia en la actualidad.",
            initials: "JH",
            imageUrl: "/images/jorge_hierro.png"
        }
    ];

    return (
        <section id="testimonials" className="py-16 sm:py-24 bg-secondary/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-headline font-bold text-primary mb-4">
                        {t.testimonialsTitle}
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {t.testimonialsSubtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
                    {testimonials.map((item, index) => (
                        <Card key={index} className="bg-card border-none shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                            <div className="absolute top-4 right-4 text-primary/10">
                                <Quote className="w-12 h-12" />
                            </div>
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <Avatar className="h-12 w-12 border-2 border-primary/20">
                                    <AvatarImage src={item.imageUrl} alt={item.name} className="object-cover" />
                                    <AvatarFallback className="bg-primary/5 text-primary font-medium">{item.initials}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <CardTitle className="text-lg font-headline">{item.name}</CardTitle>
                                    <p className="text-xs text-muted-foreground">{item.role}</p>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-foreground/80 leading-relaxed italic relative z-10">
                                    "{item.content}"
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
