import React, { useState } from 'react';

const TextBox = ({ text, type }) => {
  const [inputValue, setInputValue] = useState(''); // State to store the input value
  const [counterValue, setCounterValue] = useState(0); // State to store the counter value

  const handleInputChange = event => {
    setInputValue(event.target.value); // Update the input value
  };

  const handleCounterChange = increment => {
    setCounterValue(prevCounter => Math.max(0, prevCounter + increment)); // Update the counter value
  };

  const rectangleStyle = {
    backgroundColor: '#1c1c1d',
    borderBottomWidth: '2px',
    borderRadius: '12px',
    borderColor: '#FF9900',
    height: '45px',
    width: '100%',
    display: 'flex', // Display the input and button side by side
    alignItems: 'center', // Center content vertically
    padding: '0 10px', // Add padding for better spacing
  };

  const inputStyle = {
    flex: 1, // Allow the input to take remaining width
    border: 'none',
    background: 'transparent',
    color: 'white',
    fontSize: '15px',
    outline: 'none', // Remove default focus outline
  };

  const counterButtonStyle = {
    background: 'transparent',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
  };

  return (
    <div className="mx-8 my-5">
      <div style={rectangleStyle}>
        <input type={type} value={inputValue} onChange={handleInputChange} placeholder={text} style={inputStyle} />
        <button style={counterButtonStyle} onClick={() => handleCounterChange(-1)} disabled={counterValue === 0}>
          -
        </button>
        <span style={{ margin: '0 5px' ,color:"red"}}>{counterValue}</span>
        <button style={counterButtonStyle} onClick={() => handleCounterChange(1)} disabled={counterValue === 20}>
          +
        </button>
      </div>
    </div>
  );
};

export default TextBox;
