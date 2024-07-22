const connectDB = require("/db/connect");
const Product = require("./models/productsModel");
const ProductJson = require("./products.json");

const start = async () => {
  try {
    await connectDB();
    await Product.deleteMany();
    await Product.create(ProductJson);
    console.log("💽 inserted successfully");
  } catch (error) {
    console.log(error);
  }
};

start();
