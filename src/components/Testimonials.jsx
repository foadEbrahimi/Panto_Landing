import React from 'react';

import Layout from '../Layout';
import Cart from './Testimonials/Cart';

import { Testimonials as TestimonialsInfo } from '../constants/index';

import 'swiper/css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import arrowLeft from '../assets/images/svgs/arrow-left.svg';
import arrowRight from '../assets/images/svgs/arrow-right.svg';
export default function Testimonials() {
  const swiper = useSwiper();

  return (
    <Layout>
      <div className="h-[100dvh] flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-[#E58411] text-center uppercase font-gilroyMedium tracking-[6px]">
            Testimonials
          </h2>
          <span className="text-4xl font-gilroyBold">Our Client Reviews</span>
        </div>
        <div className="w-full 2xl:px-32">
          <Swiper
            modules={[Navigation]}
            className="h-[40rem] w-full relative rounded-2xl"
            spaceBetween={50}
            navigation={{
              nextEl: '.swiper-button-prev',
              prevEl: '.swiper-button-next',
            }}
            breakpoints={{
              300: {
                slidesPerView: 1,
              },
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
              <SwiperSlide key={item.id}>
                <Cart {...item} />
              </SwiperSlide>
            ))}

            <div>
              <button
                onClick={() => swiper.slidePrev()}
                className="absolute swiper-button-next top-[30%] 2xl:translate-x-[50%] z-10 left-2 2xl:-left-5 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-xl"
              >
                <img src={arrowLeft} className="w-7" alt="svg btn" />
              </button>
              <button
                onClick={() => swiper.slideNext()}
                className="absolute swiper-button-prev top-[30%] 2xl:translate-x-[-50%] z-10 right-2 2xl:-right-5 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-xl"
              >
                <img src={arrowRight} className="w-7" alt="svg btn" />
              </button>
            </div>
          </Swiper>
        </div>
      </div>
    </Layout>
  );
}
