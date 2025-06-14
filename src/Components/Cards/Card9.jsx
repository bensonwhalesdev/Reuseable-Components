import React from 'react';

const Card9 = () => {
  return (
    <div className="h-64 w-44 rounded-md bg-[#f5f5f5] p-1 text-center shadow-[0px_5px_15px_#00000059] transition-all duration-500 ease-in-out hover:-translate-y-[1px] hover:shadow-[0_18px_35px_#32325a1a,0_8px_15px_#00000012]">
      <img
        className="h-32 w-full rounded-tl-[5px] rounded-tr-[5px] object-cover"
        src="https://images.pexels.com/photos/1574181/pexels-photo-1574181.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="nature-pic-CSSnippets"
      />
      <h1 className="mt-2 text-xl font-bold text-black">Card Title</h1>
      <p className="mb-3 mt-1 text-xs text-[#a0a6ab]">Hover over the card to see the effect.</p>
      <a
        href="#"
        className="cursor-pointer rounded-md bg-[#2e1e8a] px-5 py-2 text-sm text-white hover:bg-[#4532af]"
      >
        Read More
      </a>
    </div>
  );
};

export default Card9;
