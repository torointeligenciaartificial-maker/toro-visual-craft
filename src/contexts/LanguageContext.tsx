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
  'hero.title1': { es: 'Creamos campañas', en: 'We create premium' },
  'hero.title2': { es: 'visuales premium', en: 'visual campaigns' },
  'hero.title3': { es: 'que convierten productos en marcas.', en: 'that turn products into brands.' },
  'hero.description': { 
    es: 'Campañas completas visuales de alto impacto para bebidas y cosméticos. Concepto, estética y ejecución con nivel publicitario.',
    en: 'High-impact complete visual campaigns for beverages and cosmetics. Concept, aesthetics and execution with advertising-level quality.'
  },
  'hero.cta': { es: 'Contratar campaña premium', en: 'Hire premium campaign' },
  'hero.cta.secondary': { es: 'Ver campañas', en: 'View campaigns' },

  // Services (Positioning Block)
  'services.subtitle': { es: 'Qué Hacemos', en: 'What We Do' },
  'services.title': { es: 'Qué hacemos en TORO IA', en: 'What we do at TORO IA' },
  'services.description': { 
    es: 'No hacemos piezas sueltas. Creamos campañas completas visuales premium.',
    en: 'We don\'t do loose pieces. We create complete premium visual campaigns.'
  },
  'services.concept.title': { es: 'Campañas visuales para bebidas', en: 'Visual campaigns for beverages' },
  'services.concept.desc': { es: 'Visuales publicitarios que transmiten frescura, energía y carácter de marca.', en: 'Advertising visuals that convey freshness, energy and brand character.' },
  'services.production.title': { es: 'Campañas visuales para cosméticos', en: 'Visual campaigns for cosmetics' },
  'services.production.desc': { es: 'Estética cuidada, iluminación precisa y sensación de lujo real.', en: 'Careful aesthetics, precise lighting and a real sense of luxury.' },
  'services.postproduction.title': { es: 'Dirección creativa completa', en: 'Complete creative direction' },
  'services.postproduction.desc': { es: 'Concepto, narrativa visual y coherencia de marca en toda la campaña.', en: 'Concept, visual narrative and brand coherence throughout the campaign.' },
  'services.delivery.title': { es: 'Producción visual premium', en: 'Premium visual production' },
  'services.delivery.desc': { es: 'Renders, escenas y composiciones con acabados de nivel publicitario.', en: 'Renders, scenes and compositions with advertising-level finishes.' },

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
  'about.subtitle': { es: 'Posicionamiento', en: 'Positioning' },
  'about.title': { es: 'No hacemos piezas sueltas. Creamos campañas completas visuales premium.', en: 'We don\'t do loose pieces. We create complete premium visual campaigns.' },
  'about.description': { 
    es: 'TORO IA es un estudio creativo especializado exclusivamente en campañas visuales completas para marcas de productos.\n\nTrabajamos con una visión integral: desde el concepto creativo hasta el resultado final, cuidando cada detalle visual para posicionar tu producto al más alto nivel.',
    en: 'TORO IA is a creative studio exclusively specialized in complete visual campaigns for product brands.\n\nWe work with an integral vision: from the creative concept to the final result, taking care of every visual detail to position your product at the highest level.'
  },
  'about.highlight': {
    es: 'Si buscas renders aislados, diseños rápidos o trabajos parciales, este no es tu lugar.\n\nSi buscas una campaña visual premium, hablamos el mismo idioma.',
    en: 'If you\'re looking for isolated renders, quick designs or partial work, this is not your place.\n\nIf you\'re looking for a premium visual campaign, we speak the same language.'
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
  'contact.title': { es: '¿Listo para elevar tu producto al siguiente nivel?', en: 'Ready to take your product to the next level?' },
  'contact.description': { 
    es: 'Si tu marca necesita algo más que imágenes bonitas, si buscas una campaña visual premium real, hablemos.',
    en: 'If your brand needs more than just pretty images, if you\'re looking for a real premium visual campaign, let\'s talk.'
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
