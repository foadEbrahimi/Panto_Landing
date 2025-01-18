import React, { useEffect, useState } from 'react';

import bag from '../assets/images/svgs/bag.svg';
import list from '../assets/images/svgs/list.svg';
import xBlack from '../assets/images/svgs/x-black.svg';
import x from '../assets/images/svgs/x.svg';

import Layout from '../Layout';

import { useSelector } from 'react-redux';
import useClickOutSide from '../hook/useClickOutSide';
import { getTotalCartCount, getTotalCartPrice } from '../reducers/Cart';

export default function Navbar() {
  const [showCart, setShowCart] = useState(false);
  const [showList, setShowList] = useState(false);

  const close = () => {
    setShowList(false);
    setShowCart(false);
  };
  const { ref } = useClickOutSide(close);

  const count = useSelector(getTotalCartCount);
  const allPrice = useSelector(getTotalCartPrice);

  return (
    <Layout>
      <div
        ref={ref}
        id="navbar"
        className="flex px-6 py-4 relative items-center justify-between"
      >
        <div>
          <h1 className="text-2xl font-gilroyBold">Panto</h1>
        </div>
        {/* list in md */}
        <div className="hidden md:flex">
          <ul className="flex items-center gap-16 [&>*]:font-gilroyMedium [&>*]:transition-all [&>*]:duration-300 [&>*]:cursor-pointer [&>*]:text-white [&>*]:text-xl ">
            <li className="hover:text-[#55e83b]">Furniture</li>
            <li className="hover:text-[#55e83b]">Shop</li>
            <li className="hover:text-[#55e83b]">About Us</li>
            <li className="hover:text-[#55e83b]">Contact</li>
          </ul>
        </div>
        {/* list in mobile */}
        <div
          id="navbar"
          className={`absolute top-[4.2rem] rounded-lg right-0 transition-all w-52 duration-300 p-2 bg-red-500 ${
            showList
              ? 'translate-x-0 opacity-100'
              : 'translate-x-[300%] opacity-0'
          }`}
        >
          <ul className="flex flex-col items-center gap-3 [&>*]:font-gilroyMedium [&>*]:transition-all [&>*]:duration-300 [&>*]:cursor-pointer [&>*]:text-white [&>*]:text-xl ">
            <li className="hover:text-[#55e83b]">Furniture</li>
            <li className="hover:text-[#55e83b]">Shop</li>
            <li className="hover:text-[#55e83b]">About Us</li>
            <li className="hover:text-[#55e83b]">Contact</li>
          </ul>
        </div>
        {/* bag & list icon */}
        <div className="flex items-center gap-5 cursor-pointer">
          <div className="relative" onClick={() => setShowCart(true)}>
            <img src={bag} className="w-6" alt="svg" />
            {count > 0 && (
              <span className="rounded-full bg-[#e5be11] px-1.5 text-sm -right-2 text-white absolute -top-1">
                {count}
              </span>
            )}
          </div>
          <div className="md:hidden">
            <img
              src={showList ? x : list}
              onClick={() => setShowList(prev => !prev)}
              alt="svg"
              className={`${showList ? 'w-5' : 'w-5'} cursor-pointer`}
            />
          </div>
        </div>
        {/* cart */}
        <div
          ref={ref}
          className={`absolute flex flex-col ${
            showCart ? '' : 'translate-x-[100%]'
          } p-3 w-[23rem] rounded-l-lg top-0 h-[100dvh] z-10 transition-all duration-500 bg-white -right-10`}
        >
          <img
            src={xBlack}
            onClick={() => setShowCart(false)}
            className="w-5 cursor-pointer"
            alt="xBlack svg"
          />
        </div>
      </div>
    </Layout>
  );
}
