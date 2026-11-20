// Catálogo de servicios de TORO IA (lo usan las herramientas MCP).
// Precios con IVA incluido y sin permanencia.

export interface ServiceData {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  price: string;
  url: string;
  benefits: string[];
  includes: string[];
  steps: { title: string; desc: string }[];
  keywords: string;
}

export const SERVICES: ServiceData[] = [
  {
    slug: 'web-para-abogados-toledo',
    title: 'Web para despachos de abogados en Toledo | TORO IA',
    metaDescription:
      'Web profesional para despachos de abogados de Toledo: clara, rápida y pensada para que te encuentren en Google y te contacten. Desde 700 € con IVA.',
    h1: 'Web para despachos de abogados en Toledo',
    subtitle:
      'Una web clara que se ve bien en el móvil, te encuentran en Google y tus clientes pueden contactar contigo en un toque.',
    price: '700 € con IVA, sin permanencia',
    url: 'https://toroia.vip/web-para-abogados-toledo',
    benefits: [
      'Se ve bien en el móvil y carga rápido',
      'Tu ficha de Google y tu web cuentan lo mismo',
      'Botón de WhatsApp y teléfono siempre a mano',
      'Precio cerrado, sin cuotas ocultas',
    ],
    includes: [
      'Web de presentación del despacho',
      'Textos claros, sin tecnicismos',
      'Ficha de Google revisada',
      'Botón de WhatsApp',
    ],
    steps: [
      { title: 'Charla de 20 minutos', desc: 'Me cuentas cómo trabaja tu despacho, sin compromiso.' },
      { title: 'Construcción', desc: 'Preparamos la web y la revisas antes de publicarla.' },
      { title: 'Publicación', desc: 'La publicamos y te acompaño si quieres mantenimiento mensual.' },
    ],
    keywords: 'web abogados Toledo, página web despacho abogados',
  },
  {
    slug: 'asistente-whatsapp-abogados',
    title: 'Asistente de WhatsApp para abogados | TORO IA',
    metaDescription:
      'Asistente de WhatsApp para despachos: contesta a cualquier hora las dudas de siempre y te avisa cuando un cliente necesita hablar contigo. Desde 300 € con IVA.',
    h1: 'Asistente de WhatsApp para abogados',
    subtitle:
      'Contesta por WhatsApp las dudas de siempre, también fuera de horario, y te pasa solo lo que importa.',
    price: '300 a 500 € de alta más 50 a 90 € al mes, con IVA, sin permanencia',
    url: 'https://toroia.vip/asistente-whatsapp-abogados',
    benefits: [
      'Atiende a tus clientes también fuera de horario',
      'No da consejo legal: solo información práctica que tú decides',
      'Te avisa cuando alguien necesita hablar contigo',
      'No cambias de número ni de forma de trabajar',
    ],
    includes: [
      'Respuestas escritas con tus propias palabras',
      'Conexión con tu WhatsApp',
      'Prueba previa por tu parte',
      'Mejora mensual',
    ],
    steps: [
      { title: 'Hablamos', desc: 'Me cuentas qué te preguntan más los clientes.' },
      { title: 'Lo montamos', desc: 'Preparamos las respuestas y lo conectamos a tu WhatsApp.' },
      { title: 'Lo pruebas', desc: 'Lo pruebas tú primero; cuando te convence, lo activamos.' },
    ],
    keywords: 'asistente WhatsApp abogados, WhatsApp despacho, atención clientes despacho',
  },
  {
    slug: 'web-negocios-toledo',
    title: 'Web y WhatsApp para negocios y gestorías en Toledo y alrededores | TORO IA',
    metaDescription:
      'Web profesional y asistente de WhatsApp para negocios, gestorías y asesorías de Toledo y los pueblos de alrededor. Web desde 700 € con IVA, sin permanencia.',
    h1: 'Web y WhatsApp para tu negocio en Toledo y pueblos de alrededor',
    subtitle:
      'Una web que te encuentren en Google y un asistente que atiende a tus clientes por WhatsApp, también fuera de horario.',
    price: 'Web desde 700 €; asistente desde 300 € más 50 a 90 € al mes; con IVA, sin permanencia',
    url: 'https://toroia.vip/web-negocios-toledo',
    benefits: [
      'Sin tecnicismos y con un precio claro',
      'Trabajo con negocios de la comarca y visitas en persona dos mañanas a la semana',
      'Recordatorios a clientes para gestorías y asesorías',
      'Comisión del 10 al 15 % si recomiendas a un cliente',
    ],
    includes: ['Web profesional', 'Asistente de WhatsApp', 'Revisión de ayudas para digitalizar'],
    steps: [
      { title: 'Charla gratuita', desc: 'Veinte minutos, sin compromiso.' },
      { title: 'Propuesta clara', desc: 'Te digo qué necesitas y cuánto cuesta.' },
      { title: 'Puesta en marcha', desc: 'Lo montamos y lo pruebas antes de activarlo.' },
    ],
    keywords: 'web negocios Toledo, gestorías Toledo, asistente WhatsApp negocio local',
  },
  {
    slug: 'mantenimiento-web',
    title: 'Mantenimiento mensual de tu web | TORO IA',
    metaDescription:
      'Mantenimiento mensual de tu web: cambios, copias y revisión de que todo funciona. De 90 a 150 € al mes con IVA, sin permanencia.',
    h1: 'Mantenimiento mensual de tu web',
    subtitle: 'Me ocupo de que tu web siga funcionando y actualizada, para que tú te dediques a tu negocio.',
    price: '90 a 150 € al mes, con IVA, sin permanencia',
    url: 'https://toroia.vip/#precios',
    benefits: ['Cambios de textos y datos cuando los necesites', 'Revisión de que todo funciona', 'Sin permanencia'],
    includes: ['Cambios sencillos', 'Copias de seguridad', 'Revisión mensual'],
    steps: [
      { title: 'Lo acordamos', desc: 'Defino contigo qué incluye cada mes.' },
      { title: 'Me ocupo', desc: 'Hago los cambios y reviso la web.' },
    ],
    keywords: 'mantenimiento web, cuidado de la web, soporte web Toledo',
  },
];
