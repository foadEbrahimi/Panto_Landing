import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { clearCart, getTotalCartPrice } from './reducers/Cart';
import { formatPrice } from './utils/helper';
import bag from './assets/images/svgs/bag.svg';

export default function App() {
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);
  const { cart } = useSelector(state => state.cart);
  const totalPriceCart = useSelector(getTotalCartPrice);

  const close = () => {
    setShowCart(false);
  };
  const { ref } = useClickOutSide(close);

  return (
    <div className="overflow-hidden relative">
      <BrowserRouter>
        {/* Cart Overlay */}
        <div className={`fixed inset-0 bg-black/50 z-20 transition-opacity duration-300 ${showCart ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} />

        {/* Cart Sidebar */}
        <div
          ref={ref}
          className={`fixed flex flex-col ${
            showCart ? 'translate-x-0' : 'translate-x-full'
          } w-full md:w-[27rem] top-0 h-full z-30 transition-transform duration-500 bg-white right-0 shadow-2xl`}
        >
          <div className="flex items-center justify-between p-6 border-b">
            <span className="font-gilroyBold text-2xl">Cart</span>
            <button
              onClick={close}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <img src={xBlack} alt="close" className="w-5" />
            </button>
          </div>

          <div
            className="flex-1 overflow-y-auto p-4 space-y-4"
            id="scroll"
          >
            {cart.length > 0 ? (
              cart.map(item => <Cart item={item} key={item.id} />)
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <img src={bag} className="w-12 opacity-50" alt="empty cart" />
                </div>
                <span className="font-gilroyBold text-xl text-gray-400">
                  Your cart is empty
                </span>
                <span className="text-gray-400 mt-2">
                  Add items to get started
                </span>
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="p-6 border-t bg-gray-50">
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>{formatPrice(totalPriceCart)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax (2%)</span>
                  <span>{formatPrice(totalPriceCart * 0.02)}</span>
                </div>
                <div className="h-px bg-gray-300" />
                <div className="flex justify-between font-gilroyBold text-xl">
                  <span>Total</span>
                  <span>{formatPrice(totalPriceCart * 1.02)}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setShowCart(false);
                  dispatch(clearCart([]));
                }}
                className="w-full bg-[#55e83b] hover:bg-[#45c42d] transition-colors duration-300 py-3 rounded-lg text-white font-gilroyBold text-lg"
              >
                Checkout
              </button>
            </div>
          )}
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
