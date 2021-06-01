const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const { signupValidation, loginValidation } = require("../middlewares/validation");
const bcrypt = require("bcryptjs");


const User = require("../models/user.model")

router.get("/", (req, res) => {
  res.send("lets login");
});


router.post("/signup", async (req, res) => {
  console.log(req.body)

  // Joi validation
  const { error } = signupValidation(req.body);
  if (error) return res.send(error.details[0].message)

  //check if email exists
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.send("Email already exist, Log In");

  //hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.send({ User: savedUser._id });
  } catch (err) {
    console.log(err)
    res.status(400).send(err);
  }
})


router.post("/login", async (req, res) => {
  // Joi validation
  const { error } = loginValidation(req.body);
  if (error) return res.send(error.details[0].message);

  //check if email exists
  const user = await User.findOne({ email: req.body.email });
  console.log(user)
  if (!user) return res.send("Email is not found, Sign Up instead");

  const correctPass = await bcrypt.compare(req.body.password, user.password)

  console.log(correctPass, "correctPass")

  if (!correctPass) return res.send("Incorrect password")


  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).json({ token: token, user: user });
})


module.exports = router