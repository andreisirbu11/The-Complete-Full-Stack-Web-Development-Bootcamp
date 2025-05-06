// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice.js";

const [honda, tesla] = cars;
const {
  coloursByPopularity: [hondaTopColor, hondaColor2],
  speedStats: { topSpeed: hondaTopSpeed, zeroToSixty: hondaZeroToSixty },
} = honda;

const {
  coloursByPopularity: [teslaTopColor, teslaColor2],
  speedStats: { topSpeed: teslaTopSpeed, zeroToSixty: teslaZeroToSixty },
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColor}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColor}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
