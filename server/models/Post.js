const { Schema, model } = require("mongoose");
const reviewSchema = require("./Review");
const dateFormat = require("../utils/dateFormat");

const postSchema = new Schema(
  {
    postText: {
      type: String,
      required: "You need content to Post!",
      minlength: 1,
      maxlength: 500,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    reviews: [reviewSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

postSchema.virtual("reviewCount").get(function () {
  return this.reviews.length;
});

const Post = model("Post", postSchema);

module.exports = Post;
