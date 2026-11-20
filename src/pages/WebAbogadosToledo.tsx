import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const WHATSAPP_URL =
  'https://wa.me/34663663353?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20la%20web%20para%20mi%20despacho%20de%20abogados.';
const URL_PAGE = 'https://toroia.vip/web-para-abogados-toledo';

const WebAbogadosToledo: React.FC = () => {
  const { language } = useLanguage();
  const es = language === 'es';

  const includes = [
    {
      title: es ? 'Una web clara y profesional' : 'A clear, professional website',
      text: es
        ? 'Quién eres, en qué áreas trabajas, cómo contactar y dónde estás. Se ve bien en el móvil, que es desde donde te buscará la mayoría.'
        : 'Who you are, which areas you work in, how to get in touch and where you are. It looks good on mobile, where most people will find you.',
    },
    {
      title: es ? 'Tu ficha de Google con reseñas' : 'Your Google profile with reviews',
      text: es
        ? 'Te ayudamos a tener la ficha completa y a pedir reseñas a tus clientes, para aparecer cuando alguien busca un abogado cerca.'
        : 'We help you complete your profile and ask clients for reviews, so you show up when someone searches for a lawyer nearby.',
    },
    {
      title: es ? 'Asistente de WhatsApp' : 'WhatsApp assistant',
      text: es
        ? 'Contesta a cualquier hora las dudas de siempre (horarios, documentos, primera consulta) y te pasa solo lo que importa.'
        : 'Answers the usual questions at any hour (opening hours, documents, first consultation) and passes you only what matters.',
    },
  ];

  const faqs = [
    {
      q: es ? '¿Cuánto cuesta una web para un despacho de abogados?' : 'How much does a website for a law firm cost?',
      a: es
        ? 'La web con ficha de Google y botón de WhatsApp cuesta 700 € en un solo pago, IVA incluido. El asistente de WhatsApp es opcional: de 300 a 500 € de alta más 50 a 90 € al mes. El mantenimiento, también opcional, es de 90 a 150 € al mes y sin permanencia.'
        : 'The website with Google profile and WhatsApp button costs €700 in a single payment, VAT included. The WhatsApp assistant is optional: €300 to €500 set-up plus €50 to €90 a month. Maintenance, also optional, is €90 to €150 a month with no lock-in.',
    },
    {
      q: es ? '¿Qué hace el asistente de WhatsApp?' : 'What does the WhatsApp assistant do?',
      a: es
        ? 'Responde a tus clientes las preguntas que más se repiten y te avisa cuando alguien necesita hablar contigo. Se monta sobre tu WhatsApp, sin cambiar cómo trabajas, y lo pruebas tú antes de que lo vea ningún cliente.'
        : 'It answers the questions clients repeat the most and alerts you when someone needs to speak to you. It runs on top of your own WhatsApp, without changing how you work, and you test it before any client sees it.',
    },
    {
      q: es ? '¿Trabajáis con despachos de fuera de Toledo?' : 'Do you work with firms outside Toledo?',
      a: es
        ? 'Sí. Estamos en Escalona (Toledo) y atendemos a despachos de la comarca, pero la web y el asistente se montan a distancia, así que también trabajamos con despachos de otras provincias.'
        : 'Yes. We are based in Escalona (Toledo) and serve firms in the area, but the website and assistant are set up remotely, so we also work with firms in other provinces.',
    },
    {
      q: es ? '¿Cómo empezamos?' : 'How do we start?',
      a: es
        ? 'Escríbenos por WhatsApp o llama al 663 66 33 53. Hablamos 20 minutos, sin compromiso, y te cuento qué te conviene.'
        : 'Message us on WhatsApp or call 663 66 33 53. We talk for 20 minutes, no commitment, and I tell you what suits you.',
    },
  ];

  const title = es
    ? 'Web para despachos de abogados en Toledo | TORO IA'
    : 'Website for law firms in Toledo | TORO IA';
  const description = es
    ? 'Webs y apps para abogados: web profesional, ficha de Google y asistente de WhatsApp que contesta las dudas de siempre. Desde 700 € con IVA. Escalona, Toledo.'
    : 'Websites and apps for lawyers: professional website, Google profile and a WhatsApp assistant that answers the usual questions. From €700 incl. VAT. Escalona, Toledo.';

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={URL_PAGE} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={URL_PAGE} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="pt-20">
          <section className="py-20 lg:py-28">
            <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
                {es ? 'Webs y apps para abogados' : 'Websites and apps for lawyers'}
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {es ? 'Web para despachos de abogados en Toledo' : 'Website for law firms in Toledo'}
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10">
                {es
                  ? 'Tu web, tu ficha de Google y un asistente de WhatsApp que contesta las dudas de siempre, también fuera de horario. Para que los clientes te encuentren y te escriban.'
                  : 'Your website, your Google profile and a WhatsApp assistant that answers the usual questions, even after hours. So clients can find you and message you.'}
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium rounded inline-flex items-center gap-3"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                <span>{es ? 'Escríbenos por WhatsApp' : 'Message us on WhatsApp'}</span>
              </a>
              <p className="mt-4 text-sm text-muted-foreground">
                {es ? 'O llama al 663 66 33 53. Te respondo en menos de 24 horas.' : 'Or call 663 66 33 53. I reply within 24 hours.'}
              </p>
            </div>
          </section>

          <section className="py-16 lg:py-20">
            <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
              <h2 className="font-display text-3xl font-bold mb-10 text-center">
                {es ? 'Qué incluye' : 'What is included'}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {includes.map((i) => (
                  <article key={i.title} className="p-8 border border-border bg-card/40">
                    <h3 className="font-display text-xl font-semibold mb-3">{i.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{i.text}</p>
                  </article>
                ))}
              </div>
              <p className="text-center text-muted-foreground mt-8">
                {es
                  ? 'Web desde 700 € · Asistente de WhatsApp desde 300 € de alta · Todos los precios incluyen IVA.'
                  : 'Website from €700 · WhatsApp assistant from €300 set-up · All prices include VAT.'}
              </p>
            </div>
          </section>

          <section className="py-16 lg:py-20">
            <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
              <h2 className="font-display text-3xl font-bold mb-10 text-center">
                {es ? 'Preguntas frecuentes' : 'Frequently asked questions'}
              </h2>
              <div className="space-y-6">
                {faqs.map((f) => (
                  <div key={f.q} className="border-b border-border pb-6">
                    <h3 className="font-display text-lg font-semibold mb-2">{f.q}</h3>
                    <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 text-center">
            <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
              <h2 className="font-display text-3xl font-bold mb-4">
                {es ? 'Cuéntanos tu caso' : 'Tell us about your case'}
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                {es ? 'Hablamos 20 minutos, sin compromiso y sin tecnicismos.' : 'We talk for 20 minutes, no commitment and no jargon.'}
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium rounded inline-flex items-center gap-3"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                <span>{es ? 'Escríbenos por WhatsApp' : 'Message us on WhatsApp'}</span>
              </a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default WebAbogadosToledo;
