import React from 'react';

const Form4 = () => {
  return (
    <div className="h-max w-72 rounded-lg bg-neutral-100 px-5 py-9 text-center shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73]">
      <span className="text-2xl font-bold text-black">LogIn Form</span>
      <form className="mt-10" action="">
        {/* Email/Username */}
        <div className="relative mx-0 my-4 h-12 w-full">
          <input
            className="peer h-full w-full rounded-[10px] border-0 bg-neutral-100 px-[3px] py-0 text-base text-[#4e4e4e] shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73] outline-none focus:shadow-[inset_1px_1px_2px_#BABECC,inset_-1px_-1px_2px_#ffffff73]"
            type="text"
            required
            id="form5-email"
          />
          <label
            htmlFor="form5-email"
            className="absolute left-[15px] top-1/2 -translate-y-1/2 transform cursor-text text-[#4e4e4e] transition-all duration-200 peer-valid:opacity-0"
          >
            Email or Username
          </label>
        </div>

        {/* Password */}
        <div className="relative mx-0 my-4 h-12 w-full">
          <input
            className="peer h-full w-full rounded-[10px] border-0 bg-neutral-100 px-[3px] py-0 text-base text-[#4e4e4e] shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73] outline-none focus:shadow-[inset_1px_1px_2px_#BABECC,inset_-1px_-1px_2px_#ffffff73]"
            type="password"
            required
            id="form5-password"
          />
          <label
            htmlFor="form5-password"
            className="absolute left-[15px] top-1/2 -translate-y-1/2 transform cursor-text text-[#4e4e4e] transition-all duration-200 peer-valid:opacity-0"
          >
            Password
          </label>
        </div>

        {/* Forgot Password */}
        <div className="group mt-5">
          <a
            href="/#"
            className="text-base font-normal text-[#5a28cc] no-underline group-hover:underline"
          >
            Forgot Password?
          </a>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 h-12 w-full cursor-pointer rounded-[10px] border-0 bg-neutral-100 text-lg font-semibold text-black shadow-[2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73] outline-none focus:shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73]"
        >
          LogIn
        </button>

        {/* Create Account Prompt */}
        <p className="mt-[23px] text-sm text-[#4e4e4e]">
          Don't have an account?
          <a
            href="/#"
            className="pl-[5px] text-[#5a28cc] no-underline hover:underline"
          >
            Create one
          </a>
        </p>
      </form>
    </div>
  );
};

export default Form4;
