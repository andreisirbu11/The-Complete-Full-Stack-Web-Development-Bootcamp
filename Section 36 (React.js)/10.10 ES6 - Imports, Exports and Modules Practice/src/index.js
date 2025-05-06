import React from "react";
import ReactDOM from "react-dom";
import calculator from "./calculator.js";

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png
console.log(calculator);

ReactDOM.render(
  <ul>
    <li>{calculator.add(1, 2)}</li>
    <li>{calculator.multiply(2, 3)}</li>
    <li>{calculator.subtract(7, 2)}</li>
    <li>{calculator.divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
