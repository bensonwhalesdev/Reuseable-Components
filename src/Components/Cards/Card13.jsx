import React from 'react';

const Card13 = () => {
  return (
    <div className="relative h-64 w-44 bg-[#f5f5f5] shadow-[0px_5px_15px_#00000059]">
      {/* Header with skewed background */}
      <header className="relative h-12 w-full bg-[#181818] before:absolute before:inset-0 before:origin-[100%_100%] before:skew-y-[-10deg] before:bg-inherit before:content-[''] after:absolute after:inset-0 after:origin-[0_100%] after:skew-y-[10deg] after:bg-inherit after:content-['']">
        {/* Profile image */}
        <div className="absolute left-1/2 top-7 z-50 ml-[-50px] h-24 w-24 overflow-hidden rounded-full border-[3px] border-white">
          <img
            src="https://images.pexels.com/photos/412840/pexels-photo-412840.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="John Doe"
            className="absolute left-1/2 top-1/2 w-24 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </header>

      {/* Name with underline */}
      <h2 className="relative left-[27%] mt-[85px] mb-3 w-20 text-center text-base font-semibold after:absolute after:top-full after:ml-[-58px] after:mt-2 after:h-px after:w-12 after:bg-black after:content-['']">
        John Doe
      </h2>

      {/* Description */}
      <div className="mb-3 pt-3 text-center text-xs text-[#777]">
        Lorem ipsum dolor sit amet, consectetur.
      </div>

      {/* Social Icons */}
      <div className="flex items-center justify-center">
        {/* Facebook */}
        <a href="#" className="mx-3">
          <svg className="h-5 w-5" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
            <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z" />
          </svg>
        </a>

        {/* Instagram */}
        <a href="#" className="mx-3">
          <svg className="h-5 w-5" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 3C8.832 3 3 8.832 3 16v18c0 7.168 5.832 13 13 13h18c7.168 0 13-5.832 13-13V16c0-7.168-5.832-13-13-13H16zm0 2h18c6.075 0 11 4.925 11 11v18c0 6.075-4.925 11-11 11H16c-6.075 0-11-4.925-11-11V16c0-6.075 4.925-11 11-11zm21 6a2 2 0 100 4 2 2 0 000-4zM25 14c-6.063 0-11 4.937-11 11s4.937 11 11 11 11-4.937 11-11-4.937-11-11-11zm0 2c4.983 0 9 4.017 9 9s-4.017 9-9 9-9-4.017-9-9 4.017-9 9-9z" />
          </svg>
        </a>

        {/* Twitter */}
        <a href="#" className="mx-3">
          <svg className="h-5 w-5" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.92 6l14.66 21.375L6.23 44h3.18L21.99 29.422 31.99 44H44L28.682 21.67 42.2 6h-3.17L27.275 19.617 17.934 6H5.92zm3.797 2h7.164L40.203 42h-7.164L9.717 8z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card13;
