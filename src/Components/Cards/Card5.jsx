import React from 'react';

const Card5 = () => {
  return (
    <div className="h-72 w-44 overflow-hidden bg-[#f5f5f5] shadow-[0px_5px_15px_rgba(0,0,0,0.35)]">
      {/* Title */}
      <div>
        <h2 className="mx-0 my-3 px-2 py-0 text-xl font-bold">Title</h2>
      </div>

      {/* Image */}
      <div className="h-24 w-full">
        <img
          className="h-full w-full object-cover object-center"
          src="https://images.pexels.com/photos/986774/pexels-photo-986774.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="laptop-pic-CSSnippets"
        />
      </div>

      {/* Content */}
      <div className="mt-0 px-2 py-4">
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit dolor sit.
        </p>

        {/* Button */}
        <div className="mb-2 mt-4">
          <button className="cursor-pointer border-2 border-black bg-white px-3.5 py-1 text-base text-black shadow-[3px_3px_0_#000] hover:border-[3px] hover:shadow-none">
            Hover me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card5;
