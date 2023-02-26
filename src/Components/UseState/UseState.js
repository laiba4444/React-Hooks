import React from "react";
import { useState } from "react";

const Input = () => {
  const [inputValue, setInputValue] = useState("Laiba");
  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <h1>Use State Tutorial</h1>
      <input placeholder="enter something" onChange={onChange} />
      {inputValue}
    </div>
  );
};

export default Input;
