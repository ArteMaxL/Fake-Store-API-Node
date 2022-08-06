const express = require('express');
const router = express.Router();

const {
    getAllUsers,
    getUser,
    getFirstUsers,
} = require('../controllers/UserController');

router
    .get('/', getAllUsers)
    .get('/:id', getUser)
    .get('/firsts', getFirstUsers);

module.exports = router;