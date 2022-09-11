const express = require('express')
const router = express.Router()
// const Users = require('../controllers/UserController.js')

const baseUrl = 'Users';

// Get appointment by ID
router.get(`/${baseUrl}/:id`) //, AuthenticationMiddleware(), UserController.getUserById)

module.exports = router