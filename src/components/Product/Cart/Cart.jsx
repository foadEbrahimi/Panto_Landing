import React from 'react';

import img from '../../../assets/images/products/img1.png';
import star from '../../../assets/images/svgs/star.svg';
import plus from '../../../assets/images/svgs/plus.svg';

export default function Cart() {
  return (
    <div className="max-w-[290px] w-full rounded-xl border">
      <div className="bg-[#FAFAFA] max-h-[15rem] rounded-t-xl pb-10 flex items-center justify-center">
        <img src={img} alt="img" className="" />
      </div>
      <div className="px-3 pt-2 pb-4 space-y-1">
        <span className="font-IntroRegular text-sm text-[#8D8D8D]">Chair</span>
        <h2 className="font-IntroSemiBold text-xl text-[0D1B39]">
          Sakarias Armchair
        </h2>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map(() => (
            <img alt="svg" src={star} />
          ))}
        </div>

        <footer className="flex items-center justify-between !mt-5">
          <span className="text-[#0D1B39] font-gilroyBold text-2xl">
            <sup>$ </sup>
            392
          </span>
          <div className="bg-[#0D1B39] cursor-pointer w-fit rounded-full group p-2">
            <img
              src={plus}
              alt="svg plus"
              className="group-hover:animate-ping"
            />
          </div>
        </footer>
      </div>
    </div>
  );
}
