const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
    email: String,
    username: String,
    password: String

}, { timestamps: true ,versionKey: false});

const User = mongoose.model("User", UserSchema);
module.exports = User;