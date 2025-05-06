import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));

function square(x) {
  return x * x;
}

var numbers = [3, 56, 2, 48, 5];

const squareNumbers = numbers.map((x) => x * x);
console.log(squareNumbers);

// Map -Create a new array by doing something with each item in an array.
const doubleNumbers = numbers.map((x) => x * 2);
console.log(doubleNumbers);

// Filter - Create a new array by keeping the items that return true.
const filteredNumbers = numbers.filter((x) => x < 10);
console.log(filteredNumbers);

// Reduce - Accumulate a value by doing something to each item in an array.
var sum = numbers.reduce((acc, curr) => acc + curr);
console.log(sum);

//Find - find the first item that matches from an array.
const number = numbers.find((x) => x > 10);
console.log(number);

//FindIndex - find the index of the first item that matches.
const index = numbers.findIndex((x) => x > 10);
console.log(index);
