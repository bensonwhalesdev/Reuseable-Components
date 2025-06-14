import React from 'react';

const Card12 = () => {
  return (
    <div className="relative w-44 bg-[#f5f5f5] p-2.5 text-black shadow-[0px_5px_15px_#00000059]">
      {/* Ribbon */}
      <div className="absolute right-[-3px] top-[-3px] z-10 h-24 w-20 overflow-hidden">
        <div className="relative left-[-4px] top-[14px] w-28 rotate-45 transform bg-gradient-to-b from-[#8646ff] via-[#4b2bb1] to-[#8646ff] py-1.5 text-center text-white shadow-[0px_0px_3px_#0000004d] drop-shadow-[0px_1px_0px_#ffffff80] before:absolute before:bottom-[-3px] before:left-0 before:border-t-[3px] before:border-l-[3px] before:border-r-[3px] before:border-t-[#50504f] before:border-l-transparent before:border-r-transparent before:content-[''] after:absolute after:bottom-[-3px] after:right-0 after:border-t-[3px] after:border-l-[3px] after:border-r-[3px] after:border-t-[#50504f] after:border-l-transparent after:border-r-transparent after:content-['']">
          Hot Deals
        </div>
      </div>

      {/* Details */}
      <div>
        <h2 className="mb-2.5 mt-1.5 text-2xl font-bold">Title</h2>
        <p className="pr-1 text-xs font-medium italic leading-normal">
          Maecenas a nulla nec magna vehicula sodales. In scelerisque dui non justo vehicula hendrerit. Morbi nec luctus ante, id luctus felis. Integer nec lacinia arcu.
        </p>
      </div>

      {/* Button */}
      <button className="mt-2.5 cursor-pointer rounded-[5px] border-none bg-gradient-to-b from-[#8646ff] via-[#4b2bb1] to-[#8646ff] px-9 py-2.5 text-base text-white transition-all duration-300 ease-linear hover:bg-[#5a28cc] hover:shadow-[0px_8px_16px_#5a28cc4d]">
        Learn More
      </button>
    </div>
  );
};

export default Card12;
