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
  'nav.about': { es: 'Nosotros', en: 'About' },
  'nav.blog': { es: 'Blog', en: 'Blog' },
  'nav.contact': { es: 'Contacto', en: 'Contact' },
  
  // Hero
  'hero.subtitle': { es: 'Consultoría de Autoridad Visual', en: 'Visual Authority Consulting' },
  'hero.title1': { es: 'Elevo el Estatus Visual de CEOs', en: 'I Elevate the Visual Status of CEOs' },
  'hero.title2': { es: 'y Fundadores para Dominar el Mercado de Lujo.', en: 'and Founders to Dominate the Luxury Market.' },
  'hero.description': { 
    es: 'No vendemos fotos bonitas. Implementamos sistemas visuales de prestigio para marcas premium que necesitan justificar precios High-Ticket.',
    en: 'We don\'t sell pretty photos. We implement prestige visual systems for premium brands that need to justify High-Ticket prices.'
  },
  'hero.cta': { es: 'SOLICITAR AUDITORÍA DE PRESTIGIO', en: 'REQUEST PRESTIGE AUDIT' },
  'hero.cta.secondary': { es: 'Ver campañas', en: 'View campaigns' },

  // Problem Section
  'problem.title': { es: '¿Por qué su producto de 200€ parece de 30€?', en: 'Why does your €200 product look like it\'s worth €30?' },
  'problem.description': { 
    es: 'La mayoría de las marcas premium tienen un punto ciego: su estética no está a la altura de su precio. Están perdiendo clientes de alto valor cada día por una imagen visual mediocre. Yo cierro esa brecha.',
    en: 'Most premium brands have a blind spot: their aesthetics don\'t match their price point. They\'re losing high-value customers every day due to mediocre visual identity. I close that gap.'
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
  'process.step1.title': { es: 'Fase I — Diagnóstico de Percepción', en: 'Phase I — Perception Diagnosis' },
  'process.step1.desc': { es: 'Análisis brutal de su imagen actual y los errores que le están costando dinero. Definición de la narrativa de estatus.', en: 'Brutal analysis of your current image and the mistakes that are costing you money. Status narrative definition.' },
  'process.step2.title': { es: 'Fase II — Ingeniería Visual de Lujo', en: 'Phase II — Luxury Visual Engineering' },
  'process.step2.desc': { es: 'Producción visual (foto/video) de nivel Fortune 500. No es artesanía, es la infraestructura visual de su poder.', en: 'Fortune 500-level visual production (photo/video). It\'s not craftsmanship, it\'s the visual infrastructure of your power.' },
  'process.step3.title': { es: 'Fase III — Despliegue de Autoridad', en: 'Phase III — Authority Deployment' },
  'process.step3.desc': { es: 'Consultoría estratégica para implementar los nuevos activos y asegurar que cada visual proyecte dominio de mercado.', en: 'Strategic consulting to implement new assets and ensure every visual projects market dominance.' },

  // About (Who We Are)
  'about.subtitle': { es: 'Estudio', en: 'Studio' },
  'about.title': { es: 'Toro IA no es una agencia.', en: 'Toro IA is not an agency.' },
  'about.description': { 
    es: 'Somos especialistas en la construcción de estatus visual. Mi enfoque es técnico, seco y orientado exclusivamente a los resultados de negocio de CEOs y Fundadores. Si busca un proveedor complaciente, este no es su lugar. Si busca dominar su nicho a través de la percepción de lujo, hablemos.',
    en: 'We specialize in building visual status. My approach is technical, dry, and exclusively focused on the business results of CEOs and Founders. If you\'re looking for a complacent provider, this is not the place. If you want to dominate your niche through luxury perception, let\'s talk.'
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
  'contact.productType': { es: 'Tipo de producto', en: 'Product type' },
  'contact.productType.placeholder': { es: 'Selecciona una opción', en: 'Select an option' },
  'contact.productType.beverage': { es: 'Bebida', en: 'Beverage' },
  'contact.productType.cosmetics': { es: 'Cosmética', en: 'Cosmetics' },
  'contact.budget': { es: 'Presupuesto aproximado', en: 'Approximate budget' },
  'contact.budget.placeholder': { es: 'Selecciona una opción', en: 'Select an option' },
  'contact.budget.option1': { es: 'Hasta 1.200 €', en: 'Up to €1,200' },
  'contact.budget.option2': { es: '1.200 € – 2.500 €', en: '€1,200 – €2,500' },
  'contact.budget.option3': { es: 'Estoy valorando opciones', en: 'I\'m evaluating options' },
  'contact.message': { es: 'Mensaje', en: 'Message' },
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
