import React from 'react';
import Header from '../components/Header';
import SwapComponent from '../components/SwapComponent';

const Swap = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-[#2D242F]'>
      <Header />
      <SwapComponent />
      {/* <Footer /> */}
    </div>
  );
};

export default Swap;
