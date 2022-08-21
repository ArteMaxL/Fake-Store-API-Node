const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) => fetch(...args))

const getProducts = () => {
    return fetch('https://fakestoreapi.com/products')
        .then(res => res.json());
}

const getCarts = () => {
    return fetch('https://fakestoreapi.com/carts')
        .then(res => res.json());
}

const getCategory = () => {
    return fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json());
}

const getCategoriesId = (category) => {
    return fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => res.json());
}

const getUsers = () => {
    return fetch('https://fakestoreapi.com/users')
        .then(res => res.json());
}

const getUserId = (id) => {
    return fetch(`https://fakestoreapi.com/users/${id}`)
        .then(res => res.json());
}

const getPropCategories = async () => {
    let categories = await getCategory();

    const products = await Promise.all(
        categories.map(async (category) => {
            return {
                category,
                products: await getCategoriesId(category),
            };
        }))
    return products
};

const getPropCart = async () => {
    let carts = await getCarts();
    return carts
};

const getMappedProducts = async () => {
    let products = await getProducts();
    products = products.map((product) => ({
        id: product.id,
        title: product.title,
        price: product.price,
    }));
    return products;
};

const storeDb = {
    getProducts,
    getCarts,
    getUsers,
    getUserId,
    getCategory,
    getCategoriesId,
    getPropCategories,
    getPropCart,
    getMappedProducts,
};

module.exports = storeDb;