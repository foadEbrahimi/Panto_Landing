import React, { useState } from 'react';

import { NavListProduct } from '../../constants/index';

export default function NavList() {
  const [list, setList] = useState('Chair');
  return (
    <div className="bg-[#eeeeee] px-2 py-1.5 rounded-full w-fit mx-auto mt-8">
      <ul className="[&>*]:rounded-full [&>*]:lg:text-lg [&>*]:cursor-pointer [&>*]:px-4 [&>*]:py-2 flex gap-2 items-center justify-between">
        {NavListProduct.map(item => (
          <li
            key={item.id}
            className={`${list === item.leble ? 'bg-white' : ''}`}
            onClick={() => setList(item.leble)}
          >
            {item.leble}
          </li>
        ))}
      </ul>
    </div>
  );
}
