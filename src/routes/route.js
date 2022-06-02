const express = require('express')
const shalu = require('../logger/logger')
const shalu1 = require('../validation/formatter')
const router = express.Router();




router.get('/test-me', function(req, res) {
    shalu.welcome()
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason