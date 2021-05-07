const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
  user_id: { type: String, unique: true, required: true },
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  role: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;