import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cog, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollAnimations';

const EcosystemSection: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal(0.1);

  const pillars = [
    {
      id: 'consultoria',
      icon: Brain,
      titleKey: 'ecosystem.p1.title',
      subtitleKey: 'ecosystem.p1.subtitle',
      descKey: 'ecosystem.p1.desc',
    },
    {
      id: 'automatizacion',
      icon: Cog,
      titleKey: 'ecosystem.p2.title',
      subtitleKey: 'ecosystem.p2.subtitle',
      descKey: 'ecosystem.p2.desc',
    },
    {
      id: 'identidad',
      icon: Shield,
      titleKey: 'ecosystem.p3.title',
      subtitleKey: 'ecosystem.p3.subtitle',
      descKey: 'ecosystem.p3.desc',
    },
  ];

  return (
    <section id="ecosystem" className="py-32 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[160px]" />

      <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 lg:mb-20 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
              {t('ecosystem.subtitle')}
            </span>
            <div className="w-8 h-0.5 bg-primary" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
            {t('ecosystem.title')}
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            {t('ecosystem.description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                id={pillar.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative p-8 lg:p-10 border border-border bg-card/40 hover:border-primary/40 transition-all duration-500"
              >
                <div className="w-14 h-14 mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-500">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <span className="text-primary text-xs tracking-widest uppercase mb-3 block">
                  {t(pillar.subtitleKey)}
                </span>
                <h3 className="font-display text-xl lg:text-2xl font-semibold mb-4 text-foreground leading-snug">
                  {t(pillar.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(pillar.descKey)}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Quick links to dedicated service pages (SEO) */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 text-sm">
          <a href="/servicios/automatizacion-n8n" className="px-4 py-2 border border-border hover:border-primary/60 text-muted-foreground hover:text-primary transition-colors">Automatización con n8n</a>
          <a href="/servicios/consultoria-ia-pymes" className="px-4 py-2 border border-border hover:border-primary/60 text-muted-foreground hover:text-primary transition-colors">Consultoría de IA</a>
          <a href="/servicios/auditoria-procesos-empresariales" className="px-4 py-2 border border-border hover:border-primary/60 text-muted-foreground hover:text-primary transition-colors">Auditoría de procesos</a>
          <a href="/servicios/automatizacion-empresas-seguridad" className="px-4 py-2 border border-border hover:border-primary/60 text-muted-foreground hover:text-primary transition-colors">Seguridad privada</a>
          <a href="/servicios/optimizacion-operativa-ia" className="px-4 py-2 border border-border hover:border-primary/60 text-muted-foreground hover:text-primary transition-colors">Optimización operativa</a>
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

export default EcosystemSection;
