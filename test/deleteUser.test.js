const assert = require("assert");
const User = require("../src/User");

describe("REMOVE operation of records", () => {
  let user;

  beforeEach(async () => {
    user = new User({ name: "Ashish" });
    await user.save();
  });

  it("performs model instance remove", async () => {
    await user.remove();
    const foundUsers = await User.findById(user._id);
    assert(foundUsers === null);
  });

  it("performs class method remove", async () => {
    await User.deleteOne({ name: "Ashish" });
    const foundUsers = await User.findOne({ name: "Ashish" });
    assert(foundUsers === null);
  });

  it("performs class method findByIdAndDelete", async () => {
    await User.findByIdAndDelete(user._id);
    const foundUsers = await User.findOne({ name: "Ashish" });
    assert(foundUsers === null);
  });

  it("performs class method findOneAndDelete", async () => {
    await User.findOneAndDelete({ name: "Ashish" });
    const foundUsers = await User.findOne({ name: "Ashish" });
    assert(foundUsers === null);
  });
});
