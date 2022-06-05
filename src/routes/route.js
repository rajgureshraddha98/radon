const express = require('express')
const router = express.Router();

const UserController = require('../controllers/userController')
const UserModel = require('../models/userModel')

router.get('/test-me', function(req, res) {

    res.send("hi shalmali welcome")
});
router.post('/createUser', userController.createUser);
router.get('/getAllUsers', userController.getUsersData);

module.exports = router;