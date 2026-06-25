import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollAnimations';

const CaseStudiesSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollReveal(0.1);

  const testimonial = language === 'es'
    ? {
        quote: "Al reducir tareas repetitivas, el empleado puede hacer otras cosas sin contratar más gente. He ahorrado más de 4.000€ al año.",
        author: "Cliente de servicios profesionales, Toledo"
      }
    : {
        quote: "By reducing repetitive tasks, the employee can do other things without hiring more people. I have saved more than €4,000 a year.",
        author: "Professional services client, Toledo"
      };

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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="border border-border bg-card/40 p-10 lg:p-14 relative">
            <Quote className="w-8 h-8 text-primary/60 mx-auto mb-6" />
            <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground leading-snug mb-8">
              "{testimonial.quote}"
            </blockquote>
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              {testimonial.author}
            </p>
          </div>
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
