const mongoose = require("mongoose");
require("mongoose-type-email");
const Schema = mongoose.Schema;

mongoose.SchemaTypes.Email.defaults.message = "Email address is invalid";

const userSchema = new Schema({
    email: { type: mongoose.SchemaTypes.Email, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

module.exports = User;