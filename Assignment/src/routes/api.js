const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController.js');

router.post("/products",productController.CreateProduct);

//Task 2: Express.js Route
router.get("/products",productController.GetProduct);


module.exports = router;