import React from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import {
  Navbar,
  Hero,
  Services,
  Manifesto,
  Gallery,
  Testimonials,
  Pricing,
  FAQ,
  Contact,
  Footer,
} from './components/sections';

/**
 * Main App Component
 * 
 * Refactored structure:
 * - Modular component-based architecture
 * - Improved accessibility (ARIA labels, semantic HTML)
 * - Enhanced responsive design
 * - Better performance (code splitting ready)
 * - Reusable component library
 * - Clean separation of concerns
 */
export default function App() {
  // Initialize scroll reveal animations
  useScrollReveal();

  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <Services />
        <Manifesto />
        <Gallery />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
