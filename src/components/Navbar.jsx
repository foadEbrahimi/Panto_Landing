import React from 'react';

import bag from '../assets/images/svgs/bag.svg';
import Layout from '../Layout';
export default function Navbar() {
  return (
    <Layout>
      <div id="navbar" className="flex px-6 py-4 items-center justify-between">
        <div>
          <h1 className="text-2xl font-gilroyBold"> Panto</h1>
        </div>
        <div>
          <ul className="flex items-center gap-16 [&>*]:font-gilroyMedium [&>*]:transition-all [&>*]:duration-300 [&>*]:cursor-pointer [&>*]:text-white [&>*]:text-xl ">
            <li className="hover:text-[#55e83b]">Furniture</li>
            <li className="hover:text-[#55e83b]">Shop</li>
            <li className="hover:text-[#55e83b]">About Us</li>
            <li className="hover:text-[#55e83b]">Contact</li>
          </ul>
        </div>
        <div className="relative cursor-pointer">
          <img src={bag} className="w-7" alt="svg" />
          <span className="rounded-full bg-[#e5be11] px-2 -right-3 text-white absolute -top-1">
            5
          </span>
        </div>
      </div>
    </Layout>
  );
}
