import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getTotalCartCount, getTotalCartPrice } from '../reducers/Cart';
import useClickOutSide from '../hook/useClickOutSide';
import Layout from '../Layout';
import bag from '../assets/images/svgs/bag.svg';
import list from '../assets/images/svgs/list.svg';
import x from '../assets/images/svgs/x.svg';
import { formatPrice } from '../utils/helper';

export default function Navbar({ setShowCart }) {
  const [showList, setShowList] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [scrolled, setScrolled] = useState(false);

  const count = useSelector(getTotalCartCount);
  const allPrice = useSelector(getTotalCartPrice);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const close = () => setShowList(false);
  const { ref } = useClickOutSide(close);

  const navLinks = [
    { name: 'Furniture', href: '#furniture' },
    { name: 'Shop', href: '#shop' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <Layout extraClass={`sticky top-0 left-0 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div
        ref={ref}
        id="navbar"
        className="flex px-6 py-4 items-center justify-between"
      >
        <div>
          <h1 className="text-2xl font-gilroyBold cursor-pointer hover:text-[#55e83b] transition-colors duration-300">
            Panto
          </h1>
        </div>
        {/* Desktop nav */}
        <div className="hidden md:flex">
          <ul className="flex items-center gap-16">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className={`font-gilroyMedium transition-all duration-300 cursor-pointer text-white text-xl hover:text-[#55e83b] ${
                    activeLink === link.name ? 'text-[#55e83b]' : ''
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile nav */}
        <div
          id="navbar"
          className={`absolute top-[4.2rem] rounded-lg right-0 transition-all w-52 duration-300 p-2 bg-red-500 ${
            showList ? 'translate-x-0 opacity-100' : 'translate-x-[300%] opacity-0'
          }`}
        >
          <ul className="flex flex-col items-center gap-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.name);
                    close();
                  }}
                  className={`font-gilroyMedium transition-all duration-300 cursor-pointer text-white text-xl hover:text-[#55e83b] ${
                    activeLink === link.name ? 'text-[#55e83b]' : ''
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Cart & menu icons */}
        <div className="flex items-center gap-5 cursor-pointer">
          <div
            className="relative flex items-center gap-2 hover:opacity-80 transition-opacity"
            onClick={() => setShowCart(true)}
          >
            <img src={bag} className="w-6" alt="cart" />
            {count > 0 && (
              <span className="rounded-full bg-[#e5be11] px-1.5 text-sm text-white">
                {count}
              </span>
            )}
            {count > 0 && (
              <span className="text-white text-sm font-gilroyMedium">
                {formatPrice(allPrice)}
              </span>
            )}
          </div>
          <div className="md:hidden">
            <img
              src={showList ? x : list}
              onClick={() => setShowList(prev => !prev)}
              alt="menu"
              className="w-5 cursor-pointer hover:opacity-80 transition-opacity"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
