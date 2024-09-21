import React from 'react';

import { Why as WhyInfo } from '../constants/index';
import Layout from '../Layout';
import Box from './Why/Box';
export default function Why() {
  return (
    <Layout>
      <div className="py-5 xl:flex items-center justify-between gap-20">
        <div>
          <h2 className="text-3xl font-gilroyBold text-center">
            Why Choosing Us
          </h2>
        </div>
        <div className="flex mt-10 flex-col xl:max-w-[57rem] 2xl:max-w-[74rem] md:grid md:grid-cols-2 lg:grid-cols-3 flex-wrap gap-5">
          {WhyInfo.map(item => (
            <Box {...item} key={item.id} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
