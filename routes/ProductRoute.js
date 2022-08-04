const express = require('express');
const router = express.Router();
const {
    getAllProducts,
    getProduct,
    getAllCategories,
    getCategory
} = require('../controllers/ProductController');

router
    .get('/', getAllProducts)
    .get('/:id', getProduct)
    .get('/categories', getAllCategories)
    .get('/category/:name', getCategory);

module.exports = router;