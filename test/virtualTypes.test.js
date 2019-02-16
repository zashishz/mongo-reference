const assert = require("assert");
const User = require("../src/User");

describe("virtual Types", () => {
  it("updates postCount on post entry", async () => {
    const user = new User({
      name: "Ashish",
      posts: [{ title: "Bla Bla Blaah.!" }]
    });
    await user.save();
    const foundUser = await User.findOne({ name: "Ashish" });
    assert(foundUser.postCount === 1);
  });
});
