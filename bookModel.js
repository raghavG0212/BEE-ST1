const Book = require('../models/bookModel');

// Controller for handling CRUD operations
const booksController = {
  // Create Operation
  createBook: async (req, res) => {
    try {
      const newBook = await Book.create(req.body);
      res.status(201).json(newBook);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Read Operations
  getAllBooks: async (req, res) => {
    try {
      const books = await Book.find();
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getBookById: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) {
        res.status(404).json({ error: 'Book not found' });
      } else {
        res.status(200).json(book);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update Operation
  updateBook: async (req, res) => {
    try {
      const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedBook) {
        res.status(404).json({ error: 'Book not found' });
      } else {
        res.status(200).json(updatedBook);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Delete Operation
  deleteBook: async (req, res) => {
    try {
      const deletedBook = await Book.findByIdAndDelete(req.params.id);
      if (!deletedBook) {
        res.status(404).json({ error: 'Book not found' });
      } else {
        res.status(204).end();
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = booksController;
