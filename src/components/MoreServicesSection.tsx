import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Smartphone, SearchCheck, Landmark } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollAnimations';

const wa = (text: string) => `https://wa.me/34663663353?text=${encodeURIComponent(text)}`;

const MoreServicesSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollReveal(0.1);
  const es = language === 'es';

  const items = [
    {
      icon: SearchCheck,
      title: es ? 'Revisión gratuita de tu web' : 'Free website review',
      text: es
        ? 'Miro cómo se ve tu web en el móvil y si te encuentran en Google, y te envío un mini informe con 3 mejoras concretas. Sin compromiso.'
        : 'I check how your site looks on mobile and whether people find you on Google, and send you a short report with 3 concrete improvements. No commitment.',
      msg: 'Hola, me gustaría la revisión gratuita de mi web.',
    },
    {
      icon: Smartphone,
      title: es ? 'Apps a medida' : 'Custom apps',
      text: es
        ? 'Una app sencilla para llevar tus clientes, recibir avisos de quién toca llamar y no dejar nada olvidado.'
        : 'A simple app to keep track of your clients, get reminders of who to call and never forget a follow-up.',
      msg: 'Hola, me interesa una app a medida para mi negocio.',
    },
    {
      icon: GraduationCap,
      title: es ? 'Formación en inteligencia artificial' : 'AI training',
      text: es
        ? 'Cursos prácticos para ti y tu equipo, también para ayuntamientos y asociaciones de la zona. Aprendes con ejemplos de tu día a día.'
        : 'Hands-on courses for you and your team, also for town councils and associations in the area. You learn with examples from your day to day.',
      msg: 'Hola, me interesa la formación en inteligencia artificial.',
    },
    {
      icon: Landmark,
      title: es ? 'Ayudas para digitalizar tu negocio' : 'Grants to digitalise your business',
      text: es
        ? 'Te explico a qué ayudas puedes optar en Castilla-La Mancha y Castilla y León y cómo preparar la solicitud, para que no pierdas plazos.'
        : 'I explain which grants you can apply for in Castilla-La Mancha and Castilla y León and how to prepare the application, so you do not miss deadlines.',
      msg: 'Hola, me gustaría información sobre ayudas para digitalizar mi negocio.',
    },
  ];

  return (
    <section id="more" className="py-24 lg:py-32 relative overflow-hidden">
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
              {es ? 'Y además' : 'And also'}
            </span>
            <div className="w-8 h-0.5 bg-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
            {es ? 'Otras formas de ayudarte' : 'Other ways we can help'}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.article
                key={it.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 border border-border bg-card/40 hover:border-primary/40 transition-all duration-500 flex flex-col"
              >
                <div className="w-12 h-12 mb-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{it.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{it.text}</p>
                <a
                  href={wa(it.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm tracking-widest uppercase hover:underline"
                >
                  {es ? 'Pregúntanos por WhatsApp' : 'Ask us on WhatsApp'}
                </a>
              </motion.article>
            );
          })}
        </div>

        <nav
          aria-label={es ? 'Páginas por tipo de negocio' : 'Pages by business type'}
          className="max-w-5xl mx-auto mt-10 text-center text-sm text-muted-foreground"
        >
          <span className="mr-2">{es ? 'Soluciones por sector:' : 'Solutions by sector:'}</span>
          <a href="/web-para-abogados-toledo" className="text-primary hover:underline mx-2">
            {es ? 'Web para abogados' : 'Website for lawyers'}
          </a>
          <a href="/asistente-whatsapp-abogados" className="text-primary hover:underline mx-2">
            {es ? 'Asistente de WhatsApp para despachos' : 'WhatsApp assistant for law firms'}
          </a>
          <a href="/web-negocios-toledo" className="text-primary hover:underline mx-2">
            {es ? 'Web para negocios en Toledo' : 'Websites for businesses in Toledo'}
          </a>
          <a href="/metodologia" className="text-primary hover:underline mx-2">
            {es ? 'Cómo trabajamos' : 'How we work'}
          </a>
        </nav>
      </div>
    </section>
  );
};

export default MoreServicesSection;
