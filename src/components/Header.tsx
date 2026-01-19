import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'nav.home', href: 'hero' },
    { key: 'nav.services', href: 'services' },
    { key: 'nav.campaigns', href: 'portfolio' },
    { key: 'nav.process', href: 'process' },
    { key: 'nav.about', href: 'about' },
    { key: 'nav.contact', href: 'contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    
    // Small delay to allow mobile menu to close first
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
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
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')} 
            className="flex items-center gap-3 group"
          >
            <span className="font-display text-2xl font-bold text-gradient-gold">
              TORO IA
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="relative text-sm font-medium text-cream-muted hover:text-cream transition-colors duration-300 line-animate"
              >
                {t(item.key)}
              </button>
            ))}
          </nav>

          {/* Language Toggle & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Language Toggle */}
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

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-premium rounded"
            >
              <span>{t('hero.cta')}</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
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
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-lg font-medium text-cream-muted hover:text-primary transition-colors duration-300 py-2"
                  >
                    {t(item.key)}
                  </button>
                ))}
                
                {/* Language Toggle Mobile */}
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

                <button
                  onClick={() => scrollToSection('contact')}
                  className="btn-premium rounded mt-4 text-center"
                >
                  <span>{t('hero.cta')}</span>
                </button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
