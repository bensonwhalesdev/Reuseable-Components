import React from 'react';

const Form3 = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <form
        className="h-max w-72 rounded bg-neutral-100 px-5 py-6 shadow-[0px_5px_15px_#00000059]"
        action=""
      >
        <span className="text-xl font-extrabold text-[#2e1e8a]">Contact Form</span>

        <input
          type="text"
          placeholder="First Name"
          required
          className="mx-0 my-1.5 w-60 rounded border-0 bg-neutral-100 p-2 text-black shadow-[0px_4px_10px_#00000059] outline-none focus:border-b-2 focus:border-b-[#2e1e8a] focus:caret-[#2e1e8a] focus:shadow-none"
        />
        <input
          type="text"
          placeholder="Last Name"
          required
          className="mx-0 my-1.5 w-60 rounded border-0 bg-neutral-100 p-2 text-black shadow-[0px_4px_10px_#00000059] outline-none focus:border-b-2 focus:border-b-[#2e1e8a] focus:caret-[#2e1e8a] focus:shadow-none"
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="mx-0 my-1.5 w-60 rounded border-0 bg-neutral-100 p-2 text-black shadow-[0px_4px_10px_#00000059] outline-none focus:border-b-2 focus:border-b-[#2e1e8a] focus:caret-[#2e1e8a] focus:shadow-none"
        />
        <input
          type="number"
          placeholder="Phone Number"
          required
          className="mx-0 my-1.5 w-60 rounded border-0 bg-neutral-100 p-2 text-black shadow-[0px_4px_10px_#00000059] outline-none focus:border-b-2 focus:border-b-[#2e1e8a] focus:caret-[#2e1e8a] focus:shadow-none"
        />
        <textarea
          name="message"
          placeholder="Message"
          className="mx-0 my-1.5 h-24 w-60 resize-none rounded border-0 bg-neutral-100 p-2 text-black shadow-[0px_4px_10px_#00000059] outline-none focus:border-b-2 focus:border-b-[#2e1e8a] focus:caret-[#2e1e8a] focus:shadow-none"
        ></textarea>

        <button
          type="submit"
          className="mt-1.5 cursor-pointer rounded border-0 bg-gradient-to-r from-[#5a28cc] to-[#2e1e8a] px-[25px] py-2.5 text-base font-semibold text-white transition-colors duration-300 ease-linear hover:from-[#2e1e8a] hover:to-[#5a28cc]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form3;
