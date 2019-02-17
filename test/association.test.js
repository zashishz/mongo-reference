const assert = require("assert");
const User = require("../src/User");
const Comment = require("../src/Comment");
const BlogPost = require("../src/BlogPost");

describe("associations", () => {
  let user, comment, blogPost;
  beforeEach(async () => {
    user = new User({ name: "Ashish" });
    blogPost = new BlogPost({
      title: "How to debug?",
      content: "you know what you do then debug what you know.!"
    });
    comment = new Comment({ body: "Well Played! :)" });

    user.blogPosts.push(blogPost);
    blogPost.comments.push(comment);
    comment.user = user;

    await Promise.all([user.save(), blogPost.save(), comment.save()]);
  });

  it("saves a relation between user and blogPost", async () => {
    const foundUser = await User.findOne({ name: "Ashish" }).populate(
      "blogPosts"
    );
    assert((foundUser.blogPosts[0].title = "How to debug?"));
  });

  it("extracts full nested graph", async () => {
    const foundUser = await User.findOne({ name: "Ashish" }).populate({
      path: "blogPosts",
      populate: {
        path: "comments",
        model: "comment",
        populate: {
          path: "user",
          model: "user"
        }
      }
    });
    assert((foundUser.name = "Ashish"));
    assert((foundUser.blogPosts[0].title = "How to debug?"));
    assert((foundUser.blogPosts[0].comments[0].body = "Well Played! :)"));
    assert((foundUser.blogPosts[0].comments[0].user.name = "Ashish"));
  });
});
