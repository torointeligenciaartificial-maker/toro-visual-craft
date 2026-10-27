import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Layers, Target, Building2, PlayCircle, CheckCircle2, Circle, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollAnimations';

const CAMPUS_URL = 'https://campus.toroia.vip';
const SAMPLE_URL = 'https://campus.toroia.vip/leccion-de-muestra/';
const CALENDLY_URL = 'https://calendar.app.google/Guvvm7K1oUy7Lop5A';

const AcademySection: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal(0.1);

  const stats = [1, 2, 3, 4].map((n) => ({
    value: t(`academy.stat${n}.value`),
    label: t(`academy.stat${n}.label`),
  }));

  const features = [
    { icon: GraduationCap, key: 'f1' },
    { icon: Layers, key: 'f2' },
    { icon: Target, key: 'f3' },
    { icon: Building2, key: 'f4' },
  ];

  const lessons = [
    { key: 'academy.mock.l1', done: true },
    { key: 'academy.mock.l2', done: true },
    { key: 'academy.mock.l3', done: false },
    { key: 'academy.mock.l4', done: false },
  ];

  return (
    <section id="academy" className="py-32 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/3 right-0 w-[520px] h-[520px] bg-primary/5 rounded-full blur-[180px]" />

      <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-primary font-medium tracking-widest uppercase text-sm">
                {t('academy.subtitle')}
              </span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
              {t('academy.title')}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              {t('academy.description')}
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {features.map(({ icon: Icon, key }) => (
                <div key={key} className="flex gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground mb-1">
                      {t(`academy.${key}.title`)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(`academy.${key}.desc`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={SAMPLE_URL} target="_blank" rel="noopener noreferrer" className="btn-premium rounded text-center inline-flex items-center justify-center gap-2">
                <PlayCircle className="relative z-10 w-4 h-4" aria-hidden="true" />
                <span className="relative z-10">{t('academy.cta.primary')}</span>
              </a>
              <a href={CAMPUS_URL} target="_blank" rel="noopener noreferrer" className="btn-outline-premium rounded text-center">
                {t('academy.cta.secondary')}
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-4">{t('academy.note')}</p>
          </motion.div>

          {/* Maqueta del campus */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-60" />
            <div className="relative border border-primary/30 bg-card rounded-lg shadow-[0_30px_80px_hsl(0_0%_0%/0.6)] overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background/60">
                <span className="w-2.5 h-2.5 rounded-full bg-muted" />
                <span className="w-2.5 h-2.5 rounded-full bg-muted" />
                <span className="w-2.5 h-2.5 rounded-full bg-muted" />
                <span className="ml-3 text-xs text-muted-foreground tracking-wide">campus.toroia.vip</span>
              </div>

              <div className="p-6 md:p-8">
                <span className="text-primary text-xs tracking-widest uppercase">{t('academy.mock.label')}</span>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-2 mb-6">
                  {t('academy.mock.course')}
                </h3>

                <div className="mb-6">
                  <div className="flex justify-between text-xs text-muted-foreground mb-2">
                    <span>{t('academy.mock.progress')}</span>
                    <span className="text-primary">50%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                    <div className="h-full w-1/2" style={{ background: 'var(--gradient-gold)' }} />
                  </div>
                </div>

                <ul className="space-y-3">
                  {lessons.map(({ key, done }) => (
                    <li key={key} className="flex items-center gap-3 p-3 rounded border border-border bg-background/40">
                      {done ? (
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      ) : (
                        <Circle className="w-5 h-5 text-muted-foreground shrink-0" />
                      )}
                      <span className={`text-sm ${done ? 'text-foreground' : 'text-muted-foreground'}`}>{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Cifras */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border mt-20"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-background p-6 lg:p-8 text-center">
              <div className="font-display text-3xl lg:text-4xl font-bold text-gradient-gold mb-2">{s.value}</div>
              <div className="text-xs lg:text-sm text-muted-foreground leading-snug">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA ayuntamientos / empresas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-foreground transition-colors tracking-wide"
          >
            {t('academy.cta.talk')}
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademySection;
