const crypto = require("crypto");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tokenSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    unique: true,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  expiresAt: {
    type: Date,
    expires: 3600,
    default: Date.now,
  },
});

// verify token
tokenSchema.statics.createVerifyToken = async function (userId) {
  const hashToken = crypto.randomBytes(32).toString("hex");

  const verifyToken = await this.create({
    userId,
    token: hashToken,
  });
  return verifyToken;
};

module.exports = mongoose.model("token", tokenSchema);
