import React from 'react';

export default function Cart({ img }) {
  return (
    <div className="relative w-full h-full max-h-[506px]">
      <img
        src={img}
        className="absolute top-0 left-0 w-full h-full"
        alt="img"
      />
    </div>
  );
}
