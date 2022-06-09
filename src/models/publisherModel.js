const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const publisherSchema = new mongoose.Schema( {
   name: String,
   headquarter: String

}, { timestamps: true });

module.exports = mongoose.model('myPublisher', publisherSchema)
