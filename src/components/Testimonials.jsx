import React from 'react';

import Layout from '../Layout';
import Cart from './Testimonials/Cart';

import { Testimonials as TestimonialsInfo } from '../constants/index';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

export default function Testimonials() {
  return (
    <Layout>
      <div className="h-[100dvh] flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-[#E58411] text-center uppercase font-gilroyMedium tracking-[6px]">
            Testimonials
          </h2>
          <span className="text-4xl font-gilroyBold">Our Client Reviews</span>
        </div>

        <Swiper
          modules={[Navigation]}
          className="h-[30rem] w-full 2xl:px-32"
          slidesPerView={3}
          spaceBetween={50}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 1.1,
            },
            490: {
              slidesPerView: 1.2,
            },
            550: {
              slidesPerView: 1.4,
            },
            650: {
              slidesPerView: 1.6,
            },
            825: {
              slidesPerView: 2,
            },
            950: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 2.5,
            },
            1220: {
              slidesPerView: 3,
            },
          }}
        >
          {TestimonialsInfo.map(item => (
            <>
              <SwiperSlide key={item.id}>
                <Cart {...item} />
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </Layout>
  );
}

// className = 'max-w-[370px] max-h-[506px]';
