import React from 'react';

import { NavListProduct } from '../../constants/index';
import { useSearchParams } from 'react-router-dom';

export default function NavList({ setLoading }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = !searchParams.get('category')
    ? 'Chair'
    : searchParams.get('category');

  function handlerCategory(value) {
    searchParams.set('category', value);
    setSearchParams(searchParams);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  return (
    <div className="bg-[#eeeeee] px-2 py-1.5 rounded-full w-fit mx-auto mt-8">
      <ul className="[&>*]:rounded-full [&>*]:lg:text-lg [&>*]:cursor-pointer [&>*]:px-4 [&>*]:py-2 flex gap-1 items-center justify-between">
        {NavListProduct.map(item => (
          <li
            key={item.id}
            className={`${
              activeCategory === item.label ? 'bg-white' : ''
            } z-10 relative ${
              activeCategory !== item.label && 'navList'
            } overflow-hidden`}
            onClick={() => handlerCategory(item.label)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
