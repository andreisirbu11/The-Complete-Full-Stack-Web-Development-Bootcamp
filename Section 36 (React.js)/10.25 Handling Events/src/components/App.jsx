import React from "react";
import { useState } from "react";

function App() {
  const [heading, setHeading] = useState("Hello");
  const [style, setStyle] = useState({ backgroundColor: "white" });

  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={style}
        onMouseOver={() => {
          setStyle({ backgroundColor: "black" });
        }}
        onMouseOut={() => {
          setStyle({ backgroundColor: "white" });
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
