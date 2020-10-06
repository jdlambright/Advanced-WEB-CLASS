//jslint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = []; // establishing this var up here allows everything to run throw and appear on line 28

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

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
  res.render("list", {kindOfDay: day, newListItems:items});

});

app.post("/", function(req,res){
  item = req.body.newItem;
  console.log(item);

  items.push(item);

  // this sends it back to the home route at line 12 then captures input at line 26
  res.redirect("/");
});
// scriplet tags in ejs file <% %> should only be used when you are trying to
// modify a specific part of html for control flow purposes

app.listen(3000, function() {
  console.log("Boom Baby");
});
