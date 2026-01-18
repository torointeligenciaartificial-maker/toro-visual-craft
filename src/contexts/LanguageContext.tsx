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
  'hero.subtitle': { es: 'Estudio Creativo Premium', en: 'Premium Creative Studio' },
  'hero.title1': { es: 'Campañas', en: 'Visual' },
  'hero.title2': { es: 'Visuales', en: 'Campaigns' },
  'hero.title3': { es: 'Premium', en: 'Premium' },
  'hero.description': { 
    es: 'Creamos campañas visuales completas que transforman marcas de productos en experiencias memorables. Especialistas en bebidas y cosméticos.',
    en: 'We create complete visual campaigns that transform product brands into memorable experiences. Specialists in beverages and cosmetics.'
  },
  'hero.cta': { es: 'Contratar Campaña', en: 'Hire a Campaign' },
  'hero.cta.secondary': { es: 'Ver Trabajos', en: 'View Work' },

  // Services
  'services.subtitle': { es: 'Qué Ofrecemos', en: 'What We Offer' },
  'services.title': { es: 'Campañas Visuales Completas', en: 'Complete Visual Campaigns' },
  'services.description': { 
    es: 'No hacemos trabajos parciales. Desarrollamos campañas completas de principio a fin, con la calidad que tu marca merece.',
    en: 'We don\'t do partial work. We develop complete campaigns from start to finish, with the quality your brand deserves.'
  },
  'services.concept.title': { es: 'Concepto Creativo', en: 'Creative Concept' },
  'services.concept.desc': { es: 'Desarrollo de la idea visual que define toda la campaña', en: 'Development of the visual idea that defines the entire campaign' },
  'services.production.title': { es: 'Producción Visual', en: 'Visual Production' },
  'services.production.desc': { es: 'Fotografía, renders 3D e ilustraciones de alto impacto', en: 'High-impact photography, 3D renders and illustrations' },
  'services.postproduction.title': { es: 'Postproducción', en: 'Post-production' },
  'services.postproduction.desc': { es: 'Retoque, composición y efectos cinematográficos', en: 'Retouching, composition and cinematic effects' },
  'services.delivery.title': { es: 'Entrega Final', en: 'Final Delivery' },
  'services.delivery.desc': { es: 'Assets optimizados para todos los formatos y plataformas', en: 'Optimized assets for all formats and platforms' },

  // Portfolio
  'portfolio.subtitle': { es: 'Nuestras Campañas', en: 'Our Campaigns' },
  'portfolio.title': { es: 'Trabajos Destacados', en: 'Featured Work' },
  'portfolio.beverages': { es: 'Bebidas', en: 'Beverages' },
  'portfolio.cosmetics': { es: 'Cosméticos', en: 'Cosmetics' },
  'portfolio.all': { es: 'Todos', en: 'All' },
  'portfolio.view': { es: 'Ver Campaña', en: 'View Campaign' },

  // Process
  'process.subtitle': { es: 'Cómo Trabajamos', en: 'How We Work' },
  'process.title': { es: 'Nuestro Proceso', en: 'Our Process' },
  'process.step1.title': { es: 'Briefing', en: 'Briefing' },
  'process.step1.desc': { es: 'Entendemos tu marca, objetivos y visión', en: 'We understand your brand, goals and vision' },
  'process.step2.title': { es: 'Concepto', en: 'Concept' },
  'process.step2.desc': { es: 'Desarrollamos la dirección creativa', en: 'We develop the creative direction' },
  'process.step3.title': { es: 'Producción', en: 'Production' },
  'process.step3.desc': { es: 'Creamos todos los assets visuales', en: 'We create all visual assets' },
  'process.step4.title': { es: 'Entrega', en: 'Delivery' },
  'process.step4.desc': { es: 'Archivos finales listos para usar', en: 'Final files ready to use' },

  // About
  'about.subtitle': { es: 'Sobre Nosotros', en: 'About Us' },
  'about.title': { es: 'TORO IA', en: 'TORO IA' },
  'about.description': { 
    es: 'Somos un estudio creativo especializado exclusivamente en campañas visuales premium para marcas de productos. Nuestra misión es elevar tu marca al siguiente nivel con imágenes que capturan la esencia de tus productos.',
    en: 'We are a creative studio exclusively specialized in premium visual campaigns for product brands. Our mission is to elevate your brand to the next level with images that capture the essence of your products.'
  },
  'about.stat1.number': { es: '50+', en: '50+' },
  'about.stat1.label': { es: 'Campañas Completadas', en: 'Completed Campaigns' },
  'about.stat2.number': { es: '30+', en: '30+' },
  'about.stat2.label': { es: 'Marcas Satisfechas', en: 'Satisfied Brands' },
  'about.stat3.number': { es: '5', en: '5' },
  'about.stat3.label': { es: 'Años de Experiencia', en: 'Years of Experience' },

  // Contact
  'contact.subtitle': { es: 'Contacto', en: 'Contact' },
  'contact.title': { es: 'Iniciemos Tu Campaña', en: 'Let\'s Start Your Campaign' },
  'contact.description': { 
    es: 'Cuéntanos sobre tu marca y juntos crearemos una campaña visual que impacte.',
    en: 'Tell us about your brand and together we\'ll create a visual campaign that impacts.'
  },
  'contact.name': { es: 'Nombre', en: 'Name' },
  'contact.email': { es: 'Email', en: 'Email' },
  'contact.brand': { es: 'Marca / Empresa', en: 'Brand / Company' },
  'contact.message': { es: 'Cuéntanos sobre tu proyecto', en: 'Tell us about your project' },
  'contact.submit': { es: 'Enviar Mensaje', en: 'Send Message' },
  'contact.whatsapp': { es: 'O contáctanos por WhatsApp', en: 'Or contact us via WhatsApp' },

  // Footer
  'footer.rights': { es: 'Todos los derechos reservados', en: 'All rights reserved' },
  'footer.tagline': { es: 'Campañas Visuales Premium', en: 'Premium Visual Campaigns' },
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
