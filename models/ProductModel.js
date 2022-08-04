const fetch = (...args) =>
    import ('node-fetch').then(({ default: fetch }) => fetch(...args))

const getProducts = () => {
    return fetch('https://fakestoreapi.com/products')
        .then(res => res.json());
}

const getProductById = (id) => {
    return fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json());
}

const getCategories = () => {
    return fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json());
}

const getCategoryByName = (name) => {
    return fetch(`https://fakestoreapi.com/products/category/${name}`)
        .then(res => res.json());
}

module.exports = {
    getProducts,
    getProductById,
    getCategories,
    getCategoryByName,
};