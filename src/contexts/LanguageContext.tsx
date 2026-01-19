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
  'hero.subtitle': { es: 'Estudio Creativo', en: 'Creative Studio' },
  'hero.title1': { es: 'Campañas visuales premium', en: 'Premium visual campaigns' },
  'hero.title2': { es: 'para marcas de producto', en: 'for product brands' },
  'hero.title3': { es: '', en: '' },
  'hero.description': { 
    es: 'Dirección creativa y estética de alto nivel para bebidas y cosmética.',
    en: 'High-level creative direction and aesthetics for beverages and cosmetics.'
  },
  'hero.cta': { es: 'Contratar campaña', en: 'Hire campaign' },
  'hero.cta.secondary': { es: 'Ver campañas', en: 'View campaigns' },

  // Services (Positioning Block)
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

  // Process
  'process.subtitle': { es: 'Cómo Trabajamos', en: 'How We Work' },
  'process.title': { es: 'Un proceso claro. Un resultado premium.', en: 'A clear process. A premium result.' },
  'process.step1.title': { es: 'Briefing estratégico', en: 'Strategic briefing' },
  'process.step1.desc': { es: 'Entendemos tu producto, tu marca y tu objetivo.', en: 'We understand your product, your brand and your goal.' },
  'process.step2.title': { es: 'Concepto creativo', en: 'Creative concept' },
  'process.step2.desc': { es: 'Definimos la idea visual que guiará toda la campaña.', en: 'We define the visual idea that will guide the entire campaign.' },
  'process.step3.title': { es: 'Desarrollo visual', en: 'Visual development' },
  'process.step3.desc': { es: 'Creamos los assets visuales con calidad premium.', en: 'We create visual assets with premium quality.' },
  'process.step4.title': { es: 'Entrega final', en: 'Final delivery' },
  'process.step4.desc': { es: 'Una campaña completa lista para comunicar, vender y posicionar.', en: 'A complete campaign ready to communicate, sell and position.' },

  // About (Positioning Block)
  'about.subtitle': { es: 'Estudio', en: 'Studio' },
  'about.title': { es: 'Campañas completas. Sin excepciones.', en: 'Complete campaigns. No exceptions.' },
  'about.description': { 
    es: 'TORO IA es un estudio creativo especializado exclusivamente en campañas visuales completas para marcas de productos.',
    en: 'TORO IA is a creative studio exclusively specialized in complete visual campaigns for product brands.'
  },
  'about.highlight': {
    es: 'Renders aislados, diseños rápidos o trabajos parciales: no.\nCampaña visual premium: sí.',
    en: 'Isolated renders, quick designs or partial work: no.\nPremium visual campaign: yes.'
  },

  // Differential Block
  'differential.subtitle': { es: 'Por Qué Elegirnos', en: 'Why Choose Us' },
  'differential.title': { es: 'Por qué marcas premium eligen TORO IA', en: 'Why premium brands choose TORO IA' },
  'differential.bullet1': { es: 'Enfoque exclusivo en campañas completas', en: 'Exclusive focus on complete campaigns' },
  'differential.bullet2': { es: 'Estética publicitaria de alto nivel', en: 'High-level advertising aesthetics' },
  'differential.bullet3': { es: 'Coherencia visual en toda la campaña', en: 'Visual coherence throughout the campaign' },
  'differential.bullet4': { es: 'Atención extrema al detalle', en: 'Extreme attention to detail' },
  'differential.bullet5': { es: 'Posicionamiento de marca, no solo imágenes', en: 'Brand positioning, not just images' },

  // CTA Final
  'cta.title': { es: '¿Listo para elevar tu producto al siguiente nivel?', en: 'Ready to take your product to the next level?' },
  'cta.description': { es: 'Si tu marca necesita algo más que imágenes bonitas, si buscas una campaña visual premium real, hablemos.', en: 'If your brand needs more than just pretty images, if you\'re looking for a real premium visual campaign, let\'s talk.' },
  'cta.primary': { es: 'Contratar campaña premium', en: 'Hire premium campaign' },
  'cta.secondary': { es: 'Contactar por WhatsApp', en: 'Contact via WhatsApp' },

  // Contact
  'contact.subtitle': { es: 'Contacto', en: 'Contact' },
  'contact.title': { es: '¿Listo para el siguiente nivel?', en: 'Ready for the next level?' },
  'contact.description': { 
    es: 'Si buscas más que imágenes bonitas, hablemos.',
    en: 'If you\'re looking for more than pretty images, let\'s talk.'
  },
  'contact.name': { es: 'Nombre', en: 'Name' },
  'contact.email': { es: 'Email', en: 'Email' },
  'contact.brand': { es: 'Marca / Empresa', en: 'Brand / Company' },
  'contact.message': { es: 'Cuéntanos sobre tu proyecto', en: 'Tell us about your project' },
  'contact.submit': { es: 'Contratar campaña premium', en: 'Hire premium campaign' },
  'contact.whatsapp': { es: 'Contactar por WhatsApp', en: 'Contact via WhatsApp' },

  // Footer
  'footer.rights': { es: 'Todos los derechos reservados', en: 'All rights reserved' },
  'footer.tagline': { es: 'Campañas completas visuales premium para marcas de productos. Bebidas · Cosméticos · Posicionamiento de alto nivel', en: 'Complete premium visual campaigns for product brands. Beverages · Cosmetics · High-level positioning' },
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
