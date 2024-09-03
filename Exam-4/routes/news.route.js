const express = require('express');
const router = express.Router();
const { getArticles, createArticle, updateArticle, deleteArticle } = require('../controllers/news.Controller');

router.get('/', getArticles);
router.post('/', createArticle);
router.put('/:id', updateArticle);
router.delete('/:id', deleteArticle);

module.exports = router;
