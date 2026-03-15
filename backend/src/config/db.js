

const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async () => {
  try {
    console.log("DB URL:", process.env.DB_URL);
    await mongoose.connect(process.env.DB_URL);
    console.log("Database connected...");
  } catch (error) {
    console.error("Database not connected:", error);
  }
};

module.exports = connectDB;