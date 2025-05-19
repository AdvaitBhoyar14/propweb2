
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutUsSection from '@/components/AboutUsSection';
import ServiceOfferings from '@/components/ServiceOfferings';
import TeamSection from '@/components/TeamSection';
import DeveloperCollaborations from '@/components/DeveloperCollaborations';
import Achievements from '@/components/Achievements';
import FeaturedProperties from '@/components/FeaturedProperties';
import PropertyCategories from '@/components/PropertyCategories';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutUsSection />
        <ServiceOfferings />
        <FeaturedProperties />
        <PropertyCategories />
        <TeamSection />
        <DeveloperCollaborations />
        <Achievements />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
