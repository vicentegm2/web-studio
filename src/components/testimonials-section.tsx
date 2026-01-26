'use client';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { MotionWrapper } from "./ui/motion-wrapper";
import { Button } from "@/components/ui/button";

export function TestimonialsSection() {
    const { t } = useLanguage();

    // TODO: REPLACE WITH REAL DATA
    const testimonials = [
        {
            id: 1,
            name: "Jorge Hierro Álvarez",
            role: "CEO",
            company: "Salta Comunicación y Formación Digital",
            image: "/images/jorge_hierro.png",
            text: "Ha sido un placer seguir la actividad de Vicente en todas las redes sociales. Su seriedad como participante en los programas realizados en la Universidad Católica San Antonio de Murcia (UCAM), me ha permitido conocer la capacidad y habilidad en temas relacionados con el emprendimiento, comunicación, desarrollo de aplicaciones y sistemas de información. Me gustaría destacar su flexibilidad y adaptación a todas las áreas de las acciones formativas que hemos visto, sobre todo en materia de redes sociales, marketing digital, informática y telecomunicaciones. Además, ha participado en todos los grupos de trabajo liderando las acciones, tareas y presentaciones llevadas a cabo. Su mejoría desde el mes de febrero de 2023 hasta la fecha así como su interés en seguir aprendiendo sobre el desarrollo de la empresa, ponen de manifiesto un perfil serio, competitivo y con ganas de superación. Seguir su actividad y constancia forma parte de aquellos perfiles que comunican temas de interés y que son tendencia en la actualidad.",
            linkedinUrl: "https://www.linkedin.com/in/vicentegabrielgomezmedina/details/recommendations/"
        }
    ];

    return (
        <section id="testimonials" aria-labelledby="testimonials-heading" className="py-12">
            <MotionWrapper animation="fade-up">
                <div className="text-center mb-12">
                    <h2 id="testimonials-heading" className="text-3xl font-headline font-bold text-primary mb-3">
                        {t.testimonialsTitle}
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {t.testimonialsSubtitle}
                    </p>
                </div>
            </MotionWrapper>

            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8"> {/* Changed to 1 col for single focused testimonial, easy to change to md:grid-cols-2 later */}
                    {testimonials.map((testimonial, index) => (
                        <MotionWrapper key={testimonial.id} animation="fade-up" delay={index * 0.1}>
                            <Card className="bg-card border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                                {/* Decorative Quote Icon in background */}
                                <div className="absolute top-4 right-6 text-primary/5">
                                    <Quote size={120} />
                                </div>

                                <CardContent className="pt-8 px-8 sm:px-10 pb-6 relative z-10">
                                    <div className="mb-6 text-foreground/80 text-lg leading-relaxed italic relative">
                                        <Quote className="inline-block w-4 h-4 text-primary/40 mr-2 mb-2 transform -scale-x-100" />
                                        {testimonial.text}
                                        <Quote className="inline-block w-4 h-4 text-primary/40 ml-2 mb-2" />
                                    </div>

                                    <div className="flex items-center gap-4 border-t border-border/40 pt-6">
                                        <Avatar className="h-12 w-12 border-2 border-primary/10">
                                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                                            <AvatarFallback className="bg-primary/5 text-primary font-bold">
                                                {testimonial.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                                            </AvatarFallback>
                                        </Avatar>

                                        <div className="flex-grow">
                                            <h4 className="font-headline font-semibold text-primary">{testimonial.name}</h4>
                                            <p className="text-xs text-muted-foreground font-medium">
                                                {testimonial.role} @ {testimonial.company}
                                            </p>
                                        </div>

                                        {testimonial.linkedinUrl && (
                                            <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-[#0077b5]">
                                                <a href={testimonial.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn of ${testimonial.name}`}>
                                                    <Linkedin size={20} />
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </MotionWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
