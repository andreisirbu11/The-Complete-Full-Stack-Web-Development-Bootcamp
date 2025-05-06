//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const hour = new Date().getHours();
const message =
  hour >= 0 && hour < 12
    ? "Good morning"
    : hour >= 12 && hour < 18
    ? "Good afternoon"
    : "Good evening";
const customStyling =
  hour >= 0 && hour < 12
    ? { color: "red" }
    : hour >= 12 && hour < 18
    ? { color: "green" }
    : { color: "blue" };

ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyling}>
      {message}
    </h1>
  </div>,
  document.getElementById("root")
);
