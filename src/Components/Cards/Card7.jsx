import React from 'react';

const Card7 = () => {
  return (
    <div className="relative w-44 h-auto bg-[#f5f5f5] p-2.5 text-center text-black shadow-[0px_5px_15px_rgba(0,0,0,0.35)]">
      <div>
        <div className="mt-1 text-xl font-bold">Premium</div>
        <div className="mt-4 text-4xl font-bold drop-shadow-[0_0_10px_#0000006b]">$29.99</div>
        <div className="mt-5 text-sm leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
      <button className="mt-5 w-11/12 cursor-pointer rounded-lg border-none bg-gradient-to-r from-[#04051dea] to-[#2b566e] px-4 py-2 text-lg font-bold text-white outline-none active:scale-95 transition-transform">
        Click me
      </button>
    </div>
  );
};

export default Card7;
