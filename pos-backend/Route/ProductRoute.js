const express = require('express');
const router = express.Router();
const productController = require('../Controllers/productController');

router.post('/addProduct', productController.addProducts);
router.get('/getProduct', productController.getAllProduct);

module.exports = router;


