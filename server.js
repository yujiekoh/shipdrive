// DEPENDENCIES
require("dotenv-safe").config();
const express = require("express");
const session = require("express-session");
const path = require("path");
const mongoose = require("mongoose");
const app = express();

// MONGOOSE CONNECTION

// MIDDLEWARE


// TEST PORT LISTENING
app.get("/", (req, res) => {
    res.send("Home Page");
})

// PORT LISTENING
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("🎉🎊", "celebrations happening on port", PORT, "🎉🎊");
});