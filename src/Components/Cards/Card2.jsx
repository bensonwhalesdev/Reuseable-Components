import React from 'react';

const Card2 = () => {
  return (
    <div className="w-44 h-auto bg-[#f5f5f5] px-2.5 py-3.5 text-center text-black shadow-[0px_5px_15px_rgba(0,0,0,0.35)]">
      <span className="text-xl font-bold">Cookie Notice</span>
      <p className="mt-5 text-sm text-[#4B5563]">
        We use cookies to ensure that we give you the best experience on our website.
      </p>
      <div className="mt-2.5 flex flex-col">
        <button className="m-1 cursor-pointer border-none bg-gradient-to-r from-[#5f03f4] via-[#3838ff] to-[#5f03f4] px-1 py-2 text-sm text-white hover:shadow-[0_0_15px_#3838ff]">
          Manage
        </button>
        <button className="m-1 cursor-pointer border-none bg-gradient-to-r from-[#5f03f4] via-[#3838ff] to-[#5f03f4] px-1 py-2 text-sm text-white hover:shadow-[0_0_15px_#3838ff]">
          Accept
        </button>
      </div>
    </div>
  );
};

export default Card2;
