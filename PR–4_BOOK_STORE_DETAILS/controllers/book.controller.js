const Book = require('../models/book.schema');

const getAllBooks = async (req, res) => {
    let books = await Book.find();
    res.json(books);

};

const getBookById = async (req, res) => {
    let book = await Book.findById(req.params.id);
    res.json(book);
};

const addBook = async (req, res) => {
    let data = await Book.create(req.body);
    res.status(201).json(data);

};

const updateBook = async (req, res) => {
    let id = req.params.id;
    let data = await Book.findByIdAndUpdate(id, req.body, { new: true });
    res.json(data);
};

const deleteBook = async (req, res) => {
    let id = req.params.id;
    let deletedBook = await Book.findByIdAndDelete(id);
    res.json(deletedBook);
};

const filterBooks = async (req, res) => {
    const { author, category, title, price } = req.query;
    let books = await Book.find();

    if (author) {
        books = books.filter(book => book.author.toLowerCase() === author.toLowerCase());
    }

    if (category) {
        books = books.filter(book => book.category.toLowerCase() === category.toLowerCase());
    }

    if (title) {
        books = books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    }

    if (price === 'lth') {
        books = books.sort((a, b) => a.price - b.price);
    } else if (price === 'htl') {
        books = books.sort((a, b) => b.price - a.price);
    }

    res.json(books);
};

module.exports = { getAllBooks, getBookById, addBook, updateBook, deleteBook ,filterBooks};