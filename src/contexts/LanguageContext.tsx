import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

type Language = 'es' | 'en';

interface Translations {
  [key: string]: {
    es: string;
    en: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.home': { es: 'Inicio', en: 'Home' },
  'nav.services': { es: 'Servicios', en: 'Services' },
  'nav.campaigns': { es: 'Campañas', en: 'Campaigns' },
  'nav.process': { es: 'Proceso', en: 'Process' },
  'nav.methodology': { es: 'Metodología', en: 'Methodology' },
  'nav.solutions': { es: 'Soluciones', en: 'Solutions' },
  'nav.solutions.consulting': { es: 'Consultoría de Operaciones', en: 'Operations Consulting' },
  'nav.solutions.automation': { es: 'Sistemas de Automatización', en: 'Automation Systems' },
  'nav.solutions.identity': { es: 'Identidad de Autoridad', en: 'Authority Identity' },
  'nav.cases': { es: 'Casos de Éxito', en: 'Case Studies' },
  'nav.about': { es: 'Nosotros', en: 'About' },
  'nav.blog': { es: 'Blog', en: 'Blog' },
  'nav.contact': { es: 'Contacto', en: 'Contact' },
  'nav.cta': { es: 'Concertar Cita', en: 'Book a Meeting' },

  // Ecosystem Section
  'ecosystem.subtitle': { es: 'Ecosistema', en: 'Ecosystem' },
  'ecosystem.title': { es: 'Ecosistema de Autoridad Total', en: 'Total Authority Ecosystem' },
  'ecosystem.description': {
    es: 'Transformamos pymes en búnkeres de venta blindados: estrategia, sistemas e identidad operando como una sola infraestructura.',
    en: 'We transform SMEs into armored sales bunkers: strategy, systems and identity operating as a single infrastructure.'
  },
  'ecosystem.p1.subtitle': { es: 'Pilar 1 — El Cerebro', en: 'Pillar 1 — The Brain' },
  'ecosystem.p1.title': { es: 'Consultoría Estratégica', en: 'Strategic Consulting' },
  'ecosystem.p1.desc': {
    es: 'Auditoría quirúrgica de procesos y hoja de ruta digital para CEOs. Definimos dónde se pierde margen y dónde se construye autoridad.',
    en: 'Surgical audit of processes and digital roadmap for CEOs. We define where margin is lost and where authority is built.'
  },
  'ecosystem.p2.subtitle': { es: 'Pilar 2 — El Músculo', en: 'Pillar 2 — The Muscle' },
  'ecosystem.p2.title': { es: 'Ingeniería de Procesos e IA', en: 'Process & AI Engineering' },
  'ecosystem.p2.desc': {
    es: 'Implementación técnica con n8n y Make para eliminar la fricción operativa. Sistemas que escalan sin depender de tareas manuales.',
    en: 'Technical implementation with n8n and Make to eliminate operational friction. Systems that scale without relying on manual tasks.'
  },
  'ecosystem.p3.subtitle': { es: 'Pilar 3 — La Armadura', en: 'Pillar 3 — The Armor' },
  'ecosystem.p3.title': { es: 'Ingeniería de Autoridad Visual', en: 'Visual Authority Engineering' },
  'ecosystem.p3.desc': {
    es: 'Campañas premium y activos visuales de alto estatus. La estética que justifica el precio y blinda la percepción de marca.',
    en: 'Premium campaigns and high-status visual assets. The aesthetic that justifies the price and shields brand perception.'
  },

  // Case Studies
  'cases.subtitle': { es: 'Casos de Éxito', en: 'Case Studies' },
  'cases.title': { es: 'Resultados bajo acuerdo de confidencialidad', en: 'Results under confidentiality agreement' },
  'cases.description': {
    es: 'Trabajamos con CEOs que exigen discreción. Los detalles de cada operación se comparten únicamente en la Auditoría de Prestigio.',
    en: 'We work with CEOs who demand discretion. Operation details are shared only during the Prestige Audit.'
  },
  'cases.confidential': { es: 'Confidencial', en: 'Confidential' },
  'cases.placeholder': {
    es: 'Caso disponible bajo NDA en la sesión privada.',
    en: 'Case available under NDA during the private session.'
  },
  
  // Hero
  'hero.subtitle': { es: 'Ingeniería de Autoridad', en: 'Authority Engineering' },
  'hero.title1': { es: 'Construyo la Infraestructura de Autoridad y Estatus', en: 'I Build the Authority and Status Infrastructure' },
  'hero.title2': { es: 'para CEOs que dominan su mercado.', en: 'for CEOs who dominate their market.' },
  'hero.description': { 
    es: 'Fusionamos campañas visuales de élite con sistemas de automatización n8n/Make. Justifique su precio High-Ticket con una operativa que no falla.',
    en: 'We fuse elite visual campaigns with n8n/Make automation systems. Justify your High-Ticket price with operations that never fail.'
  },
  'hero.cta': { es: 'SOLICITAR AUDITORÍA DE PRESTIGIO', en: 'REQUEST PRESTIGE AUDIT' },
  'hero.cta.secondary': { es: 'Ver proceso', en: 'View process' },

  // Problem Section
  'problem.title': { es: '¿Por qué su producto de 200€ parece de 30€?', en: 'Why does your €200 product look like it\'s worth €30?' },
  'problem.description': { 
    es: 'La mayoría de las marcas premium tienen un punto ciego: su estética y su operativa no están a la altura de su precio. Yo cierro esa brecha fusionando el Yo Digital con ingeniería de procesos.',
    en: 'Most premium brands have a blind spot: their aesthetics and operations don\'t match their price point. I close that gap by fusing the Digital Self with process engineering.'
  },

  // Services (kept for nav compatibility)
  'services.subtitle': { es: 'Servicios', en: 'Services' },
  'services.title': { es: 'Qué hacemos', en: 'What we do' },
  'services.description': { 
    es: 'Campañas completas. Sin piezas sueltas.',
    en: 'Complete campaigns. No loose pieces.'
  },
  'services.concept.title': { es: 'Bebidas', en: 'Beverages' },
  'services.concept.desc': { es: 'Frescura, energía y carácter de marca.', en: 'Freshness, energy and brand character.' },
  'services.production.title': { es: 'Cosméticos', en: 'Cosmetics' },
  'services.production.desc': { es: 'Estética cuidada. Sensación de lujo real.', en: 'Careful aesthetics. Real sense of luxury.' },
  'services.postproduction.title': { es: 'Dirección creativa', en: 'Creative direction' },
  'services.postproduction.desc': { es: 'Concepto y coherencia de marca.', en: 'Concept and brand coherence.' },
  'services.delivery.title': { es: 'Producción visual', en: 'Visual production' },
  'services.delivery.desc': { es: 'Acabados de nivel publicitario.', en: 'Advertising-level finishes.' },

  // Portfolio
  'portfolio.subtitle': { es: 'Campañas', en: 'Campaigns' },
  'portfolio.title': { es: 'Campañas visuales premium', en: 'Premium visual campaigns' },
  'portfolio.description': {
    es: 'Cada campaña es un sistema visual completo, diseñado para destacar, diferenciar y vender.',
    en: 'Each campaign is a complete visual system, designed to stand out, differentiate and sell.'
  },
  'portfolio.beverages': { es: 'Bebidas', en: 'Beverages' },
  'portfolio.cosmetics': { es: 'Cosméticos', en: 'Cosmetics' },
  'portfolio.all': { es: 'Todos', en: 'All' },
  'portfolio.view': { es: 'Ver campañas', en: 'View campaigns' },

  // Process (Protocolo de Prestigio)
  'process.subtitle': { es: 'Metodología', en: 'Methodology' },
  'process.title': { es: 'El Protocolo de Prestigio de Toro IA', en: 'The Toro IA Prestige Protocol' },
  'process.description': { es: 'El camino clínico a la autoridad de mercado.', en: 'The clinical path to market authority.' },
  'process.step1.title': { es: 'Fase I — Diagnóstico de Autoridad', en: 'Phase I — Authority Diagnosis' },
  'process.step1.desc': { es: 'Análisis quirúrgico de imagen y procesos. Definición de la narrativa de dominio que justifica su posición.', en: 'Surgical analysis of image and processes. Definition of the dominance narrative that justifies your position.' },
  'process.step2.title': { es: 'Fase II — Ingeniería de Sistemas y Lujo', en: 'Phase II — Systems and Luxury Engineering' },
  'process.step2.desc': { es: 'Despliegue visual premium e integración de ecosistemas n8n/Make. La estética y la operativa, una sola infraestructura.', en: 'Premium visual deployment and integration of n8n/Make ecosystems. Aesthetics and operations, one single infrastructure.' },
  'process.step3.title': { es: 'Fase III — Blindaje de Mercado', en: 'Phase III — Market Shielding' },
  'process.step3.desc': { es: 'Consultoría estratégica para escalar sin depender de tareas manuales. Su autoridad, blindada por sistema.', en: 'Strategic consulting to scale without relying on manual tasks. Your authority, shielded by system.' },

  // About (Who We Are)
  'about.subtitle': { es: 'Estudio', en: 'Studio' },
  'about.title': { es: 'Toro IA no es una agencia.', en: 'Toro IA is not an agency.' },
  'about.description': { 
    es: 'Somos especialistas en la construcción de estatus visual. Enfoque técnico, seco y orientado a resultados de negocio. Si busca un proveedor complaciente, este no es su lugar.',
    en: 'We specialize in building visual status. Technical, dry, business-results-driven approach. If you\'re looking for a complacent provider, this is not the place.'
  },

  // CTA Final
  'cta.subtitle': { es: 'Exclusividad', en: 'Exclusivity' },
  'cta.title': { es: '¿Tienen el valor de cobrar lo que realmente valen?', en: 'Do you have the courage to charge what you\'re really worth?' },
  'cta.description': { es: 'Solicite una Auditoría de Prestigio. Solo aceptamos 3 marcas por mes.', en: 'Request a Prestige Audit. We only accept 3 brands per month.' },
  'cta.primary': { es: 'SOLICITAR AUDITORÍA DE PRESTIGIO', en: 'REQUEST PRESTIGE AUDIT' },
  'cta.microcopy': { 
    es: 'Solo aceptamos 3 marcas por mes. Analizamos cada proyecto antes de aceptarlo.',
    en: 'We only accept 3 brands per month. We analyze each project before accepting it.'
  },

  // Contact
  'contact.subtitle': { es: 'Contacto', en: 'Contact' },
  'contact.title': { es: 'Solicite su Auditoría de Prestigio', en: 'Request your Prestige Audit' },
  'contact.description': { 
    es: 'Complete el formulario y le contactaremos en las próximas 24 horas para evaluar si su marca es candidata.',
    en: 'Fill out the form and we will contact you within the next 24 hours to evaluate if your brand is a candidate.'
  },
  'contact.formIntro': { 
    es: 'Solo trabajamos con marcas que buscan dominar su categoría. Cuéntenos su caso.',
    en: 'We only work with brands that seek to dominate their category. Tell us your case.'
  },
  'contact.name': { es: 'Nombre', en: 'Name' },
  'contact.email': { es: 'Email', en: 'Email' },
  'contact.brand': { es: 'Marca / Empresa', en: 'Brand / Company' },
  'contact.productType': { es: 'Sector', en: 'Industry' },
  'contact.productType.placeholder': { es: 'Selecciona una opción', en: 'Select an option' },
  'contact.productType.beverage': { es: 'Bebidas', en: 'Beverages' },
  'contact.productType.cosmetics': { es: 'Cosmética', en: 'Cosmetics' },
  'contact.productType.fashion': { es: 'Moda / Lujo', en: 'Fashion / Luxury' },
  'contact.productType.food': { es: 'Alimentación', en: 'Food' },
  'contact.productType.other': { es: 'Otro', en: 'Other' },
  'contact.budget': { es: 'Presupuesto aproximado', en: 'Approximate budget' },
  'contact.budget.placeholder': { es: 'Selecciona una opción', en: 'Select an option' },
  'contact.budget.option1': { es: 'Hasta 1.200 €', en: 'Up to €1,200' },
  'contact.budget.option2': { es: '1.200 € – 2.500 €', en: '€1,200 – €2,500' },
  'contact.budget.option3': { es: 'Estoy valorando opciones', en: 'I\'m evaluating options' },
  'contact.message': { es: 'Mensaje', en: 'Message' },
  'contact.bottleneck': { es: '¿Cuál es su principal cuello de botella operativo?', en: 'What is your main operational bottleneck?' },
  'contact.bottleneck.placeholder': { es: 'Describa el proceso que hoy le impide escalar.', en: 'Describe the process that prevents you from scaling today.' },
  'contact.submit': { es: 'SOLICITAR AUDITORÍA', en: 'REQUEST AUDIT' },

  // Footer
  'footer.rights': { es: 'Todos los derechos reservados', en: 'All rights reserved' },
  'footer.tagline': { es: 'Consultoría de autoridad visual premium para marcas de producto.', en: 'Premium visual authority consulting for product brands.' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = useCallback((key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[language];
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
