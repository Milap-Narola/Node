let articles = [];
let currentId = 0;

const addArticle = (title, content) => {
    let newArticle = { id: ++currentId, title, content };
    articles.push(newArticle);
    return newArticle;
};

const getArticles = () => {
    return articles;
};

const updateArticle = (id, title, content) => {
    let article = articles.find(article => article.id === id);
    if (article) {
        article.title = title;
        article.content = content;
        return article;
    }
    return null;
};

const deleteArticle = (id) => {
    let index = articles.findIndex(article => article.id === id);
    if (index !== -1) {
        articles.splice(index, 1);
        return true;
    }
    return false;
};

module.exports = {
    addArticle,
    getArticles,
    updateArticle,
    deleteArticle,
};
