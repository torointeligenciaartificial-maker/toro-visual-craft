import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border pt-16 pb-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="/" className="font-display text-2xl font-bold text-gradient-gold mb-3 inline-block">
              TORO IA
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-foreground text-sm font-semibold tracking-widest uppercase mb-4">
              Servicios
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/#pricing" className="hover:text-primary transition-colors">Precios</a></li>
              <li><a href="/#process" className="hover:text-primary transition-colors">Cómo trabajamos</a></li>
              <li><a href="/#cases" className="hover:text-primary transition-colors">Reseñas de clientes</a></li>
              <li><a href="/#contact" className="hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contacto / Presencia local */}
          <div>
            <h3 className="text-foreground text-sm font-semibold tracking-widest uppercase mb-4">
              Presencia local
            </h3>
            <address className="not-italic space-y-3 text-sm text-muted-foreground">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>C. Castillo de Almansa<br />45910 Escalona, Toledo, España</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+34663663353" className="hover:text-primary transition-colors">663 66 33 53</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:oscarvillena@toroia.vip" className="hover:text-primary transition-colors">oscarvillena@toroia.vip</a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <span>L–V de 9:00 a 18:00</span>
              </p>
            </address>
          </div>
        </div>

        {/* Legal bar */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex flex-wrap items-center gap-3">
            <a href="/aviso-legal" className="hover:text-primary transition-colors">Aviso Legal</a>
            <span className="text-border">|</span>
            <a href="/privacidad" className="hover:text-primary transition-colors">Política de Privacidad</a>
            <span className="text-border">|</span>
            <a href="/cookies" className="hover:text-primary transition-colors">Política de Cookies</a>
          </div>
          <p>© {currentYear} TORO IA. {t('footer.rights')}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
