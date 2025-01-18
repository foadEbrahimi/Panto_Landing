import React from 'react';

import Hero from './components/Hero';
import Why from './components/Why';
import Product from './components/Product';
import Experience from './components/Experience';
import Materials from './components/Materials';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
export default function App() {
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        <Hero />
        <Why />
        <Product />
        <Experience />
        <Materials />
        <Testimonials />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
