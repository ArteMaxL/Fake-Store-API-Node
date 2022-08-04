const {
    getUsers,
    getUserById
} = require('../models/UserModel');

const getAllUsers = async(req, res) => {
    users = await getUsers();
    res.status(200).send(users);
}

const getUser = async(req, res) => {
    const { id } = req.params;
    user = await getUserById(id);
    res.status(200).send(user);
}

module.exports = {
    getAllUsers,
    getUser
};