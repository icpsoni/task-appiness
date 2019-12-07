// Products Schema

const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const products = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Categories",
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Products = mongoose.model('Products', products);

module.exports = Products;

