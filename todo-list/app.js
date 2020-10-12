//jslint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");


const app = express();

var items = []; // establishing this var up here allows everything to run throw and appear on line 28
let workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public")); // thiss is what allows it to use our css file found in the public folder

app.get("/", function(req, res) {
let day = date();
  // we are rendering a file called list which has to be located in views folder
  //and have an extention .ejs and using a variable called day to put in index.html
  res.render("list", {
    listTitle: day,
    newListItems: items
  });

});

app.post("/", function(req, res) {

  let item = req.body.newItem;
  // this lets us know which page to concatinate on
  // we added a value to the button and used the snipts tool to insert listTitle
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work")
  } else {
    items.push(item);
    // this sends it back to the home route at line 12 then captures input at line 26
    res.redirect("/");
  }


});
// scriplet tags in ejs file <% %> should only be used when you are trying to
// modify a specific part of html for control flow purposes

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems
  });
});

app.get("/about", function(req,res){
  res.render("about");
})

//process tells it to work on heroku
app.listen(process.env.PORT || 3000, function() {
  console.log("Boom Baby");
});
