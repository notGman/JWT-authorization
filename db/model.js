const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "first name is required"],
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
    unique: [true, "User already exists"],
  },
  password: {
    type: String,
  },
  token: {
    type: String,
  },
  versionKey: false,
});

module.exports = mongoose.model("user", userSchema);
