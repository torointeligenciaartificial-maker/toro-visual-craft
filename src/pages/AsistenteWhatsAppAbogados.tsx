import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const WHATSAPP_URL =
  'https://wa.me/34663663353?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20el%20asistente%20de%20WhatsApp%20para%20mi%20despacho.';
const URL_PAGE = 'https://toroia.vip/asistente-whatsapp-abogados';

const AsistenteWhatsAppAbogados: React.FC = () => {
  const { language } = useLanguage();
  const es = language === 'es';

  const includes = [
    {
      title: es ? '1. Hablamos y me cuentas tus dudas' : '1. We talk and you tell me the usual questions',
      text: es
        ? 'Me cuentas qué te preguntan más los clientes: horarios, documentos para una primera consulta, cómo pedir cita, honorarios orientativos.'
        : 'You tell me what clients ask the most: opening hours, documents for a first consultation, how to book, indicative fees.',
    },
    {
      title: es ? '2. Lo montamos sobre tu WhatsApp' : '2. We set it up on your WhatsApp',
      text: es
        ? 'Preparamos las respuestas con tus propias palabras y lo conectamos a tu WhatsApp. No cambias de número ni de forma de trabajar.'
        : 'We write the answers in your own words and connect it to your WhatsApp. You keep your number and your way of working.',
    },
    {
      title: es ? '3. Lo pruebas tú primero' : '3. You test it first',
      text: es
        ? 'Lo pruebas tú antes de que lo vea ningún cliente. Cuando te convence, lo activamos y seguimos mejorándolo cada mes.'
        : 'You test it before any client sees it. When you are happy, we switch it on and keep improving it every month.',
    },
  ];

  const faqs = [
    {
      q: es ? '¿Da consejo legal a mis clientes?' : 'Does it give legal advice to my clients?',
      a: es
        ? 'No. Solo contesta información práctica que tú decides (horarios, documentos, cómo pedir cita). Cuando alguien necesita una respuesta jurídica o hablar contigo, te avisa y le atiendes tú.'
        : 'No. It only answers practical information that you decide (hours, documents, how to book). When someone needs a legal answer or to speak to you, it alerts you and you take over.',
    },
    {
      q: es ? '¿Cuánto cuesta el asistente de WhatsApp?' : 'How much does the WhatsApp assistant cost?',
      a: es
        ? 'De 300 a 500 € de alta, según lo que tenga que contestar, más 50 a 90 € al mes. Todos los precios incluyen IVA y no hay permanencia.'
        : 'From €300 to €500 set-up, depending on what it has to answer, plus €50 to €90 a month. All prices include VAT and there is no lock-in.',
    },
    {
      q: es ? '¿Necesito tener ya una web?' : 'Do I need to already have a website?',
      a: es
        ? 'No. Si no la tienes, la hacemos (700 € con IVA, con tu ficha de Google y el botón de WhatsApp). Si ya la tienes, el asistente se monta igualmente.'
        : 'No. If you do not have one, we build it (€700 incl. VAT, with your Google profile and WhatsApp button). If you already have one, the assistant works just the same.',
    },
    {
      q: es ? '¿Cómo empezamos?' : 'How do we start?',
      a: es
        ? 'Escríbenos por WhatsApp o llama al 663 66 33 53. Hablamos 20 minutos, sin compromiso.'
        : 'Message us on WhatsApp or call 663 66 33 53. We talk for 20 minutes, no commitment.',
    },
  ];

  const title = es
    ? 'Asistente de WhatsApp para abogados | TORO IA'
    : 'WhatsApp assistant for lawyers | TORO IA';
  const description = es
    ? 'Asistente de WhatsApp para despachos de abogados: contesta a cualquier hora las dudas de siempre y te avisa cuando un cliente necesita hablar contigo. Desde 300 € con IVA.'
    : 'WhatsApp assistant for law firms: answers the usual questions at any hour and alerts you when a client needs to speak to you. From €300 incl. VAT.';

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
                {es ? 'Asistente de WhatsApp para abogados' : 'WhatsApp assistant for lawyers'}
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10">
                {es
                  ? 'Un asistente que contesta por WhatsApp las dudas de siempre, también fuera de horario, y te pasa solo lo que importa. Tú sigues atendiendo lo que de verdad necesita un abogado.'
                  : 'An assistant that answers the usual questions on WhatsApp, even after hours, and passes you only what matters. You keep handling what truly needs a lawyer.'}
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
                {es ? 'Cómo funciona' : 'How it works'}
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
                  ? 'Desde 300 € de alta más 50 a 90 € al mes · Todos los precios incluyen IVA · Sin permanencia.'
                  : 'From €300 set-up plus €50 to €90 a month · All prices include VAT · No lock-in.'}
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

export default AsistenteWhatsAppAbogados;
