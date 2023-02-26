import React, { useState, useEffect } from "react";
import axios from "axios"; //npm i axios

const UseEffectTut = () => {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("API was called bro");
      });
  }, []);

  return (
    <div>
      <h1>UseEffect Toturial</h1>
      Email: {data}
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default UseEffectTut;
