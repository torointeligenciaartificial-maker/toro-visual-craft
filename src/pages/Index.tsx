import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
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
  useEffect(() => {
    const id = window.location.hash.replace('#', '');
    if (!id) return;
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
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
    </>
  );
};

export default Index;
