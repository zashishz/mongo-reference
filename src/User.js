const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostSchema = require("./Post");

const UserSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: name => name.length > 2,
      message: "name must be greater than 2 characters"
    },
    required: [true, "Name is required"]
  },
  likes: Number,
  posts: [PostSchema]
});

UserSchema.virtual("postCount").get(function() {
  return this.posts.length;
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
