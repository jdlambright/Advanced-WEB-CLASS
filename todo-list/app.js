//jslint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {

  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day= today.toLocaleDateString("en-US", options);

  // we are rendering a file called list which has to be located in views folder
  //and have an extention .ejs and using a variable called day to put in index.html
  res.render("list", {kindOfDay: day});
  
});

// scriplet tags in ejs file <% %> should only be used when you are trying to
// modify a specific part of html for control flow purposes

app.listen(3000, function() {
  console.log("Boom Baby");
});
