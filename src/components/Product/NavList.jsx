import React, { useState } from 'react';

import { NavListProduct } from '../../constants/index';

export default function NavList() {
  const [list, setList] = useState('Chair');
  return (
    <div className="bg-[#eeeeee] px-2 py-1.5 rounded-full w-fit mx-auto mt-8">
      <ul className="[&>*]:rounded-full [&>*]:lg:text-lg [&>*]:cursor-pointer [&>*]:px-4 [&>*]:py-2 flex gap-1 items-center justify-between">
        {NavListProduct.map(item => (
          <li
            key={item.id}
            className={`${
              list === item.label ? 'bg-white' : ''
            } z-10 relative ${
              list !== item.label && 'navList'
            } overflow-hidden`}
            onClick={() => setList(item.label)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
