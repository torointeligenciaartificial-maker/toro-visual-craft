import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollAnimations';

const ProblemSection: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="py-32 lg:py-40 relative overflow-hidden">
      {/* Deep black background with subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[150px]" />

      <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 text-foreground leading-tight"
          >
            {t('problem.title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            {t('problem.description')}
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="divider-gold mt-16"
          />
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
