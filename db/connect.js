const mongoose = require("mongoose");
require("dotenv").config();

URI = process.env.MONGO_URI;

const connectDB = () => {
  return mongoose
    .connect(URI)
    .then(() => console.log("💾 connected Successfully"))
    .catch((err) => console.error("Database connection error", err));
};

module.exports = connectDB;
