const express = require("express");
 
const router = express.Router();
const fs = require("fs");

const User = require("../models/user.model");

const Gallery = require("../models/gallery.model");

const upload = require("../middleware/fileupload");

router.get("", async (req, res) => {
  const user = await User.find().lean().exec();
  return res.send(user);
});

router.post("", upload.single("userImage"), async (req, res) => {
  const user = await User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    profile_pic: req.file.path,
  });
  return res.status(201).send({ user });
});

router.get("/:id", async function (req, res) {
  const gallery = await Gallery.find({ user_id: req.params.id }).lean().exec();
  const user = await User.findById(req.params.id);

  return res.status(201).send({ User: user, Gallery: gallery });
});

router.patch("/:id", async function (req, res) {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .lean()
    .exec();
  return res.status(201).json({ User: user });
});

router.delete("/:id", async function (req, res) {
  const user = await User.findByIdAndDelete(req.params.id).lean().exec();

  const file = user["profile_pic"];

  const gallery = await Gallery.findOneAndDelete({ user_id: req.params.id })
    .lean()
    .exec();

  fs.unlink("" + file, (error) => {

    if (error) {
      return res.status(201).json("delete denied:" + error);
    } else {
      return res
        .status(201)
        .json(`Deleted user and gallery: ${file}`);
    }
  });
});

module.exports = router;
