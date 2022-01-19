const express = require("express");

const app = express();

const users = require("./users.json");

app.get("/", function (req, res) {
  res.send("Welcome to Home Page");
});

app.get("/users", function (req, res) {
  res.send(users);
});

app.listen(2345, function () {
  console.log("Listening on port 2345");
});