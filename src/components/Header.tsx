import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CALENDLY_URL = 'https://calendly.com/oscarvillena-toroia/30min';

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

  const openCalendly = () => {
    setIsMobileMenuOpen(false);
    window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
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

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <button
                onClick={() => scrollToSection('ecosystem')}
                className="flex items-center gap-1 text-sm font-medium text-cream-muted hover:text-cream transition-colors duration-300"
              >
                {t('nav.solutions')}
                <ChevronDown size={14} className={`transition-transform duration-300 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isSolutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 min-w-[260px]"
                  >
                    <div className="bg-background/98 backdrop-blur-md border border-border py-2">
                      {solutionsItems.map((item) => (
                        <button
                          key={item.key}
                          onClick={() => scrollToSection(item.href)}
                          className="block w-full text-left px-5 py-3 text-sm text-cream-muted hover:text-primary hover:bg-card/60 transition-colors duration-200"
                        >
                          {t(item.key)}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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
              className="btn-premium rounded"
            >
              <span>{t('nav.cta')}</span>
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-cream"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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

                <div>
                  <button
                    onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                    className="w-full flex items-center justify-between text-left text-lg font-medium text-cream-muted hover:text-primary transition-colors duration-300 py-2"
                  >
                    {t('nav.solutions')}
                    <ChevronDown size={18} className={`transition-transform duration-300 ${isMobileSolutionsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isMobileSolutionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden pl-4 border-l border-border ml-2"
                      >
                        {solutionsItems.map((item) => (
                          <button
                            key={item.key}
                            onClick={() => scrollToSection(item.href)}
                            className="block w-full text-left py-2 text-base text-cream-muted hover:text-primary transition-colors duration-200"
                          >
                            {t(item.key)}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

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
                  className="btn-premium rounded mt-4 text-center"
                >
                  <span>{t('nav.cta')}</span>
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
