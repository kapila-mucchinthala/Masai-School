const express = require("express");
 
const { body, validationResult } = require("express-validator");

const router = express.Router();

const User = require("../models/user.model");

router.get("", async function (req, res) {
  const user = await User.find().lean().exec();
  return res.send(user);
});

router.post(
  "",
  body("first_name").notEmpty().withMessage("First name is required"),
  body("last_name").notEmpty().withMessage("Last name is required"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please Provide a valid email address"),
  body("pincode")
    .notEmpty()
    .withMessage("Pincode is required")
    .isLength({ min: 6, max: 6 })
    .withMessage("Pincode should be 6 characters long"),
  body("age")
    .notEmpty()
    .withMessage("Age is required")
    .custom((value) => {
      if (value < 1 || value > 100)
        throw new Error("Age should between 1 and 100");
      return true;
    }),

  body("gender")
    .notEmpty()
    .withMessage("Gender is required")
    .custom((value) => {
      if (!(value == "Male" || value == "Female" || value == "Others"))
        throw new Error("Gender should be either Male or Female or Others");
      return true;
    }),

  async function (req, res) {
    const errors = validationResult(req);

    let finalErrors = null;
    if (!errors.isEmpty()) {
      finalErrors = errors.array().map((error) => {
        return {
          param: error.param,
          msg: error.msg,
        };
      });
      return res.status(400).json({ errors: finalErrors });
    }
    try {
      const user = await User.create(req.body);

      return res.status(201).json({ user });
    } catch (err) {
      res.status(400).send({ err: err.message });
    }
  }
);

module.exports = router;
