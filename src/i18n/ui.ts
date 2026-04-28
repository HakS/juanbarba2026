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
      title: 'Custom Web Tools for Small Businesses | JB Dev',
      description:
        'Custom web tools by a full-stack dev in Valencia, Spain. Simple ones in 2–3 days, larger systems on a fixed timeline. Dashboards, booking flows, automation.',
      home: {
        title: 'Custom Web Tools for Small Businesses | JB Dev',
        description:
          'Custom web tools by a full-stack dev in Valencia, Spain. Simple ones in 2–3 days, larger systems on a fixed timeline. Dashboards, booking flows, automation.',
      },
      services: {
        title: 'Internal Tools, Dashboards & Automation | JB Dev',
        description:
          'Internal tools, dashboards, and process automation for small businesses in Spain. Fixed scope, fixed price — small tools in days, full systems in weeks.',
      },
      about: {
        title: 'About Juan Barba — Full-Stack Developer in Spain',
        description:
          'Juan Barba is a full-stack developer based in Valencia, Spain, building simple internal tools that replace spreadsheets and manual workflows for small businesses.',
      },
      privacy: {
        title: 'Privacy | JB Dev',
        description:
          'Privacy notice for juanbarba.vercel.app — what data is collected, why, and your rights under GDPR.',
      },
    },
    nav: {
      services: 'Services',
      caseStudy: 'Case Study',
      about: 'About',
      message: 'Message',
    },
    hero: {
      badge: 'Available for new projects',
      headlineMain: 'Stop managing your business manually.',
      headlineAccent: 'I build simple web tools for you.',
      description:
        'Simple tools shipped in 2-3 days. Larger systems on a fixed timeline. Built for efficiency, not complexity.',
      cta: 'Message me on WhatsApp',
      expertiseLabel: 'Expertise',
      expertise: `${yearsExperience}+ years of System Architecture`,
      imageAlt: 'Abstract 3D rendering representing system architecture',
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
      imageAlt: 'Architecture diagram of a custom web tool',
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
        {
          icon: 'rocket_launch',
          title: 'Landing Pages',
          body: 'A focused one-page site that turns visitors into messages, bookings, or sales. Built to load fast and convert.',
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
      author: 'Owner, e-commerce business in Valencia',
      stats: [
        { value: '15h+', label: 'Weekly Time Saved' },
        { value: '90%', label: 'Reduced Errors' },
      ],
      imageAlt: 'Order tracking dashboard built as an internal tool',
    },
    process: {
      eyebrow: 'How I Work',
      title: 'The Protocol',
      intro:
        'Four steps from your manual pain point to a working tool you own. No surprises, no scope creep.',
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
          body: 'Live by your agreed delivery date. Guided onboarding and full ownership of the code, hosting, and keys.',
        },
      ],
    },
    about: {
      title: 'Meet Juan.',
      paragraphs: [
        `I'm Juan Barba, a full-stack developer now based in Valencia, Spain. Over the last ${yearsExperience}+ years I've built software systems remotely for international teams — bringing that experience to small businesses across Spain.`,
        "I've seen complex systems fail because they were over-engineered. My passion is the inverse: creating the simplest possible solution for complex problems — a tool you can actually use, not a platform you have to learn.",
        "I don't just write code; I architect systems that work for you, so you don't have to work for the system.",
      ],
      stackLabel: 'Stack',
      portraitAlt: 'Juan Barba, full-stack developer in Valencia, Spain',
    },
    philosophy: {
      eyebrow: 'How I Think',
      title: 'What I value when I build.',
      principles: [
        {
          title: 'Simple beats clever.',
          body: 'A tool you can use without a manual is worth more than a platform with infinite options. Every feature has a cost — in attention, in maintenance, in confusion. I cut what doesn\'t earn its place.',
        },
        {
          title: 'Own your stack.',
          body: 'Renting your business logic from a SaaS works until the platform changes its terms. Code you own runs on your terms, fits your workflow, and has no per-seat penalty as you grow.',
        },
        {
          title: 'Ship in days, not quarters.',
          body: 'Most internal tools don\'t need to be perfect — they need to exist. A working version of a small problem this week beats the elegant solution that ships in six months.',
        },
        {
          title: 'Honest scope.',
          body: 'Fixed price after a real conversation about what the tool needs to do. If a SaaS or a no-code tool would solve your problem better, I\'ll tell you — even if it means I don\'t get the project.',
        },
        {
          title: 'The spec is the work.',
          body: 'AI writes code, drafts copy, generates UI — fast. What it doesn\'t do is decide what to build, judge when it\'s good enough, or stand behind the result when it ships. I use AI every day; what you\'re paying for is the spec — turning a vague pain point into a system that fits your business and survives real users.',
        },
      ],
    },
    background: {
      eyebrow: 'Background',
      title: 'Where I\'ve worked.',
      body:
        `Over ${yearsExperience}+ years I\'ve built and led software for companies in fintech, e-commerce, logistics, and healthtech, working remotely with international teams across the Americas and Europe. I\'ve been a senior engineer, a tech lead, and the only developer in a small startup. The common thread: small teams shipping real systems under real constraints.`,
      cta: 'Send me a message →',
    },
    services: {
      eyebrow: 'What I Build',
      title: 'Internal tools, dashboards & automation.',
      intro:
        'I build simple, custom web tools that replace spreadsheets, manual processes, and the wrong SaaS. Small tools ship in days, larger systems on a fixed timeline — and you own the code.',
      bullets: [
        {
          title: 'Internal Dashboards',
          body: 'A single screen that shows your team what to do next. Real-time data, no training needed.',
        },
        {
          title: 'Process Automation',
          body: 'Replace WhatsApp tracking, paper forms, and copy-paste workflows with one-click flows.',
        },
        {
          title: 'Booking & Reservation Systems',
          body: 'Self-service calendars that sync with your team and notify clients automatically.',
        },
        {
          title: 'Order & Client Management',
          body: 'Track orders, customers, and revenue in one place — instead of three spreadsheets and a chat group.',
        },
        {
          title: 'Custom Forms & Sync',
          body: 'Online forms that write straight into your database, your CRM, or your team chat.',
        },
        {
          title: 'High-Conversion Landing Pages',
          body: 'A fast, focused one-page site that turns visitors into messages, bookings, or sales.',
        },
      ],
      audienceTitle: 'Who this is for',
      audience: [
        'Small businesses drowning in spreadsheets and chat threads.',
        'Teams across Spain that have outgrown a SaaS but can\'t afford a full software department.',
        'Founders who want a real tool — owned, hosted, and editable — not a rented dashboard.',
      ],
      ownershipTitle: 'You own the code',
      ownership:
        "Every tool I build is yours. Source code, hosting credentials, and a documented handover. No lock-in, no recurring license fees, no platform that can change its terms next quarter.",
    },
    pricing: {
      eyebrow: 'Pricing',
      title: 'Fixed scope. Fixed price.',
      intro:
        'Each project is quoted with a single number after a 15-minute diagnostic call. No hourly billing, no scope creep. The tiers below show what fits each delivery window.',
      tiers: [
        {
          name: 'Quick Tool',
          price: 'On request',
          time: '2–3 days',
          features: [
            'Single-purpose tool (form, dashboard, calculator)',
            'Hosting setup included',
            '1 round of refinements',
          ],
        },
        {
          name: 'Custom Tool',
          price: 'On request',
          time: '1–2 weeks',
          features: [
            'Multi-screen tool with database',
            'Authentication and roles',
            'Email/WhatsApp notifications',
            '2 rounds of refinements',
          ],
          highlighted: true,
        },
        {
          name: 'Full System',
          price: 'On request',
          time: '3–6 weeks',
          features: [
            'Multiple integrated tools',
            'Custom integrations (Stripe, CRMs, APIs)',
            'Admin panel + user-facing interface',
            'Ongoing support optional',
          ],
        },
      ],
      footnote: 'Quotes are fixed in EUR (IVA not included) once scope is agreed.',
    },
    faq: {
      eyebrow: 'Common Questions',
      title: 'FAQ',
      items: [
        {
          q: 'How much does a custom web tool cost?',
          a: "Each project gets a fixed quote after a 15-minute diagnostic call — no hourly billing, no surprise invoices. Cost depends on scope: a single-purpose tool that ships in 2–3 days lands at the low end; a multi-tool system with integrations sits much higher. Send me what you have in mind on WhatsApp and I'll come back with a fixed quote within 48 hours.",
        },
        {
          q: 'How long does it take?',
          a: 'A focused single-purpose tool can be live in 2–3 days. A custom multi-screen tool with database and authentication usually takes 1–2 weeks. Larger systems take 3–6 weeks. I commit to a delivery date in the quote.',
        },
        {
          q: 'What technology do you use?',
          a: 'I match the stack to the problem. Most tools are built with React or Astro on the frontend, Node.js or NestJS on the backend, and PostgreSQL or Supabase for data. Hosting is usually Vercel, Cloudflare, or AWS depending on what fits.',
        },
        {
          q: 'Do you work with clients outside Valencia?',
          a: 'Yes. I work remotely with clients across Spain and the EU. Valencia is my base, but everything is delivered online — diagnostic calls, progress reviews, handover, and support.',
        },
        {
          q: 'Do I own the code at the end?',
          a: "Yes, fully. You get the source code in your own GitHub repository, hosting credentials in your own accounts, and a documented handover. There are no recurring license fees and no platform lock-in. If you ever want to switch developers, everything is yours to take.",
        },
        {
          q: 'How is this different from using Airtable, Notion, or another SaaS?',
          a: "SaaS platforms are great until you outgrow them. They charge per user, restrict logic to what their template allows, and can change their terms or pricing anytime. A custom tool fits your exact workflow, doesn't charge per seat, and stays under your control. The right answer depends on the use case — I'll tell you honestly when SaaS is the better fit.",
        },
        {
          q: "Can't I just ask ChatGPT to build this?",
          a: "For a quick prototype, you should — try it. But a tool your business actually depends on takes more than prompts: deciding which 5% of features matter, handling auth and payments without leaking data, and being one person with a phone number when something breaks on a Sunday night. I use AI every day to move faster; what you hire is the judgment that directs it, and the accountability that it works on Monday morning.",
        },
        {
          q: 'What if my needs grow later?',
          a: "You can hire me again to extend the tool, hire any other developer to do it (you own the code), or keep it as-is. The architecture is documented so the next person — me or someone else — can pick it up without reverse-engineering.",
        },
        {
          q: 'How do we start?',
          a: 'Send me a message on WhatsApp describing the problem in your own words. We schedule a 15-minute call, I send you a fixed quote within 48 hours, and if it works, we start. Most projects begin within a week of first contact.',
        },
      ],
    },
    finalCTA: {
      title: 'Simplify your workflow.',
      description:
        "Stop doing manually what a tool can do in seconds. Let's scale your operations.",
      cta: 'Message me on WhatsApp',
    },
    breadcrumb: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      privacy: 'Privacy',
    },
    footer: {
      links: [
        { label: 'Services', href: '/services/' },
        { label: 'About', href: '/about/' },
        { label: 'Privacy', href: '/privacy/' },
        { label: 'WhatsApp', href: 'whatsapp' },
      ],
      tagline: 'Built for Efficiency',
      location: 'Valencia, Spain · Working remotely across Spain',
    },
    privacy: {
      title: 'Privacy',
      lastUpdated: 'Last updated: 2026-04-27',
      who: {
        heading: 'Who runs this site',
        body: 'Juan Barba — independent developer based in Valencia, Spain.',
        contactLabel: 'Contact:',
      },
      data: {
        heading: 'What data this site collects',
        intro: 'This site uses Vercel Web Analytics for anonymous traffic measurement. It records:',
        items: [
          'Pages visited and their referrers',
          'Which "Message me on WhatsApp" CTA you click and on which page',
          'A daily-rotating hash of your IP address and user agent — used only to count unique daily visits, then discarded',
        ],
        nothingStored:
          'No cookies are set. Nothing is stored on your device. No cross-site tracking. No advertising profiles.',
      },
      why: {
        heading: 'Why',
        body: 'Legal basis: legitimate interest (Art. 6(1)(f) GDPR) — to measure which content actually helps visitors and which CTAs work, so the site can keep improving.',
      },
      thirdParties: {
        heading: 'Third parties',
        vercel:
          'Vercel Inc. — hosts this site and provides analytics. Vercel processes data inside the EU.',
        vercelLink: 'Vercel privacy policy',
        whatsapp:
          'WhatsApp / Meta — when you click "Message me on WhatsApp", you leave this site and enter WhatsApp under Meta\'s terms.',
      },
      rights: {
        heading: 'Your rights',
        body:
          'You can request access to, correction of, or deletion of any personal data this site holds about you. Email me directly — there is almost certainly nothing to delete (the analytics data is anonymous), but the right is yours.',
        aepd: 'You may also lodge a complaint with the Spanish Data Protection Authority',
        aepdLink: 'AEPD',
      },
    },
  },
  es: {
    meta: {
      title: 'Herramientas Web a Medida para PyMEs | JB Dev',
      description:
        'Herramientas web a medida en Valencia, España. Las simples en 2–3 días, sistemas más grandes con plazo cerrado. Dashboards, reservas, automatización.',
      home: {
        title: 'Herramientas Web a Medida para PyMEs | JB Dev',
        description:
          'Herramientas web a medida en Valencia, España. Las simples en 2–3 días, sistemas más grandes con plazo cerrado. Dashboards, reservas, automatización.',
      },
      services: {
        title: 'Herramientas Internas, Dashboards y Automatización | JB Dev',
        description:
          'Herramientas internas, dashboards y automatización para PyMEs en España. Alcance y precio cerrados — pequeñas en días, sistemas completos en semanas.',
      },
      about: {
        title: 'Sobre Juan Barba — Desarrollador Full-Stack en España',
        description:
          'Juan Barba, desarrollador full-stack en Valencia, España. Construye herramientas internas simples que sustituyen hojas de cálculo y procesos manuales para PyMEs.',
      },
      privacy: {
        title: 'Privacidad | JB Dev',
        description:
          'Aviso de privacidad de juanbarba.vercel.app — qué datos se recogen, por qué, y tus derechos bajo el RGPD.',
      },
    },
    nav: {
      services: 'Servicios',
      caseStudy: 'Caso de Éxito',
      about: 'Sobre Mí',
      message: 'Escribir',
    },
    hero: {
      badge: 'Disponible para nuevos proyectos',
      headlineMain: 'Deja de gestionar tu negocio manualmente.',
      headlineAccent: 'Construyo herramientas web simples para ti.',
      description:
        'Herramientas simples entregadas en 2-3 días. Sistemas más grandes con plazo cerrado. Construidas para la eficiencia, no para la complejidad.',
      cta: 'Escríbeme por WhatsApp',
      expertiseLabel: 'Experiencia',
      expertise: `Más de ${yearsExperience} años en Arquitectura de Sistemas`,
      imageAlt: 'Representación 3D abstracta de la arquitectura de un sistema',
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
      imageAlt: 'Arquitectura de una herramienta web a medida',
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
        {
          icon: 'rocket_launch',
          title: 'Landing Pages',
          body: 'Una página enfocada que convierte visitas en mensajes, reservas o ventas. Hecha para cargar rápido y convertir.',
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
      author: 'Propietaria, e-commerce en Valencia',
      stats: [
        { value: '15h+', label: 'Horas Ahorradas a la Semana' },
        { value: '90%', label: 'Errores Reducidos' },
      ],
      imageAlt: 'Dashboard de seguimiento de pedidos como herramienta interna',
    },
    process: {
      eyebrow: 'Cómo Trabajo',
      title: 'El Protocolo',
      intro:
        'Cuatro pasos desde tu punto de dolor manual hasta una herramienta funcionando que tú controlas. Sin sorpresas, sin desbordes de alcance.',
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
          body: 'En producción en la fecha acordada. Onboarding guiado y propiedad total del código, el hosting y las llaves.',
        },
      ],
    },
    about: {
      title: 'Conoce a Juan.',
      paragraphs: [
        `Soy Juan Barba, desarrollador full-stack ahora basado en Valencia, España. Durante más de ${yearsExperience} años he construido sistemas software en remoto para equipos internacionales — y ahora aplico esa experiencia al servicio de PyMEs en toda España.`,
        'He visto sistemas complejos fallar por estar sobre-diseñados. Mi pasión es la inversa: crear la solución más simple posible para problemas complejos — una herramienta que de verdad puedas usar, no una plataforma que tengas que aprender.',
        'No solo escribo código; diseño sistemas que trabajan para ti, para que tú no tengas que trabajar para el sistema.',
      ],
      stackLabel: 'Stack',
      portraitAlt: 'Juan Barba, desarrollador full-stack en Valencia, España',
    },
    philosophy: {
      eyebrow: 'Cómo Pienso',
      title: 'Qué valoro al construir.',
      principles: [
        {
          title: 'Simple le gana a inteligente.',
          body: 'Una herramienta que puedes usar sin manual vale más que una plataforma con opciones infinitas. Cada función tiene un coste — de atención, mantenimiento y confusión. Recorto lo que no se gana su sitio.',
        },
        {
          title: 'Sé dueño de tu stack.',
          body: 'Alquilar la lógica de tu negocio a un SaaS funciona hasta que la plataforma cambia condiciones. El código propio corre bajo tus reglas, encaja con tu flujo y no penaliza por usuario al crecer.',
        },
        {
          title: 'Entregar en días, no en trimestres.',
          body: 'La mayoría de herramientas internas no necesitan ser perfectas — necesitan existir. Una versión que funciona del problema pequeño esta semana vence a la solución elegante que se entrega en seis meses.',
        },
        {
          title: 'Alcance honesto.',
          body: 'Precio cerrado tras una conversación real sobre qué tiene que hacer la herramienta. Si un SaaS o una herramienta no-code resuelve mejor tu problema, te lo digo — aunque eso signifique no llevarme el proyecto.',
        },
        {
          title: 'La especificación es el trabajo.',
          body: 'La IA escribe código, redacta copy y genera UI — rápido. Lo que no hace es decidir qué construir, juzgar cuándo está suficientemente bien, ni responder por el resultado cuando entra en producción. Yo uso IA todos los días; por lo que pagas es por la especificación — convertir un dolor vago en un sistema que encaja con tu negocio y aguanta usuarios reales.',
        },
      ],
    },
    background: {
      eyebrow: 'Trayectoria',
      title: 'Dónde he trabajado.',
      body:
        `En más de ${yearsExperience} años he construido y liderado software para empresas de fintech, e-commerce, logística y healthtech, trabajando en remoto con equipos internacionales de América y Europa. He sido senior, tech lead y el único desarrollador de una startup pequeña. El hilo común: equipos pequeños entregando sistemas reales bajo restricciones reales.`,
      cta: 'Envíame un mensaje →',
    },
    services: {
      eyebrow: 'Lo Que Construyo',
      title: 'Herramientas internas, dashboards y automatización.',
      intro:
        'Construyo herramientas web simples y a medida que sustituyen hojas de cálculo, procesos manuales y SaaS que no encajan. Las pequeñas están en producción en días, las más grandes con plazo cerrado — y el código es tuyo.',
      bullets: [
        {
          title: 'Dashboards Internos',
          body: 'Una pantalla que dice a tu equipo qué hacer ahora. Datos en tiempo real, sin formación.',
        },
        {
          title: 'Automatización de Procesos',
          body: 'Sustituye seguimientos por WhatsApp, formularios en papel y copia-pega por flujos de un clic.',
        },
        {
          title: 'Sistemas de Reservas',
          body: 'Calendarios autoservicio que sincronizan con tu equipo y avisan a clientes automáticamente.',
        },
        {
          title: 'Gestión de Pedidos y Clientes',
          body: 'Pedidos, clientes e ingresos en un solo sitio — en lugar de tres hojas de cálculo y un grupo de WhatsApp.',
        },
        {
          title: 'Formularios y Sincronización',
          body: 'Formularios web que escriben directamente en tu base de datos, tu CRM o el chat de tu equipo.',
        },
        {
          title: 'Landing Pages que Convierten',
          body: 'Una página enfocada y rápida que convierte visitas en mensajes, reservas o ventas.',
        },
      ],
      audienceTitle: 'Para quién es esto',
      audience: [
        'PyMEs ahogadas en hojas de cálculo y conversaciones de chat.',
        'Equipos en España que han superado un SaaS pero no pueden permitirse un departamento de software.',
        'Fundadores que quieren una herramienta real — propia, alojada y editable — no un dashboard alquilado.',
      ],
      ownershipTitle: 'El código es tuyo',
      ownership:
        'Cada herramienta que construyo es tuya. Código fuente, credenciales de hosting y entrega documentada. Sin lock-in, sin licencias recurrentes, sin plataformas que cambien sus condiciones el próximo trimestre.',
    },
    pricing: {
      eyebrow: 'Precios',
      title: 'Alcance cerrado. Precio fijo.',
      intro:
        'Cada proyecto se cotiza con un solo número tras una llamada de diagnóstico de 15 minutos. Sin facturación por horas, sin desbordes. Los niveles de abajo muestran qué cabe en cada ventana de entrega.',
      tiers: [
        {
          name: 'Herramienta Rápida',
          price: 'Por consultar',
          time: '2–3 días',
          features: [
            'Herramienta de un solo propósito (formulario, dashboard, calculadora)',
            'Configuración de hosting incluida',
            '1 ronda de ajustes',
          ],
        },
        {
          name: 'Herramienta a Medida',
          price: 'Por consultar',
          time: '1–2 semanas',
          features: [
            'Herramienta multi-pantalla con base de datos',
            'Autenticación y roles',
            'Notificaciones por email/WhatsApp',
            '2 rondas de ajustes',
          ],
          highlighted: true,
        },
        {
          name: 'Sistema Completo',
          price: 'Por consultar',
          time: '3–6 semanas',
          features: [
            'Múltiples herramientas integradas',
            'Integraciones a medida (Stripe, CRMs, APIs)',
            'Panel de administración + interfaz de usuario',
            'Soporte continuo opcional',
          ],
        },
      ],
      footnote: 'Las cotizaciones se cierran en EUR (IVA no incluido) una vez acordado el alcance.',
    },
    faq: {
      eyebrow: 'Preguntas Frecuentes',
      title: 'FAQ',
      items: [
        {
          q: '¿Cuánto cuesta una herramienta web a medida?',
          a: 'Cada proyecto recibe un presupuesto cerrado tras una llamada de diagnóstico de 15 minutos — sin facturación por horas, sin facturas sorpresa. El coste depende del alcance: una herramienta de un solo propósito que entrega en 2–3 días queda en la parte baja; un sistema multi-herramienta con integraciones, bastante más arriba. Cuéntame lo que tienes en mente por WhatsApp y te respondo con un presupuesto cerrado en 48 horas.',
        },
        {
          q: '¿Cuánto tiempo lleva?',
          a: 'Una herramienta enfocada de un solo propósito puede estar lista en 2–3 días. Una herramienta multi-pantalla con base de datos y autenticación normalmente toma 1–2 semanas. Sistemas más grandes, 3–6 semanas. La fecha de entrega va dentro del presupuesto.',
        },
        {
          q: '¿Qué tecnología usas?',
          a: 'Adapto el stack al problema. La mayoría de herramientas usan React o Astro en frontend, Node.js o NestJS en backend, y PostgreSQL o Supabase para datos. El hosting suele ser Vercel, Cloudflare o AWS según convenga.',
        },
        {
          q: '¿Trabajas con clientes fuera de Valencia?',
          a: 'Sí. Trabajo en remoto con clientes de toda España y la UE. Valencia es mi base, pero todo se hace online — llamadas de diagnóstico, revisiones de progreso, entrega y soporte.',
        },
        {
          q: '¿El código es mío al final?',
          a: 'Sí, completamente. Recibes el código fuente en tu propio repositorio de GitHub, las credenciales de hosting en tus propias cuentas y una entrega documentada. Sin licencias recurrentes, sin lock-in. Si algún día quieres cambiar de desarrollador, todo es tuyo.',
        },
        {
          q: '¿En qué se diferencia esto de usar Airtable, Notion u otro SaaS?',
          a: 'Las plataformas SaaS están bien hasta que las superas. Cobran por usuario, limitan la lógica a lo que su plantilla permite y pueden cambiar precios o condiciones en cualquier momento. Una herramienta a medida encaja con tu flujo exacto, no cobra por puesto y queda bajo tu control. La respuesta depende del caso — te diré honestamente cuándo el SaaS es mejor opción.',
        },
        {
          q: '¿No puedo pedirle a ChatGPT que lo construya?',
          a: 'Para un prototipo rápido, deberías — pruébalo. Pero una herramienta de la que depende tu negocio pide más que prompts: decidir qué 5% de funciones importan, gestionar autenticación y pagos sin filtrar datos, y tener a alguien con un número de teléfono cuando algo falla un domingo por la noche. Yo uso IA todos los días para ir más rápido; lo que contratas es el criterio que la dirige, y la responsabilidad de que funcione el lunes por la mañana.',
        },
        {
          q: '¿Y si mis necesidades crecen más adelante?',
          a: 'Puedes contratarme de nuevo para ampliar la herramienta, contratar a cualquier otro desarrollador (el código es tuyo) o dejarla tal cual. La arquitectura está documentada para que el siguiente — yo u otra persona — pueda recogerla sin tener que descifrarla.',
        },
        {
          q: '¿Cómo empezamos?',
          a: 'Mándame un mensaje por WhatsApp describiendo el problema con tus palabras. Programamos una llamada de 15 minutos, te envío un presupuesto cerrado en 48 horas y, si encaja, arrancamos. La mayoría de proyectos comienzan en la semana siguiente al primer contacto.',
        },
      ],
    },
    finalCTA: {
      title: 'Simplifica tu flujo de trabajo.',
      description:
        'Deja de hacer manualmente lo que una herramienta puede hacer en segundos. Vamos a escalar tus operaciones.',
      cta: 'Escríbeme por WhatsApp',
    },
    breadcrumb: {
      home: 'Inicio',
      services: 'Servicios',
      about: 'Sobre Mí',
      privacy: 'Privacidad',
    },
    footer: {
      links: [
        { label: 'Servicios', href: '/es/services/' },
        { label: 'Sobre Mí', href: '/es/about/' },
        { label: 'Privacidad', href: '/es/privacy/' },
        { label: 'WhatsApp', href: 'whatsapp' },
      ],
      tagline: 'Construido para la Eficiencia',
      location: 'Valencia, España · Trabajando en remoto en toda España',
    },
    privacy: {
      title: 'Privacidad',
      lastUpdated: 'Última actualización: 2026-04-27',
      who: {
        heading: 'Quién gestiona este sitio',
        body: 'Juan Barba — desarrollador independiente en Valencia, España.',
        contactLabel: 'Contacto:',
      },
      data: {
        heading: 'Qué datos recoge este sitio',
        intro: 'Este sitio usa Vercel Web Analytics para medir tráfico de forma anónima. Se registra:',
        items: [
          'Páginas visitadas y desde dónde llegan',
          'Qué botón de "Escríbeme por WhatsApp" pulsas y en qué página',
          'Un hash diario rotatorio de tu IP y user agent — solo para contar visitas únicas del día, luego se descarta',
        ],
        nothingStored:
          'No se instalan cookies. No se guarda nada en tu dispositivo. Sin seguimiento entre sitios. Sin perfiles publicitarios.',
      },
      why: {
        heading: 'Por qué',
        body: 'Base legal: interés legítimo (Art. 6(1)(f) RGPD) — medir qué contenidos ayudan a los visitantes y qué CTAs funcionan, para seguir mejorando el sitio.',
      },
      thirdParties: {
        heading: 'Terceros',
        vercel:
          'Vercel Inc. — aloja este sitio y proporciona la analítica. Vercel procesa los datos dentro de la UE.',
        vercelLink: 'Política de privacidad de Vercel',
        whatsapp:
          'WhatsApp / Meta — al pulsar "Escríbeme por WhatsApp", sales de este sitio y entras en WhatsApp bajo los términos de Meta.',
      },
      rights: {
        heading: 'Tus derechos',
        body:
          'Puedes solicitar acceso, rectificación o eliminación de cualquier dato personal que este sitio mantenga sobre ti. Escríbeme directamente — casi con seguridad no habrá nada que borrar (los datos analíticos son anónimos), pero el derecho es tuyo.',
        aepd: 'También puedes presentar una reclamación ante la Agencia Española de Protección de Datos',
        aepdLink: 'AEPD',
      },
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

export function localizedPath(lang: Lang, path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'en') return cleanPath;
  if (cleanPath === '/') return '/es/';
  return `/es${cleanPath}`;
}
