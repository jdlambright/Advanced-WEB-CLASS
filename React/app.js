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
