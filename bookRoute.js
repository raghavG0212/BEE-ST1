const express = require('express');
const booksController = require('../controllers/booksController');

const router = express.Router();

router.post('/api/books', booksController.createBook);
router.get('/api/books', booksController.getAllBooks);
router.get('/api/books/:id', booksController.getBookById);
router.put('/api/books/:id', booksController.updateBook);
router.delete('/api/books/:id', booksController.deleteBook);

module.exports = router;
