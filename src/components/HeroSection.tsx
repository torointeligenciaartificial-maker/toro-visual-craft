import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-cosmetics.jpg';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
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
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[85vh] lg:min-h-[80vh] flex items-center overflow-hidden"
    >
      {/* Background Image with Overlay - More dark, less gold */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium visual campaign"
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-primary/3 rounded-full blur-[80px]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 pb-12">
        <div className="max-w-3xl">
          {/* Subtle subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <span className="text-primary/80 font-medium tracking-[0.2em] uppercase text-xs">
              {t('hero.subtitle')}
            </span>
          </motion.div>

          {/* Main Title - 2 lines max, cleaner */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] mb-6"
          >
            <span className="text-foreground">{t('hero.title1')}</span>
            <br />
            <span className="text-foreground">{t('hero.title2')}</span>
          </motion.h1>

          {/* Lighter, enigmatic description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base md:text-lg text-muted-foreground/80 max-w-xl mb-10 leading-relaxed font-light"
          >
            {t('hero.description')}
          </motion.p>

          {/* CTA Buttons - cleaner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://calendar.app.google/Guvvm7K1oUy7Lop5A"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium rounded group flex items-center justify-center gap-3"
            >
              <span>{t('hero.cta')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button
              onClick={() => scrollToSection('process')}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center justify-center gap-2 text-sm font-medium"
            >
              <span>{t('hero.cta.secondary')}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 border border-muted-foreground/20 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-muted-foreground/40 rounded-full mt-1.5"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
