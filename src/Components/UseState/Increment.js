import React, { useState } from "react";
import "./Increment.css";

const INC = () => {
  const [counter, setCounter] = useState(0);
  const Increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="heading">
      {counter}
      <button onClick={Increment} className="btn">
        Increment
      </button>
    </div>
  );
};

export default INC;
