const express = require('express');
const router = express.Router();

const {
    getAllUsers,
    getUser
} = require('../controllers/UserController');

router
    .get('/', getAllUsers)
    .get('/:id', getUser);

module.exports = router;