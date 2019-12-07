// Routes

const express = require("express");
const router = express.Router();
const Controllers = require('../controllers/index');

// DELETE Category and Products
router.delete('/category', Controllers.deleteCategory);

module.exports = router;
