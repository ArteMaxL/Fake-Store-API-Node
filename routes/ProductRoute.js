const express = require('express');
const router = express.Router();
const { getAllProducts, getProduct } = require('../controllers/ProductController');

router
    .get('/', getAllProducts)
    .get('/:id', getProduct);

module.exports = router;