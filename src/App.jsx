import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Materials from './components/Materials';
import Product from './components/Product';
import Testimonials from './components/Testimonials';
import Why from './components/Why';
import useClickOutSide from './hook/useClickOutSide';
import Products from './pages/Products';

import arrowCart from './assets/images/svgs/arrowCart.svg';
import xBlack from './assets/images/svgs/x-black.svg';

import Cart from './components/Cart/Cart';
import Layout from './Layout';
import DetailsProduct from './pages/DetailsProduct';
import { getTotalCartPrice } from './reducers/Cart';
import { formatPrice } from './utils/helper';

export default function App() {
  const { cart } = useSelector(state => state.cart);
  const totalPriceCart = useSelector(getTotalCartPrice);

  const [showCart, setShowCart] = useState(false);
  const close = () => {
    setShowCart(false);
  };
  const { ref } = useClickOutSide(close);
  return (
    <div className="overflow-hidden relative">
      <BrowserRouter>
        {/* cart */}
        <div className="">
          <div
            id="navbar"
            className={`absolute top-0 left-0 ${
              showCart ? 'w-full h-full z-10' : ''
            }`}
          ></div>
          <div
            ref={ref}
            className={`fixed flex flex-col ${
              showCart ? '' : 'translate-x-[100%]'
            } p-3 w-[100%] top-0 h-[100%] md:w-[27rem] z-30 transition-all duration-500 bg-white right-0`}
          >
            <div className="grid grid-cols-3 items-center">
              <div
                onClick={close}
                className="rounded-lg shadow-xl shadow-black/20 justify-self-start cursor-pointer w-10 px-3 py-3 bg-white "
              >
                <img src={xBlack} alt="svg" />
              </div>
              <span className="font-gilroyBold place-self-center text-2xl">
                Cart
              </span>
            </div>
            <div
              className="mt-8 space-y-6 overflow-y-auto border rounded-md max-h-[25rem] min-h-[25rem]"
              id="scroll"
            >
              {cart.length > 0 ? (
                cart.map(item => <Cart item={item} key={item.id} />)
              ) : (
                <span className="flex h-full items-center justify-center text-xl font-gilroyBold">
                  Oh No! Your Cart is on a Diet!
                </span>
              )}
            </div>
            <div className="my-8 h-0.5 bg-[#030303]" />
            {cart.length > 0 && (
              <div className="flex flex-col h-full gap-2">
                <span className="font-gilroyMedium text-xl">
                  Amount : {formatPrice(totalPriceCart)}
                </span>
                <span className="font-gilroyMedium text-xl">
                  Taxes : {formatPrice(totalPriceCart * 0.02)}
                </span>
                <span className="font-gilroyMedium mt-2 text-2xl">
                  Total : {formatPrice(totalPriceCart * 0.02 + totalPriceCart)}
                </span>

                <div className="mt-auto flex items-center gap-5 h-full justify-between">
                  <button className="flex-1 bg-red-500 hover:bg-red-700 transition-all duration-300 p-2 rounded-md text-white text-lg font-gilroyBold text-center">
                    Cancel
                  </button>
                  <button className="flex-1 bg-green-500 hover:bg-green-700 transition-all duration-300 p-2 rounded-md text-white text-lg font-gilroyBold text-center">
                    Pay
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero setShowCart={setShowCart} />
                <Why />
                <Product />
                <Experience />
                <Materials />
                <Testimonials />
                <Footer />
              </>
            }
          />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<DetailsProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
