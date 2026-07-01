import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Building2, Briefcase, Quote, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollAnimations';

const CALENDAR_URL = 'https://calendar.app.google/Guvvm7K1oUy7Lop5A';

const CaseStudiesSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollReveal(0.1);

  const cases = language === 'es' ? [
    {
      icon: Shield,
      sector: 'Empresa de seguridad privada',
      initial: 'Coordinación manual de partes de servicio y cuadrantes. Su equipo dedicaba más de 15 horas semanales a tareas administrativas.',
      solution: 'Implantamos flujos n8n para generar partes diarios, cuadrantes y reportes automáticos a cliente sin tocar su software actual.',
      result: 'El equipo de coordinación recuperó horas para tareas de mayor valor y dejó de cometer errores manuales en facturación.',
    },
    {
      icon: Briefcase,
      sector: 'Empresa de servicios profesionales',
      initial: 'Gestión administrativa duplicada entre email, hojas de cálculo y CRM. Un empleado dedicaba la jornada entera a trasvasar datos.',
      solution: 'Auditoría de procesos + automatización de captación, presupuestos y seguimiento. Conectamos todo lo que ya usaban.',
      result: 'Ahorraron más de 4.000 € anuales sin necesidad de contratar a nadie. El empleado pasó a hacer trabajo cualificado.',
    },
    {
      icon: Building2,
      sector: 'Pyme tradicional',
      initial: 'Procesos manuales en pedidos, facturación y atención al cliente. Crecimiento limitado por falta de capacidad operativa.',
      solution: 'Diseñamos una hoja de ruta de digitalización con IA en 3 fases. Empezamos por el cuello de botella más caro.',
      result: 'Aumentaron capacidad operativa sin ampliar plantilla y prepararon la empresa para escalar el siguiente año.',
    },
  ] : [
    {
      icon: Shield,
      sector: 'Private security company',
      initial: 'Manual coordination of service reports and shifts. Their team spent over 15 hours a week on admin tasks.',
      solution: 'We implemented n8n flows to generate daily reports, shifts and automatic client reports without touching their current software.',
      result: 'The coordination team recovered hours for higher-value work and stopped making manual billing errors.',
    },
    {
      icon: Briefcase,
      sector: 'Professional services firm',
      initial: 'Admin work duplicated between email, spreadsheets and CRM. One employee spent full days moving data around.',
      solution: 'Process audit + automation of lead capture, quotes and follow-up. We connected everything they already used.',
      result: 'They saved over €4,000 a year without hiring anyone. The employee moved on to qualified work.',
    },
    {
      icon: Building2,
      sector: 'Traditional SME',
      initial: 'Manual processes in orders, invoicing and customer service. Limited growth due to lack of operational capacity.',
      solution: 'We designed a 3-phase AI digitalization roadmap. We started with the most expensive bottleneck.',
      result: 'They increased operational capacity without hiring and prepared the company to scale the following year.',
    },
  ];

  const labels = language === 'es'
    ? { initial: 'Situación inicial', solution: 'Solución aplicada', result: 'Resultado', reviews: 'Reseñas verificadas de Google Business' }
    : { initial: 'Initial situation', solution: 'Applied solution', result: 'Result', reviews: 'Verified Google Business reviews' };

  const reviews = [
    {
      name: 'isabel villena',
      badge: language === 'es' ? 'Local Guide · 23 reseñas' : 'Local Guide · 23 reviews',
      time: language === 'es' ? 'Hace 8 semanas' : '8 weeks ago',
      text: language === 'es'
        ? 'Buscábamos desmarcarnos de la competencia y la consultoría técnica de Óscar ha sido la clave. Ha sabido integrar IA y procesos avanzados de una manera que no solo optimiza la empresa, sino que nos posiciona como referentes tecnológicos en nuestro sector. Su visión sobre la Ingeniería de Autoridad es lo que toda pyme necesita hoy para ser competitiva a nivel premium.'
        : 'We wanted to stand out from the competition and Óscar\'s technical consulting was key. He integrated AI and advanced processes in a way that not only optimizes the company, but positions us as tech leaders in our sector.',
    },
    {
      name: 'Mercedes Martínez',
      badge: language === 'es' ? '7 reseñas' : '7 reviews',
      time: language === 'es' ? 'Hace 19 horas' : '19 hours ago',
      text: language === 'es'
        ? 'Cumplió con todas nuestras expectativas, y con trato personalizado y un producto adaptado a nuestras necesidades, lo recomiendo al 100%.'
        : 'Met all our expectations, with personalized service and a product adapted to our needs. 100% recommended.',
    },
    {
      name: 'Yaron SK8',
      badge: language === 'es' ? '3 reseñas' : '3 reviews',
      time: language === 'es' ? 'Hace 3 días' : '3 days ago',
      text: language === 'es'
        ? 'La profesionalidad y compromiso que te dedica Óscar hace que no solo su servicio sea práctico, sino también te genere resultado.'
        : 'The professionalism and commitment Óscar dedicates makes his service not only practical, but also results-driven.',
    },
  ];

  return (
    <section id="cases" className="py-32 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />

      <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
              {language === 'es' ? 'Casos de Éxito' : 'Case Studies'}
            </span>
            <div className="w-8 h-0.5 bg-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
            {language === 'es'
              ? 'Casos de éxito en automatización y digitalización'
              : 'Success cases in automation and digitalization'}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {language === 'es'
              ? 'Empresas reales, casos anónimos por NDA. Sin métricas inventadas: solo lo que medimos en cliente.'
              : 'Real companies, anonymous cases under NDA. No invented metrics: only what we measure with clients.'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {cases.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.article
                key={c.sector}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="p-8 border border-border bg-card/40 hover:border-primary/40 transition-all duration-500"
              >
                <div className="w-12 h-12 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-6 text-foreground">
                  {c.sector}
                </h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-primary text-xs tracking-widest uppercase mb-1">{labels.initial}</p>
                    <p className="text-muted-foreground leading-relaxed">{c.initial}</p>
                  </div>
                  <div>
                    <p className="text-primary text-xs tracking-widest uppercase mb-1">{labels.solution}</p>
                    <p className="text-muted-foreground leading-relaxed">{c.solution}</p>
                  </div>
                  <div>
                    <p className="text-primary text-xs tracking-widest uppercase mb-1">{labels.result}</p>
                    <p className="text-foreground/90 leading-relaxed">{c.result}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Reseñas Google Business placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl mx-auto text-center border border-border bg-card/40 p-8"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-primary fill-primary" />
            ))}
          </div>
          <p className="text-primary text-xs tracking-widest uppercase mb-3">{labels.reviews}</p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {labels.soon}
          </p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="divider-gold mt-16 lg:mt-20"
        />
      </div>
    </section>
  );
};

export default CaseStudiesSection;
