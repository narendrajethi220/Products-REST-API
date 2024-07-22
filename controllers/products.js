const { query } = require("express");
const ProductsData = require("../models/productsModel");
const getAllProducts = async (req, res) => {
  const { company, name, featured, sort, select } = req.query;
  const queryObject = {};
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  if (featured) {
    queryObject.featured = featured;
  }
  var apiData = ProductsData.find(queryObject);
  if (sort) {
    let sortFix = sort.replace(",", " ");
    apiData = apiData.sort(sortFix);
  }
  if (select) {
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }
  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 10;
  let skip = (page - 1) * limit;

  apiData = apiData.skip(skip).limit(limit);

  const productsdata = await apiData;
  res.status(200).json({ productsdata, nbHits: productsdata.length });
};

const getAllProductsTesting = async (req, res) => {
  const productsdata = await ProductsData.find(req.query);
  res.status(200).json({
    productsdata,
  });
};

module.exports = { getAllProducts, getAllProductsTesting };
