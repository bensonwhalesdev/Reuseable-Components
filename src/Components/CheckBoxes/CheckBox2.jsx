import React, { useState } from 'react';

const Checkbox2 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="ml-5 mt-3">
      <label className="relative cursor-pointer">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="peer absolute opacity-0"
        />
        <span
          className={`
            absolute left-1 top-2/3 h-8 w-8 -translate-x-1/2 -translate-y-1/2 transform 
            border-2 border-solid border-[#0d0d0d] transition-all duration-300
            peer-checked:border-green-700
            peer-checked:after:absolute 
            peer-checked:after:left-1/2 
            peer-checked:after:top-[40%] 
            peer-checked:after:h-5 
            peer-checked:after:w-2.5 
            peer-checked:after:-translate-x-1/2 
            peer-checked:after:-translate-y-1/2 
            peer-checked:after:rotate-45 
            peer-checked:after:transform 
            peer-checked:after:border-b-4 
            peer-checked:after:border-r-4 
            peer-checked:after:border-l-0 
            peer-checked:after:border-t-0 
            peer-checked:after:border-solid 
            peer-checked:after:border-green-700 
            peer-checked:after:transition-transform 
            peer-checked:after:duration-300 
            peer-checked:after:content-['']
          `}
        ></span>
      </label>
    </div>
  );
};

export default Checkbox2;
