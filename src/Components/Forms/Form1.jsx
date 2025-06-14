import React from 'react';

const Form1 = () => {
  return (
    <div className="w-72 h-max rounded-[10px] bg-neutral-100 px-5 py-11 text-black shadow-[0px_5px_15px_rgba(0,0,0,0.35)]">
      <form className="relative flex flex-col items-center gap-7">
        <span className="mb-2.5 text-xl font-bold text-center">Enter Your Card Details</span>

        <div className="relative w-full text-[#B0B5BE] -ml-[15px]">
          <label
            htmlFor="form2-name"
            className="absolute left-0 top-[-22px] px-1 pt-2.5 pb-0 text-sm bg-neutral-100 cursor-text"
          >
            Card Holder Name
          </label>
          <input
            id="form2-name"
            type="text"
            placeholder="John Doe"
            required
            className="w-full px-2.5 py-[15px] text-black border border-black rounded-md bg-transparent shadow-none outline-none focus:border-black"
          />
        </div>

        <div className="relative w-full text-[#B0B5BE] -ml-[15px]">
          <label
            htmlFor="form2-cardNumber"
            className="absolute left-0 top-[-22px] px-1 pt-2.5 pb-0 text-sm bg-neutral-100 cursor-text"
          >
            Card Number
          </label>
          <input
            id="form2-cardNumber"
            type="number"
            placeholder="0000 0000 0000 0000"
            required
            className="w-full px-2.5 py-[15px] text-black border border-black rounded-md bg-transparent shadow-none outline-none focus:border-black"
          />
        </div>

        <div className="flex flex-row items-center justify-center pl-[22px]">
          <div className="relative w-full text-[#B0B5BE] -ml-[29px] mr-[30px]">
            <label
              htmlFor="form2-expiryDate"
              className="absolute left-0 top-[-22px] px-1 pt-2.5 pb-0 text-sm bg-neutral-100 cursor-text"
            >
              Expiry Date
            </label>
            <input
              id="form2-expiryDate"
              type="number"
              placeholder="MM/YY"
              required
              className="w-full px-2.5 py-[15px] text-black border border-black rounded-md bg-transparent shadow-none outline-none focus:border-black"
            />
          </div>
          <div className="relative w-full text-[#B0B5BE] -ml-[25px]">
            <label
              htmlFor="form2-cvv"
              className="absolute left-0 top-[-22px] px-1 pt-2.5 pb-0 text-sm bg-neutral-100 cursor-text"
            >
              CVV
            </label>
            <input
              id="form2-cvv"
              type="number"
              placeholder="123"
              required
              className="w-full px-2.5 py-[15px] text-black border border-black rounded-md bg-transparent shadow-none outline-none focus:border-black"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-2.5 px-[25px] py-2.5 text-lg font-medium text-white bg-black rounded-md border-2 border-transparent transition-all duration-300 ease-in hover:bg-transparent hover:border-black hover:text-black active:scale-95"
        >
          Confirm
        </button>
      </form>
    </div>
  );
};

export default Form1;
