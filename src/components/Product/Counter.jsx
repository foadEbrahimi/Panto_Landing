import React from 'react';
import { useDispatch } from 'react-redux';

import plusSvg from '../../assets/images/svgs/plus.svg';
import minusSvg from '../../assets/images/svgs/minus.svg';

import { addCount, minusCount } from '../../reducers/Cart';

export default function Counter({ currentCount, id }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => dispatch(addCount(id))}
        className="h-8 w-8 flex items-center justify-center p-1.5 hover:bg-[#bf7d2d] transition-all duration-300 text-xl rounded-full bg-[#E58411] text-white"
      >
        <img src={plusSvg} alt="plus svg" className="" />
      </button>
      <span className="text-lg">{currentCount}</span>
      <button
        onClick={() => dispatch(minusCount(id))}
        className="h-8 w-8 flex items-center justify-center p-1.5 hover:bg-[#bf7d2d] transition-all duration-300 text-xl rounded-full bg-[#E58411] text-white"
      >
        <img src={minusSvg} alt="plus svg" className="" />
      </button>
    </div>
  );
}
