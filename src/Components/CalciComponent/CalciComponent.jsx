import React, { useState } from "react";
import './CalciComponent.css'
const CalciComponent = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");

  const handleNumber1Change = (event) => {
    setNumber1(event.target.value);
  };

  const handleNumber2Change = (event) => {
    setNumber2(event.target.value);
  };

  const handleAddition = (event) => {
    event.preventDefault();
    setResult(parseInt(number1) + parseInt(number2));
  };

  const handleSubtraction = (event) => {
    event.preventDefault();
    setResult(parseInt(number1) - parseInt(number2));
  };

  const handleMultiplication = (event) => {
    event.preventDefault();
    setResult(parseInt(number1) * parseInt(number2));
  };

  const handleDivision = (event) => {
    event.preventDefault();
    setResult(parseInt(number1) / parseInt(number2));
  };

  return (
    <React.Fragment>
    <div>
      <form>
        <label>
          Number 1:
          <input
            type="number"
            value={number1}
            onChange={handleNumber1Change}
          />
        </label>
        <br />
        <label>
          Number 2:
          <input
            type="number"
            value={number2}
            onChange={handleNumber2Change}
          />
        </label>
        <br />
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>*</button>
        <button onClick={handleDivision}>/</button>
      </form>
      <h2>Result: {result}</h2>
    </div>
    </React.Fragment>
  );
};

export default CalciComponent;
