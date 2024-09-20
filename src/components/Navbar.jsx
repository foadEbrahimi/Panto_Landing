import React from 'react';

import bag from '../assets/images/svgs/bag.svg';
import list from '../assets/images/svgs/list.svg';

import Layout from '../Layout';

export default function Navbar() {
  return (
    <Layout>
      <div id="navbar" className="flex px-6 py-4 items-center justify-between">
        <div>
          <h1 className="text-2xl font-gilroyBold">Panto</h1>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-16 [&>*]:font-gilroyMedium [&>*]:transition-all [&>*]:duration-300 [&>*]:cursor-pointer [&>*]:text-white [&>*]:text-xl ">
            <li className="hover:text-[#55e83b]">Furniture</li>
            <li className="hover:text-[#55e83b]">Shop</li>
            <li className="hover:text-[#55e83b]">About Us</li>
            <li className="hover:text-[#55e83b]">Contact</li>
          </ul>
        </div>
        <div className="flex items-center gap-5 cursor-pointer">
          <div className="relative">
            <img src={bag} className="w-6" alt="svg" />
            <span className="rounded-full bg-[#e5be11] px-1.5 text-sm -right-2 text-white absolute -top-1">
              5
            </span>
          </div>
          <div className="lg:hidden">
            <img src={list} alt="svg" className="w-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
