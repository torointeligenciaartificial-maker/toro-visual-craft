import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, Scale } from "lucide-react";

const LegalNotice = () => {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>Aviso Legal | TORO IA</title>
        <meta name="description" content="Aviso legal de TORO IA. Información sobre el titular del sitio web, condiciones de uso y responsabilidades." />
        <link rel="canonical" href="https://toroia.vip/aviso-legal" />
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
            <Scale className="w-8 h-8 text-primary" />
            <h1 className="font-display text-3xl md:text-4xl font-bold text-gradient-gold">
              Aviso Legal
            </h1>
          </div>

          <div className="space-y-12 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                1. Titular del sitio web
              </h2>
              <div className="bg-card border border-border rounded-lg p-6 space-y-2">
                <p><strong className="text-foreground">Razón social:</strong> toroia</p>
                <p><strong className="text-foreground">Responsable:</strong> Oscar Villena Carrasco</p>
                <p><strong className="text-foreground">NIF/CIF:</strong> 08937774C</p>
                <p><strong className="text-foreground">Dirección:</strong> Castillo de Almansa 428, Escalona (Toledo)</p>
                <p><strong className="text-foreground">Correo electrónico:</strong> oscarvillena@toroia.vip</p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                2. Condiciones de uso
              </h2>
              <p>
                El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación plena y sin reserva de todas las disposiciones incluidas en este Aviso Legal. El usuario se compromete a utilizar el sitio web de conformidad con la ley, la moral, las buenas costumbres y el orden público.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                3. Propiedad intelectual e industrial
              </h2>
              <p>
                Todos los contenidos del sitio web (textos, imágenes, logotipos, diseños, código fuente, etc.) son propiedad de toroia o se utilizan con autorización de sus respectivos titulares, estando protegidos por la normativa española e internacional de propiedad intelectual e industrial.
              </p>
              <p className="mt-2">
                Queda prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otro uso de los contenidos sin autorización expresa por escrito de toroia.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                4. Limitación de responsabilidad
              </h2>
              <p>
                toroia no se hace responsable de los daños y perjuicios que pudieran derivarse de la interrupción del funcionamiento del sitio web, de virus informáticos, de fallos en el sistema o de contenidos de terceros a los que se pueda acceder a través de enlaces.
              </p>
              <p className="mt-2">
                El usuario asume toda la responsabilidad derivada del uso de los contenidos y servicios del sitio web.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                5. Enlaces a terceros
              </h2>
              <p>
                Este sitio web puede contener enlaces a sitios de terceros. toroia no se responsabiliza del contenido, políticas de privacidad ni prácticas de dichos sitios externos.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                6. Legislación aplicable y jurisdicción
              </h2>
              <p>
                Este Aviso Legal se rige por la legislación española. Para cualquier controversia que pudiera surgir en relación con el sitio web, las partes se someten a los juzgados y tribunales de Toledo (España), renunciando expresamente a cualquier otro fuero que pudiera corresponderles.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                7. Modificaciones
              </h2>
              <p>
                toroia se reserva el derecho a modificar este Aviso Legal en cualquier momento, publicándose las actualizaciones en esta misma página. Se recomienda al usuario revisar periódicamente su contenido.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default LegalNotice;
