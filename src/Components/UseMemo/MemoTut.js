import axios from "axios";
import { useEffect, useState, useMemo } from "react";

export default function MemoTutorial() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("THIS was me");

    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [toggle]);

  return (
    <div className="App">
      <h1>Memo Toturial </h1>
      <div> {getLongestName} </div>

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <h1> Toggle </h1>}
    </div>
  );
}
