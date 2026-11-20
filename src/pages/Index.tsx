import React from 'react';
import { Helmet } from 'react-helmet-async';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import PricingSection from '@/components/PricingSection';
import MoreServicesSection from '@/components/MoreServicesSection';
import ProcessSection from '@/components/ProcessSection';
import AcademySection from '@/components/AcademySection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';


const Index: React.FC = () => {
  return (
    <LanguageProvider>
      <Helmet>
        <link rel="canonical" href="https://toroia.vip/" />
        <meta property="og:url" content="https://toroia.vip/" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />

        <main>
          <HeroSection />
          <BenefitsSection />
          <PricingSection />
          <MoreServicesSection />
          <ProcessSection />
          <CaseStudiesSection />
          <AboutSection />
          <ContactSection />
          <AcademySection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
