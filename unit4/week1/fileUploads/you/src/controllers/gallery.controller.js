const express = require("express");

const router = express.Router();

const Gallery = require("../models/gallery.model");

const upload = require("../middleware/fileupload");

router.get("", async (req, res) => {
  const gallery = await Gallery.find().lean().exec();
  return res.send(gallery);
});

router.post("", upload.array("galleryImage", 5), async (req, res) => {
  const files = req.files.map((file) => file.path);
  const gallery = await Gallery.create({
    user_id: req.body.user_id,
    pictures: files,
  });
  return res.status(201).send({ gallery });
});

module.exports = router;
