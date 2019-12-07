// Categories Schema

const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const categories = new Schema(
  {
    name: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true
  }
);

const Categories = mongoose.model('Categories', categories);

module.exports = Categories;

