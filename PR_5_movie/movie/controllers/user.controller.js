const User = require('../models/user.schema');

// User Get All

const getAllUsers = async (req, res) => {
    let data = await User.find()   
    res.json(data);

};

//User create

const createUser = async (req, res) => {
    let { username, email, password } = req.body;

    const isExist = await User.findOne({ email: email })

    if (isExist) {
        return res.send({ msg: 'User exists' });

    }
    let user = { username, email, password };
    let data = await User.create(user);
    res.status(201).json(data);

}

// User Delete
const deleteUser = async (req, res) => {
    let { id } = req.params;

    let data = await User.findByIdAndDelete(id)
    if (!data) {
        return res.status(404).send({ msg: 'user not found' });
    }
    res.send({ msg: 'user deleted', data });
};



// User Login
const login = async (req, res) => {
    let { email, password } = req.body;

    let user = await User.findOne({ email })
    if (!user) {
        return res.status(404).send('user not found');
    }
    if (user.password !== password) {
        return res.status(401).send('password incorrect');
    }
    res.cookie('id', user.id).send({ msg: 'logged successfully', user })
}



module.exports = { getAllUsers, createUser, deleteUser, login };