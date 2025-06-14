import React from 'react';

const Form6 = () => {
  return (
    <form
      className="flex h-max w-72 flex-col items-center justify-center gap-[15px] rounded-md bg-neutral-100 px-[20px] py-7 shadow-[0_15px_25px_#969696]"
      action=""
    >
      <p className="text-2xl font-bold text-black">LogIn</p>

      <div className="relative w-full">
        <label className="text-sm font-medium text-[#4e4e4e]" htmlFor="form10-email">Email</label>
        <input
          className="w-full rounded border border-solid border-[#e5e5e5] bg-transparent p-2 outline-none focus:border-[#4e4e4e] focus:shadow-none"
          type="email"
          id="form10-email"
          required
        />
      </div>

      <div className="relative w-full">
        <label className="text-sm font-medium text-[#4e4e4e]" htmlFor="form10-password">Password</label>
        <input
          className="w-full rounded border border-solid border-[#e5e5e5] bg-transparent p-2 outline-none focus:border-[#4e4e4e] focus:shadow-none"
          type="password"
          id="form10-password"
          required
        />
      </div>

      <button
        className="h-11 w-full cursor-pointer rounded border-0 bg-[#5a28cc] text-center text-lg font-medium text-white outline-none"
        type="submit"
      >
        LogIn
      </button>

      <div className="flex w-full items-center justify-center gap-5 text-black">
        <hr className="block h-px w-full border-0 bg-[#5a28cc]" />
        <span>Or</span>
        <hr className="block h-px w-full border-0 bg-[#5a28cc]" />
      </div>

      <button
        className="flex h-11 w-full cursor-pointer items-center justify-center gap-2.5 rounded border border-solid border-[#e5e5e5] bg-[#ea4335] text-base font-medium text-white outline-none"
        type="button"
      >
        <svg viewBox="0 0 488 512" fill="white" height="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
        </svg>
        <span>LogIn with Google</span>
      </button>

      <button
        className="flex h-11 w-full cursor-pointer items-center justify-center gap-2.5 rounded border border-solid border-[#e5e5e5] bg-[#171515] text-base font-medium text-white outline-none"
        type="button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="1em" viewBox="0 0 32 32">
          <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
        </svg>
        <span>LogIn with GitHub</span>
      </button>
    </form>
  );
};

export default Form6;
