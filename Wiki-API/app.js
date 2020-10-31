const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

//this connects our server to the database
mongoose.connect("mongodb://localhost:27017/wikidb", {useUnifiedTopology: true,  useNewUrlParser: true});

const articleSchema = {
  title: String,
  content: String
};

const Article = mongoose.model("Article", articleSchema);

//this gets the resources at /articles
app.get("/articles", function(req,res){
  Article.find(function(err, foundArticles){
    if (!err){
    res.send(foundArticles);
  } else{
    res.send(err);
  }

  });
});

//this builds the api
app.post("/articles", function(req,res){
  console.log();
  console.log();

  const newArticle = new Article({
    title: req.body.title,
    content: req.body.content
  });
  newArticle.save(function(err){
    if (!err){
      res.send("successfully saved new content");
    }else{
      res.send(err);
    }
  });
});

app.delete("/articles", function(req, res){
  Article.deleteMany(function(err){
    if (!err){
      res.send("successfully deleted all articles");
    } else {
      res.send(err);
    }
  });
});



app.listen(3000, function() {
  console.log("Server started on port 3000");
});
