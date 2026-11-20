import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const WHATSAPP_URL =
  'https://wa.me/34663663353?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20una%20web%20y%20el%20asistente%20de%20WhatsApp%20para%20mi%20negocio.';
const URL_PAGE = 'https://toroia.vip/web-negocios-toledo';

const NegociosToledo: React.FC = () => {
  const { language } = useLanguage();
  const es = language === 'es';

  const includes = [
    {
      title: es ? 'Tu web, lista en pocos días' : 'Your website, ready in days',
      text: es
        ? 'Una web clara que se ve bien en el móvil, con tu ficha de Google, tu teléfono y un botón de WhatsApp. 700 € con IVA, sin cuotas ocultas.'
        : 'A clear website that looks good on mobile, with your Google profile, phone and a WhatsApp button. €700 incl. VAT, no hidden fees.',
    },
    {
      title: es ? 'Un asistente que atiende por ti' : 'An assistant that answers for you',
      text: es
        ? 'Contesta por WhatsApp horarios, precios y cómo pedir cita, también fuera de horario, y te avisa cuando un cliente quiere hablar contigo.'
        : 'It answers hours, prices and how to book on WhatsApp, even after hours, and alerts you when a client wants to speak to you.',
    },
    {
      title: es ? 'Gestorías y asesorías' : 'Accountancy and advisory firms',
      text: es
        ? 'Para gestorías: recordatorios a clientes de plazos y documentos pendientes. Y si nos recomiendas a un cliente, te damos una comisión del 10 al 15 %.'
        : 'For accountancy firms: reminders to clients about deadlines and missing documents. And if you recommend us to a client, we pay you a 10 to 15% commission.',
    },
  ];

  const audiences = [
    {
      title: es ? 'Gestorías y asesorías' : 'Accountancy and advisory firms',
      text: es
        ? 'Avisos a clientes de plazos y documentos pendientes, y respuestas a las preguntas de siempre sin descolgar el teléfono.'
        : 'Reminders to clients about deadlines and missing documents, and answers to the usual questions without picking up the phone.',
    },
    {
      title: es ? 'Comercios y tiendas' : 'Shops and stores',
      text: es
        ? 'Horarios, ubicación y consultas de producto contestados al momento, también cuando tienes la tienda llena.'
        : 'Opening hours, location and product questions answered instantly, even when your shop is full.',
    },
    {
      title: es ? 'Clínicas y consultas' : 'Clinics and practices',
      text: es
        ? 'Cómo pedir cita, qué llevar a la primera visita y cuánto cuesta, sin que tu equipo pierda tiempo al teléfono.'
        : 'How to book, what to bring to the first visit and what it costs, without your team losing time on the phone.',
    },
    {
      title: es ? 'Talleres, reformas y servicios' : 'Workshops, renovation and services',
      text: es
        ? 'Los clientes te escriben, el asistente recoge qué necesitan y tú les respondes con el presupuesto.'
        : 'Clients message you, the assistant collects what they need and you reply with the quote.',
    },
  ];

  const faqs = [
    {
      q: es ? '¿Trabajáis con negocios de Toledo y de los pueblos de alrededor?' : 'Do you work with businesses in Toledo and the nearby towns?',
      a: es
        ? 'Sí. Trabajo con negocios y despachos de Toledo y de los pueblos de alrededor. Puedo ir a verte en persona dos mañanas a la semana.'
        : 'Yes. I work with businesses and firms in Toledo and the nearby towns. I can visit you in person two mornings a week.',
    },
    {
      q: es ? '¿Cuánto cuesta?' : 'How much does it cost?',
      a: es
        ? 'Web: 700 €. Asistente de WhatsApp: de 300 a 500 € de alta más 50 a 90 € al mes. Mantenimiento de la web: de 90 a 150 € al mes. Todo con IVA y sin permanencia.'
        : 'Website: €700. WhatsApp assistant: €300 to €500 set-up plus €50 to €90 a month. Website maintenance: €90 to €150 a month. All incl. VAT and no lock-in.',
    },
    {
      q: es ? 'No sé nada de tecnología, ¿me vale?' : 'I know nothing about technology, is it for me?',
      a: es
        ? 'Precisamente para eso. Te lo explico sin tecnicismos y me encargo de todo. Tú solo me cuentas cómo funciona tu negocio.'
        : 'That is exactly who it is for. I explain it without jargon and take care of everything. You just tell me how your business works.',
    },
    {
      q: es ? '¿Hay ayudas para digitalizar mi negocio?' : 'Are there grants to digitalise my business?',
      a: es
        ? 'Puede haberlas según tu caso. En la charla gratuita lo revisamos contigo y te digo qué te conviene pedir.'
        : 'There may be, depending on your case. In the free chat we review it together and I tell you what is worth applying for.',
    },
    {
      q: es ? '¿Cómo empezamos?' : 'How do we start?',
      a: es
        ? 'Escríbenos por WhatsApp o llama al 663 66 33 53. Hablamos 20 minutos, sin compromiso.'
        : 'Message us on WhatsApp or call 663 66 33 53. We talk for 20 minutes, no commitment.',
    },
  ];

  const title = es
    ? 'Web y WhatsApp para negocios y gestorías en Toledo y alrededores | TORO IA'
    : 'Website and WhatsApp for businesses and accountancy firms in Toledo and nearby towns | TORO IA';
  const description = es
    ? 'Web profesional y asistente de WhatsApp para negocios, gestorías y asesorías de Toledo y los pueblos de alrededor. Web desde 700 € con IVA, sin permanencia.'
    : 'Professional website and WhatsApp assistant for businesses and accountancy firms in Toledo and nearby towns. Website from €700 incl. VAT, no lock-in.';

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
                {es ? 'Negocios, gestorías y asesorías' : 'Businesses and advisory firms'}
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {es ? 'Web y WhatsApp para tu negocio en Toledo y pueblos de alrededor' : 'Website and WhatsApp for your business in Toledo and nearby towns'}
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10">
                {es
                  ? 'Una web que te encuentren en Google y un asistente que atiende a tus clientes por WhatsApp, también fuera de horario. Sin tecnicismos y con un precio claro.'
                  : 'A website people can find on Google and an assistant that answers your clients on WhatsApp, even after hours. No jargon and a clear price.'}
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
                {es ? 'Qué te ofrecemos' : 'What we offer'}
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
                  ? 'Web desde 700 € · Asistente desde 300 € + 50 a 90 € al mes · Todos los precios incluyen IVA · Sin permanencia.'
                  : 'Website from €700 · Assistant from €300 + €50 to €90 a month · All prices include VAT · No lock-in.'}
              </p>
            </div>
          </section>

          <section className="py-16 lg:py-20">
            <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
              <h2 className="font-display text-3xl font-bold mb-10 text-center">
                {es ? 'Para quién es' : 'Who it is for'}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {audiences.map((a) => (
                  <article key={a.title} className="p-8 border border-border bg-card/40">
                    <h3 className="font-display text-xl font-semibold mb-3">{a.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{a.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 lg:py-20">
            <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
              <h2 className="font-display text-3xl font-bold mb-3 text-center">
                {es ? 'Así responde el asistente' : 'How the assistant replies'}
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                {es ? 'Un ejemplo con una tienda de Toledo.' : 'An example with a shop in Toledo.'}
              </p>
              <div className="space-y-3">
                <div className="max-w-[85%] p-4 border border-border bg-card/40 text-sm">
                  {es ? 'Hola, ¿abrís el sábado por la tarde?' : 'Hi, are you open on Saturday afternoon?'}
                </div>
                <div className="max-w-[85%] ml-auto p-4 border border-primary/40 bg-primary/10 text-sm">
                  {es
                    ? 'Hola, sí. Los sábados abrimos de 10:00 a 14:00 y de 17:00 a 20:00. ¿Quieres que te reserve algo para pasar a recogerlo?'
                    : 'Hello, yes. On Saturdays we are open 10:00 to 14:00 and 17:00 to 20:00. Would you like me to set something aside for you?'}
                </div>
                <div className="max-w-[85%] p-4 border border-border bg-card/40 text-sm">
                  {es ? 'Sí, quiero hablar con alguien sobre un pedido grande.' : 'Yes, I want to talk to someone about a large order.'}
                </div>
                <div className="max-w-[85%] ml-auto p-4 border border-primary/40 bg-primary/10 text-sm">
                  {es
                    ? 'Perfecto, aviso ahora mismo al responsable y te escribe en cuanto pueda.'
                    : 'Perfect, I am alerting the owner right now and they will message you as soon as they can.'}
                </div>
              </div>
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

export default NegociosToledo;
