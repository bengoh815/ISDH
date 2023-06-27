const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: {
    firstName: { type: String },
    lastName: { type: String },
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: false,
  },
  verified: {
    type: Boolean,
    default: false,
  },
});
