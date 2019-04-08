var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: String,
    author: [{
        type: String
    }],
    description: String,
    link: String,
    image: String
})

var Book = mongoose.model("Book", BookSchema);

module.exports = Book;