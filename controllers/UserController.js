const {
    getUsers,
    getUserById,
    getThreeFirstUsers,
} = require('../models/UserModel');

const getAllUsers = async(req, res) => {
    let users = await getUsers();
    res.status(200).send(users);
}

const getUser = async(req, res) => {
    const { id } = req.params;
    let user = await getUserById(id);
    res.status(200).send(user);
}

const getFirstUsers = async(req, res) => {
    let threeUsers = await getThreeFirstUsers();
    res.status(200).send(threeUsers);
}

module.exports = {
    getAllUsers,
    getUser,
    getFirstUsers,
};