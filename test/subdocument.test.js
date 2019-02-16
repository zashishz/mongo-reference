const assert = require("assert");
const User = require("../src/User");

describe("subdocumets", () => {
  beforeEach(async () => {
    const user = new User({
      name: "Ashish",
      posts: [{ title: "this is a new post title" }]
    });
    await user.save();
  });

  it("creates subdocuments", async () => {
    const foundUser = await User.findOne({ name: "Ashish" });
    assert(foundUser.posts[0].title === "this is a new post title");
  });

  /**
   * Subdocuments cannot be saved alone as they
   * are not models. Hence save the whole model in which they are used.
   */
  it("adds new entry to existing subdocument", async () => {
    const foundUser = await User.findOne({ name: "Ashish" });
    foundUser.posts.push({ title: "Aaha this is our dymanic title" });
    await foundUser.save();
    const updatedFoundUser = await User.findOne({ name: "Ashish" });
    assert(updatedFoundUser.posts.length == 2);
  });

  it("removes entry from subdocument", async () => {
    const foundUser = await User.findOne({ name: "Ashish" });
    foundUser.posts[0].remove();
    await foundUser.save();
    const updatedFoundUser = await User.findOne({ name: "Ashish" });
    assert(updatedFoundUser.posts.length == 0);
  });
});
