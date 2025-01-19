import React from 'react';

import closeRed from '../../assets/images/svgs/closeRed.svg';
import minusRed from '../../assets/images/svgs/minusRed.svg';
import plusGreen from '../../assets/images/svgs/plusGreen.svg';

import { useDispatch } from 'react-redux';
import { addCount, deleteItem, minusCount } from '../../reducers/Cart';

import { formatPrice } from '../../utils/helper';

export default function Cart({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="shadow-md px-2 pr-3 py-2 rounded-md flex items-center gap-5">
      <img src={item.img} className="w-24" alt="img" />
      <div className="flex flex-col w-full">
        <div className="flex items-start justify-between flex-1 gap-1">
          <div className="flex flex-col">
            <span className="text-xl font-gilroyBold">{item.label}</span>
            <p className="text-[#667C8A]">{item.category}</p>
          </div>
          <img
            src={closeRed}
            className="pt-2 w-6 cursor-pointer"
            onClick={() => dispatch(deleteItem(item.id))}
            alt="closeRed svg"
          />
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-3 border rounded-md p-1 w-fit">
            <img
              src={minusRed}
              onClick={() => dispatch(minusCount(item.id))}
              className="w-7"
              alt="minusRed svg"
            />
            <span className="text-xl">{item.count}</span>
            <img
              onClick={() => dispatch(addCount(item.id))}
              src={plusGreen}
              className="w-7"
              alt="plusGreen svg"
            />
          </div>
          <span className="font-gilroyBold text-xl">
            {formatPrice(item.totalprice)}
          </span>
        </div>
      </div>
    </div>
  );
}
