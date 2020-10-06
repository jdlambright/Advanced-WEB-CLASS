//jslint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {

  var today = new Date();
  var currentDay = today.getDay();
  var day = "";

  // as a  general rule use switch statements if more than 5 items
  // if less use if else {
  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
    console.log("error: current day is equal to: " + currentDay);
  }

  // we are rendering a file called list which has to be located in views folder
  //and have an extention .ejs and using a variable called day to put in index.html
  res.render("list", {
    kindOfDay: day
  });
});

// scriplet tags in ejs file <% %> should only be used when you are trying to
// modify a specific part of html for control flow purposes

app.listen(3000, function() {
  console.log("Boom Baby");
});
