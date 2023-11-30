const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  publicationYear: { type: Number, required: true },
  ISBN: { type: String, required: false },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;