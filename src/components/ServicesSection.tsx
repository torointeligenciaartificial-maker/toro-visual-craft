import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Camera, Wand2, Package } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollAnimations';

const ServicesSection: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal(0.1);

  const services = [
    {
      icon: Lightbulb,
      titleKey: 'services.concept.title',
      descKey: 'services.concept.desc',
    },
    {
      icon: Camera,
      titleKey: 'services.production.title',
      descKey: 'services.production.desc',
    },
    {
      icon: Wand2,
      titleKey: 'services.postproduction.title',
      descKey: 'services.postproduction.desc',
    },
    {
      icon: Package,
      titleKey: 'services.delivery.title',
      descKey: 'services.delivery.desc',
    },
  ];

  return (
    <section id="services" className="section-cinematic py-24 lg:py-32">
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
              {t('services.subtitle')}
            </span>
            <div className="w-8 h-0.5 bg-primary" />
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t('services.title')}
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('services.description')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.titleKey}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="card-premium p-8 text-center group relative"
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                {/* Number */}
                <span className="text-6xl font-display font-bold text-muted/30 absolute top-4 right-6 group-hover:text-primary/20 transition-colors duration-300">
                  0{index + 1}
                </span>

                {/* Title */}
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {t(service.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(service.descKey)}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Line */}
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

export default ServicesSection;
