import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollAnimations';

const ProcessSection: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal(0.1);

  const steps = [
    { num: '01', titleKey: 'process.step1.title', descKey: 'process.step1.desc' },
    { num: '02', titleKey: 'process.step2.title', descKey: 'process.step2.desc' },
    { num: '03', titleKey: 'process.step3.title', descKey: 'process.step3.desc' },
    { num: '04', titleKey: 'process.step4.title', descKey: 'process.step4.desc' },
  ];

  return (
    <section id="process" className="section-cinematic py-24 lg:py-32">
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
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            {t('process.title')}
          </h2>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Number Circle */}
                <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-full bg-background border-2 border-primary flex items-center justify-center group hover:bg-primary transition-all duration-300">
                  <span className="font-display text-2xl font-bold text-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {step.num}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {t(step.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                  {t(step.descKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Decoration */}
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
