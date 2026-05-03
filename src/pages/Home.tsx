/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import FloorPlan from '../components/FloorPlan';
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
      <div className="py-12 bg-primary border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-white/70 font-bold tracking-[0.2em] text-xs uppercase">Pioneering Architectural Excellence in Aligarh</p>
        </div>
      </div>
      <About />
      <Services />
      <Projects />
      <FloorPlan />
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
