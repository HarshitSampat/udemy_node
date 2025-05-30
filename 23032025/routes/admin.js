const express = require("express");
const path = require("path");
const rootDir = require("../util/path");

const router = express.Router();

const products = [];

// admin/add-product
router.get("/add-product", (req, res, next) => {
  res.status(200).sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  // console.log(req.body);
  res.status(200).redirect("/");
});

exports.routes = router; // Exporting the router object
exports.products = products;
