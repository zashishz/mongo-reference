const mongoose = require("mongoose");
const { Schema } = mongoose;

const CommentSchema = new Schema({
  body: String,
  user: { type: Schema.Types.ObjectId, ref: "user" }
});

module.exports = mongoose.model("comment", CommentSchema);
