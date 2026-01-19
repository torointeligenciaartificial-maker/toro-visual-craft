import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollAnimations';

import beverage1 from '@/assets/portfolio-beverage-1.jpg';
import beverage2 from '@/assets/portfolio-beverage-2.jpg';
import cosmetics1 from '@/assets/portfolio-cosmetics-1.jpg';
import cosmetics2 from '@/assets/portfolio-cosmetics-2.jpg';

interface Campaign {
  id: number;
  category: 'beverages' | 'cosmetics';
  image: string;
  title: string;
  brand: string;
}

const campaigns: Campaign[] = [
  { id: 1, category: 'beverages', image: beverage1, title: 'Brences Whisky', brand: 'Premium Spirits' },
  { id: 2, category: 'cosmetics', image: cosmetics1, title: 'Larniub Skincare', brand: 'Luxury Beauty' },
  { id: 3, category: 'beverages', image: beverage2, title: 'Champagne Céleste', brand: 'Fine Wines' },
  { id: 4, category: 'cosmetics', image: cosmetics2, title: 'Rouge Luxe', brand: 'High Fashion' },
];

const PortfolioSection: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal(0.1);
  const [activeFilter, setActiveFilter] = useState<'all' | 'beverages' | 'cosmetics'>('all');

  const filters = [
    { key: 'all', label: 'portfolio.all' },
    { key: 'beverages', label: 'portfolio.beverages' },
    { key: 'cosmetics', label: 'portfolio.cosmetics' },
  ] as const;

  const filteredCampaigns = activeFilter === 'all' 
    ? campaigns 
    : campaigns.filter(c => c.category === activeFilter);

  return (
    <section id="portfolio" className="py-32 lg:py-40 bg-charcoal">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
              {t('portfolio.subtitle')}
            </span>
            <div className="w-8 h-0.5 bg-primary" />
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            {t('portfolio.title')}
          </h2>

          {/* Filter Buttons */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-muted-foreground hover:text-foreground'
                }`}
              >
                {t(filter.label)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCampaigns.map((campaign, index) => (
              <motion.div
                key={campaign.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
              >
                {/* Image */}
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-primary text-sm font-medium tracking-wide uppercase">
                      {campaign.brand}
                    </span>
                    <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mt-2">
                      {campaign.title}
                    </h3>
                  </div>

                  {/* View Button */}
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>

                {/* Border Glow on Hover */}
                <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 rounded-lg transition-colors duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
