'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from './AboutHero';
import SkillsSection from './SkillsSection';

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <AboutHero />
      <SkillsSection />
      <Footer />
    </div>
  );
}