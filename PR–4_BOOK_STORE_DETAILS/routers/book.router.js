const express = require('express');
const router = express.Router();
const { getAllBooks, getBookById, addBook, updateBook, deleteBook, filterBooks } = require('../controllers/book.controller');
const { validateBook } = require('../middleware/validation')

router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.post('/', validateBook, addBook);
router.patch('/:id', updateBook);
router.delete('/:id', deleteBook);
router.get('/filter', filterBooks);



module.exports = router;
