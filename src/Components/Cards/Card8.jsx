import React from "react";

const Card8 = () => {
  return (
    <div className="relative h-64 w-44 rounded-[10px] bg-[#f5f5f5] shadow-[0px_5px_15px_#00000059]">
      {/* Profile Image */}
      <div className="scale-1 absolute left-0 top-0 h-full w-full origin-top transform overflow-hidden">
        <img
          className="absolute left-0 top-0 h-32 w-full rounded-tl-[10px] rounded-tr-[10px] object-cover"
          src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="johndoe-CSSnippets"
        />
      </div>

      {/* User Info + Social Icons */}
      <div className="absolute flex h-full w-full items-end justify-center pb-[9px]">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold text-black">
            John Doe
            <br />
            <span className="text-sm font-bold text-[#5f03f4]">Programmer</span>
          </h2>

          {/* Social Icons */}
          <ul className="relative mt-2 flex">
            {[
              // Facebook
              "M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z",
              // Instagram
              "M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z",
              // Twitter/X
              "M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z",
              // LinkedIn
              "M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z",
            ].map((d, i) => (
              <li key={i} className="m-1 list-none">
                <a
                  href="#"
                  className="flex h-7 w-7 justify-center rounded-full p-[3px] shadow-[0px_3px_6px_rgb(0,0,0,0.16),0px_3px_6px_rgb(0,0,0,0.23)] transition-all duration-500 hover:scale-125"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    fill="currentColor"
                    className="w-full h-full"
                  >
                    <path d={d} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card8;
