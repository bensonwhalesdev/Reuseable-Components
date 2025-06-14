import React from 'react';

const Card1 = () => {
  return (
    <div className="h-max w-44 bg-[#f5f5f5] p-1.5 shadow-[0px_5px_15px_rgba(0,0,0,0.35)]">
      <img
        className="h-32 w-full bg-[#ECECEC] transition-transform duration-300 hover:scale-95"
        src="https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="laptop-pic-CSSnippets"
      />
      <div className="px-[7px] pb-0 pt-[9px] text-xl font-bold text-black">Title</div>
      <div className="p-[7px] text-sm text-black">
        Lorem ipsum dolor sit amet consectetur adipiscing.
        <div className="pt-3 text-xs font-medium text-gray-500">
          By <span className="font-extrabold text-black">John</span> 6 hours ago
        </div>
      </div>
    </div>
  );
};

export default Card1;
