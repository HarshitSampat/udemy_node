const fs = require("fs");
const path = require("path");

const products = [];

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    // Logic to save the product to a database or file
    products.push(this);
  }

  static fetchAll() {
    // Logic to fetch all products from a database or file
    return products;
  }
};
