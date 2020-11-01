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

///////////// this is for request targeting all articles///////////////////

//this makes routes chainable. so the route /articles has the ability
//to get info, post info and delete info. it is a good way to consolidate code

app.route("/articles")

.get(function(req,res){
  Article.find(function(err, foundArticles){
    if (!err){
    res.send(foundArticles);
  } else{
    res.send(err);
  }

  });
})
// this uses the api to add new content to the datebase
.post(function(req,res){
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
})
// this removes content from the database via the api
.delete(function(req, res){
  Article.deleteMany(function(err){
    if (!err){
      res.send("successfully deleted all articles");
    } else {
      res.send(err);
    }
  });
});

/////////////this is for request targeting specific article//////////////////

app.route("/articles/:articleTitle")

.get(function(req, res){

  Article.findOne({title: req.params.articeTitle}, function(err, foundArticle){
    if (foundArticle){
      res.send(foundArticle);
    } else {
      res.send("no articles matching that title were found");
    }
  });
})
// this changes the whole article
.put(function(req, res){
  Article.update(
    //this specifies what section we are updating
    {title: req.params.articleTitle},
    //this is what is being changed
    {title: req.body.title, content: req.body.content},
    {overwrite: true},
    function(err){
      if (!err){
        res.send("successfully updated")
      }
    }
  );
})
// this changes part of the article
.patch(function(req,res){
  
  Article.update(
    {title: req.params.articeTitle},
    // this makes it dyanmic
    {$set: req.body},
    function(err){
      if (!err){
        res.send("successfully updated")
      } else{
      res.send(err);
      }
    }
  );
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
