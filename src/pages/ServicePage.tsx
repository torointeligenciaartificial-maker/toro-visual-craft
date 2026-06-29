import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, CalendarDays } from 'lucide-react';
import { getServiceBySlug } from '@/data/services';

const CALENDAR_URL = 'https://calendar.app.google/Guvvm7K1oUy7Lop5A';
const SITE = 'https://toroia.vip';

const ServicePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) return <Navigate to="/" replace />;

  const url = `${SITE}/servicios/${service.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.h1,
    description: service.metaDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'TORO IA',
      url: SITE,
      telephone: '+34 663 68 33 53',
      email: 'info@toroia.vip',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'C. Castillo de Almansa',
        addressLocality: 'Escalona',
        postalCode: '45910',
        addressRegion: 'Toledo',
        addressCountry: 'ES',
      },
    },
    areaServed: { '@type': 'Country', name: 'España' },
    url,
  };

  const breadcrumbsLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE + '/' },
      { '@type': 'ListItem', position: 2, name: 'Servicios', item: SITE + '/#ecosystem' },
      { '@type': 'ListItem', position: 3, name: service.h1, item: url },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{service.title}</title>
        <meta name="description" content={service.metaDescription} />
        <meta name="keywords" content={service.keywords} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={service.title} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:url" content={url} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbsLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28 max-w-4xl">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Inicio
          </a>

          {/* Hero */}
          <header className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-primary font-medium tracking-widest uppercase text-xs">
                Servicio
              </span>
            </div>
            <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight text-foreground mb-6">
              {service.h1}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              {service.subtitle}
            </p>
            <div className="mt-8">
              <a
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium btn-appointment-spotlight rounded inline-flex items-center gap-2"
              >
                <CalendarDays className="w-4 h-4" />
                <span>Reserva tu diagnóstico gratuito de 20 min</span>
              </a>
            </div>
          </header>

          {/* Beneficios */}
          <section className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground">
              Beneficios clave
            </h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 p-5 border border-border bg-card/40 rounded">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{b}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Qué incluye */}
          <section className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground">
              Qué incluye el servicio
            </h2>
            <ul className="space-y-3">
              {service.includes.map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary mt-1">—</span>
                  <span className="text-muted-foreground leading-relaxed">{i}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Proceso */}
          <section className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground">
              Proceso de trabajo en 3 pasos
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {service.steps.map((s, idx) => (
                <div key={s.title} className="p-6 border border-border bg-card/40 rounded">
                  <div className="text-primary text-xs tracking-widest uppercase mb-3">
                    Paso {idx + 1}
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-3 text-foreground">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Final */}
          <section className="border-t border-border pt-12 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4 text-foreground">
              ¿Listo para empezar?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Reserva una sesión sin compromiso. 20 minutos, claros y directos.
            </p>
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium btn-appointment-spotlight rounded inline-flex items-center gap-2"
            >
              <CalendarDays className="w-4 h-4" />
              <span>Reserva tu diagnóstico gratuito de 20 min</span>
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

export default ServicePage;
