const { getProducts, getProductById } = require('../models/ProductModel');

const getAllProducts = async(req, res) => {
    products = await getProducts();
    res.status(200).send(products);
}

/* const getAllProductsWithLimit = async(req, res) => {
    const { limit } = req.query;
    products = await getAllProductsWithLimit(limit);
    res.status(200).send(products);
} */

const getProduct = async(req, res) => {
    const { id } = req.params;
    product = await getProductById(id);
    res.status(200).send(product);
}

module.exports = {
    getAllProducts,
    //getAllProductsWithLimit,
    getProduct,
};