import React from "react";
import ReactDOM from "react-dom";

const fName = "Andrei";
const lName = "Sirbu";
const luckyNr = 7;

ReactDOM.render(
  <div>
    <h1>
      My name is {fName} {lName}
    </h1>
    <p>My lucky number is: {luckyNr}</p>
  </div>,
  document.getElementById("root")
);
