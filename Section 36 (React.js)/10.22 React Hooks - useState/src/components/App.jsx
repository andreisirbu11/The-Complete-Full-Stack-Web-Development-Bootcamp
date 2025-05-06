import React from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  // const rgb = [9, 132, 227];
  // const [r, g, b] = rgb;
  // console.log(r, g, b);

  return (
    <div className="container">
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default App;
