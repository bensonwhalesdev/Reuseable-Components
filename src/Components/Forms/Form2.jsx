import React from 'react';

const Form2 = () => {
  return (
    <form
      className="flex w-72 flex-col items-center rounded-[10px] bg-black px-5 py-8 h-max"
      action=""
    >
      <span className="mb-7 text-2xl font-medium text-white">SignUp</span>

      <input
        type="text"
        placeholder="Name"
        required
        className="mb-2.5 w-full rounded bg-neutral-100 p-2.5 text-sm border-0 outline-none focus:shadow-none"
      />
      <input
        type="email"
        placeholder="Email"
        required
        className="mb-2.5 w-full rounded bg-neutral-100 p-2.5 text-sm border-0 outline-none focus:shadow-none"
      />
      <input
        type="password"
        placeholder="Password"
        required
        className="mb-2.5 w-full rounded bg-neutral-100 p-2.5 text-sm border-0 outline-none focus:shadow-none"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        required
        className="mb-2.5 w-full rounded bg-neutral-100 p-2.5 text-sm border-0 outline-none focus:shadow-none"
      />

      <div className="flex items-center py-4">
        <input
          id="form3-checkbox"
          type="checkbox"
          className="mr-2.5 cursor-pointer rounded checked:bg-[#5a28cc] focus:shadow-none"
        />
        <label
          htmlFor="form3-checkbox"
          className="text-base text-white"
        >
          Receive Weekly Emails
        </label>
      </div>

      <button
        type="submit"
        className="mt-2 cursor-pointer rounded border-2 border-[#5a28cc] bg-[#5a28cc] px-8 py-2 text-base font-medium text-white transition-all duration-500 ease-in-out hover:bg-neutral-100 hover:text-[#5a28cc]"
      >
        SignUp
      </button>
    </form>
  );
};

export default Form2;
