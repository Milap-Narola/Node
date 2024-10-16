const isAuth = (req, res, next) => {
    if (req.cookies.role !== 'admin') {
        return res.status(403).json({ message: 'You are not authorized to access this page.' });
    }
    next();
};
module.exports = isAuth;