import React from 'react';

const Card11 = () => {
  return (
    <div className="group h-64 w-44 rounded-lg bg-[#f5f5f5] shadow-[0px_5px_15px_#00000059] transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:shadow-[0px_2px_16px_#00000033]">
      <div>
        <img
          className="h-28 w-full rounded-tl-lg rounded-tr-lg object-cover"
          src="https://images.pexels.com/photos/5926397/pexels-photo-5926397.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="laptop-pic-CSSnippets"
        />
      </div>
      <div>
        <h3 className="mt-3 px-1 text-xl font-bold group-hover:italic">Title</h3>
      </div>
      <div>
        <p className="mt-2 px-1 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="flex items-center gap-2 px-2 pt-4 pb-4">
        <div>
          <img
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="h-8 w-8 rounded-full object-cover"
            alt="johndoe-CSSnippets"
          />
        </div>
        <div className="flex flex-col justify-center text-xs">
          <strong>John Doe</strong>
          <span className="text-[#000000b3]">2h ago</span>
        </div>
      </div>
    </div>
  );
};

export default Card11;
