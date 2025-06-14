import React from 'react';

const Card6 = () => {
  return (
    <div className="group w-44 h-auto bg-[#f5f5f5] p-2 text-black shadow-[0px_5px_15px_rgba(0,0,0,0.35)] hover:shadow-[0px_20px_60px_4px_rgba(0,0,0,0.56)] transition-all duration-300 ease-in-out">
      <div>
        <p className="py-1 text-xl font-bold">Free Plan</p>
        <p className="mt-3 text-2xl font-bold">$0/month</p>

        <ul className="mt-3 list-none">
          <li className="py-px text-base">Access to all features</li>
          <li className="py-px text-base">Unlimited storage</li>
          <li className="py-px text-base">No ads</li>
        </ul>

        <button className="mt-4 w-full rounded-sm border border-black bg-transparent px-3 py-2 text-base font-semibold text-center group-hover:bg-[#0d0d0d] group-hover:text-white transition-colors duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Card6;
