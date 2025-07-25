'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExperienceHero from './ExperienceHero';
import ExperienceTimeline from './ExperienceTimeline';
import TestimonialsSection from './TestimonialsSection';

export default function Experience() {
  return (
    <div className="min-h-screen">
      <Header />
      <ExperienceHero />
      <ExperienceTimeline />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}