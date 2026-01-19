import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <button
              onClick={() => scrollToSection('hero')}
              className="font-display text-2xl font-bold text-gradient-gold mb-2 block"
            >
              TORO IA
            </button>
            <p className="text-muted-foreground text-sm">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © {currentYear} TORO IA. {t('footer.rights')}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
