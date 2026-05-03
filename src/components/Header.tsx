import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, CalendarDays } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CALENDLY_URL = 'https://calendar.app.google/Guvvm7K1oUy7Lop5A';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutionsItems = [
    { key: 'nav.solutions.consulting', href: 'consultoria' },
    { key: 'nav.solutions.automation', href: 'automatizacion' },
    { key: 'nav.solutions.identity', href: 'identidad' },
  ];

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    setIsSolutionsOpen(false);
    setIsMobileSolutionsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 10);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => scrollToSection('hero')} className="flex items-center group">
            <span className="font-serif text-xl md:text-2xl font-medium tracking-[0.25em] text-primary/90 hover:text-primary transition-colors duration-300">
              TORO IA
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('process')}
              className="relative text-sm font-medium text-cream-muted hover:text-cream transition-colors duration-300 line-animate"
            >
              {t('nav.methodology')}
            </button>

            <button
              onClick={() => scrollToSection('ecosystem')}
              className="relative text-sm font-medium text-cream-muted hover:text-cream transition-colors duration-300 line-animate"
            >
              {t('nav.solutions')}
            </button>

            <button
              onClick={() => scrollToSection('cases')}
              className="relative text-sm font-medium text-cream-muted hover:text-cream transition-colors duration-300 line-animate"
            >
              {t('nav.cases')}
            </button>
          </nav>

          {/* Language & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm">
              <button
                onClick={() => setLanguage('es')}
                className={`transition-colors duration-300 ${
                  language === 'es' ? 'text-primary font-medium' : 'text-muted-foreground hover:text-cream'
                }`}
              >
                ES
              </button>
              <span className="text-muted-foreground">/</span>
              <button
                onClick={() => setLanguage('en')}
                className={`transition-colors duration-300 ${
                  language === 'en' ? 'text-primary font-medium' : 'text-muted-foreground hover:text-cream'
                }`}
              >
                EN
              </button>
            </div>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium btn-appointment-spotlight rounded"
            >
              <span>{t('nav.cta')}</span>
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium btn-appointment-spotlight rounded px-3 py-2 text-[10px] sm:px-4 sm:py-2.5 sm:text-xs flex items-center gap-2"
            >
              <CalendarDays className="relative z-10 w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
              <span>{t('nav.cta')}</span>
            </a>

            <button
              className="p-2 text-cream"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background/98 backdrop-blur-lg border-b border-border"
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col gap-2">
                <button
                  onClick={() => scrollToSection('process')}
                  className="text-left text-lg font-medium text-cream-muted hover:text-primary transition-colors duration-300 py-2"
                >
                  {t('nav.methodology')}
                </button>

                <button
                  onClick={() => scrollToSection('ecosystem')}
                  className="text-left text-lg font-medium text-cream-muted hover:text-primary transition-colors duration-300 py-2"
                >
                  {t('nav.solutions')}
                </button>

                <button
                  onClick={() => scrollToSection('cases')}
                  className="text-left text-lg font-medium text-cream-muted hover:text-primary transition-colors duration-300 py-2"
                >
                  {t('nav.cases')}
                </button>

                <div className="flex items-center gap-4 py-4 border-t border-border mt-4">
                  <button
                    onClick={() => setLanguage('es')}
                    className={`text-lg transition-colors duration-300 ${
                      language === 'es' ? 'text-primary font-medium' : 'text-muted-foreground'
                    }`}
                  >
                    Español
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`text-lg transition-colors duration-300 ${
                      language === 'en' ? 'text-primary font-medium' : 'text-muted-foreground'
                    }`}
                  >
                    English
                  </button>
                </div>

                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-premium btn-appointment-spotlight rounded mt-4 text-center"
                >
                  <span>{t('nav.cta')}</span>
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t('nav.cta')}
        className="fixed left-4 right-4 bottom-4 z-50 btn-premium btn-appointment-spotlight rounded flex items-center justify-center gap-2 py-4 text-sm lg:left-auto lg:right-6 lg:bottom-6 lg:w-auto lg:px-10 lg:py-5 lg:text-base"
      >
        <CalendarDays className="relative z-10 w-4 h-4" aria-hidden="true" />
        <span>{t('nav.cta')}</span>
      </a>
    </header>
  );
};

export default Header;
