const assert = require("assert");
const User = require("../src/User");

describe("UPDATE operation of records", () => {
  let user;

  beforeEach(async () => {
    user = new User({ name: "Ashish", likes: 0 });
    await user.save();
  });

  /**
   * Model instace updates
   */

  it("instance set and save", async () => {
    // set is incremental i.e perform all sets and save once all changes done
    user.set({ name: "Anand" });
    await user.save();
    const users = await User.find({});
    assert(users.length === 1);
    assert(users[0].name === "Anand");
  });

  it("model instance update", async () => {
    // update is once i.e perform once changes are done
    await user.updateOne({ name: "Anand" });
    const users = await User.find({});
    assert(users.length === 1);
    assert(users[0].name === "Anand");
  });

  /**
   * Class method updates
   */

  it("model class can updateOne", async () => {
    //updateMany
    await User.updateOne({ name: "Ashish" }, { name: "Anand" });
    const users = await User.find({});
    assert(users.length === 1);
    assert(users[0].name === "Anand");
  });

  it("model class can find one and update record", async () => {
    await User.findOneAndUpdate({ name: "Ashish" }, { name: "Anand" });
    const users = await User.find({});
    assert(users.length === 1);
    assert(users[0].name === "Anand");
  });

  it("model class can find record with id and update", async () => {
    // update is once i.e perform once changes are done
    await User.findByIdAndUpdate(user._id, { name: "Anand" });
    const users = await User.find({});
    assert(users.length === 1);
    assert(users[0].name === "Anand");
  });

  /**
   * Operators
   */
  it("increments post count by 1", async () => {
    await User.update({ name: "Ashish" }, { $inc: { likes: 1 } });
    const foundUser = await User.findOne({ name: "Ashish" });
    assert(foundUser.likes === 1);
  });
});
