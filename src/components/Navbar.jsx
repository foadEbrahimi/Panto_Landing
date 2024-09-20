import React, { useState } from 'react';

import bag from '../assets/images/svgs/bag.svg';
import list from '../assets/images/svgs/list.svg';
import x from '../assets/images/svgs/x.svg';

import Layout from '../Layout';

import useClickOutSide from '../hook/useClickOutSide';

export default function Navbar() {
  const [showList, setShowList] = useState(false);
  const close = () => setShowList(false);
  const { ref } = useClickOutSide(close);
  return (
    <Layout>
      <div
        ref={ref}
        id="navbar"
        className="flex px-6 py-4 items-center justify-between"
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
          <div className="relative">
            <img src={bag} className="w-6" alt="svg" />
            <span className="rounded-full bg-[#e5be11] px-1.5 text-sm -right-2 text-white absolute -top-1">
              5
            </span>
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
      </div>
    </Layout>
  );
}
