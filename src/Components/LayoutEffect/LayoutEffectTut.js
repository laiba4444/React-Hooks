import React, { useLayoutEffect, useEffect, useRef } from "react";

const LayoutEffectTut = () => {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "Hi";
  }, []);

  return (
    <div className="App">
      <h1>Layout Effect Toturial</h1>
      <p>
        use layout effect sab hooks sy pehly kam krti hai aghr page py koch bhi
        jaldi show karwana ho
      </p>
      <input ref={inputRef} value="Allah" style={{ width: 400, height: 60 }} />
    </div>
  );
};

export default LayoutEffectTut;
