const express = require("express");

const mongoose = require("mongoose");
 
const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/web11")
}

// posts, comments, tags, user

//step 1. create the schema for user
const userSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: false },
    email: { type: String, required: true },
    gender: { type: String, required: true },
})

//step 2. connect the schema to the users collection
const User = mongoose.model("user", userSchema); //user is a collection, userSchema is blueprint

//step 1. create the schema for posts
const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    tag: { type: mongoose.Schema.Types.ObjectId, ref:"tag",required:true }
},
{ 
    versionKey: false,
    timestamps: true     
})

//step 2. connect the schema to the posts collection
const Post = mongoose.model("post", postSchema);

//step 1. create the schema for comments
const commentSchema = new mongoose.Schema({
    body: { type: String, required: true },
    post: {type: mongoose.Schema.Types.ObjectId, ref:"post", required: true}
}, {
    versionKey: false,
    timestamps: true  
})

//step 2. connect the schema to the comments collection
const Comment = mongoose.model("comment",commentSchema);

//step 1. create the schema for tags
const tagSchema = new mongoose.Schema({
    name:{ type: String, required: true}
}, {
    versionKey: false,
    timestamps: true
})

//step 2. connect the schema to the tags collection
const Tag = mongoose.model("tag", tagSchema);


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

// CRUD APIs for post
// post: create a post
app.post("/posts", async (req, res) => {
    const post = await Post.create(req.body);
    return res.status(201).send({post});
})
// getting all posts
app.get("/posts", async (req, res) => {
    const post = await Post.find().lean().exec();
    return res.status(200).send({post});
})
// getting a single post
app.get("/posts/:id", async (req, res) => {
    const post = await Post.findById(req.params.id).lean().exec();
    return res.status(200).send({post});
})
// update a single post
app.patch('/posts/:id', async (req, res) => {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
    return res.status(200).send({ post });
})
// delete a single post
app.delete('/posts/:id', async (req, res) => {
    const post = await Post.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send({ post });
})

// CRUD APIs for comments
// post: create a comment
app.post("/comments", async (req, res) => {
    const comment = await Comment.create(req.body);
    return res.status(201).send({comment});
})
// getting all comments
app.get("/comments", async (req, res) => {
    const comment = await Comment.find().lean().exec();
    return res.status(200).send({comment});
})
// getting a single comment
app.get("/comments/:id", async (req, res) => {
    const comment = await Comment.findById(req.params.id).lean().exec();
    return res.status(200).send({comment});
})
// update a single comment
app.patch('/comments/:id', async (req, res) => {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
    return res.status(200).send({ comment });
})
// delete a single comment
app.delete('/comments/:id', async (req, res) => {
    const comment = await Comment.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send({ comment });
})

// CRUD APIs for tags
// post: create a tag
app.post("/tags", async (req, res) => {
    const tag = await Tag.create(req.body);
    return res.status(201).send({tag});
})
// getting all tags
app.get("/tags", async (req, res) => {
    const tag = await Tag.find().lean().exec();
    return res.status(200).send({tag});
})
// getting a single tag
app.get("/tags/:id", async (req, res) => {
    const tag = await Tag.findById(req.params.id).lean().exec();
    return res.status(200).send({tag});
})
// update a single tag
app.patch('/tags/:id', async (req, res) => {
    const tag = await Tag.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
    return res.status(200).send({ tag });
})
// delete a single tag
app.delete('/tags/:id', async (req, res) => {
    const tag = await Tag.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send({ tag });
})

app.listen(2346, async function () {
    await connect();
    console.log("listening on port 2346");
})