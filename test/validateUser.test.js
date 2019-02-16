const User = require("../src/User");
const assert = require("assert");

describe("Validations over User Schema", () => {
  it("requires a user name", async () => {
    const user = new User({ name: undefined });
    const validationResult = user.validateSync();
    const { message } = validationResult.errors.name;
    assert(message === "Name is required");
  });

  it("expects a user name to be greater than 2", async () => {
    const user = new User({ name: "yo" });
    const validationResult = user.validateSync();
    const { message } = validationResult.errors.name;
    assert(message === "name must be greater than 2 characters");
  });

  it("disallow invalid records from being saved", async () => {
    const user = new User({ name: "yo" });
    try {
      await user.save();
    } catch (e) {
      const { message } = user.errors.name;
      assert(message === "name must be greater than 2 characters");
    }
  });
});
