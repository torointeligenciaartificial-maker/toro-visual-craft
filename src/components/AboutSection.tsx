import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollAnimations';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal(0.1);

  const stats = [
    { numKey: 'about.stat1.number', labelKey: 'about.stat1.label' },
    { numKey: 'about.stat2.number', labelKey: 'about.stat2.label' },
    { numKey: 'about.stat3.number', labelKey: 'about.stat3.label' },
  ];

  return (
    <section id="about" className="py-32 lg:py-40 bg-charcoal relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-primary" />
              <span className="text-primary font-medium tracking-widest uppercase text-sm">
                {t('about.subtitle')}
              </span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-foreground">
              {t('about.title')}
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              {t('about.description')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.numKey}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="font-display text-3xl lg:text-4xl font-bold text-primary mb-2">
                    {t(stat.numKey)}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {t(stat.labelKey)}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Decorative Circles */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full" />
              <div className="absolute inset-8 border border-primary/30 rounded-full" />
              <div className="absolute inset-16 border border-primary/40 rounded-full" />
              
              {/* Center Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="font-display text-5xl lg:text-6xl font-bold text-gradient-gold block mb-2">
                    TORO
                  </span>
                  <span className="font-display text-3xl lg:text-4xl font-light text-foreground tracking-widest">
                    IA
                  </span>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary/60" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
