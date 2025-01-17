import React, { useState } from 'react';

import Layout from '../Layout';
import NavList from './Product/NavList';
import Cart from './Product/Cart/Cart';

import Spinner from './Spinner';

import longArrow from '../assets/images/svgs/long-arrow-right.svg';

import { ProductsList } from '../constants';
import { useSearchParams } from 'react-router-dom';

export default function Product() {
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'Chair';

  const filterdProduct = ProductsList.filter(
    item => item.category === activeCategory
  ).slice(0, 4);

  return (
    <Layout bg="#F7F7F7">
      <div className="min-h-[100dvh] py-10">
        <h1 className="font-gilroyBold text-4xl xl:text-5xl text-center">
          Best Selling Product
        </h1>
        <NavList setLoading={setLoading} />
        <div className="flex flex-wrap gap-5 mt-14 items-center justify-center">
          {loading ? (
            <Spinner />
          ) : (
            filterdProduct.map(item => <Cart item={item} key={item.id} />)
          )}
        </div>
        <div className="text-[#E58411] cursor-pointer flex items-center justify-center mt-12 gap-2">
          <span>View All</span>
          <img src={longArrow} alt="svg" className="pt-1" />
        </div>
      </div>
    </Layout>
  );
}
