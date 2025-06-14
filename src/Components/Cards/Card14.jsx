import React from 'react';

const Card14 = () => {
  return (
    <div className="flex h-64 w-44 flex-col rounded-bl-[20px] rounded-tr-[20px] bg-[#181818] transition-all duration-100 ease-in-out">
      {/* Profile Image */}
      <img
        className="m-auto h-20 w-20 rounded-bl-[20px] rounded-tr-[20px]"
        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="johndoe-CSSnippets"
      />

      {/* Title */}
      <span className="text-center text-base font-bold text-white">About Me</span>

      {/* Description */}
      <p className="mx-3 my-2 text-center text-xs font-normal text-white">
        Maecenas a nulla nec magna vehicula sodales. In scelerisque dui non justo vehicula hendrerit.
      </p>

      {/* Social Icons */}
      <div className="mx-0 my-2 flex justify-center gap-4 text-white">
        <a href="/#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="16"
            height="16"
            fill="currentColor"
          >
            <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z" />
          </svg>
        </a>
        <a href="/#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="16"
            height="16"
            fill="currentColor"
          >
            <path d="M 16 3 C 8.832 3 3 8.832 3 16v18c0 7.168 5.832 13 13 13h18c7.168 0 13-5.832 13-13V16c0-7.168-5.832-13-13-13H16zm0 2h18c6.075 0 11 4.925 11 11v18c0 6.075-4.925 11-11 11H16c-6.075 0-11-4.925-11-11V16c0-6.075 4.925-11 11-11zm21 6a2 2 0 100 4 2 2 0 000-4zM25 14c-6.063 0-11 4.937-11 11s4.937 11 11 11 11-4.937 11-11-4.937-11-11-11zm0 2c4.983 0 9 4.017 9 9s-4.017 9-9 9-9-4.017-9-9 4.017-9 9-9z" />
          </svg>
        </a>
        <a href="/#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="16"
            height="16"
            fill="currentColor"
          >
            <path d="M5.92 6L20.582 27.375 6.23 44h3.18L21.986 29.422 31.986 44H44L28.682 21.67 42.2 6h-3.17L27.275 19.617 17.934 6H5.92zm3.797 2h7.164L40.203 42h-7.164L9.717 8z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card14;
