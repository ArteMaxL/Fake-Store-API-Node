const express = require('express');
const router = express.Router();

const {
    getAllCarts,
    getCart
} = require('../controllers/CartController');

router
    .get('/', getAllCarts)
    .get('/:id', getCart);

module.exports = router;