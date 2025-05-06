import React from "react";
import ReactDOM from "react-dom";
import pi from "./math.js";
import { doublePi, triplePi } from "./math.js";

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
