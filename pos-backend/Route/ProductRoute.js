const express = require('express');
const router = express.Router();
const productController = require('../Controllers/productController');

router.post('/addProduct', productController.upload, productController.addProducts);
router.get('/getProduct', productController.getAllProduct);

module.exports = router;


