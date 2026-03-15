const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  accountNumber: {
    type: String,
    required: true,
    unique: true
  },

  accountType: {
    type: String,
    required: true
  },

  balance: {
    type: Number,
    default: 5000
  }

}, { timestamps: true });

const Account = mongoose.model("Account", AccountSchema);

module.exports = Account;