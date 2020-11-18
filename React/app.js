//inline css

import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

customStyle.color = "blue";

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);


//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const clock = date.getHours();

let greeting;

const customStyle = {
  color: ""
}


if (clock < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (clock <18){
  greeting = "Good Afternoon"
  customStyle.color = "green";
} else {
  greeting = "Good Evening";
  customStyle.color = "blue";
}


ReactDOM.render(
  <h1 className="heading" style ={customStyle}>{greeting}</h1>,
  document.getElementById("root")

);
//// making components
// make a list.jsx heading.jsx and app.jsx put them in a new folder called components
//here is what your new code will look like

// index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

//App.jsx
import React from "react";
import Heading from "./Heading";
import List from "./List";

function App() {
  return (
    <div>
      <Heading />
      <List />
    </div>
  );
}

export default App;

//Heading.jsx

import React from "react";

function Heading() {
  return <h1>My Favorite Foods</h1>;
}

export default Heading;


// List.jsx

import React from "react";

function List() {
  return (
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  );
}

export default List;

//components practice index.js

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

//App.js
import React from "react";
import Heading from "./Heading";

function App() {
  return (
    <div>
      <Heading />
    </div>
  );
}

export default App;


// Heading.js

import React from "react";

function Heading() {
  const date = new Date();
  const currentTime = date.getHours();

  let greeting;

  const customStyle = {
    color: ""
  };

  if (currentTime < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Night";
    customStyle.color = "blue";
  }

  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}

export default Heading;

// how to import/export other components besides default
// index.js

import React from "react";
import ReactDOM from "react-dom";
import {add, subtract, multiply, divide} from "./calculator.js";


ReactDOM.render(
  <ul>
    <li>{add(1, 2)}</li>
    <li>{multiply(2, 3)}</li>
    <li>{subtract(7, 2)}</li>
    <li>{divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);

//calculator.js

function add(n1, n2) {
  return n1 + n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function divide(n1, n2) {
  return n1 / n2;
}

export {add, multiply, subtract, divide};

// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// function double(x) {
//   return x * 2;
// }
// const newNumbers = numbers.map(double);

// var newNumbers = [];
// numbers.forEach(function (x) {
//   newNumbers.push(x * 2);
// });

// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });

// var newNumbers = [];
// numbers.forEach(function(num) {
//   if (num < 10) {
//     newNumbers.push(num);
//   }
// })

//Reduce - Accumulate a value by doing something to each item in an array.

// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//   console.log("accumulator = " + accumulator);
//   console.log("currentNumber = " + currentNumber);
//     return accumulator + currentNumber;
// })

// var newNumber = 0;
// numbers.forEach(function (currentNumber) {
//   newNumber += currentNumber
// })

//Find - find the first item that matches from an array.

// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })

// console.log(newNumber);

//FindIndex - find the index of the first item that matches.

// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })

// console.log(newNumber);

//Challenge Solution
import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map(function(emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});

console.log(newEmojipedia);


// arrow functions----------------------

var numbers = [3, 56, 2, 48, 5];

const newNumbers = numbers.map(function (x){
  return x*x;
});

// is the same as
// => can replace the keyword function
// make sure there is no space between = and > also = not -
const newNumbers = numbers.map( (x) => {
  return x*x;
});

// is the same as
const newNumbers = numbers.map( (x) => {
  return x*x;
});

//if there are two parameters you have to keep the parenthesis

const newNumbers = numbers.map( (x, y) => {
  return x*y;
});

// however if there is not you dont have and this is a simpler way to write it
const newNumbers = numbers.map( x =>  x*x);

//ternary statement (same as if else just different syntax for react)
// condition   if true do      if false do
 isLoggedIn ? <h1>Hello</h1> : <Login />

 // another way if false is null
 isLoggedIn && <h1>Hello</h1>

 //more simple
 !isLoggedIn &&
