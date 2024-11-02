import React from 'react';

export default function ({ children, bg, extraClass }) {
  return (
    <div className={`px-5 xl:px-10 py-5 bg-[${bg}] ${extraClass}`}>
      {children}
    </div>
  );
}
