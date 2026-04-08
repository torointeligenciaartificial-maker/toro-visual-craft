import React from 'react';
import { motion } from 'framer-motion';
import { Search, Gem, Rocket } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollAnimations';

const ProcessSection: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal(0.1);

  const steps = [
    { icon: Search, titleKey: 'process.step1.title', descKey: 'process.step1.desc' },
    { icon: Gem, titleKey: 'process.step2.title', descKey: 'process.step2.desc' },
    { icon: Rocket, titleKey: 'process.step3.title', descKey: 'process.step3.desc' },
  ];

  return (
    <section id="process" className="section-cinematic py-32 lg:py-40">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
              {t('process.subtitle')}
            </span>
            <div className="w-8 h-0.5 bg-primary" />
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('process.title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('process.description')}
          </p>
        </motion.div>

        {/* 3 Columns */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.titleKey}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="font-display text-xl font-semibold mb-4 text-foreground">
                  {t(step.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
                  {t(step.descKey)}
                </p>
              </motion.div>
            );
          })}
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

export default ProcessSection;
