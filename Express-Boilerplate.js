// 1) these are the packages we downloaded lines 1-14 are pretty much always used
// in hyper type install body-parser express request after npm init
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

// 3) this moves the css files and pictures from static location to server
// if this is not done they style sheets etc do not link properly
// we created a folder called public an placed everything in it
app.use(express.static("public"));
// this allows us to process code behind the scenes sends input to api
app.use(bodyParser.urlencoded({extended: true}));

//2) this is what tells our home page what to display when people go to the site
app.get("/", function(req, res){
  res.send("hello there");

});
// 1)this is what tells the server "what frequency we are transmitting on"
app.listen(3000, function(){
  console.log("works on 3000")
});
