import React, { useState } from 'react';

function ButtonCounter() {
  // State to hold the counter value
  const [count, setCount] = useState(0);

  // Function to handle button click
  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <p>Button clicked {count} times</p>
      <button 
        onClick={incrementCounter}>
        Click me
      </button>
    </div>
  );
}

export default ButtonCounter;
