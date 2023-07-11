const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// docSchema
const docSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    docName: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    expirationDate: {
      type: Schema.Types.Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Document", docSchema);
