import { EMAIL, WHATSAPP_NUMBER } from '../config/contact';
import { ui, type Lang } from '../i18n/ui';

const TECH_STACK = [
  'Astro',
  'React',
  'Angular',
  'Node.js',
  'NestJS',
  'TypeScript',
  'PostgreSQL',
  'AWS',
];

function abs(site: URL, path: string): string {
  return new URL(path, site).href;
}

function langCode(lang: Lang): string {
  return lang === 'es' ? 'es-ES' : 'en-US';
}

function localBusinessId(site: URL): string {
  return `${site.href}#business`;
}

function personId(site: URL): string {
  return `${site.href}#juan`;
}

export function websiteSchema(site: URL, lang: Lang) {
  const t = ui[lang];
  return {
    '@type': 'WebSite',
    '@id': `${site.href}#website`,
    url: site.href,
    name: 'Juan Barba',
    description: t.meta.home.description,
    inLanguage: langCode(lang),
    publisher: { '@id': localBusinessId(site) },
  };
}

export function personSchema(site: URL, lang: Lang) {
  const t = ui[lang];
  const jobTitle =
    lang === 'es'
      ? 'Desarrollador Full-Stack y Arquitecto de Sistemas'
      : 'Full-Stack Developer & System Architect';
  return {
    '@type': 'Person',
    '@id': personId(site),
    name: 'Juan Barba',
    jobTitle,
    description: t.meta.about.description,
    url: abs(site, lang === 'es' ? '/es/about/' : '/about/'),
    image: abs(site, '/og-default.png'),
    email: `mailto:${EMAIL}`,
    telephone: `+${WHATSAPP_NUMBER}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Valencia',
      addressRegion: 'Valencia',
      addressCountry: 'ES',
    },
    knowsAbout: TECH_STACK,
    worksFor: { '@id': localBusinessId(site) },
  };
}

export function localBusinessSchema(site: URL, lang: Lang) {
  const t = ui[lang];
  const homeUrl = abs(site, lang === 'es' ? '/es/' : '/');
  return {
    '@type': 'ProfessionalService',
    '@id': localBusinessId(site),
    name: 'Juan Barba',
    legalName: 'Juan Barba',
    description: t.meta.home.description,
    url: homeUrl,
    image: abs(site, '/og-default.png'),
    logo: abs(site, '/logo.svg'),
    email: `mailto:${EMAIL}`,
    telephone: `+${WHATSAPP_NUMBER}`,
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Valencia',
      addressRegion: 'Valencia',
      addressCountry: 'ES',
    },
    areaServed: [
      { '@type': 'Country', name: 'Spain' },
      { '@type': 'AdministrativeArea', name: 'European Union' },
    ],
    knowsAbout: TECH_STACK,
    founder: { '@id': personId(site) },
    employee: { '@id': personId(site) },
    serviceType: lang === 'es' ? 'Desarrollo de herramientas web a medida' : 'Custom web tool development',
    review: [
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
        author: {
          '@type': 'Person',
          name: lang === 'es' ? 'Propietaria de e-commerce' : 'E-commerce business owner',
        },
        reviewBody: t.caseStudy.quote.replace(/^"|"$/g, ''),
        itemReviewed: { '@id': localBusinessId(site) },
      },
    ],
  };
}

export function serviceSchema(site: URL, lang: Lang) {
  const t = ui[lang].services;
  const pricing = ui[lang].pricing;
  return {
    '@type': 'Service',
    '@id': `${site.href}#service`,
    name: t.title,
    description: t.intro,
    provider: { '@id': localBusinessId(site) },
    serviceType: lang === 'es' ? 'Herramientas web internas y automatización' : 'Internal web tools and automation',
    areaServed: { '@type': 'Country', name: 'Spain' },
    url: abs(site, lang === 'es' ? '/es/services/' : '/services/'),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: pricing.title,
      itemListElement: pricing.tiers.map((tier) => ({
        '@type': 'Offer',
        name: tier.name,
        description: tier.features.join('. '),
        availability: 'https://schema.org/InStock',
        businessFunction: 'https://purl.org/goodrelations/v1#Sell',
      })),
    },
  };
}

export function faqSchema(items: ReadonlyArray<{ q: string; a: string }>) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function breadcrumbSchema(
  site: URL,
  lang: Lang,
  items: Array<{ name: string; path: string }>,
) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(site, item.path),
    })),
  };
}

export function graph(...schemas: object[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas,
  };
}
