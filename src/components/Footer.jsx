import React from 'react';

import Layout from '../Layout';

import facebook from '../assets/images/svgs/facebook.svg';
import twitter from '../assets/images/svgs/twitter.svg';
import instagram from '../assets/images/svgs/instagram.svg';

export default function Footer() {
  return (
    <Layout bg="#F7F7F7">
      <div className="2xl:px-32">
        <div className="lg:flex lg:items-center lg:gap-10 2xl:gap-40">
          <div className="space-y-3">
            <span className="font-gilroyBold text-3xl">Panto</span>
            <p className="max-w-[19rem] font-gilroyMedium">
              The advantage of hiring a workspace with us is that givees you
              comfortable service and all-around facilities.
            </p>
          </div>
          <div className="space-y-5 lg:space-y-0 mt-5 lg:flex lg:items-start lg:justify-between flex-1 flex-wrap">
            <div>
              <span className="text-[#F6973F] text-2xl font-gilroyBold">
                Services
              </span>
              <ul className="[&>*]:text-lg font-gilroyLight mt-2 space-y-2">
                <li className="hover:scale-110 transition-all cursor-pointer hover:text-[#F6973F]">
                  Email Marketing
                </li>
                <li className="hover:scale-110 transition-all cursor-pointer hover:text-[#F6973F]">
                  Campaigns
                </li>
                <li className="hover:scale-110 transition-all cursor-pointer hover:text-[#F6973F]">
                  Branding
                </li>
              </ul>
            </div>
            <div>
              <span className="text-[#F6973F] text-2xl font-gilroyBold">
                Furniture
              </span>
              <ul className="[&>*]:text-lg font-gilroyLight mt-2 space-y-2">
                <li className="hover:scale-110 transition-all cursor-pointer hover:text-[#F6973F]">
                  Beds
                </li>
                <li className="hover:scale-110 transition-all cursor-pointer hover:text-[#F6973F]">
                  Chair
                </li>
                <li className="hover:scale-110 transition-all cursor-pointer hover:text-[#F6973F]">
                  All
                </li>
              </ul>
            </div>
            <div>
              <span className="text-[#F6973F] text-2xl font-gilroyBold">
                Follow Us
              </span>
              <ul className="[&>*]:text-lg font-gilroyLight mt-2 space-y-2 [&>*]:flex [&>*]:items-center [&>*]:gap-3">
                <li className="hover:scale-110 transition-all cursor-pointer hover:text-[#F6973F]">
                  <img src={facebook} className="w-6 h-6" alt="svg social" />
                  <span>Facebook</span>
                </li>
                <li className="hover:scale-110 transition-all cursor-pointer hover:text-[#F6973F]">
                  <img src={twitter} className="w-6 h-6" alt="svg social" />
                  <span>Twitter</span>
                </li>
                <li className="hover:scale-110 transition-all cursor-pointer hover:text-[#F6973F]">
                  <img src={instagram} className="w-6 h-6" alt="svg social" />
                  <span>Instagram</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex mt-12 items-center justify-between">
          <span className="text-[#1E2833]">Copyright © 2024</span>
          <div className="flex gap-10 items-center font-gilroyMedium">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </Layout>
  );
}
