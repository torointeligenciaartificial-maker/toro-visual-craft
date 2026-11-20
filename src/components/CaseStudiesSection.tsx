import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollAnimations';

const CaseStudiesSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollReveal(0.1);

  const labels = language === 'es'
    ? { reviews: 'Reseñas de clientes en Google' }
    : { reviews: 'Customer reviews on Google' };

  const reviews = [
    {
      name: 'Roberto Perez',
      badge: language === 'es' ? '1 reseña' : '1 review',
      text: language === 'es'
        ? 'Profesional con muchas ideas. Un placer trabajar con él. Rapidez y eficacia. Me transmite tranquilidad. Totalmente recomendable.'
        : 'A professional full of ideas. A pleasure to work with. Fast and effective. He gives me peace of mind. Totally recommended.',
    },
    {
      name: 'Anbadul SLU',
      badge: language === 'es' ? '5 reseñas' : '5 reviews',
      text: language === 'es'
        ? 'Muy atento y explica con mucha paciencia hasta que lo entiendas todo, y no se ponen pesados de contratar un producto si no lo pides tú. Merece la pena contactar con ellos.'
        : 'Very attentive and explains with great patience until you understand everything, and they never push you to buy something you did not ask for. Worth getting in touch.',
    },
    {
      name: 'Mercedes Martínez',
      badge: language === 'es' ? '8 reseñas' : '8 reviews',
      text: language === 'es'
        ? 'Cumplió con todas nuestras expectativas, y con trato personalizado y un producto adaptado a nuestras necesidades, lo recomiendo al 100%.'
        : 'Met all our expectations, with personalized service and a product adapted to our needs. 100% recommended.',
    },
    {
      name: 'Yaron SK8',
      badge: language === 'es' ? '3 reseñas' : '3 reviews',
      text: language === 'es'
        ? 'La profesionalidad y compromiso que te dedica Óscar hace que no solo su servicio sea práctico, sino también te genere resultado.'
        : 'The professionalism and commitment Óscar dedicates makes his service not only practical, but also results-driven.',
    },
    {
      name: 'advc vilca',
      badge: language === 'es' ? 'Local Guide · 24 reseñas' : 'Local Guide · 24 reviews',
      text: language === 'es'
        ? 'Un servicio de calidad que permite trabajar con mayor agilidad y eficacia.'
        : 'A quality service that lets you work with more agility and efficiency.',
    },
    {
      name: 'Freddy Espinoza',
      badge: language === 'es' ? '2 reseñas' : '2 reviews',
      text: language === 'es'
        ? 'Me ayudó mucho con el flujo de mi trabajo, reduciendo costes y horas perdidas.'
        : 'He helped me a lot with my workflow, cutting costs and wasted hours.',
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
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
              {language === 'es' ? 'Opiniones' : 'Reviews'}
            </span>
            <div className="w-8 h-0.5 bg-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
            {language === 'es'
              ? 'Lo que dicen nuestros clientes'
              : 'What our clients say'}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {language === 'es'
              ? 'Opiniones reales de clientes, publicadas en nuestro perfil de Google.'
              : 'Real customer opinions, published on our Google profile.'}
          </p>
        </motion.div>

        {/* Reseñas de Google Business */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-primary text-xs tracking-widest uppercase mb-3">{labels.reviews}</p>
            <div className="flex items-center justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-primary fill-primary" />
              ))}
              <span className="ml-2 text-foreground font-semibold">5,0</span>
              <span className="text-muted-foreground text-sm">({language === 'es' ? '10 reseñas' : '10 reviews'})</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.article
                key={r.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="border border-border bg-card/40 p-6 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    {r.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-foreground font-medium text-sm">{r.name}</p>
                    <p className="text-muted-foreground text-xs">{r.badge}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">"{r.text}"</p>
              </motion.article>
            ))}
          </div>
        </div>


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
