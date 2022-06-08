const BookModel = require('../models/bookModel')
const AuthorModel = require('../models/AuthorModel')
const bookModel = require('../models/bookModel')

let createAuthor = async(req, res) => {
    let data = req.body
    let saveData = await AuthorModel.create(data)
    res.send({ msg: saveData })
}
let createBook = async(req, res) => {
    let data = req.body
    let saveData = await bookModel.create(data)
    res.send({ msg: saveData })
}
const getBookByChetanBhagat = async function(req, res) {
    let data = await AuthorModel.find({ author_name: "Chetan Bhagat" }).select("author_id")
    let bookData = await bookModel.find({ author_id: data[0].author_id })
    res.send({ msg: bookData })
}

const authorOfBook = async function(req, res) {
    let data = await bookModel.findOneAndUpdate({ name: "Two states" }, { $set: { price: 100 } }, { new: true })
    let author_name = await AuthorModel.find({ author_id: data.author_id }).select("author_name")
    let price = data.price
    res.send({ msg: author_name, price })
};
/**let bookBetween50_100 = async(req, send) => {
    let allBooks = await BookModel.find({ price: { $gte: 50, $lte: 100 } }).select({ author_id })
    console.log(allBooks)
    let obj = allBooks.map(async function(ele) {
        let nameAuthor =
            await AuthorModel.find({ author_id: ele.author_id }).select({ author_name: 1 });
        return nameAuthor;
    })}*/

module.exports.createAuthor = createAuthor;
module.exports.createBook = createBook;
module.exports.getBookByChetanBhagat = getBookByChetanBhagat;
module.exports.authorOfBook = authorOfBook;
//module.exports.bookBetween50_100 = bookBetween50_100