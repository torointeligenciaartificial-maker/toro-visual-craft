import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Search, Layers, BarChart3, ArrowLeft, CalendarDays } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollAnimations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CALENDLY_URL = 'https://calendar.app.google/Guvvm7K1oUy7Lop5A';

const MetodologiaPage: React.FC = () => {
  const { t } = useLanguage();
  const heroReveal = useScrollReveal(0.1);
  const phasesReveal = useScrollReveal(0.1);
  const authorityReveal = useScrollReveal(0.1);
  const ctaReveal = useScrollReveal(0.1);

  const phases = [
    {
      icon: Search,
      title: 'Fase 1 — Diagnóstico',
      desc: 'Analizamos tus procesos actuales y detectamos los 3 cuellos de botella que más horas consumen. Entregamos un informe claro con impacto económico estimado.',
    },
    {
      icon: Layers,
      title: 'Fase 2 — Implantación',
      desc: 'Automatizamos sobre tus herramientas actuales con n8n/Make. Sin migraciones, sin fricción y con control de errores, logs y reintentos.',
    },
    {
      icon: BarChart3,
      title: 'Fase 3 — Resultados',
      desc: 'Tu equipo trabaja solo. Medimos ahorro real en horas y euros mes a mes y ajustamos los flujos para maximizar retorno.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Metodología de automatización con IA | TORO IA</title>
        <meta name="description" content="Proceso premium de 6 semanas para automatizar tareas, eliminar trabajo manual y medir ahorro desde la primera semana." />
        <link rel="canonical" href="https://toroia.vip/metodologia" />
        <meta property="og:title" content="Metodología de automatización con IA | TORO IA" />
        <meta property="og:url" content="https://toroia.vip/metodologia" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />

        <main className="pt-20">
          {/* Hero */}
          <section className="section-cinematic py-24 lg:py-32">
            <div ref={heroReveal.ref} className="container mx-auto px-4 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroReveal.isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center"
              >
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-8 h-0.5 bg-primary" />
                  <span className="text-primary font-medium tracking-widest uppercase text-sm">
                    Metodología
                  </span>
                  <div className="w-8 h-0.5 bg-primary" />
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Metodología de trabajo con IA y automatización
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                  Un proceso de 6 semanas diseñado para eliminar trabajo manual, escalar operaciones y medir ahorro desde la primera semana.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Phases */}
          <section className="py-24 lg:py-32 bg-background">
            <div ref={phasesReveal.ref} className="container mx-auto px-4 lg:px-8">
              <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                {phases.map((phase, index) => {
                  const Icon = phase.icon;
                  return (
                    <motion.div
                      key={phase.title}
                      initial={{ opacity: 0, y: 40 }}
                      animate={phasesReveal.isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className="card-premium p-8 lg:p-10 text-center"
                    >
                      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>

                      <h2 className="font-display text-xl lg:text-2xl font-semibold mb-4 text-foreground">
                        {phase.title}
                      </h2>
                      <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                        {phase.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Authority Block */}
          <section className="section-cinematic py-20 lg:py-28">
            <div ref={authorityReveal.ref} className="container mx-auto px-4 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={authorityReveal.isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto text-center"
              >
                <div className="divider-gold mb-8" />
                <p className="text-lg md:text-xl text-foreground leading-relaxed font-display">
                  Trabajamos con empresas de seguridad y servicios profesionales que buscan eliminar tareas manuales y escalar sin contratar más personal.
                </p>
                <div className="divider-gold mt-8" />
              </motion.div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="py-24 lg:py-32 bg-background">
            <div ref={ctaReveal.ref} className="container mx-auto px-4 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={ctaReveal.isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="max-w-2xl mx-auto text-center"
              >
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Comienza con un diagnóstico gratuito
                </h2>
                <p className="text-muted-foreground text-lg mb-10">
                  Agenda 20 minutos y descubre exactamente qué procesos de tu empresa pueden automatizarse hoy.
                </p>

                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium btn-appointment-spotlight rounded inline-flex items-center gap-3"
                >
                  <CalendarDays className="w-5 h-5 relative z-10" aria-hidden="true" />
                  <span>Reserva tu diagnóstico gratuito de 20 min</span>
                </a>
                <p className="mt-4 text-sm text-muted-foreground">
                  Responderé en menos de 24h. Sin compromiso.
                </p>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MetodologiaPage;
