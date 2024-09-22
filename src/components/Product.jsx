import React from 'react';

import Layout from '../Layout';
import NavList from './Product/NavList';
import Cart from './Product/Cart/Cart';
export default function Product() {
  return (
    <Layout bg="#F7F7F7">
      <div className="min-h-[100dvh] py-10">
        <h1 className="font-gilroyBold text-4xl xl:text-5xl text-center">
          Best Selling Product
        </h1>
        <NavList />
        <div className='flex flex-wrap gap-14 mt-14 items-center justify-center'>
          <Cart />
          <Cart />
          <Cart />
          <Cart />
        </div>
      </div>
    </Layout>
  );
}
