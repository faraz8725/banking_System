const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  fromAccount: {
    type: String,
    required: true
  },

  toAccount: {
    type: String,
    required: true
  },

  amount: {
    type: Number,
    required: true
  },

  status: {
    type: String,
    default: "success"
  }

}, { timestamps: true });

const Transaction = mongoose.model("Transaction", TransactionSchema);

module.exports = Transaction;