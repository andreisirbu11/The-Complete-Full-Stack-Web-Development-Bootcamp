//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>What does the code do?</h1>
    <ul>
      <li>React module contains Babel, a Javascript compiler.</li>
      <li>Render method compiles html and transforms it to Javascript code.</li>
      <li>
        Render method appends the specified HTML as a child to element with id =
        "root"
      </li>
    </ul>
  </div>,
  document.getElementById("root")
);
