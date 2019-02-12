const mongoose = require("mongoose");

before(done => {
  mongoose.connect("mongodb://localhost/user_test", { useNewUrlParser: true });
  mongoose.connection
    .once("open", () => done())
    .on("error", e => console.warn("Error", e));
});

beforeEach(done => {
  mongoose.connection.collections.users.drop(() => {
    done();
  });
});
