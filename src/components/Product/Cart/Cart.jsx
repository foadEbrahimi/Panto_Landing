import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getCurrentQuantityById } from '../../../reducers/Cart';

import plus from '../../../assets/images/svgs/plus.svg';
import star from '../../../assets/images/svgs/star.svg';

import Counter from '../Counter';
import { Link } from 'react-router-dom';

export default function Cart({ item }) {
  const dispatch = useDispatch();
  const currentCount = useSelector(getCurrentQuantityById(item.id));

  return (
    <div className="max-w-[290px] w-full rounded-xl border">
      <div className="bg-[#FAFAFA] max-h-[15rem] rounded-t-xl pb-10 flex items-center justify-center">
        <img
          src={item.img}
          draggable={false}
          alt="img"
          className="hover:scale-125 transition-all max-h-[13rem] duration-300"
        />
      </div>
      <div className="px-3 pt-2 pb-4 space-y-1">
        <span className="font-IntroRegular text-sm text-[#8D8D8D]">
          {item.category}
        </span>
        <Link
          to={`products/${item.id}`}
          className="font-IntroSemiBold block hover:text-[#E58411] cursor-pointer transition-all duration-300 text-xl text-[0D1B39]"
        >
          {item.label}
        </Link>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <img key={index} alt="svg" src={star} />
          ))}
        </div>

        <footer className="flex items-center justify-between !mt-5">
          <span className="text-[#0D1B39] font-gilroyBold text-2xl">
            <sup>$ </sup>
            {item.price}
          </span>
          {currentCount === 0 ? (
            <div
              onClick={() =>
                dispatch(addItem({ ...item, count: 1, totalprice: item.price }))
              }
              className="bg-[#0D1B39] cursor-pointer w-fit rounded-full group p-2"
            >
              <img
                src={plus}
                alt="svg plus"
                className="group-hover:animate-ping"
              />
            </div>
          ) : (
            <Counter id={item.id} currentCount={currentCount} />
          )}
        </footer>
      </div>
    </div>
  );
}
