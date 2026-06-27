import { Helmet } from "react-helmet-async";
import { ArrowLeft, Shield } from "lucide-react";

const PrivacyPolicy = () => {

  return (
    <>
      <Helmet>
        <title>Política de Privacidad | TORO IA</title>
        <meta name="description" content="Política de privacidad de TORO IA. Información sobre cómo recopilamos, utilizamos y protegemos tus datos personales." />
        <link rel="canonical" href="https://toroia.vip/privacidad" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <div className="container mx-auto px-4 lg:px-8 py-24 max-w-4xl">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Inicio
          </a>

          <div className="flex items-center gap-4 mb-8">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="font-display text-3xl md:text-4xl font-bold text-gradient-gold">
              Política de Privacidad
            </h1>
          </div>

          <div className="space-y-12 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                1. Responsable del tratamiento
              </h2>
              <div className="bg-card border border-border rounded-lg p-6 space-y-2">
                <p><strong className="text-foreground">Responsable:</strong> Oscar Villena Carrasco (en nombre de toroia)</p>
                <p><strong className="text-foreground">NIF:</strong> 08937774C</p>
                <p><strong className="text-foreground">Dirección:</strong> Castillo de Almansa 428, Escalona (Toledo)</p>
                <p><strong className="text-foreground">Correo electrónico:</strong> oscarvillena@toroia.vip</p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                2. Datos que recopilamos
              </h2>
              <p>
                A través del formulario de contacto y solicitud de auditoría, recopilamos los siguientes datos personales:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Nombre y apellidos</li>
                <li>Correo electrónico</li>
                <li>Marca o empresa</li>
                <li>Sector de actividad</li>
                <li>Presupuesto aproximado</li>
                <li>Descripción del cuello de botella operativo</li>
                <li>Mensaje adicional</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                3. Finalidad del tratamiento
              </h2>
              <p>
                Los datos se tratan con las siguientes finalidades:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Gestionar las solicitudes de contacto y auditoría recibidas.</li>
                <li>Enviar presupuestos, propuestas e información comercial relacionada con nuestros servicios.</li>
                <li>Mantener una base de datos de clientes y potenciales clientes.</li>
                <li>Cumplir con obligaciones legales aplicables.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                4. Base jurídica del tratamiento
              </h2>
              <p>
                La base jurídica para el tratamiento de tus datos personales es el consentimiento que nos otorgas al completar y enviar cualquiera de los formularios del sitio web, así como la relación contractual o precontractual en caso de contratación de servicios.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                5. Destinatarios y transferencias
              </h2>
              <p>
                No se cederán tus datos personales a terceros, salvo obligación legal o cuando sea necesario para la prestación del servicio (por ejemplo, proveedores de alojamiento web, herramientas de email o CRM).
              </p>
              <p className="mt-2">
                Algunos de estos proveedores pueden tener servidores ubicados fuera del Espacio Económico Europeo. En dichos casos, garantizamos que se aplican las garantías adecuadas conforme al Reglamento General de Protección de Datos (RGPD).
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                6. Plazo de conservación
              </h2>
              <p>
                Los datos se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recogidos y para determinar las posibles responsabilidades que pudieran derivarse. Transcurrido dicho plazo, se procederá a su bloqueo y posterior eliminación.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                7. Tus derechos
              </h2>
              <p>
                Tienes derecho a:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Acceder a tus datos personales.</li>
                <li>Solicitar la rectificación de datos inexactos.</li>
                <li>Solicitar la supresión de tus datos cuando, entre otros motivos, ya no sean necesarios para la finalidad que motivó su recogida.</li>
                <li>Oponerte al tratamiento de tus datos o solicitar la limitación del mismo.</li>
                <li>Solicitar la portabilidad de tus datos.</li>
                <li>Retirar el consentimiento prestado en cualquier momento.</li>
              </ul>
              <p className="mt-2">
                Para ejercer estos derechos, envía un correo electrónico a <strong className="text-foreground">oscarvillena@toroia.vip</strong> indicando claramente qué derecho deseas ejercer y aportando una copia de tu documento de identidad.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                8. Seguridad de la información
              </h2>
              <p>
                Hemos adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de tus datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                9. Cambios en la política de privacidad
              </h2>
              <p>
                Nos reservamos el derecho a modificar esta Política de Privacidad para adaptarla a novedades legislativas o cambios en nuestros procedimientos. La versión actualizada estará siempre disponible en esta página.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
