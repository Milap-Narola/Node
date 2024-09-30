const isAuth = (req, res, next) => {
    const { id } = req.cookies;
    if (!id) {
        return res.status(401).send({ error: "Unauthorized access" });
    }
    next();
};

module.exports = isAuth;