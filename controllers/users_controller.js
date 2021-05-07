//! Create a user if he hasn't been added to mongo

// Dependencies
const express = require("express");
const User = require("../models/users.js");
const users = express.Router();
const { checkJwt } = require("../authz/checkJwt");

// Routes
users.get("/", (req, res) => {
  res.send("Sign-up page");
});

// Leave out JWT first
users.post("/", (req, res) => {
    User.findOne({ user_id: req.body.user_id }, (err, foundUser) => {
      if (err) {
        console.log(err);
        res.send({ msg: "Problem with database", error: true });
      } else if (foundUser) {
        res.send({ msg: "User already in database", error: true });
      } else {
        User.create(req.body, (err, createdUser) => {
          if (err) {
            res.send({ msg: "User could not be created", error: true });
          } else {
            res.send({ msg: "User created", error: false });
          }
        });
      }
    });
})

// Export
module.exports = users;