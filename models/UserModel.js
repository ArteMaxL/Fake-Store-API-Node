const fetch = (...args) =>
    import ('node-fetch').then(({ default: fetch }) => fetch(...args))

const getUsers = () => {
    return fetch('https://fakestoreapi.com/users')
        .then(res => res.json());
}

const getUserById = (id) => {
    return fetch(`https://fakestoreapi.com/users/${id}`)
        .then(res => res.json());
}

const getThreeFirstUsers = () => {
    return fetch(`https://fakestoreapi.com/users?limit=3`)
        .then(res => res.json());
}

module.exports = {
    getUsers,
    getUserById,
    getThreeFirstUsers,
};