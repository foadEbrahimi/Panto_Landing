import React from 'react';
import Navbar from './Navbar';

import search from '../assets/images/svgs/search.svg';
export default function Hero() {
  return (
    <div id="hero">
      <Navbar />
      <div className="mt-28">
        <h1 className="text-white leading-[4.5rem] text-6xl font-gilroyBold text-center">
          Make Your Interior More <br /> Minimalistis & Modern
        </h1>
        <p className="font-gilroyRegular text-center text-xl mt-5 text-white">
          Turn your room with panto into a lot more minimalist <br /> and modern
          with ease and speed
        </p>
        <div
          id="navbar"
          className="flex mt-5 border border-white/60 !rounded-full w-fit mx-auto items-center justify-between"
        >
          <input
            type="search"
            className="bg-transparent font-gilroyLight outline-0 text-white border-0 p-2 placeholder:text-white"
            placeholder="Search furniture"
          />
          <div className="bg-[#E58411] cursor-pointer rounded-full w-fit p-2 m-2">
            <img src={search} alt="svg" className="" />
          </div>
        </div>
      </div>
    </div>
  );
}
