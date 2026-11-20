import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollAnimations';

const WHATSAPP_URL =
  'https://wa.me/34663663353?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20la%20web%20y%20el%20asistente%20de%20WhatsApp%20para%20mi%20negocio.';

const PricingSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollReveal(0.1);
  const es = language === 'es';

  const plans = [
    {
      title: es ? 'Presencia' : 'Presence',
      price: '700 €',
      note: es ? 'pago único' : 'one-off payment',
      text: es
        ? 'Web profesional, ficha de Google y botón de WhatsApp. Para que te encuentren y te escriban.'
        : 'Professional website, Google profile and WhatsApp button, so people can find and message you.',
    },
    {
      title: es ? 'Asistente de WhatsApp' : 'WhatsApp assistant',
      price: es ? '300 a 500 €' : '€300 to €500',
      note: es ? 'de alta, más 50 a 90 € al mes' : 'set-up, plus €50 to €90 a month',
      text: es
        ? 'Contesta las dudas de siempre, a cualquier hora, y te pasa solo lo que importa.'
        : 'Answers the usual questions at any hour and passes you only what matters.',
    },
    {
      title: es ? 'Mantenimiento' : 'Maintenance',
      price: es ? '90 a 150 € al mes' : '€90 to €150 a month',
      note: es ? 'sin permanencia' : 'no lock-in',
      text: es
        ? 'Cada mes revisamos qué preguntan tus clientes y mejoramos las respuestas y la web.'
        : 'Each month we review what your clients ask and improve the answers and the site.',
    },
  ];

  return (
    <section id="pricing" className="py-24 lg:py-32 relative overflow-hidden">
      <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
              {es ? 'Precios' : 'Prices'}
            </span>
            <div className="w-8 h-0.5 bg-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
            {es ? 'Precios claros, sin sorpresas' : 'Clear prices, no surprises'}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {es
              ? 'Te digo el importe exacto después de una llamada de 20 minutos.'
              : 'I give you the exact amount after a 20-minute call.'}
          </p>
          <p className="text-muted-foreground text-sm mt-3">
            {es ? 'Todos los precios incluyen IVA.' : 'All prices include VAT.'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-10">
          {plans.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="p-8 border border-border bg-card/40 flex flex-col"
            >
              <h3 className="font-display text-lg font-semibold mb-4 text-foreground">{p.title}</h3>
              <p className="text-primary text-2xl font-semibold">{p.price}</p>
              <p className="text-muted-foreground text-xs mb-4">{p.note}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.text}</p>
            </motion.article>
          ))}
        </div>

        <div className="text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium rounded inline-flex items-center justify-center text-base px-9 py-4"
          >
            <span>{es ? 'Escríbenos por WhatsApp' : 'Write to us on WhatsApp'}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
