const assert = require("assert");
const User = require("../src/User");

describe("CREATE operation of records", () => {
  // Create a new User
  it("Saves user", async () => {
    const ashish = new User({ name: "Ashish" });
    await ashish.save();
    assert(!ashish.isNew);
  });
});
