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
  posts: [PostSchema],
  blogPosts: [{ type: Schema.Types.ObjectId, ref: "blogPost" }]
});

UserSchema.virtual("postCount").get(function() {
  return this.posts.length;
});

/**
 * Middleware - save, validate, init & remove
 */
UserSchema.pre("remove", async function(next) {
  const BlogPost = mongoose.model("blogPost");
  await BlogPost.deleteMany({ _id: { $in: this.blogPosts } });
  next();
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
