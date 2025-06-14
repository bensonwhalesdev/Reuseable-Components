import React, { useState } from 'react';

const Radio2 = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex flex-col flex-wrap text-sm">
      {['HTML', 'CSS', 'Javascript'].map((option) => (
        <label
          key={option}
          className="relative mb-[5px] flex cursor-pointer overflow-hidden"
        >
          <input
            type="radio"
            name="radio3-group"
            value={option}
            checked={selectedOption === option}
            onChange={handleOptionChange}
            className="peer absolute left-[-9999px]"
          />
          <span className="flex items-center rounded-[20px] pb-1.5 pl-1.5 pr-[7px] pt-1.5 text-[#666] duration-200 ease-linear 
            before:mr-[7px] before:flex before:h-5 before:w-5 before:shrink-0 before:rounded-full before:border-2 
            before:border-solid before:border-[#666] before:bg-white before:shadow-[inset_0_0_0_0_0.125em_#666] 
            before:duration-200 before:ease-linear before:content-[''] 
            hover:bg-[#d6d6d6] 
            peer-checked:bg-[#333] peer-checked:text-white 
            peer-checked:before:shadow-[inset_0_0_0_4px_#666]">
            {option}
          </span>
        </label>
      ))}
    </div>
  );
};

export default Radio2;
