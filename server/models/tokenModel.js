const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const tokenModel = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  expiresAt: {
    type: Date,
    expires: 3600,
    default: Date.now,
  },
});
