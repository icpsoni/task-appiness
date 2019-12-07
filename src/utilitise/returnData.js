// Structuring Response Data

const returnDeleted = data => {
  return {
    categoryDetails: data[0],
    productData: data[1]
  }
};

module.exports = returnDeleted;
