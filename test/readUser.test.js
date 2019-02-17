const assert = require("assert");
const User = require("../src/User");

describe("READ operation of records", () => {
  let user, user2, user3, user4;

  beforeEach(async () => {
    user3 = new User({ name: "Himanshu" });
    user4 = new User({ name: "Gopi" });
    user = new User({ name: "Ashish" });
    user2 = new User({ name: "Anand" });
    await Promise.all([user.save(), user2.save(), user3.save(), user4.save()]);
  });

  it("finds all users with name ashish", async () => {
    const users = await User.find({ name: "Ashish" });
    assert(user._id.toString() === users[0]._id.toString());
  });

  it("finds all users with id", async () => {
    const foundUser = await User.findById(user._id);
    assert(foundUser.name === "Ashish");
  });

  it("skips and limits the result", async () => {
    const users = await User.find({})
      .sort({ name: 1 })
      .skip(1)
      .limit(2);
    assert(users[0].name === "Ashish");
    assert(users[1].name === "Gopi");
    assert(users.length === 2);
  });
});
