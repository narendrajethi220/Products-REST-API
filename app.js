const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5050;
const connectDB = require("./db/connect");
const products_routes = require("./routes/productsRoute");

app.get("/", (req, res) => {
  res.send("Server is Live! ");
});

// middleware ro to set router
app.use("/api/products", products_routes);

const start = async () => {
  try {
    await connectDB();
    app.listen(`${PORT}`, (req, res) => {
      console.log("🚀 is live");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
