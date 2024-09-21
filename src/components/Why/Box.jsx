import React from 'react';

import longArrow from '../../assets/images/svgs/long-arrow-right.svg';

export default function Box({ title, sub }) {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-gilroyBold">{title}</span>
        <p className="font-gilroyRegular">{sub}</p>
        <div className="flex items-center gap-3">
          <span className="text-[#E58411]">More Info</span>
          <img src={longArrow} className="pt-1" alt="" />
        </div>
      </div>
    </div>
  );
}
