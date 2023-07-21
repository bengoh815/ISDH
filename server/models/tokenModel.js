const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tokenModel = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    unique: true,
    required: true,
  },
  expiresAt: {
    type: Date,
    expires: 3600,
    default: Date.now,
  },
});

module.exports = mongoose.model("token", tokenModel);
