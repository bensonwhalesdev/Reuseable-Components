import React from 'react';

const Card16 = () => {
  return (
    <div className="h-64 w-44 rounded-lg bg-[#f5f5f5] px-2 py-5 shadow-[0_5px_15px_#00000059]">
      <div className="mb-2">
        <h3 className="text-lg font-bold">Card Title</h3>
      </div>
      <div>
        <p className="text-xs text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut purus ac libero tempor lobortis.
          Curabitur venenatis vehicula quam tempor ut purus ac libero tempor lobortis. Curabitur.
        </p>
      </div>
      <div className="flex gap-2 pt-5">
        <div className="flex flex-col justify-center text-sm">
          <img
            src="https://images.pexels.com/photos/412840/pexels-photo-412840.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="h-11 w-11 rounded-full"
            alt="johndoe-CSSnippets"
          />
        </div>
        <div className="flex flex-col justify-center text-sm">
          <strong className="text-black">John Doe</strong>
          <span className="text-[#000000b3]">Content Creator</span>
        </div>
      </div>
    </div>
  );
};

export default Card16;
