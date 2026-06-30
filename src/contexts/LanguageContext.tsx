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
  'nav.cta': { es: 'Reserva tu diagnóstico gratuito de 20 min', en: 'Book your free 20-min diagnosis' },

  // Ecosystem Section
  'ecosystem.subtitle': { es: 'Ecosistema', en: 'Ecosystem' },
  'ecosystem.title': { es: 'Ecosistema de Autoridad Total', en: 'Total Authority Ecosystem' },
  'ecosystem.description': {
    es: 'Transformamos pymes en búnkeres de venta blindados: estrategia, sistemas e identidad operando como una sola infraestructura.',
    en: 'We transform SMEs into armored sales bunkers: strategy, systems and identity operating as a single infrastructure.'
  },
  'ecosystem.p1.subtitle': { es: 'Fase 1 — Diagnóstico: Identificamos los 3 procesos que más tiempo consumen', en: 'Phase 1 — Diagnosis: We identify the 3 most time-consuming processes' },
  'ecosystem.p1.title': { es: 'Consultoría Estratégica', en: 'Strategic Consulting' },
  'ecosystem.p1.desc': {
    es: 'Auditoría quirúrgica de procesos y hoja de ruta digital para CEOs. Definimos dónde se pierde margen y dónde se construye autoridad.',
    en: 'Surgical audit of processes and digital roadmap for CEOs. We define where margin is lost and where authority is built.'
  },
  'ecosystem.p2.subtitle': { es: 'Fase 2 — Implantación: Automatizamos sobre lo que ya usas, sin cambiar nada', en: 'Phase 2 — Implementation: We automate on top of what you already use, without changing anything' },
  'ecosystem.p2.title': { es: 'Ingeniería de Procesos e IA', en: 'Process & AI Engineering' },
  'ecosystem.p2.desc': {
    es: 'Implementación técnica con n8n y Make para eliminar la fricción operativa. Sistemas que escalan sin depender de tareas manuales.',
    en: 'Technical implementation with n8n and Make to eliminate operational friction. Systems that scale without relying on manual tasks.'
  },
  'ecosystem.p3.subtitle': { es: 'Fase 3 — Resultados: Tu equipo trabaja solo. Medimos el ahorro en horas y euros', en: 'Phase 3 — Results: Your team works alone. We measure savings in hours and euros' },
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
  'hero.subtitle': { es: 'Automatización con IA', en: 'AI Automation' },
  'hero.title1': { es: 'Automatización con IA para empresas de seguridad y servicios profesionales', en: 'AI automation for security and professional services companies' },
  'hero.title2': { es: '', en: '' },
  'hero.description': { 
    es: 'Tu equipo pierde entre 5 y 20 horas a la semana en tareas repetitivas. La IA ya puede hacerlas sola. Eliminamos trabajo manual sin cambiar tus sistemas.',
    en: 'Your team loses 5 to 20 hours a week on repetitive tasks. AI can already handle them alone. We eliminate manual work without changing your systems.'
  },
  'hero.cta': { es: 'SOLICITAR AUDITORÍA DE PRESTIGIO', en: 'REQUEST PRESTIGE AUDIT' },
  'hero.cta.secondary': { es: 'Ver proceso', en: 'View process' },
  'hero.microcopy': { es: 'Responderé en menos de 24h. Sin compromiso.', en: 'I will reply within 24 hours. No commitment.' },

  // Benefits Section
  'benefits.subtitle': { es: 'Beneficios', en: 'Benefits' },
  'benefits.title': { es: 'Recupera tiempo real desde la primera semana', en: 'Recover real time from week one' },
  'benefits.b1': { es: 'Recupera entre 5 y 20 horas semanales sin contratar más personal.', en: 'Recover between 5 and 20 hours per week without hiring more staff.' },
  'benefits.b2': { es: 'Automatización sobre tus herramientas actuales: sin migraciones.', en: 'Automation on top of your current tools: no migrations.' },
  'benefits.b3': { es: 'Reducción inmediata de errores operativos.', en: 'Immediate reduction of operational errors.' },
  'benefits.b4': { es: 'Ahorro visible desde la primera semana.', en: 'Visible savings from the first week.' },

  // Problem Section (now testimonial)
  'problem.title': { es: 'Testimonios', en: 'Testimonials' },
  'problem.description': { 
    es: 'Un cliente redujo más de 4.000 € al año en tareas repetitivas sin contratar a nadie más. La automatización liberó horas críticas y aumentó la capacidad operativa.',
    en: 'A client reduced over €4,000 a year in repetitive tasks without hiring anyone. Automation freed critical hours and increased operational capacity.'
  },
  'problem.attribution': { es: '— Empresa de servicios profesionales, Toledo', en: '— Professional services company, Toledo' },

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

  // Process (Cómo trabajamos)
  'process.subtitle': { es: 'Metodología', en: 'Methodology' },
  'process.title': { es: 'Cómo trabajamos', en: 'How we work' },
  'process.description': { es: 'Un proceso de 6 semanas con resultados visibles desde la primera.', en: 'A 6-week process with visible results from week one.' },
  'process.step1.title': { es: 'Fase 1 — Diagnóstico', en: 'Phase 1 — Diagnosis' },
  'process.step1.desc': { es: 'Identificamos los 3 cuellos de botella que más horas consumen.', en: 'We identify the 3 bottlenecks that consume the most hours.' },
  'process.step2.title': { es: 'Fase 2 — Implantación', en: 'Phase 2 — Implementation' },
  'process.step2.desc': { es: 'Automatizamos sobre tus herramientas actuales con n8n/Make. Sin cambiar nada.', en: 'We automate on top of your current tools with n8n/Make. Without changing anything.' },
  'process.step3.title': { es: 'Fase 3 — Resultados', en: 'Phase 3 — Results' },
  'process.step3.desc': { es: 'Tu equipo trabaja solo. Medimos ahorro mensual en horas y euros.', en: 'Your team works alone. We measure monthly savings in hours and euros.' },

  // About (Who We Are)
  'about.subtitle': { es: 'Estudio', en: 'Studio' },
  'about.title': { es: 'Toroia no es una agencia de marketing.', en: 'Toroia is not a marketing agency.' },
  'about.description': { 
    es: 'Somos consultores especializados en digitalización con IA para empresas de seguridad y servicios profesionales. Nuestro trabajo es eliminar el trabajo manual de tu equipo y que notes el ahorro desde la primera semana.',
    en: 'We are consultants specialized in AI-driven digitalization for security and professional services companies. Our job is to eliminate manual work from your team and make you feel the savings from week one.'
  },

  // CTA Final
  'cta.subtitle': { es: 'Exclusividad', en: 'Exclusivity' },
  'cta.title': { es: '¿Tienen el valor de cobrar lo que realmente valen?', en: 'Do you have the courage to charge what you\'re really worth?' },
  'cta.description': { es: 'Solicite una Auditoría de Prestigio. Solo aceptamos 3 marcas por mes.', en: 'Request a Prestige Audit. We only accept 3 brands per month.' },
  'cta.primary': { es: 'SOLICITAR AUDITORÍA DE PRESTIGIO', en: 'REQUEST PRESTIGE AUDIT' },
  'cta.microcopy': { es: 'Responderé en menos de 24h. Sin compromiso.', en: 'I will reply within 24 hours. No commitment.' },

  // Contact
  'contact.subtitle': { es: 'Contacto', en: 'Contact' },
  'contact.title': { es: '¿Cuántas horas pierde tu empresa a la semana?', en: 'How many hours does your company lose per week?' },
  'contact.description': { 
    es: 'Cuéntanoslo en 2 minutos y te decimos exactamente qué se puede automatizar.',
    en: 'Tell us in 2 minutes and we\'ll tell you exactly what can be automated.'
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
