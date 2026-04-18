/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Team from '../components/Team';
import Market from '../components/Market';
import VisualImpact from '../components/VisualImpact';
import LocationAdvantage from '../components/LocationAdvantage';
import PropertyDeals from '../components/PropertyDeals';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="py-12 bg-brand-blue-deep border-b border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-brand-gray font-light tracking-[2px] text-sm uppercase">Pioneering Architectural Excellence in Aligarh</p>
        </div>
      </div>
      <About />
      <Services />
      <Projects />
      <VisualImpact />
    
      <LocationAdvantage />
      <PropertyDeals />
      <Reviews />
      <FAQ />
        <Team />
      <Contact />
    </>
  );
}
