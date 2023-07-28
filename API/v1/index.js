const express = require('express');
const router = express.Router();
const controller = require('./controller/controller');


router.post('/products/create', controller.createProduct);
router.get('/products', controller.loadProducts);
router.delete('/products/:id', controller.deleteProduct);
router.post('/products/:id/update_quantity', controller.updateQuantity);
module.exports = router;