import React from 'react';

import Hero from './components/Hero';
import Why from './components/Why';
import Product from './components/Product';
import Experience from './components/Experience';
import Materials from './components/Materials';
import Testimonials from './components/Testimonials';
export default function App() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Why />
      <Product />
      <Experience />
      <Materials />
      <Testimonials />
    </div>
  );
}
