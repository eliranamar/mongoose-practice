var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var bookSchema = new Schema({
  title: String,
  author: String,
  pages: Number,
  genres:[String],
  rating : {
    type: Number,
    min:1,
    max:10
  }
});
var Book = mongoose.model("Book", bookSchema);
module.exports = Book;