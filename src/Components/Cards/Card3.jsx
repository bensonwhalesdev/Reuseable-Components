import React from 'react';

const Card3 = () => {
  return (
    <div className="relative w-44 h-64 overflow-hidden bg-[#f5f5f5] p-2.5 text-black shadow-[0px_5px_15px_rgba(0,0,0,0.35)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-[0_0_20px_#3838ff]">
      <div className="transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
        <p className="mt-1 text-xl font-bold">Card Title</p>
        <p className="pt-4 text-sm leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit.
        </p>
        <button className="mt-5 cursor-pointer rounded-sm border-none bg-gradient-to-r from-[#5f03f4] via-[#3838ff] to-[#5f03f4] px-2 py-2 text-base font-semibold text-white shadow-[0_5px_10px_#00000033] hover:border-2 hover:border-solid hover:border-[#e8e8e8] hover:bg-gradient-to-r hover:from-[#f5f5f5] hover:via-[#f5f5f5] hover:to-[#f5f5f5] hover:text-[#3838ff] active:shadow-none">
          Know more
        </button>
      </div>
    </div>
  );
};

export default Card3;
