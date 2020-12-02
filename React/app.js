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


//Challenge Solution
import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map(function(emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});

console.log(newEmojipedia);


// arrow functions----------------------

var numbers = [3, 56, 2, 48, 5];

// => can replace the keyword function
// make sure there is no space between = and > also = not -
const newNumbers = numbers.map(function (x){
  return x*x;
});

// is the same as
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


//hooks----------------------------------------

 // CHALLENGE: uncomment the code below and see the car stats rendered
 import React from "react";
 import ReactDOM from "react-dom";
 import cars from "./practice";
 //import animals, {useAnimals} from "./data"

 /// this is how we got the desire information to display
 const [honda, tesla] = cars;

 const {speedStats: {topSpeed: hondaTopSpeed}} = honda;

 const {speedStats: {topSpeed: teslaTopSpeed}} = tesla;

 const {coloursByPopularity: [hondaTopColour]} = honda;

 const {coloursByPopularity: [teslaTopColour]} = tesla;

 ReactDOM.render(
   <table>
     <tr>
       <th>Brand</th>
       <th>Top Speed</th>
     </tr>
     <tr>
       <td>{tesla.model}</td>
       <td>{teslaTopSpeed}</td>
       <td>{teslaTopColour}</td>
     </tr>
     <tr>
       <td>{honda.model}</td>
       <td>{hondaTopSpeed}</td>
       <td>{hondaTopColour}</td>
     </tr>
   </table>,
   document.getElementById("root")
 );


// animation for buttons
import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("hello");
  const [isMouseOver, setMouseOver] = useState("false");

  // how to change text
  function handleClick() {
    setHeadingText("submitted");
  }

  //how to change background color
  function mouseOver() {
    setMouseOver(true);
  }

  function mouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;

// receiving input and displaying interval

import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");
// this makes what the user types appear in the bar
  function handleChanged(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }
// this makes what we typed appear in h1 when we click submit
  function handleClick() {
    setHeadingText(name);
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <input
        onChange={handleChanged}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;


//complex state changes practice 2-----------------------------
/// this can be done easier with spread operator but this is whats going on
// under the hood


import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });


/// handleChange seems to be come language used but can be named anything
  function handleChange(event) {
    const { name, value } = event.target;
// we get the name and value from input below around line 413
// we get setContact from line 371
    setContact((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={handleChange}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;


/// spread operator  reworking 380-405

// the three dots is the spread operator it helps concatinate arrays
// "spreads values" into wherever inserted
// you have to use [] to tell it to use name on 448 as a key and not a string


function handleChange(event) {
    const { name, value } = event.target;

    setContact(prevValue => {
      return{
        ... prevValue,
        [name]: value
      };
    });
  }
