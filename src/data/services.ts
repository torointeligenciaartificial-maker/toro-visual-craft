// Data source for the 5 SEO service landing pages.
// Each entry powers /servicios/:slug via ServicePage.tsx

export interface ServiceData {
  slug: string;
  title: string;          // <title>
  metaDescription: string;
  h1: string;
  subtitle: string;
  benefits: string[];
  includes: string[];
  steps: { title: string; desc: string }[];
  keywords: string;
}

export const SERVICES: ServiceData[] = [
  {
    slug: 'automatizacion-n8n',
    title: 'Automatización con n8n para empresas | TORO IA',
    metaDescription:
      'Implantamos flujos de automatización con n8n conectados a tus herramientas actuales. Sin migraciones. Resultados medibles en 2 semanas. Toledo y toda España.',
    h1: 'Automatización con n8n para empresas que quieren escalar sin contratar',
    subtitle:
      'Diseñamos e implantamos flujos n8n auto-alojados sobre tu stack actual. Tu equipo deja de hacer tareas manuales y empieza a producir resultados reales.',
    benefits: [
      'Reducción de 5 a 20 horas semanales de tareas repetitivas',
      'Integración con tus herramientas actuales (CRM, email, ERP, WhatsApp)',
      'Flujos visuales, mantenibles y auditables, no cajas negras',
      'Infraestructura propia: tus datos no se exponen a terceros',
      'Implantación en 2 semanas con métricas de ahorro reales',
      'Soporte técnico continuo en español',
    ],
    includes: [
      'Auditoría de los procesos a automatizar',
      'Diseño técnico de los flujos n8n',
      'Conexión con APIs, bases de datos y servicios externos',
      'Despliegue en servidor propio o cloud',
      'Documentación operativa y formación al equipo',
      '30 días de soporte post-implantación',
    ],
    steps: [
      {
        title: 'Diagnóstico técnico',
        desc: 'Mapeamos los procesos que más horas consumen y validamos viabilidad de automatización con n8n.',
      },
      {
        title: 'Construcción de flujos',
        desc: 'Implementamos cada workflow conectado a tu stack actual, con control de errores y reintentos.',
      },
      {
        title: 'Puesta en producción',
        desc: 'Desplegamos, monitorizamos y medimos el ahorro real en horas y euros mes a mes.',
      },
    ],
    keywords: 'automatización n8n, n8n España, consultoría n8n, flujos n8n, automatización procesos pyme',
  },
  {
    slug: 'consultoria-ia-pymes',
    title: 'Consultoría de IA para pymes en España | TORO IA',
    metaDescription:
      'Consultoría estratégica de Inteligencia Artificial para pymes españolas. Identificamos dónde aplicar IA con retorno real. Sin humo, sin promesas inventadas.',
    h1: 'Consultoría de IA para pymes con criterio técnico, no con humo',
    subtitle:
      'Te ayudamos a decidir dónde aplicar IA, dónde no, y con qué herramientas. Roadmap claro, sin dependencias innecesarias y con métricas de impacto.',
    benefits: [
      'Hoja de ruta de IA priorizada por retorno económico',
      'Selección de herramientas adecuadas a tu tamaño y presupuesto',
      'Evaluación honesta de qué procesos no merecen IA',
      'Cumplimiento de la normativa europea (AI Act, RGPD)',
      'Lenguaje claro para dirección, no jerga técnica vacía',
      'Acompañamiento durante la implantación',
    ],
    includes: [
      'Sesión de diagnóstico inicial de 90 minutos',
      'Mapeo de procesos candidatos a IA',
      'Informe priorizado con coste, esfuerzo y retorno estimado',
      'Recomendación de stack tecnológico (LLMs, automatización, RPA)',
      'Plan de implantación por fases',
      'Revisión trimestral de resultados',
    ],
    steps: [
      {
        title: 'Análisis del negocio',
        desc: 'Entendemos modelo, equipo, herramientas y dolor operativo real antes de proponer nada.',
      },
      {
        title: 'Diseño de la estrategia',
        desc: 'Definimos qué casos de uso atacar primero según retorno y viabilidad técnica.',
      },
      {
        title: 'Implantación y medición',
        desc: 'Ejecutamos los primeros pilotos y medimos impacto real, no métricas de vanidad.',
      },
    ],
    keywords: 'consultoría IA pymes, inteligencia artificial empresa, consultor IA España, estrategia IA pyme',
  },
  {
    slug: 'auditoria-procesos-empresariales',
    title: 'Auditoría de procesos empresariales con IA | TORO IA',
    metaDescription:
      'Auditoría técnica de procesos para empresas que quieren ahorrar horas y euros. Detectamos cuellos de botella y proponemos soluciones automatizables.',
    h1: 'Auditoría de procesos empresariales: dónde pierde tiempo tu empresa',
    subtitle:
      'Análisis quirúrgico de los procesos que consumen más horas. Te entregamos un informe con cuellos de botella, soluciones priorizadas y ahorro estimado.',
    benefits: [
      'Identificación de los 3 procesos que más horas se llevan',
      'Cálculo del coste real de cada tarea manual',
      'Propuestas concretas de automatización o rediseño',
      'Informe ejecutivo apto para dirección y socios',
      'Sin compromiso de contratar la implantación con nosotros',
      'Entrega en 7-10 días laborables',
    ],
    includes: [
      'Entrevistas con los responsables operativos',
      'Mapeo BPMN de procesos críticos',
      'Análisis de herramientas y datos actuales',
      'Cuantificación de horas perdidas y coste asociado',
      'Roadmap priorizado de mejoras',
      'Presentación final con recomendaciones',
    ],
    steps: [
      {
        title: 'Inmersión',
        desc: 'Recopilamos información de procesos, equipos y herramientas durante 3-5 días.',
      },
      {
        title: 'Análisis',
        desc: 'Detectamos cuellos de botella, duplicidades y tareas que ya puede hacer la IA.',
      },
      {
        title: 'Informe y roadmap',
        desc: 'Te entregamos el documento con prioridades, coste estimado y ahorro proyectado.',
      },
    ],
    keywords: 'auditoría procesos empresariales, optimización procesos, auditoría operativa pyme, BPM España',
  },
  {
    slug: 'automatizacion-empresas-seguridad',
    title: 'Automatización con IA para empresas de seguridad | TORO IA',
    metaDescription:
      'Automatizamos procesos críticos de empresas de seguridad privada: turnos, partes, facturación, control de accesos y reportes. Especialistas del sector.',
    h1: 'Automatización con IA específica para empresas de seguridad privada',
    subtitle:
      'Conocemos el sector. Eliminamos el trabajo manual en turnos, partes de servicio, facturación, control horario y reportes a cliente sin cambiar tu software actual.',
    benefits: [
      'Automatización de partes de servicio y novedades',
      'Generación automática de cuadrantes y turnos',
      'Reportes a cliente sin intervención manual',
      'Control horario y geolocalización integrados',
      'Conexión con tu software de facturación actual',
      'Cumplimiento normativo del sector (LSP, RGPD)',
    ],
    includes: [
      'Auditoría operativa específica del sector seguridad',
      'Automatización de partes diarios y semanales',
      'Flujos para gestión de bajas, sustituciones y horas extra',
      'Reportes automáticos a clientes finales',
      'Integración con software existente (Plus Vigilancia, etc.)',
      'Formación a coordinadores y administración',
    ],
    steps: [
      {
        title: 'Diagnóstico sectorial',
        desc: 'Analizamos las tareas administrativas y operativas específicas de tu empresa de seguridad.',
      },
      {
        title: 'Implantación silenciosa',
        desc: 'Automatizamos sobre tu stack actual sin parar la operación ni cambiar el software del equipo.',
      },
      {
        title: 'Medición de ahorro',
        desc: 'Reportamos horas y euros ahorrados cada mes con datos reales de tu operación.',
      },
    ],
    keywords: 'automatización empresas seguridad, IA seguridad privada, software seguridad privada, automatizar partes vigilancia',
  },
  {
    slug: 'optimizacion-operativa-ia',
    title: 'Optimización operativa con IA para pymes | TORO IA',
    metaDescription:
      'Optimizamos la operación de tu pyme con IA y automatización. Menos horas perdidas, más margen, sin contratar más personal. Diagnóstico gratuito de 20 min.',
    h1: 'Optimización operativa con IA: más margen sin contratar más personal',
    subtitle:
      'Reducimos horas perdidas en tareas administrativas y operativas combinando IA, automatización y rediseño de procesos. El ahorro se mide desde el primer mes.',
    benefits: [
      'Aumento de capacidad operativa sin ampliar plantilla',
      'Reducción de errores humanos en tareas críticas',
      'Mejor uso del tiempo del equipo en actividades de valor',
      'Integración limpia con las herramientas que ya usas',
      'Métricas claras de ahorro en horas y euros',
      'Modelo de mejora continua trimestral',
    ],
    includes: [
      'Diagnóstico de eficiencia operativa',
      'Plan de optimización por departamento',
      'Implantación de automatizaciones e IA donde aporten valor',
      'Cuadro de mando con métricas de productividad',
      'Sesiones trimestrales de mejora continua',
      'Soporte técnico en español',
    ],
    steps: [
      {
        title: 'Diagnóstico',
        desc: 'Medimos eficiencia actual por departamento y proceso.',
      },
      {
        title: 'Implantación',
        desc: 'Aplicamos automatización e IA en los puntos de mayor retorno.',
      },
      {
        title: 'Resultados',
        desc: 'Medimos ahorro real y abrimos la siguiente ronda de optimización.',
      },
    ],
    keywords: 'optimización operativa IA, eficiencia operativa pyme, productividad empresa, mejora procesos IA',
  },
];

export const getServiceBySlug = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);
