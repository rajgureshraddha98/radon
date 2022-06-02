const express = require('express');

const shalu = require('../logger/logger')
const shalmali = require('../util/helper')
const shalu1 = require('../validator/fomatter')



const router = express.Router();

router.get('/test-me', function(req, res) {
    shalu.welcome()
    shalmali.printDate()
    shalmali.getBatchInfo()
    shalmali.printMonth()
    console.log(shalu1.case1)
    console.log(shalu1.case2)
    console.log(shalu1.case3)
    res.send('My first ever api!')
});

router.get('/test-me1', function(req, res) {
    res.send('My second ever api!')
});




module.exports = router;
// adding this comment for no reason