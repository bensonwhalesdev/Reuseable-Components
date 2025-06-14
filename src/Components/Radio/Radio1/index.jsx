
import React, { useState } from 'react';
import './radio1.css'

const Radio1 = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.id);
  };

  return (
    <div className="radio2">
      <input
        name="radio2-group"
        id="radio2-input1"
        type="radio"
        checked={selectedOption === 'radio2-input1'}
        onChange={handleOptionChange}
      />
      <label htmlFor="radio2-input1">
        <span></span>
        Option 1
      </label>
      <div className="radio-button">
        <input
          name="radio2-group"
          id="radio2-input2"
          type="radio"
          checked={selectedOption === 'radio2-input2'}
          onChange={handleOptionChange}
        />
        <label htmlFor="radio2-input2">
          <span></span>
          Option 2
        </label>
      </div>
      <div className="radio-button">
        <input
          name="radio2-group"
          id="radio2-input3"
          type="radio"
          checked={selectedOption === 'radio2-input3'}
          onChange={handleOptionChange}
        />
        <label htmlFor="radio2-input3">
          <span></span>
          Option 3
        </label>
      </div>
    </div>
  );
}

export default Radio1;
