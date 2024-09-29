// movie check  required fields
const auth = (req, res, next) => {
    const { title, description, releaseDate, category } = req.body;

    if (!title ||!description ||!releaseDate || !category ) {
        return res.status(400).send({error: "all fields are required"});
    }

    next(); 
};

//user check required fields
const authUser = (req, res, next) => {
    let { username, password, email } = req.body;

    if (!username ||!password ||!email) {
        return res.status(400).send({error: "all fields are required"});
    }

    next(); 
};

module.exports = {
auth,
authUser,
};