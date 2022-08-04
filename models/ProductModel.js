const fetch = (...args) =>
    import ('node-fetch').then(({ default: fetch }) => fetch(...args))

const getProducts = () => {
    return fetch('https://fakestoreapi.com/products')
        .then(res => res.json());
}

/* const getProductsWithLimit = (limit) => {
    return fetch(`https://fakestoreapi.com/products?${limit}`)
        .then(res => res.json());
} */

const getProductById = (id) => {
    return fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json());
}

module.exports = {
    getProducts,
    //getProductsWithLimit,
    getProductById,
}