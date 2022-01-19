const express = require("express");
const mongoose = require("mongoose");
const app = express();

const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/products", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
};

const userSchema = new mongoose.Schema({
  product: String,
  price: Number,
  colors: String,
  gender: String,
});

const User = mongoose.model("user", userSchema);

//1. get api for all products

app.get("/all", async (request, response) => {
  const user = await User.find({}).lean().exec();
  console.log(user);
  //   return response.send("Testing Get Request");
  response.status(200).json({ data: user });
});

// -----------------------------------------------------------------------

//2. find all products which are higher price than Rs.500

app.get("/price", async (request, response) => {
  const user = await User.find({ price: { $gt: 500 } })
    .lean()
    .exec();
  console.log(user);
  //   return response.send("Testing Get Request");
  response.status(200).json({ data: user });
});

// ----------------------------------------------------------------------------

//3. find all the products which have atleast 1 colour that matches.

app.get("/color", async (request, response) => {
  const user = await User.find({ colors: "Red" }).lean().exec();

  console.log(user);
  //   return response.send("Testing Get Request");
  response.status(200).json({ data: user });
});

// ----------------------------------------------------------------------------

//4. find the products which can be used by men and women.

app.get("/gender", async (request, response) => {
  const user = await User.find({
    $and: [{ gender: "Male" }, { gender: "Female" }],
  })
    .lean()
    .exec();

  console.log(user);
  //   return response.send("Testing Get Request");
  response.status(200).json({ data: user });
});

// --------------------------------------------------------------------------------


//5. find the total number of products on the site

app.get("/count", async (request, response) => {
  const user = await User.count()
    .lean()
    .exec();

  console.log(user);
  //   return response.send("Testing Get Request");
  response.status(200).json({ data: user });
});


// ---------------------------------------------------------------------------------
const start = async () => {
  await connect();
  app.listen(3333, () => {
    console.log("Listening on port 3333");
  });
};
start();
