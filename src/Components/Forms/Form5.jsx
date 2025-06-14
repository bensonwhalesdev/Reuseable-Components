import React from 'react';

const Form5 = () => {
  return (
    <div className="flex h-max w-72 flex-col items-center rounded-[25px] bg-neutral-100 p-6 shadow-[0px_30px_30px_-20px_#b596fd]">
      <span className="text-2xl font-extrabold text-[#5a28cc]">Sign In</span>
      <form className="mt-5 flex flex-col items-center w-full" action="">
        <input
          className="mt-[15px] w-full rounded-[18px] border-0 bg-white p-4 shadow-[0px_10px_10px_-5px_#c6aeff] outline-none placeholder:text-[#4e4e4e] focus:border-2 focus:border-solid focus:border-[#c6aeff] focus:shadow-none"
          placeholder="Email"
          name="email"
          type="email"
          required
        />
        <input
          className="mt-[15px] w-full rounded-[18px] border-0 bg-white p-4 shadow-[0px_10px_10px_-5px_#c6aeff] outline-none placeholder:text-[#4e4e4e] focus:border-2 focus:border-solid focus:border-[#c6aeff] focus:shadow-none"
          placeholder="Password"
          name="password"
          type="password"
          required
        />
        <span className="mt-[15px] block text-center">
          <a className="text-xs text-[#b596fd] no-underline" href="/#">
            Forgot Password?
          </a>
        </span>
        <button
          type="submit"
          className="mt-5 block w-full cursor-pointer rounded-[18px] border-0 bg-gradient-to-r from-[#b596fd] to-[#5a28cc] px-14 py-[15px] text-lg font-semibold text-white shadow-[0px_20px_10px_-15px_#b596fd] outline-none transition-all duration-200 ease-in-out hover:shadow-[0px_23px_10px_-20px_#b596fd] active:scale-95"
        >
          SignIn
        </button>
      </form>

      <div className="mt-5">
        <span className="block text-center text-xs font-medium text-[#b596fd]">Or SignIn with</span>
        <div className="mt-2.5 flex w-full justify-center gap-[15px]">
          {/* Google */}
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#b596fd] to-[#5a28cc] p-[5px] shadow-[0px_12px_10px_-8px_#b596fd] transition-all duration-200 ease-in-out hover:scale-110 active:scale-95">
            <svg viewBox="0 0 488 512" fill="white" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg">
              <path d="M488 261.8C488 403.3 391.1 504 248 504 
              110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 
              123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 
              94.3 116.6 94.3 256c0 86.5 69.1 156.6 
              153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1
              c2.3 12.7 3.9 24.9 3.9 41.4z" />
            </svg>
          </button>

          {/* GitHub */}
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#b596fd] to-[#5a28cc] p-[5px] shadow-[0px_12px_10px_-8px_#b596fd] transition-all duration-200 ease-in-out hover:scale-110 active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="20px" height="20px" viewBox="0 0 32 32">
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 
              0 7.073 4.584 13.068 10.937 15.183 
              0.803 0.151 1.093-0.344 1.093-0.772 
              0-0.38-0.009-1.385-0.015-2.719-4.453 
              0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339
              -1.448-0.989 0.115-0.968 0.115-0.968 
              1.604 0.109 2.448 1.645 2.448 1.645 
              1.427 2.448 3.744 1.74 4.661 1.328 
              0.14-1.031 0.557-1.74 1.011-2.135
              -3.552-0.401-7.287-1.776-7.287-7.907 
              0-1.751 0.62-3.177 1.645-4.297
              -0.177-0.401-0.719-2.031 0.141-4.235 
              0 0 1.339-0.427 4.4 1.641 1.281-0.355 
              2.641-0.532 4-0.541 1.36 0.009 
              2.719 0.187 4 0.541 3.043-2.068 
              4.381-1.641 4.381-1.641 0.859 2.204 
              0.317 3.833 0.161 4.235 1.015 1.12 
              1.635 2.547 1.635 4.297 
              0 6.145-3.74 7.5-7.296 7.891 
              0.556 0.479 1.077 1.464 1.077 2.959 
              0 2.14-0.020 3.864-0.020 4.385 
              0 0.416 0.28 0.916 1.104 0.755 
              6.4-2.093 10.979-8.093 10.979-15.156 
              0-8.833-7.161-16-16-16z" />
            </svg>
          </button>

          {/* X (formerly Twitter) */}
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#b596fd] to-[#5a28cc] p-[5px] shadow-[0px_12px_10px_-8px_#b596fd] transition-all duration-200 ease-in-out hover:scale-110 active:scale-95">
            <svg viewBox="0 0 512 512" fill="white" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg">
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 
              318.6 106.5 464H35.8L200.7 275.5 26.8 
              48H172.4L272.9 180.9 389.2 48zM364.4 
              421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form5;
