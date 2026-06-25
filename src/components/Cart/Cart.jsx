import React from 'react';
import { useDispatch } from 'react-redux';
import { addCount, deleteItem, minusCount } from '../../reducers/Cart';
import { formatPrice } from '../../utils/helper';
import closeRed from '../../assets/images/svgs/closeRed.svg';
import minusRed from '../../assets/images/svgs/minusRed.svg';
import plusGreen from '../../assets/images/svgs/plusGreen.svg';

export default function Cart({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
      <div className="flex items-center gap-4">
        <img
          src={item.img}
          className="w-20 h-20 object-cover rounded-lg"
          alt={item.label}
        />
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-gilroyBold text-lg">{item.label}</h3>
              <p className="text-gray-500 text-sm">{item.category}</p>
            </div>
            <button
              onClick={() => dispatch(deleteItem(item.id))}
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <img src={closeRed} className="w-5" alt="remove" />
            </button>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => dispatch(minusCount(item.id))}
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded-md transition-colors"
              >
                <img src={minusRed} className="w-4" alt="decrease" />
              </button>
              <span className="w-8 text-center font-medium">{item.count}</span>
              <button
                onClick={() => dispatch(addCount(item.id))}
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded-md transition-colors"
              >
                <img src={plusGreen} className="w-4" alt="increase" />
              </button>
            </div>
            <span className="font-gilroyBold text-lg">
              {formatPrice(item.totalprice)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
