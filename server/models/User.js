const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address"],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// pre-save middleware to create password or modify it
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// virtuals go here
// example
// userSchema.virtual("friendCount").get(function () {
//   return this.friends.length;
// });

const User = model("User", userSchema);

module.exports = User;
