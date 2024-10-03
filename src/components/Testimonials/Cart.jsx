import React from 'react';

import stars from '../../assets/images/Testimonials/stars.png';

export default function Cart({ img, avatar, name, job, desc }) {
  return (
    <div className="relative w-full h-full max-h-[506px] flex">
      <img
        src={img}
        className="absolute top-0 left-0 w-full h-full"
        alt="img"
      />

      <div className="bg-white items-center h-[12rem] justify-center flex flex-col relative p-2 mt-auto mb-5 w-[90%] rounded-2xl mx-auto">
        <img
          src={avatar}
          className="w-[70px] h-[70px] border-8 absolute -top-6 rounded-full border-white"
          alt="img"
        />
        <h3 className="font-gilroyBold pt-8 text-xl">{name}</h3>
        <span className="font-gilroyRegular my-2">{job}</span>
        <p className="font-gilroyLight text-center line-clamp-2 text-sm">{desc}</p>

        <img src={stars} alt="svg" className="w-24 pt-2" />
      </div>
    </div>
  );
}
