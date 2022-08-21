const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const errorHandler = require('../middlewares/ErrorHandler');

//http://localhost:3000/products/categories/expensive
router.get('/products/categories/expensive', storeController.getCategoryExpensive);

//http://localhost:3000/products/
router.get('/products/', storeController.getProductMethods);

//http://localhost:3000/products/categories
router.get('/products/categories', storeController.getCategories);

//http://localhost:3000/products/prices
router.get('/products/prices', storeController.getProductPrices);

//http://localhost:3000/products/:id
router.get('/products/:id', storeController.getProductById);

//http://localhost:3000/carts/bigcarts
router.get('/carts/bigcarts', storeController.getBigCarts);

//http://localhost:3000/carts
router.get('/carts', storeController.getCarts);

//http://localhost:3000/users
router.get('/users', storeController.getUsers);

//http://localhost:3000/users/firsts
router.get('/users/firsts', storeController.getUsersFirst);

//http://localhost:3000/
router.get('/', (_req, res) => {
    res.send('FAKE STORE API HOMEPAGE');
});

//ErrorHandler
router.use(errorHandler.notFound);

module.exports = router;
