//jshint esversion:6

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost: 27017/fruitsDB", {useNewUrlParser: true});

// create new scheme

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
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
