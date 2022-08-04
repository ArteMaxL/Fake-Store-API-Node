const {
    getProducts,
    getProductById,
    getCategories,
    getCategoryByName
} = require('../models/ProductModel');

const getAllProducts = async(req, res) => {
    products = await getProducts();
    res.status(200).send(products);
}

const getProduct = async(req, res) => {
    const { id } = req.params;
    product = await getProductById(id);
    res.status(201).send(product);
}

const getAllCategories = async(req, res) => {
    categories = await getCategories();
    res.status(200).send(categories);
}

const getCategory = async(req, res) => {
    const { name } = req.params;
    category = await getCategoryByName(name);
    res.status(201).send(category);
}

module.exports = {
    getAllProducts,
    getProduct,
    getAllCategories,
    getCategory
};