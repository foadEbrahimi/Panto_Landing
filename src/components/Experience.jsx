import React from 'react';

import img1 from '../assets/images/experience/img1.png';
import img11 from '../assets/images/experience/img1.1.png';
import longArrow from '../assets/images/svgs/long-arrow-right.svg';

export default function Experience() {
  return (
    <div className="h-[100dvh] flex items-center justify-center xl:justify-normal">
      <div className="lg:flex lg:items-center lg:gap-28">
        <div className="relative">
          <img src={img1} alt="img" className="lg:max-w-xl p-4 lg:p-0" />
          <img
            src={img11}
            alt="img"
            className="absolute p-5 -bottom-10 left-[50%] translate-x-[-50%] -z-10 blur-md"
          />
        </div>
        <div className="space-y-4 p-3">
          <span className="text-[#E58411] text-lg uppercase tracking-[5px] font-semibold">
            experiences
          </span>
          <h2 className="text-4xl font-gilroyBold">
            We Provide You The Best Experience
          </h2>
          <p className="font-gilroyRegular max-w-[40rem]">
            You don’t have to worry about the result because all of these
            interiors are made by people who are professionals in their fields
            with an elegant and lucurious style and with premium quality
            materials
          </p>
          <button className="flex items-center gap-2 !mt-3">
            <span className="text-[#E58411]">More Info</span>
            <img src={longArrow} className="pt-1" alt="svg" />
          </button>
        </div>
      </div>
    </div>
  );
}
