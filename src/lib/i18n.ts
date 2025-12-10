export const translations = {
  en: {
    // Header
    downloadCV: "Download CV",
    openMenu: "Open menu",
    
    // Navigation
    technologies: "Technologies",
    experience: "Experience",
    projects: "Projects",
    certifications: "Certifications",
    newsletters: "Newsletters",
    contact: "Contact",
    
    // Profile Section
    hello: "Hello, I'm Vicente Gabriel Gómez Medina",
    jobTitle: ".NET Backend Developer",
    profileDescription1: "Backend developer specialized in .NET, C#, and SQL Server, focused on building clean, scalable, and maintainable APIs. Passionate about software architecture, automation, and applying best practices that drive robust and efficient solutions.",
    profileDescription2: "Beyond technology, I'm deeply interested in the intersection of AI, politics, and natural sciences. I enjoy analyzing complex systems, whether they're software architectures or geopolitical dynamics. In my free time, I write about these topics in my newsletters, travel to explore new perspectives, and stay active through sports.",
    softSkills: {
      teamwork: "Teamwork",
      publicspeaking: "Public Speaking",
      communication: "Communication",
      continuousLearning: "Continuous Learning"
    },
    
    // Tech Stack
    techStackTitle: "Tech Stack",
    techStackSubtitle: "Technologies and tools I work with",
    techStack: {
      csharp: {
        name: "C#",
        description: "Extensive experience in object-oriented programming for building robust applications."
      },
      dotnet: {
        name: ".NET",
        description: "Building robust and scalable backend services and APIs with the .NET ecosystem."
      },
      react: {
        name: "React",
        description: "Building modern user interfaces with this JavaScript library for web applications."
      },
      sqlserver: {
        name: "SQL Server",
        description: "Designing and managing relational databases, primarily with SQL Server."
      },
      git: {
        name: "Git & GitHub",
        description: "Applying version control best practices for collaborative and efficient development."
      },
      docker: {
        name: "Docker",
        description: "Containerizing applications for consistent deployment across environments."
      },
      microservices: {
        name: "Microservices & APIs",
        description: "Experience in microservices architecture and consuming RESTful APIs."
      }
    },
    
    // Timeline
    timelineTitle: "My Professional Journey",
    experienceTab: "Experience",
    educationTab: "Education",
    languagesTab: "Languages",
    volunteeringTab: "Volunteering",
    eventsTab: "Events",
    
    // Experience
    experiences: {
      amedida: {
        role: "Informatic Programmer",
        company: "Amedida TI",
        period: "Nov 2023 - Aug 2025",
        achievements: [
          "Database design, .NET Framework, and other skills.",
          "Development of backend solutions using the .NET ecosystem.",
          "Maintenance and optimization of existing applications to improve performance and scalability."
        ]
      },
      nttdata: {
        role: "Intern",
        company: "NTT DATA",
        period: "Mar 2022 - Jun 2022",
        achievements: [
          "Collaborated on software development projects, gaining practical experience with Microsoft SQL Server and SQL.",
          "Supported the team in various programming and analysis tasks."
        ]
      }
    },
    
    // Education
    education: {
      uned: {
        degree: "Computer Engineering Degree",
        institution: "Universidad Nacional de Educación a Distancia - U.N.E.D.",
        period: "Expected Sep 2025",
        status: "In progress"
      },
      ucam: {
        degree: "Web Application Development - Vocational Training",
        institution: "UCAM Universidad Católica San Antonio de Murcia",
        period: "2020 - 2022",
        status: "Completed"
      },
      politics: {
        degree: "Political Science and Government Degree",
        institution: "Universidad Nacional de Educación a Distancia - U.N.E.D.",
        period: "On pause",
        status: "On hold"
      }
    },
    
    // Languages
    languages: {
      spanish: {
        language: "Spanish",
        level: "Native"
      },
      english: {
        language: "English",
        level: "Professional working proficiency (B2 in progress)"
      }
    },
    
    // Volunteering
    volunteering: {
      civilProtection: {
        role: "Volunteer",
        organization: "Civil Protection",
        period: "Sep 2023 - Present",
        description: "Volunteer at Civil Protection of Las Torres de Cotillas."
      }
    },
    
    // Events
    events: {
      nerdearla: {
        name: "Nerdearla Spain",
        organization: "La Nave, Madrid",
        date: "Apr 2024",
        description: "I had the great privilege of attending the debut edition of Nerdearla in Spain, the largest Spanish-speaking IT event. Simply spectacular!"
      },
      securityCourse: {
        name: "VI Expert Course in Security and Defense",
        organization: "Universidad Nacional de Educación a Distancia (UNED)",
        date: "Oct 2024 - Feb 2025",
        description: "Theoretical knowledge on defense culture, geopolitics and international relations, focusing on contemporary conflicts, hybrid threats and cyber threats."
      },
      internationalRelations: {
        name: "International Relations and Foreign Affairs Seminar",
        organization: "UCAM Universidad Católica San Antonio de Murcia",
        date: "Oct 2023",
        description: "Analysis on geopolitics, cybersecurity, and the impact of artificial intelligence on national security."
      }
    },
    
    // Projects
    projectsTitle: "Featured Projects",
    projectsData: {
      personalCRM: {
        title: "Personal CRM System",
        description: "A comprehensive Customer Relationship Management system built with Angular, .NET, and SQL Server. Features include contact management, activity tracking, automated workflows, and advanced reporting. Implements clean architecture and CQRS patterns.",
        tags: ["Angular", ".NET", "SQL Server", "Clean Architecture", "CQRS", "GitHub Actions"],
        codeButton: "Code",
        demoButton: "Demo"
      },
      cleanArchitectureAPI: {
        title: "Clean Architecture API",
        description: "RESTful API built with .NET 8 following clean architecture principles and SOLID design patterns. Includes JWT authentication, comprehensive logging, unit testing, and Docker containerization. Currently in development.",
        tags: [".NET 8", "Clean Architecture", "SOLID", "JWT", "Docker", "xUnit"],
        codeButton: "Code",
        demoButton: "Demo"
      }
    },
    
    // Certifications
    certificationsTitle: "Certifications & Awards",
    certificationsCount: "certifications obtained",
    showCredential: "Show credential",
    issued: "Issued",
    credentialId: "ID",
    noId: "No ID",
    
    // Newsletters
    newslettersTitle: "Newsletters",
    newslettersSubtitle: "Thoughts and analysis on politics, technology, and natural sciences",
    newslettersReadMore: "Read on LinkedIn",
    newslettersBitacoraPoliticaTitle: "Bitácora Política",
    newslettersBitacoraPoliticaDescription: "Analysis and reflections on politics, geopolitics, and international relations. Exploring contemporary conflicts, governance, and the future of democracy.",
    newslettersBitacoraPoliticaTags: ["Politics", "Geopolitics", "International Relations"] as const,
    newslettersBitacoraDigitalTitle: "Bitácora Digital",
    newslettersBitacoraDigitalDescription: "Exploring technology, artificial intelligence, software development, and digital transformation. From coding practices to the impact of AI on society.",
    newslettersBitacoraDigitalTags: ["Technology", "AI", "Software Development"] as const,
    newslettersBitacoraNaturalTitle: "Bitácora Natural",
    newslettersBitacoraNaturalDescription: "Thoughts on natural sciences, climate, environment, and the relationship between technology and nature. Understanding our planet through a scientific lens.",
    newslettersBitacoraNaturalTags: ["Science", "Environment", "Nature"] as const,
    
    // Contact
    contactTitle: "Contact",
    contactSubtitle: "Send me a message",
    contactDescription: "Complete the form to send me a message directly from the web.",
    subjectLabel: "Subject",
    subjectPlaceholder: "e.g., Collaboration Proposal",
    messageLabel: "Message",
    messagePlaceholder: "Write your message here...",
    sendButton: "Send Message",
    sendingButton: "Sending...",
    messageSent: "Message Sent!",
    messageSuccess: "Thank you for contacting me, I will get back to you as soon as possible.",
    errorSending: "Error Sending",
    errorDescription: "There was a problem sending your message. Please try again.",
    subjectRequired: "Subject is required",
    messageRequired: "Message is required",
    
    // Footer
    madeWith: "Made with",
    by: "by",
    allRightsReserved: "All rights reserved.",
    lastUpdate: "Last update",
    currentUpdate: "December 2025",
    
    // Settings
    settings: "Settings",
    theme: "Theme",
    language: "Language",
    light: "Light",
    dark: "Dark",
    system: "System",
  },
  es: {
    // Header
    downloadCV: "Descargar CV",
    openMenu: "Abrir menú",
    
    // Navigation
    technologies: "Tecnologías",
    experience: "Experiencia",
    projects: "Proyectos",
    certifications: "Certificaciones",
    newsletters: "Newsletters",
    contact: "Contacto",
    
    // Profile Section
    hello: "Hola, soy Vicente Gabriel Gómez Medina",
    jobTitle: "Desarrollador Backend .NET",
    profileDescription1: "Desarrollador backend especializado en .NET, C# y SQL Server, enfocado en construir APIs limpias, escalables y mantenibles. Apasionado por la arquitectura de software, la automatización y la aplicación de mejores prácticas que impulsan soluciones robustas y eficientes.",
    profileDescription2: "Más allá de la tecnología, me interesa profundamente la intersección entre IA, política y ciencias naturales. Disfruto analizando sistemas complejos, ya sean arquitecturas de software o dinámicas geopolíticas. En mi tiempo libre, escribo sobre estos temas en mis newsletters, viajo para explorar nuevas perspectivas y me mantengo activo mediante el deporte.",
    softSkills: {
      teamwork: "Trabajo en equipo",
      publicspeaking: "Oratoria",
      communication: "Comunicación",
      continuousLearning: "Aprendizaje continuo"
    },
    
    // Tech Stack
    techStackTitle: "Stack Tecnológico",
    techStackSubtitle: "Tecnologías y herramientas con las que trabajo",
    techStack: {
      csharp: {
        name: "C#",
        description: "Amplia experiencia en programación orientada a objetos para construir aplicaciones robustas."
      },
      dotnet: {
        name: ".NET",
        description: "Construcción de servicios backend y APIs robustas y escalables con el ecosistema .NET."
      },
      react: {
        name: "React",
        description: "Construcción de interfaces de usuario modernas con esta biblioteca JavaScript para aplicaciones web."
      },
      sqlserver: {
        name: "SQL Server",
        description: "Diseño y gestión de bases de datos relacionales, principalmente con SQL Server."
      },
      git: {
        name: "Git & GitHub",
        description: "Aplicación de mejores prácticas de control de versiones para un desarrollo colaborativo y eficiente."
      },
      docker: {
        name: "Docker",
        description: "Contenerización de aplicaciones para despliegue consistente en diferentes entornos."
      },
      microservices: {
        name: "Microservicios y APIs",
        description: "Experiencia en arquitectura de microservicios y consumo de APIs RESTful."
      }
    },
    
    // Timeline
    timelineTitle: "Mi Trayectoria Profesional",
    experienceTab: "Experiencia",
    educationTab: "Educación",
    languagesTab: "Idiomas",
    volunteeringTab: "Voluntariado",
    eventsTab: "Eventos",
    
    // Experience
    experiences: {
      amedida: {
        role: "Programador Informático",
        company: "Amedida TI",
        period: "Nov 2023 - Ago 2025",
        achievements: [
          "Diseño de bases de datos, .NET Framework y otras habilidades.",
          "Desarrollo de soluciones backend utilizando el ecosistema .NET.",
          "Mantenimiento y optimización de aplicaciones existentes para mejorar rendimiento y escalabilidad."
        ]
      },
      nttdata: {
        role: "Becario",
        company: "NTT DATA",
        period: "Mar 2022 - Jun 2022",
        achievements: [
          "Colaboré en proyectos de desarrollo de software, obteniendo experiencia práctica con Microsoft SQL Server y SQL.",
          "Apoyé al equipo en diversas tareas de programación y análisis."
        ]
      }
    },
    
    // Education
    education: {
      uned: {
        degree: "Grado en Ingeniería Informática",
        institution: "Universidad Nacional de Educación a Distancia - U.N.E.D.",
        period: "Previsto Sep 2025",
        status: "En progreso"
      },
      ucam: {
        degree: "F.P. Desarrollo de Aplicaciones Web",
        institution: "UCAM Universidad Católica San Antonio de Murcia",
        period: "2020 - 2022",
        status: "Completado"
      },
      politics: {
        degree: "Grado en Ciencias Políticas y Gobierno",
        institution: "Universidad Nacional de Educación a Distancia - U.N.E.D.",
        period: "En pausa",
        status: "En pausa"
      }
    },
    
    // Languages
    languages: {
      spanish: {
        language: "Español",
        level: "Nativo"
      },
      english: {
        language: "Inglés",
        level: "Competencia profesional (B2 en progreso)"
      }
    },
    
    // Volunteering
    volunteering: {
      civilProtection: {
        role: "Voluntario",
        organization: "Protección Civil",
        period: "Sep 2023 - Presente",
        description: "Voluntario en Protección Civil de Las Torres de Cotillas."
      }
    },
    
    // Events
    events: {
      nerdearla: {
        name: "Nerdearla España",
        organization: "La Nave, Madrid",
        date: "Abr 2024",
        description: "Tuve el gran privilegio de asistir a la edición debut de Nerdearla en España, el encuentro de informática más grande de habla hispana. ¡Simplemente espectacular!"
      },
      securityCourse: {
        name: "VI Curso de Experto en Seguridad y Defensa",
        organization: "Universidad Nacional de Educación a Distancia (UNED)",
        date: "Oct 2024 - Feb 2025",
        description: "Conocimientos teóricos sobre cultura de defensa, geopolítica y relaciones internacionales, enfocándose en conflictos contemporáneos, amenazas híbridas y ciberamenazas."
      },
      internationalRelations: {
        name: "Seminario de Relaciones Internacionales y Asuntos Exteriores",
        organization: "UCAM Universidad Católica San Antonio de Murcia",
        date: "Oct 2023",
        description: "Análisis sobre geopolítica, ciberseguridad, y el impacto de la inteligencia artificial en la seguridad nacional."
      }
    },
    
    // Projects
    projectsTitle: "Proyectos Destacados",
    projectsData: {
      personalCRM: {
        title: "Sistema CRM Personal",
        description: "Sistema integral de gestión de relaciones con clientes construido con Angular, .NET y SQL Server. Incluye gestión de contactos, seguimiento de actividades, flujos de trabajo automatizados y reportes avanzados. Implementa arquitectura limpia y patrones CQRS.",
        tags: ["Angular", ".NET", "SQL Server", "Arquitectura Limpia", "CQRS", "GitHub Actions"],
        codeButton: "Código",
        demoButton: "Demo"
      },
      cleanArchitectureAPI: {
        title: "API con Arquitectura Limpia",
        description: "API RESTful construida con .NET 8 siguiendo principios de arquitectura limpia y patrones de diseño SOLID. Incluye autenticación JWT, logging completo, pruebas unitarias y contenerización Docker. Actualmente en desarrollo.",
        tags: [".NET 8", "Arquitectura Limpia", "SOLID", "JWT", "Docker", "xUnit"],
        codeButton: "Código",
        demoButton: "Demo"
      }
    },
    
    // Certifications
    certificationsTitle: "Certificaciones y Premios",
    certificationsCount: "certificaciones obtenidas",
    showCredential: "Ver credencial",
    issued: "Emitido",
    credentialId: "ID",
    noId: "Sin ID",
    
    // Newsletters
    newslettersTitle: "Newsletters",
    newslettersSubtitle: "Reflexiones y análisis sobre política, tecnología y ciencias naturales",
    newslettersReadMore: "Leer en LinkedIn",
    newslettersBitacoraPoliticaTitle: "Bitácora Política",
    newslettersBitacoraPoliticaDescription: "Análisis y reflexiones sobre política, geopolítica y relaciones internacionales. Explorando conflictos contemporáneos, gobernanza y el futuro de la democracia.",
    newslettersBitacoraPoliticaTags: ["Política", "Geopolítica", "Relaciones Internacionales"] as const,
    newslettersBitacoraDigitalTitle: "Bitácora Digital",
    newslettersBitacoraDigitalDescription: "Explorando tecnología, inteligencia artificial, desarrollo de software y transformación digital. Desde prácticas de programación hasta el impacto de la IA en la sociedad.",
    newslettersBitacoraDigitalTags: ["Tecnología", "IA", "Desarrollo de Software"] as const,
    newslettersBitacoraNaturalTitle: "Bitácora Natural",
    newslettersBitacoraNaturalDescription: "Reflexiones sobre ciencias naturales, clima, medio ambiente y la relación entre tecnología y naturaleza. Entendiendo nuestro planeta a través de la ciencia.",
    newslettersBitacoraNaturalTags: ["Ciencia", "Medio Ambiente", "Naturaleza"] as const,
    
    // Contact
    contactTitle: "Contacto",
    contactSubtitle: "Envíame un mensaje",
    contactDescription: "Completa el formulario para enviarme un mensaje directamente desde la web.",
    subjectLabel: "Asunto",
    subjectPlaceholder: "ej., Propuesta de Colaboración",
    messageLabel: "Mensaje",
    messagePlaceholder: "Escribe tu mensaje aquí...",
    sendButton: "Enviar Mensaje",
    sendingButton: "Enviando...",
    messageSent: "¡Mensaje Enviado!",
    messageSuccess: "Gracias por contactarme, te responderé lo antes posible.",
    errorSending: "Error al Enviar",
    errorDescription: "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.",
    subjectRequired: "El asunto es requerido",
    messageRequired: "El mensaje es requerido",
    
    // Footer
    madeWith: "Hecho con",
    by: "por",
    allRightsReserved: "Todos los derechos reservados.",
    lastUpdate: "Última actualización",
    currentUpdate: "Diciembre 2025",
    
    // Settings
    settings: "Ajustes",
    theme: "Tema",
    language: "Idioma",
    light: "Claro",
    dark: "Oscuro",
    system: "Sistema",
  }
} as const;

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.en;
