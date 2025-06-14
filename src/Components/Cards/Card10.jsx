import React from 'react';

const Card10 = () => {
  return (
    <div className="h-64 w-44 bg-[#f5f5f5] text-black shadow-[0px_5px_15px_#00000059] transition-all duration-200 ease-in-out hover:scale-110 transform">
      <div>
        <img
          className="grid h-28 w-full place-items-center rounded-br-[50%] object-cover"
          src="https://images.pexels.com/photos/33227/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&w=600"
          alt="nature-pic-CSSnippets"
        />
      </div>
      <div className="flex flex-col p-1">
        <h1 className="mb-2 mt-1.5 text-2xl font-bold">Title</h1>
        <p className="mb-3.5 text-xs">Lorem Ipsum is simply dummy text.</p>
        <button className="mb-3.5 cursor-pointer rounded-[10px] border-none bg-gradient-to-r from-[#8ba5e9] to-[#5f03f4] p-2 text-white hover:from-[#5f03f4] hover:to-[#9f6cf0]">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Card10;
