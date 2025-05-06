import emojipedia from "./emojipedia.js";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

var numbers2 = numbers.map((number) => {
  return number * 2;
});
console.log(numbers2);

//Filter - Create a new array by keeping the items that return true.

var filteredNumbers = numbers.filter((number) => {
  if (number % 2 === 0) return number;
});
console.log(filteredNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.

var sum = numbers.reduce((acc, curr) => {
  return acc + curr;
});

console.log(sum);

//Find - find the first item that matches from an array.

var number = numbers.find((number) => {
  if (number % 2 === 0) return number;
});

console.log(number);

//FindIndex - find the index of the first item that matches.

var index = numbers.findIndex((number) => {
  if (number % 3 === 0) return number;
});

console.log(index);

console.log(emojipedia);

var emojipedia2 = emojipedia.map((entry) => {
  return entry.meaning.slice(0, 100);
});

console.log(emojipedia2);
