const isValid = (req, res, next) => {
    let { email, username, password } = req.body;
    if (email && username && password) {
        next();
    } else {
        res.status(400).send("Invalid data");
    }
};

module.exports = isValid;
