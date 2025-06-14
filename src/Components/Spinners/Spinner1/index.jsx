import React from 'react';
import './spinner1.css';

const Spinner1 = () => {
  return (
    <div className="loader1">
      <span>Loading</span>
      <span className="dot dot1">.</span>
      <span className="dot dot2">.</span>
      <span className="dot dot3">.</span>
    </div>
  );
};

export default Spinner1;
