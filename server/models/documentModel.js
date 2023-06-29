const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const documentModel = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
    },
    description: {
      type: String,
    },
    remindDate: {
      type: Schema.Types.Date,
    },
    expirationDate: {
      type: Schema.Types.Date,
    },
  },
  {
    timestamps: true,
  }
);
