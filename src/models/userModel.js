const mongoose = require('mongoose');

const bookModel1 = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    authorName: String,

    tags: [String],


    year: {
        type: String,
        default: 2021
    },



    price: {
        indianPrice: String,
        europePrice: String,
    },


    totalPages: Number,

    stockAvailable: Boolean

}, { timestamps: true });


module.exports = mongoose.model('newBooks', bookModel1)