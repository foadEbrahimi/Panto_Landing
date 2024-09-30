import React from 'react';

import img1 from '../assets/images/materials/img1.png';
import img2 from '../assets/images/materials/img2.png';
import img3 from '../assets/images/materials/img3.png';
import longArrow from '../assets/images/svgs/long-arrow-right.svg';

export default function Materials() {
  return (
    <div className="h-[100dvh] flex items-center justify-center lg:justify-end">
      <div className="lg:flex lg:items-center lg:gap-28">
        <div className="space-y-4 p-3">
          <span className="text-[#E58411] text-lg uppercase tracking-[5px] font-semibold">
            Materials
          </span>
          <h2 className="text-4xl font-gilroyBold">
            Very serious <br className="hidden lg:flex" /> materials for making{' '}
            <br className="hidden xl:flex" />
            furniture
          </h2>
          <p className="font-gilroyRegular max-w-[40rem]">
            Because panto was very serious about designing furniture for our
            environment, using a very expensive and famous capital but at a
            relatively low price
          </p>
          <button className="flex items-center gap-2 !mt-3">
            <span className="text-[#E58411]">More Info</span>
            <img src={longArrow} className="pt-1" alt="svg" />
          </button>
        </div>
        <div className="relative lg:flex lg:items-center">
          <div className='hidden lg:block'>
            <img src={img2} alt="img" />
            <img src={img1} alt="img" />
          </div>
          <img src={img3} alt="img" className="lg:max-w-[20rem] p-4 lg:p-0" />
        </div>
      </div>
    </div>
  );
}
