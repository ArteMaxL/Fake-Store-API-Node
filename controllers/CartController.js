const {
    getCarts,
    getCartById
} = require('../models/CartModel');

const getAllCarts = async(req, res) => {
    carts = await getCarts();
    res.status(200).send(carts);
}

const getCart = async(req, res) => {
    const { id } = req.params;
    cart = await getCartById(id);
    res.status(201).send(cart);
}

module.exports = {
    getAllCarts,
    getCart
};