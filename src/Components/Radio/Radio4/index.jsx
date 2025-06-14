
import React, { useState } from 'react';
import './radio4.css'

const Radio4 = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.id);
  };

  return (
    <div className="radio6">
      <input
        type="radio"
        name="radio6-group"
        id="radio6-input1"
        checked={selectedOption === 'radio6-input1'}
        onChange={handleOptionChange}
      />
      <label htmlFor="radio6-input1" className="radio6-input1">
        <div className="dot"></div>
        <span>Yes</span>
      </label>
      <input
        type="radio"
        name="radio6-group"
        id="radio6-input2"
        checked={selectedOption === 'radio6-input2'}
        onChange={handleOptionChange}
      />
      <label htmlFor="radio6-input2" className="radio6-input2">
        <div className="dot"></div>
        <span>No</span>
      </label>
    </div>
  );
}

export default Radio4;
