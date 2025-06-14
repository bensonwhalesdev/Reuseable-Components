import React, { useState } from 'react';

const Checkbox1 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label>
      <input
        type="checkbox"
        className="hidden peer"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span
        className="w-7 h-7 inline-block rounded relative cursor-pointer border-2 border-black
        after:absolute after:top-1/2 after:left-1/2 after:w-2.5 after:h-2.5 after:bg-black 
        after:rounded-sm after:opacity-0 after:content-[''] after:transform 
        after:-translate-x-1/2 after:-translate-y-1/2 peer-checked:after:opacity-100"
      ></span>
    </label>
  );
};

export default Checkbox1;
