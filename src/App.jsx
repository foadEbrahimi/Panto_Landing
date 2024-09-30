import React from 'react';

import Hero from './components/Hero';
import Why from './components/Why';
import Product from './components/Product';
import Experience from './components/Experience';
export default function App() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Why />
      <Product />
      <Experience />
    </div>
  );
}
