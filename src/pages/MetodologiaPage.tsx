import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Search, Layers, BarChart3, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollAnimations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const WHATSAPP_URL = 'https://wa.me/34663663353?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20la%20web%20y%20el%20asistente%20de%20WhatsApp%20para%20mi%20negocio.';

const MetodologiaPage: React.FC = () => {
  const { t } = useLanguage();
  const heroReveal = useScrollReveal(0.1);
  const phasesReveal = useScrollReveal(0.1);
  const authorityReveal = useScrollReveal(0.1);
  const ctaReveal = useScrollReveal(0.1);

  const phases = [
    {
      icon: Search,
      title: '1. Hablamos 20 minutos',
      desc: 'Me cuentas cómo trabajas y qué preguntas te repiten más los clientes. Sin compromiso y sin tecnicismos.',
    },
    {
      icon: Layers,
      title: '2. Lo montamos por ti',
      desc: 'Preparamos tu web y, si quieres, un asistente de WhatsApp que contesta lo de siempre. Sobre tu WhatsApp y tu correo, sin cambiar cómo trabajas.',
    },
    {
      icon: BarChart3,
      title: '3. Lo pruebas y te acompañamos',
      desc: 'Lo pruebas tú antes de que lo vea ningún cliente. Después seguimos contigo: cambios, dudas y mantenimiento.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Cómo trabajamos | TORO IA</title>
        <meta name="description" content="Tres pasos sencillos para tener tu web y tu asistente de WhatsApp funcionando, sin complicaciones." />
        <link rel="canonical" href="https://toroia.vip/metodologia" />
        <meta property="og:title" content="Cómo trabajamos | TORO IA" />
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
                  Así trabajamos
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                  Tres pasos, en tu idioma y sin tecnicismos.
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
                  Trabajamos con despachos de abogados y negocios locales de la zona que quieren atender mejor a sus clientes sin perder tiempo en lo repetitivo.
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
                  Cuéntanos tu caso
                </h2>
                <p className="text-muted-foreground text-lg mb-10">
                  Escríbenos por WhatsApp o llama al 663 66 33 53 y vemos qué te conviene, sin compromiso.
                </p>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium btn-appointment-spotlight rounded inline-flex items-center gap-3"
                >
                  <MessageCircle className="w-5 h-5 relative z-10" aria-hidden="true" />
                  <span>Escríbenos por WhatsApp</span>
                </a>
                <p className="mt-4 text-sm text-muted-foreground">
                  Te respondo en menos de 24 horas. Sin compromiso.
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
