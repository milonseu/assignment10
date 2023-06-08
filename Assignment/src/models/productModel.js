//Task 1: Mongoose Schema and Model
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: Number },
  description: { type: String },
  createdAt: { type: Date ,default:Date.now()}
});

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;