const assert = require("assert");
const User = require("../src/User");
const BlogPost = require("../src/BlogPost");

describe("Middlewares", () => {
  let user, blogPost;
  beforeEach(async () => {
    user = new User({ name: "Ashish" });
    blogPost = new BlogPost({
      title: "How to debug?",
      content: "you know what you do then debug what you know.!"
    });

    user.blogPosts.push(blogPost);

    await Promise.all([user.save(), blogPost.save()]);
  });

  it("removes blogPost if user is removed", async () => {
    const foundUser = await User.findOne({ name: "Ashish" });
    await foundUser.delete();
    const count = await BlogPost.countDocuments();
    assert(count === 0);
  });
});
