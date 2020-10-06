//jslint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){

  var today = new Date();
  var currentDay = today.getDay();
  var day = "";

  if (currentDay === 6 || currentDay === 0){
    day = "Weekend";
    // we are rendering a file called list which has to be located in views folder
    //and have an extention .ejs and using a variable called day to put in index.html
    res.render("list", {kindOfDay: day});
  } else{
    day = "Weekday";
    res.render("list", {kindOfDay: day});
  }
});



app.listen(3000,function(){
  console.log("Boom Baby");
});
