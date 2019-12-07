const Controller = {};
const db = require('../models/index');
// Return Data Structuring
const returnData = require('../utilitise/returnData');

// DELETE - category and related products
Controller.deleteCategory = (req, res) => {
  // To Delete Category
  const deleteCategory = new Promise((resolve, reject) => {
    db.Categories.findOneAndDelete({_id: req.body.categoryID }, (err, res) =>{
      if (err) {
        reject(err);
      } else if (res){
        resolve(res);
      } else {
        resolve("Category Not Found");
      }
    })
  });
  // To delete All Products with that Category
  const deleteProducts = new Promise((resolve, reject) => {
    db.Products.find({category: req.body.categoryID }, (err, res) =>{
      if (err) {
        reject(err);
      } else if (res.length){
        db.Products.deleteMany({category: req.body.categoryID }, (err, result) =>{
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        })
      } else {
        resolve("No Products with Category");
      }
    });

  });
  Promise.all([
    deleteCategory.catch(err => {
      return err;
    }),
    deleteProducts.catch(err => {
      return err;
    })
  ]).then(data => {
    res.json(returnData(data));
  }).catch(err => {
    res.json(err);
  })
};

module.exports = Controller;
