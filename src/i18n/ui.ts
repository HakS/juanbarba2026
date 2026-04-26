export const languages = {
  en: 'EN',
  es: 'ES',
} as const;

export const defaultLang = 'en' as const;

export type Lang = keyof typeof languages;

const CAREER_START_YEAR = 2011;
const yearsExperience = new Date().getFullYear() - CAREER_START_YEAR;

export const ui = {
  en: {
    meta: {
      title: 'Juan Barba | Architect of Systems - Simple Web Tools Specialist',
      description:
        'Custom web tools ready in 2-3 days. Simple, practical, and ready to use. Built for efficiency, not complexity.',
    },
    nav: {
      howItWorks: 'How I Work',
      caseStudy: 'Case Study',
      about: 'About',
      message: 'Message',
    },
    hero: {
      badge: 'Available for new projects',
      headlineMain: 'Stop managing your business manually.',
      headlineAccent: 'I build simple web tools for you.',
      description:
        'Custom web tools ready in 2-3 days. Simple, practical, and ready to use. Built for efficiency, not complexity.',
      cta: 'Message me on WhatsApp',
      expertiseLabel: 'Expertise',
      expertise: `${yearsExperience}+ years of System Architecture`,
    },
    problem: {
      eyebrow: 'The Friction',
      title: 'Are you stuck in manual loops?',
      cards: [
        {
          icon: 'table_view',
          title: 'Excel Overload',
          body: 'Spreadsheets that have become too slow, confusing, or prone to accidental data deletion.',
        },
        {
          icon: 'chat',
          title: 'Chat Chaos',
          body: "Losing track of requests in a sea of messages. No clear overview of what's pending or done.",
        },
        {
          icon: 'history',
          title: 'Manual Cycles',
          body: 'Doing the same data entry over and over again instead of focusing on growing your business.',
        },
      ],
    },
    solution: {
      title: 'Automating the manual into one-click tools.',
      imageAlt: 'Abstract 3D digital wireframe representing system architecture',
      features: [
        {
          title: 'Browser-based',
          body: 'Access from any device without installing anything.',
        },
        {
          title: 'Zero Setup',
          body: 'Lives in the cloud, always up to date and ready to work.',
        },
        {
          title: 'Pure Simplicity',
          body: 'Designed with a "one-button" philosophy. No training needed.',
        },
        {
          title: 'Bespoke Build',
          body: 'I build exactly what you need, not generic bloated software.',
        },
      ],
    },
    examples: {
      title: 'Built for Action',
      cards: [
        {
          icon: 'groups',
          title: 'Client Management',
          body: 'Tracks customer history, preferences, and total spending in one view.',
        },
        {
          icon: 'inventory_2',
          title: 'Order Tracking',
          body: 'Visualizes status from "Pending" to "Delivered" in one tap.',
        },
        {
          icon: 'dynamic_form',
          title: 'Online Sync Form',
          body: 'Syncs data automatically with your database and notifies you instantly.',
        },
        {
          icon: 'calendar_month',
          title: 'Booking System',
          body: 'Manages calendars effortlessly. Let clients book their own time slots.',
        },
      ],
      labels: {
        pending: 'PENDING',
        done: 'DONE',
        syncing: 'SYNCING DATA',
      },
    },
    caseStudy: {
      eyebrow: 'Real Impact',
      title: 'Chaos to 1-Click.',
      quote:
        "\"We were losing hours everyday just answering 'where is my order?' in WhatsApp. Juan built a simple dashboard where we just click once, and the customer gets an automated update. We saved 15+ hours a week and eliminated 90% of our manual tracking errors.\"",
      stats: [
        { value: '15h+', label: 'Weekly Time Saved' },
        { value: '90%', label: 'Reduced Errors' },
      ],
      imageAlt: 'Close-up of a minimalist data visualization dashboard',
    },
    process: {
      title: 'The Protocol',
      steps: [
        {
          title: 'Analysis',
          body: 'A 15-minute diagnostic call to understand your manual pain points.',
        },
        {
          title: 'Blueprint',
          body: 'A clear execution plan and fixed price. Zero ambiguity.',
        },
        {
          title: 'Synthesis',
          body: 'I architect the tool. You watch it come to life via a private link.',
        },
        {
          title: 'Handover',
          body: 'Live in 72 hours. Guided onboarding and full ownership keys.',
        },
      ],
    },
    about: {
      title: 'Meet Juan.',
      paragraphs: [
        `With over ${yearsExperience} years as a Full-Stack developer, I've seen complex systems fail because they were over-engineered. My passion is the inverse: creating the simplest possible solution for complex problems.`,
        "I don't just write code; I architect systems that work for you, so you don't have to work for the system.",
      ],
      stackLabel: 'Stack',
      portraitAlt: 'Portrait of Juan',
    },
    finalCTA: {
      title: 'Simplify your workflow.',
      description:
        "Stop doing manually what a tool can do in seconds. Let's scale your operations.",
      cta: 'Message me on WhatsApp',
    },
    footer: {
      links: [
        { label: 'Architecture', href: '#how-it-works' },
        { label: 'Process', href: '#case-study' },
        { label: 'Contact', href: '#about' },
      ],
      tagline: 'Built for Efficiency',
    },
  },
  es: {
    meta: {
      title: 'Juan Barba | Arquitecto de Sistemas — Herramientas Web Simples a Medida',
      description:
        'Herramientas web a medida listas en 2-3 días. Simples, prácticas y listas para usar. Construidas para la eficiencia, no para la complejidad.',
    },
    nav: {
      howItWorks: 'Cómo Trabajo',
      caseStudy: 'Caso de Éxito',
      about: 'Sobre Mí',
      message: 'Escribir',
    },
    hero: {
      badge: 'Disponible para nuevos proyectos',
      headlineMain: 'Deja de gestionar tu negocio manualmente.',
      headlineAccent: 'Construyo herramientas web simples para ti.',
      description:
        'Herramientas web a medida listas en 2-3 días. Simples, prácticas y listas para usar. Construidas para la eficiencia, no para la complejidad.',
      cta: 'Escríbeme por WhatsApp',
      expertiseLabel: 'Experiencia',
      expertise: `Más de ${yearsExperience} años en Arquitectura de Sistemas`,
    },
    problem: {
      eyebrow: 'La Fricción',
      title: '¿Atrapado en bucles manuales?',
      cards: [
        {
          icon: 'table_view',
          title: 'Exceso de Excel',
          body: 'Hojas de cálculo que se han vuelto lentas, confusas o propensas al borrado accidental de datos.',
        },
        {
          icon: 'chat',
          title: 'Caos en el Chat',
          body: 'Pierdes el rastro de las solicitudes en un mar de mensajes. Sin una visión clara de qué está pendiente o hecho.',
        },
        {
          icon: 'history',
          title: 'Ciclos Manuales',
          body: 'Hacer la misma entrada de datos una y otra vez en lugar de centrarte en hacer crecer tu negocio.',
        },
      ],
    },
    solution: {
      title: 'Automatizando lo manual en herramientas de un clic.',
      imageAlt: 'Estructura 3D abstracta que representa la arquitectura del sistema',
      features: [
        {
          title: 'En el Navegador',
          body: 'Acceso desde cualquier dispositivo sin instalar nada.',
        },
        {
          title: 'Cero Instalación',
          body: 'Vive en la nube, siempre actualizado y listo para trabajar.',
        },
        {
          title: 'Simplicidad Pura',
          body: 'Diseñado con la filosofía de "un solo botón". Sin formación necesaria.',
        },
        {
          title: 'Hecho a Medida',
          body: 'Construyo exactamente lo que necesitas, no software genérico e inflado.',
        },
      ],
    },
    examples: {
      title: 'Construido para Actuar',
      cards: [
        {
          icon: 'groups',
          title: 'Gestión de Clientes',
          body: 'Registra el historial, las preferencias y el gasto total de cada cliente en una sola vista.',
        },
        {
          icon: 'inventory_2',
          title: 'Seguimiento de Pedidos',
          body: 'Visualiza el estado de "Pendiente" a "Entregado" en un solo toque.',
        },
        {
          icon: 'dynamic_form',
          title: 'Formulario en Línea',
          body: 'Sincroniza datos automáticamente con tu base de datos y te avisa al instante.',
        },
        {
          icon: 'calendar_month',
          title: 'Sistema de Reservas',
          body: 'Gestiona calendarios sin esfuerzo. Deja que tus clientes reserven su propio horario.',
        },
      ],
      labels: {
        pending: 'PENDIENTE',
        done: 'HECHO',
        syncing: 'SINCRONIZANDO',
      },
    },
    caseStudy: {
      eyebrow: 'Impacto Real',
      title: 'Del caos a un clic.',
      quote:
        '"Perdíamos horas cada día respondiendo \'¿dónde está mi pedido?\' en WhatsApp. Juan creó un panel sencillo donde, con un solo clic, el cliente recibe un aviso automático. Ahorramos más de 15 horas a la semana y eliminamos el 90% de los errores manuales de seguimiento."',
      stats: [
        { value: '15h+', label: 'Horas Ahorradas a la Semana' },
        { value: '90%', label: 'Errores Reducidos' },
      ],
      imageAlt: 'Primer plano de un panel minimalista de visualización de datos',
    },
    process: {
      title: 'El Protocolo',
      steps: [
        {
          title: 'Análisis',
          body: 'Una llamada de diagnóstico de 15 minutos para entender tus puntos de dolor manuales.',
        },
        {
          title: 'Plano',
          body: 'Un plan de ejecución claro y un precio cerrado. Cero ambigüedad.',
        },
        {
          title: 'Síntesis',
          body: 'Yo construyo la herramienta. Tú la ves cobrar vida en un enlace privado.',
        },
        {
          title: 'Entrega',
          body: 'En el aire en 72 horas. Onboarding guiado y todas las llaves del proyecto.',
        },
      ],
    },
    about: {
      title: 'Conoce a Juan.',
      paragraphs: [
        `Con más de ${yearsExperience} años como desarrollador Full-Stack, he visto sistemas complejos fallar por estar sobre-diseñados. Mi pasión es la inversa: crear la solución más simple posible para problemas complejos.`,
        'No solo escribo código; diseño sistemas que trabajan para ti, para que tú no tengas que trabajar para el sistema.',
      ],
      stackLabel: 'Stack',
      portraitAlt: 'Retrato de Juan',
    },
    finalCTA: {
      title: 'Simplifica tu flujo de trabajo.',
      description:
        'Deja de hacer manualmente lo que una herramienta puede hacer en segundos. Vamos a escalar tus operaciones.',
      cta: 'Escríbeme por WhatsApp',
    },
    footer: {
      links: [
        { label: 'Arquitectura', href: '#how-it-works' },
        { label: 'Proceso', href: '#case-study' },
        { label: 'Contacto', href: '#about' },
      ],
      tagline: 'Construido para la Eficiencia',
    },
  },
} as const;

export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split('/').filter(Boolean)[0];
  if (seg && seg in languages) return seg as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return ui[lang];
}
