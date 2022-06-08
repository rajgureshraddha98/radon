const express = require('express');
const router = express.Router();
const AuthorModel = require("../models/AuthorModel")
const bookModel = require("../models/bookModel")

//const UserController = require("../controllers/userController")
const BookController = require("../controllers/bookController")

router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", BookController.createAuthor)

router.post("/createBook", BookController.createBook)

router.get("/getBookByChetanBhagat", BookController.getBookByChetanBhagat)
router.get("/authorOfBook", BookController.authorOfBook)
    //router.get("/bookBetween50_100", UserController.bookBetween50_100)
module.exports = router;