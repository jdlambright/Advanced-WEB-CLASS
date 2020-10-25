//jshint esversion:6

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost: 27017/fruitsDB", {useNewUrlParser: true});

// create new scheme

const fruitSchema = new mongoose.Schema({
  //to add validation
  name: {
    type: String,
    required: [true, "you forgot to include name"]
  },

  rating:{
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit ({
  name: "apple",
  rating: 7,
  review: "really good"
});

//fruit.save();

 //creating people schema
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Person = mongoose("Person", personSchema);

const person = new Person ({
  name: "John",
  age: 37
});

people.save();

// const orange = new Fruit({
//   name : "orange",
//   rating: 10,
//   review: "favorite"
// });
//
// const banana = new Fruit({
//   name : "banana",
//   rating: 6,
//   review: "great in the morning"
// });
 //how to insert multiple
//fruit.insertMany([orange, banana], function(err){
//  if (err){
//    console.log(err);
//  }else{
//    console.log(success);
//  }
//});

// to find what we have input
Fruit.find(function(err, fruits){
  if (err) {
    console.log(err);
  }else{
    // to stop server close connection once done
    mongoose.connection.close();
    //to console log each name
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});
//to update database
//hyper wasnt working to provide id
Fruit.updateOne({_id: "_from hyper_"}, {name: "Peach"}, function(err){
  if (err){
    console.log(err);
  } else{
    console.log("successfully updated document")
  }
});

// to delete
// Fruit.deleteOne({name: "peach"}, function(err){
//   if (err){
//     console.log(err);
//   } else{
//     console.log("successfully updated document")
//   }
// });

// to delete multiple
Person.deleteMany({ name: "John" }, function (err) {
  if (err){
    console.log(err);
  } else{
    console.log("successfully updated document")
  }
});
