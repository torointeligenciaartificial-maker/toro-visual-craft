import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, Cookie } from "lucide-react";

const CookiePolicy = () => {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>Política de Cookies | TORO IA</title>
        <meta name="description" content="Política de cookies de TORO IA. Información sobre qué cookies utilizamos y cómo gestionarlas en tu navegador." />
        <link rel="canonical" href="https://toroia.vip/cookies" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <div className="container mx-auto px-4 lg:px-8 py-24 max-w-4xl">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('nav.home')}
          </a>

          <div className="flex items-center gap-4 mb-8">
            <Cookie className="w-8 h-8 text-primary" />
            <h1 className="font-display text-3xl md:text-4xl font-bold text-gradient-gold">
              Política de Cookies
            </h1>
          </div>

          <div className="space-y-12 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                1. ¿Qué son las cookies?
              </h2>
              <p>
                Una cookie es un pequeño archivo de texto que los sitios web guardan en tu navegador cuando los visitas. Las cookies permiten al sitio web recordar tus acciones y preferencias (como el idioma o el inicio de sesión) durante un período de tiempo, para que no tengas que volver a introducirlos cada vez que regreses al sitio o navegues entre páginas.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                2. Cookies que utilizamos
              </h2>
              <p className="mb-4">
                En este sitio web utilizamos los siguientes tipos de cookies:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-3 pr-4 text-foreground font-semibold">Tipo</th>
                      <th className="py-3 pr-4 text-foreground font-semibold">Finalidad</th>
                      <th className="py-3 text-foreground font-semibold">Duración</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4 font-medium text-foreground">Cookies técnicas / necesarias</td>
                      <td className="py-3 pr-4">Permiten la navegación y el uso de las diferentes opciones o servicios del sitio web (por ejemplo, controlar el tráfico y la comunicación de datos).</td>
                      <td className="py-3">Sesión / Persistentes</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4 font-medium text-foreground">Cookies de preferencias</td>
                      <td className="py-3 pr-4">Permiten recordar información para que accedas al servicio con determinadas características que pueden diferenciar tu experiencia (por ejemplo, el idioma seleccionado).</td>
                      <td className="py-3">1 año</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4 font-medium text-foreground">Cookies de análisis / estadísticas</td>
                      <td className="py-3 pr-4">Permiten realizar el seguimiento y análisis del comportamiento de los usuarios del sitio web para introducir mejoras.</td>
                      <td className="py-3">1-2 años</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                3. Cookies de terceros
              </h2>
              <p>
                Este sitio web puede utilizar servicios de terceros que instalan cookies desde dominios ajenos a toroia. En concreto:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong className="text-foreground">Google Analytics:</strong> para el análisis del tráfico y comportamiento de los usuarios. Puedes consultar su política de cookies en <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">policies.google.com</a>.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                4. Cómo gestionar o desactivar las cookies
              </h2>
              <p>
                Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones de tu navegador:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/es/kb/Borrar%20cookies" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.microsoft.com/es-es/help/278835/how-to-delete-cookie-files-in-internet-explorer" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
                <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
              </ul>
              <p className="mt-4">
                Ten en cuenta que desactivar las cookies puede afectar al correcto funcionamiento de algunas secciones del sitio web.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                5. Actualizaciones de la política de cookies
              </h2>
              <p>
                Es posible que actualicemos esta Política de Cookies en función de cambios legislativos, técnicos o en el tipo de cookies utilizadas. Te recomendamos revisar esta página periódicamente.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                6. Contacto
              </h2>
              <p>
                Si tienes dudas sobre esta Política de Cookies, puedes contactarnos en <strong className="text-foreground">oscarvillena@toroia.vip</strong>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiePolicy;
