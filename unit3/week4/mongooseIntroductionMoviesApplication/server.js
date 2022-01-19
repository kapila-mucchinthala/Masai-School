const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/entertainment", {
    //entertainment == database name
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
};

const movieSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  movie_name: { type: String, required: true },
  movie_genre: { type: String, required: true },
  production_year: { type: Number, required: true },
  budget: { type: Number, required: true },
});

const Movie = mongoose.model("movie", movieSchema); //movie ==movies collection

//--------CRUD APIs for movies

//post: create a movie
app.post("/movies", async (req, res) => {
  const movie = await Movie.create(req.body); //db.movies.insert
  return res.status(201).send({ movie });
});

//get: get all movies
app.get("/movies", async (req, res) => {
  const movie = await Movie.find().lean().exec(); //.exec()==converts half promise to full..not mandatory but good practice
  // console.log(movie);
  res.status(200).send(movie);
});

//patch: update a movie
//db.collection.update(query,update,options)
app.patch("/movies/:id", async (req, res) => {
  const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }); //db.movies.update({_id:""},{$set:{}})
  return res.status(200).send({ movie });
});

//delete: delete a single movie
app.delete("/movies/:id", async (req, res) => {
  const movie = await Movie.findByIdAndDelete(req.params.id).lean().exec(); //db.movies.remove({_id:""}
  return res.status(200).send({ movie });
});

//get: get a single movie
app.get("/movies/:id", async (req, res) => {
  const movie = await Movie.findById(req.params.id).lean().exec(); //db.movies.findOne({_id:""})
  return res.status(200).send({ movie });
});

app.listen(3333, async () => {
  await connect();
  console.log("Listening on port 3333");
});
