const newsModel = require('../models/news.schema');

const getArticles = (req, res) => {
    let articles = newsModel.getArticles();
    res.json(articles);
};

const createArticle = (req, res) => {
    let { title, content } = req.body;
    let newArticle = newsModel.addArticle(title, content);
    res.status(201).json(newArticle);
};

const updateArticle = (req, res) => {
    let { id } = req.params;
    let { title, content } = req.body;
    let updatedArticle = newsModel.updateArticle(parseInt(id), title, content);

    if (updatedArticle) {
        res.json(updatedArticle);
    } else {
        res.status(404).json({ message: 'Article not found' });
    }
};

const deleteArticle = (req, res) => {
    let { id } = req.params;
    let deleted = newsModel.deleteArticle(parseInt(id));

    if (deleted) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Article not found' });
    }
};

module.exports = {
    getArticles,
    createArticle,
    updateArticle,
    deleteArticle,
};
