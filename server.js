// DEPENDENCIES
require("dotenv-safe").config();
const express = require("express");
const session = require("express-session");
const { auth, requiresAuth } = require("express-openid-connect");
const path = require("path");
const mongoose = require("mongoose");
const app = express();

// MONGOOSE CONNECTION
const MONGO_URI = process.env.MONGO_URI;
mongoose.connection.on("error", (err) =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));
mongoose.connect(MONGO_URI || "mongodb://localhost:27017/shipdrive", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});

// MIDDLEWARE
// app.use(
//   auth({
//     authRequired: false, // if this is true, it means every single route requires authentication, which you don't want
//     auth0Logout: true, // if omitted, "Logged Out" will not be rendered when you go to http://localhost:4000/logout
//     issuerBaseURL: process.env.ISSUER_BASE_URL,
//     baseURL: process.env.BASE_URL,
//     clientID: process.env.CLIENT_ID,
//     secret: process.env.SECRET,
//     idpLogout: true,
//   })
// );


// TEST PORT LISTENING
app.get("/", (req, res) => {
    res.send("Home Page");
    // res.send(req.oidc.isAuthenticated() ? "Logged In" : "Logged Out");
})
// Create a profile route that requires the user to be logged in and we will show info about that user
// requiresAuth() is the middleware that you want to pass
// app.get("/profile", requiresAuth(), (req, res) => {
//   // .user lets you add things to your request object from the requiresAuth() middleware
//   res.send(JSON.stringify(req.oidc.user));
// })



// PORT LISTENING
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("🎉🎊", "celebrations happening on port", PORT, "🎉🎊");
});