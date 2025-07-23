const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("user", UserSchema);
