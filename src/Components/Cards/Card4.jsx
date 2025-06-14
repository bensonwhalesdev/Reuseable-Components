import React from 'react';

const Card4 = () => {
  return (
    <div className="relative w-44 h-auto flex flex-col bg-[#f5f5f5] p-2 text-black shadow-[0px_5px_15px_rgba(0,0,0,0.35)]">
      {/* Header */}
      <div className="relative border-b border-b-[#5f03f4] bg-transparent text-center">
        <p className="mt-1 text-2xl font-bold">Standard</p>
        <div className="mt-6 flex items-start justify-center gap-1 text-2xl">
          <span className="text-xl leading-10">$</span>21.99
          <span className="self-end text-xl leading-10">/mo</span>
        </div>
      </div>

      {/* Features List */}
      <div>
        <ul className="my-6 w-full space-y-2">
          {["Amazing Benefits", "40% Discount"].map((text, index) => (
            <li key={index} className="flex items-center gap-2.5 text-base font-normal">
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-solid border-[#2b2bff]">
                <svg
                  className="h-3 w-3"
                  aria-hidden="true"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 12.75l6 6 9-13.5"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </span>
              <p className="block font-medium">{text}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <div>
        <button className="w-full cursor-pointer rounded-[10px] border-none bg-gradient-to-r from-[#5f03f4] via-[#3838ff] to-[#5f03f4] p-2.5 text-lg font-medium text-white outline-none hover:from-[#3838ff] hover:via-[#5f03f4] hover:to-[#3838ff]">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Card4;
