const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const userController = require("./controllers/user.controller");
const galleryController = require("./controllers/gallery.controller");
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/users", userController);
app.use("/gallery", galleryController);

module.exports = app;