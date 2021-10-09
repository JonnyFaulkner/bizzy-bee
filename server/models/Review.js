const { truncate } = require("fs");
const { Schema } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const reviewSchema = new Schema(
  {
    reviewBody: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 250,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: truncate,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  },
  {
    toJson: {
      getters: true,
    },
  }
);

module.exports = reviewSchema;
