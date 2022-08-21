const storeModel = require('../models/fakeStoreDb');

//USERS
const getUsers = async (_req, res) => {
    let users = await storeModel.getUsers();
    res.status(200).send(users);
};

const getUsersFirst = async (_req, res) => {
    let users = await storeModel.getUsers();
    let userQuantity = 3
    const firstUsers = users.slice(0, userQuantity)
    res.status(200).send(firstUsers);
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    let user = await storeModel.getUserId(id);
    res.status(200).send(user);
};

//CATEGORIES
const getCategories = async (_req, res) => {
    let categories = await storeModel.getCategory();

    const products = await Promise.all(
        categories.map(async (category) => {
            return {
                category,
                products: await storeModel.getCategoriesId(category)
            };
        }))
    res.status(200).send(products);
};

const getCategoryExpensive = async (_req, res) => {
    let products = await storeModel.getPropCategories();

    const expensive = products.map((category) => {
        const product = category.products.reduce((a, b) => {
            return a.price > b.price ? a : b
        });
        return {
            category: category.category,
            product
        };
    })
    res.status(200).send(expensive);
};

//PRODUCTS
const getProductById = async (req, res) => {
    const { id } = req.params;
    let products = await storeModel.getProducts();
    products = products.map((product) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        category: product.category,
        rating: product.rating,
    }));
    res.status(200).send(products[id - 1]);
};

const getProductPrices = async (req, res) => {
    let products = await storeModel.getProducts();
    let sorted = req.query.order;
    productsPrice = products
        .map((product) => {
            return { id: product.id, title: product.title, price: product.price }
        })
        .sort((a, b) => a.price - b.price)
    if (sorted === 'desc') products = productsPrice.reverse()
    res.status(200).send(productsPrice);
};

const getProductMethods = async (req, res) => {
    let products = await storeModel.getMappedProducts();
    let sorted = req.query.order;
    let limited = req.query.limit;

    if (typeof sorted == "string") {
        if (sorted === "desc") {
            products.sort((a, b) => b.price - a.price);
            res.status(200).send(products);
        } else if (sorted === "asc") {
            products.sort((a, b) => a.price - b.price);
            res.status(200).send(products);
        }
    } else if (limited !== undefined) {
        let filtro = products.slice(limited - 1, products.length);
        res.status(200).send(filtro);
    } else {
        res.status(200).send(products);
    }
};

//CARTS
const getCarts = async (_req, res) => {
    let carts = await storeModel.getCarts();
    res.status(200).send(carts);
};

const getBigCarts = async (_req, res) => {
    let carts = await storeModel.getCarts();
    const productsCarts = await Promise.all(
        carts
            .filter((cart) => cart.products.length >= 2)
            .map(async ({ userId, ...rest }) => {
                const { username } = await storeModel.getPropCart(userId)

                return { username, ...rest }
            })
    )
    res.status(200).send(productsCarts);
};

const storeController = {
    getProductById,
    getProductMethods,
    getCarts,
    getUsers,
    getUserById,
    getCategories,
    getUsersFirst,
    getProductPrices,
    getCategoryExpensive,
    getBigCarts,
};

module.exports = storeController;
