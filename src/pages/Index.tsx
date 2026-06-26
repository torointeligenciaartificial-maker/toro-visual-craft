import React from 'react';
import { Helmet } from 'react-helmet-async';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import EcosystemSection from '@/components/EcosystemSection';
import ProblemSection from '@/components/ProblemSection';
import ProcessSection from '@/components/ProcessSection';
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
          <EcosystemSection />
          <ProblemSection />
          <ProcessSection />
          <CaseStudiesSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
