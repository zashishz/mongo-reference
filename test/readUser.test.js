const assert = require("assert");
const User = require("../src/User");

describe("READ operation of records", () => {
  let user;

  beforeEach(async () => {
    user = new User({ name: "Ashish" });
    await user.save();
  });

  it("finds all users with name ashish", async () => {
    const users = await User.find({ name: "Ashish" });
    assert(user._id.toString() === users[0]._id.toString());
  });

  it("finds all users with id", async () => {
    const foundUser = await User.findById(user._id);
    assert(foundUser.name === "Ashish");
  });
});
