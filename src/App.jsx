import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Materials from './components/Materials';
import Product from './components/Product';
import Testimonials from './components/Testimonials';
import Why from './components/Why';
import useClickOutSide from './hook/useClickOutSide';

import xBlack from './assets/images/svgs/x-black.svg';
import arrowCart from './assets/images/svgs/arrowCart.svg';

import Cart from './components/Cart/Cart';

export default function App() {
  const { cart } = useSelector(state => state.cart);

  const [showCart, setShowCart] = useState(false);
  const close = () => {
    setShowCart(false);
  };
  const { ref } = useClickOutSide(close);
  return (
    <div className="overflow-hidden relative">
      <BrowserRouter>
        {/* cart */}
        <div
          ref={ref}
          className={`fixed flex flex-col ${
            showCart ? '' : 'translate-x-[100%]'
          } p-3 w-[100%] top-0 h-[100%] md:w-[27rem] z-20 transition-all duration-500 bg-white right-0`}
        >
          <div className="grid grid-cols-3 items-center">
            <div
              onClick={close}
              className="rounded-lg shadow-xl shadow-black/20 justify-self-start cursor-pointer w-10 px-3 py-3 bg-white "
            >
              <img src={arrowCart} alt="svg" />
            </div>
            <span className="font-gilroyBold place-self-center text-2xl">
              Cart
            </span>
          </div>
          <div className="mt-8 space-y-5 overflow-y-auto">
            {cart.map(item => (
              <Cart item={item} key={item.id} />
            ))}
          </div>
        </div>
        <Hero setShowCart={setShowCart} />
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
