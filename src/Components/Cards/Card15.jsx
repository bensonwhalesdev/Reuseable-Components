import React from 'react';

const Card15 = () => {
  return (
    <div className="flex flex-col w-44 h-64 bg-[#f5f5f5] shadow-[0px_5px_15px_rgba(0,0,0,0.35)] transition-all duration-100 ease-in-out rounded-tl-[20px] rounded-br-[20px]">
      <img
        className="w-20 h-20 m-auto rounded-tl-[20px] rounded-br-[20px]"
        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="johndoe-CSSnippets"
      />
      <span className="text-black text-base font-bold text-center">About Me</span>
      <p className="text-black text-center text-xs font-normal my-2 mx-3">
        Maecenas a nulla nec magna vehicula sodales. In scelerisque dui non justo vehicula hendrerit.
      </p>
      <div className="flex justify-center my-2 mx-0 gap-4 text-black">
        <a href="/#">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="16" height="16" fill="currentColor">
            <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
          </svg>
        </a>
        <a href="/#">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="16" height="16" fill="currentColor">
            <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
          </svg>
        </a>
        <a href="/#">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="16" height="16" fill="currentColor">
            <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card15;
