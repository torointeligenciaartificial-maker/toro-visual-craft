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
  'nav.solutions': { es: 'Precios', en: 'Prices' },
  'nav.solutions.consulting': { es: 'Consultoría de Operaciones', en: 'Operations Consulting' },
  'nav.solutions.automation': { es: 'Sistemas de Automatización', en: 'Automation Systems' },
  'nav.solutions.identity': { es: 'Identidad de Autoridad', en: 'Authority Identity' },
  'nav.cases': { es: 'Opiniones', en: 'Reviews' },
  'nav.about': { es: 'Nosotros', en: 'About' },
  'nav.blog': { es: 'Blog', en: 'Blog' },
  'nav.contact': { es: 'Contacto', en: 'Contact' },
  // Academy
  'nav.academy': { es: 'Academy', en: 'Academy' },
  'academy.subtitle': { es: 'ToroIA Academy · Campus virtual', en: 'ToroIA Academy · Virtual campus' },
  'academy.title': { es: 'Aprende inteligencia artificial desde cero, con alguien que te acompaña', en: 'Learn artificial intelligence from scratch, with someone by your side' },
  'academy.description': {
    es: 'Un curso de 30 horas que combina clases presenciales con un campus online propio. Pensado para personas que nunca han usado la IA, para ayuntamientos que quieren formar a sus vecinos y para equipos de pymes que quieren dar el primer paso.',
    en: 'A 30-hour course combining in-person classes with our own online campus. Designed for people who have never used AI, for town councils training their residents and for small business teams taking the first step.',
  },
  'academy.stat1.value': { es: '30 h', en: '30 h' },
  'academy.stat1.label': { es: '10 presenciales + 20 online, a tu ritmo', en: '10 in person + 20 online, at your pace' },
  'academy.stat2.value': { es: '12–15', en: '12–15' },
  'academy.stat2.label': { es: 'personas por grupo, trato cercano', en: 'people per group, close attention' },
  'academy.stat3.value': { es: '4', en: '4' },
  'academy.stat3.label': { es: 'sesiones presenciales de 2,5 horas', en: 'in-person sessions of 2.5 hours' },
  'academy.stat4.value': { es: 'Diploma', en: 'Diploma' },
  'academy.stat4.label': { es: 'ToroIA Academy al terminar', en: 'ToroIA Academy on completion' },
  'academy.f1.title': { es: 'Sin conocimientos previos', en: 'No prior knowledge' },
  'academy.f1.desc': { es: 'Empezamos por lo básico y en tu idioma, sin tecnicismos. Nadie se queda atrás.', en: 'We start with the basics in plain language, without jargon. Nobody is left behind.' },
  'academy.f2.title': { es: 'Presencial y online', en: 'In person and online' },
  'academy.f2.desc': { es: 'Clases en directo para resolver dudas y un campus online para practicar cuando te venga bien.', en: 'Live classes to solve doubts and an online campus to practise whenever it suits you.' },
  'academy.f3.title': { es: 'Práctico desde el primer día', en: 'Practical from day one' },
  'academy.f3.desc': { es: 'Cuestionarios por tema y ejercicios reales para que salgas usando la IA, no solo sabiendo qué es.', en: 'Quizzes by topic and real exercises so you leave using AI, not just knowing what it is.' },
  'academy.f4.title': { es: 'Para ayuntamientos y empresas', en: 'For town councils and businesses' },
  'academy.f4.desc': { es: 'Llevamos el curso a tu localidad o a tu equipo. Nosotros ponemos la plataforma, la tutorización y los materiales.', en: 'We bring the course to your town or your team. We provide the platform, tutoring and materials.' },
  'academy.cta.primary': { es: 'Prueba una lección gratis', en: 'Try a free lesson' },
  'academy.cta.secondary': { es: 'Entrar al campus', en: 'Enter the campus' },
  'academy.cta.talk': { es: 'Quiero el curso en mi ayuntamiento o empresa', en: 'I want the course for my town council or business' },
  'academy.note': { es: 'La lección de muestra dura unos 10 minutos y no necesita registro.', en: 'The sample lesson takes about 10 minutes and needs no sign-up.' },
  'academy.mock.label': { es: 'Campus virtual', en: 'Virtual campus' },
  'academy.mock.course': { es: 'IA para todos · Básico 1', en: 'AI for everyone · Basic 1' },
  'academy.mock.progress': { es: 'Tu progreso', en: 'Your progress' },
  'academy.mock.l1': { es: 'Qué es la inteligencia artificial', en: 'What artificial intelligence is' },
  'academy.mock.l2': { es: 'Tus primeras preguntas a la IA', en: 'Your first questions to AI' },
  'academy.mock.l3': { es: 'La IA en el día a día', en: 'AI in everyday life' },
  'academy.mock.l4': { es: 'Cuestionario y diploma', en: 'Quiz and diploma' },

  'nav.cta': { es: 'Escríbenos por WhatsApp', en: 'Write to us on WhatsApp' },

  // Ecosystem Section

  // Hero
  'hero.subtitle': { es: 'Webs y apps especialistas en abogados', en: 'Websites and apps for law firms' },
  'hero.title1': { es: 'Tu despacho responde solo, también fuera de horario', en: 'Your firm answers on its own, even after hours' },
  'hero.title2': { es: '', en: '' },
  'hero.description': {
    es: 'Hacemos webs y apps para despachos de abogados: tu web profesional, tu ficha de Google y un asistente de WhatsApp que contesta las dudas de siempre.',
    en: 'We build websites and apps for law firms: a professional website, your Google profile and a WhatsApp assistant that answers the usual questions.'
  },
  'hero.cta': { es: 'Escríbenos por WhatsApp', en: 'Message us on WhatsApp' },
  'hero.cta.secondary': { es: 'Ver proceso', en: 'View process' },
  'hero.microcopy': { es: 'O llama al 663 66 33 53. Te respondo en menos de 24 horas, sin compromiso.', en: 'Or call 663 66 33 53. I reply within 24 hours, no commitment.' },

  // Benefits Section
  'benefits.subtitle': { es: 'Beneficios', en: 'Benefits' },
  'benefits.title': { es: 'Menos llamadas repetidas, más clientes que te eligen', en: 'Fewer repeated calls, more clients who choose you' },
  'benefits.b1': { es: 'El asistente contesta horarios, documentos y primeras dudas, y te pasa solo lo que importa.', en: 'The assistant answers opening hours, documents and first questions, and passes you only what matters.' },
  'benefits.b2': { es: 'Una web clara y una ficha de Google con reseñas hacen que te elijan a ti.', en: 'A clear website and a Google profile with reviews make people choose you.' },
  'benefits.b3': { es: 'Lo montamos sobre tu WhatsApp y tu correo de siempre, sin cambiar cómo trabajas.', en: 'We set it up on your usual WhatsApp and email, without changing how you work.' },
  'benefits.b4': { es: 'Lo pruebas tú antes de que lo vea ningún cliente.', en: 'You test it before any client sees it.' },

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
  'process.description': { es: 'Tres pasos sencillos, sin complicaciones.', en: 'Three simple steps, no complications.' },
  'process.step1.title': { es: 'Paso 1 — Hablamos', en: 'Step 1 — We talk' },
  'process.step1.desc': { es: 'Hablamos 20 minutos y vemos qué preguntas te repiten más.', en: 'We talk for 20 minutes and see which questions you get asked most.' },
  'process.step2.title': { es: 'Paso 2 — Lo montamos', en: 'Step 2 — We set it up' },
  'process.step2.desc': { es: 'Lo montamos y lo pruebas tú antes de que lo vea ningún cliente.', en: 'We set it up and you test it before any client sees it.' },
  'process.step3.title': { es: 'Paso 3 — Revisamos cada mes', en: 'Step 3 — Monthly review' },
  'process.step3.desc': { es: 'Revisamos cada mes qué preguntan tus clientes y ajustamos lo que haga falta.', en: 'Each month we review what your clients ask and adjust what is needed.' },

  // About (Who We Are)
  'about.subtitle': { es: 'Estudio', en: 'Studio' },
  'about.title': { es: 'Toroia no es una agencia de marketing.', en: 'Toroia is not a marketing agency.' },
  'about.description': {
    es: 'Hacemos webs y apps especialistas en abogados, y ayudamos también a negocios de la comarca. Nuestro trabajo es que tu despacho se vea bien en internet y conteste solo a lo de siempre.',
    en: 'We build websites and apps specialised in law firms, and we also help local businesses. Our job is to make your firm look good online and answer the usual questions by itself.'
  },

  // CTA Final

  // Contact
  'contact.subtitle': { es: 'Contacto', en: 'Contact' },
  'contact.title': { es: '¿Cuántas llamadas repetidas atiendes a la semana?', en: 'How many repeated calls do you handle each week?' },
  'contact.description': {
    es: 'Cuéntanoslo en 2 minutos y te decimos qué se puede contestar solo.',
    en: 'Tell us in 2 minutes and we will tell you what can be answered automatically.'
  },
  'contact.formIntro': {
    es: 'Cuéntanos tu caso y te respondo en menos de 24 horas.',
    en: 'Tell us about your case and I will reply within 24 hours.'
  },
  'contact.name': { es: 'Nombre', en: 'Name' },
  'contact.email': { es: 'Email', en: 'Email' },
  'contact.brand': { es: 'Despacho o negocio', en: 'Firm or business' },
  'contact.productType': { es: 'Sector', en: 'Industry' },
  'contact.productType.placeholder': { es: 'Selecciona una opción', en: 'Select an option' },
  'contact.productType.security': { es: 'Despacho de abogados', en: 'Law firm' },
  'contact.productType.advisory': { es: 'Asesoría / gestoría', en: 'Advisory / accounting' },
  'contact.productType.clinic': { es: 'Comercio local', en: 'Local shop' },
  'contact.productType.construction': { es: 'Otro negocio de servicios', en: 'Other service business' },
  'contact.productType.other': { es: 'Otro', en: 'Other' },
  'contact.budget': { es: 'Presupuesto aproximado', en: 'Approximate budget' },
  'contact.budget.placeholder': { es: 'Selecciona una opción', en: 'Select an option' },
  'contact.budget.option1': { es: 'Hasta 1.200 €', en: 'Up to €1,200' },
  'contact.budget.option2': { es: '1.200 € – 2.500 €', en: '€1,200 – €2,500' },
  'contact.budget.option3': { es: 'Estoy valorando opciones', en: 'I\'m evaluating options' },
  'contact.message': { es: 'Mensaje', en: 'Message' },
  'contact.bottleneck': { es: '¿Qué preguntas te repiten más los clientes?', en: 'Which questions do clients ask you most?' },
  'contact.bottleneck.placeholder': { es: 'Por ejemplo: horarios, documentos que hay que traer, precios de una primera consulta.', en: 'For example: opening hours, documents to bring, price of a first consultation.' },
  'contact.submit': { es: 'ENVIAR', en: 'SEND' },

  // Footer
  'footer.rights': { es: 'Todos los derechos reservados', en: 'All rights reserved' },
  'footer.tagline': { es: 'Webs y apps especialistas en abogados, y asistente de WhatsApp para despachos y negocios de la comarca.', en: 'Websites and apps for law firms, plus a WhatsApp assistant for firms and local businesses.' },
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
