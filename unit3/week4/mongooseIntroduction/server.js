const express = require("express");

const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/web11")
}


//step 1. create the schema 
const userSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: false },
    email: { type: String, required: true },
    gender: { type: String, required: true },
})

//step 2. connect the schema to the users collection
const User = mongoose.model("user", userSchema); //user is a collection, userSchema is blueprint

const app = express();
app.use(express.json());

// CRUD APIs for user
// post: create a user
app.post("/users", async (req, res) => {
    const user = await User.create(req.body) //db.users.insert

    return res.status(201).send({user});
})

// get: get all users
app.get("/users", async (req, res) => {
    const user = await User.find().lean().exec();
    return res.status(200).send({user});

})

// patch: update a user
// db.collection.update(query,update, options)
app.patch("/users/:id", async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body,{new:true}).lean().exec();
    return res.status(200).send({user});

})

// delete: delete a user
// db.users.remove({_id:""})
app.delete("/users/:id", async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send({user});

})

//get: a single user
//db.users.findOne({_id:""})
app.get("/users/:id", async (req, res) => {
    const user = await User.findById(req.params.id).lean().exec();
    return res.status(200).send({user});

})



app.listen(2345, async function () {
    await connect();
    console.log("listening on port 2345");
})