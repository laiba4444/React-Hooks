import React, { useRef } from "react";

const RefTut = () => {
  const inputRef = useRef(null);
  const onClick = () => {
    // console.log(inputRef.current.value);
    inputRef.current.value = "";
  };
  return (
    <div>
      <h1>Use REF Toturial</h1>
      <input type="Text" placeholder="Type here..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
};

export default RefTut;
