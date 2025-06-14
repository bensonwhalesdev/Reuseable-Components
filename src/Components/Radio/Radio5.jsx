import React, { useState } from "react";

const Radio5 = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex gap-5">
      <label className="flex">
        <input
          type="radio"
          name="radio7-Group"
          value="radio7-input1"
          checked={selectedOption === "radio7-input1"}
          onChange={handleOptionChange}
          className="peer hidden"
        />
        <span className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-[3px] border-solid border-transparent shadow-[3px_3px_6px_#00000080,-1px_-1px_4px_#0e0c0c80] duration-300 peer-checked:scale-110 peer-checked:shadow-[3px_3px_6px_#00000080,-1px_-1px_4px_#1a171780,inset_3px_3px_6px_#00000080,inset_-1px_-1px_4px_#1b181880]"></span>
      </label>

      <label className="flex">
        <input
          type="radio"
          name="radio7-Group"
          value="radio7-input2"
          checked={selectedOption === "radio7-input2"}
          onChange={handleOptionChange}
          className="peer hidden"
        />
        <span className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-[3px] border-solid border-transparent shadow-[3px_3px_6px_#00000080,-1px_-1px_4px_#0e0c0c80] duration-300 peer-checked:scale-110 peer-checked:shadow-[3px_3px_6px_#00000080,-1px_-1px_4px_#1a171780,inset_3px_3px_6px_#00000080,inset_-1px_-1px_4px_#1b181880]"></span>
      </label>

      <label className="flex">
        <input
          type="radio"
          name="radio7-Group"
          value="radio7-input3"
          checked={selectedOption === "radio7-input3"}
          onChange={handleOptionChange}
          className="peer hidden"
        />
        <span className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-[3px] border-solid border-transparent shadow-[3px_3px_6px_#00000080,-1px_-1px_4px_#0e0c0c80] duration-300 peer-checked:scale-110 peer-checked:shadow-[3px_3px_6px_#00000080,-1px_-1px_4px_#1a171780,inset_3px_3px_6px_#00000080,inset_-1px_-1px_4px_#1b181880]"></span>
      </label>
    </div>
  );
};

export default Radio5;
