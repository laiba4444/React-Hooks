import React from "react";
import Button from "./Button";
import { useRef } from "react";

const ImperativeHandle = () => {
  const buttonRef = useRef(null);
  return (
    <div>
      <h1>Use Imperative Handle Toturial</h1>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button From Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
};

export default ImperativeHandle;
