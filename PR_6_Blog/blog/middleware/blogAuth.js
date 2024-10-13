const blogAuth = (req, res, next) => {
    let { title, content, category, auther, image } = req.body;

    if (!title && !content && !category && !auther && !image) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    next();

};
module.exports = blogAuth;