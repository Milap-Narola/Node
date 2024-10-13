const User = require('../models/user.schema');


// User Signup
const signup = async (req, res) => {
    let { username, password, email, role } = req.body;

    try {
        let user = await User.findOne({ email: email });
        if (user) {
            return res.json({ username: user.username , password:   user.password });   
        }
        else {
            let user = await User.create(req.body);
            return res
                .cookie("role", user.role)
                .cookie("id", user.id)
                .send(`Account created successfully ${user.username}`);
        }
    } catch (error) {
        res.send(error.msg);
    }
}

const signupPage = (req, res) => {
    es.render('signup');
};
const loginPage = (req, res) => {
    res.render("login");
};

const login = async (req, res) => {
    let { email, password } = req.body;
    try {
        let user = await User.findOne({ email: email });
        if (!user) {
            return res.status(401).json({ message: 'User Not Found.' });
        }

        else if (user.password !== password) {
            return res.status(401).json({ message: 'invalid password.' });
        }
        else {
            return res
                .cookie("role", user.role)
                .cookie("id", user.id)
                .send(`Welcome ${user.username}`);
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Server error' });
    }

};


const updateUser = async (req, res) => {
    let { id } = req.params
    let data = await User.findByIdAndUpdate(id, req.body)
    res.send(data)
}

const deleteUser = async (req, res) => {
    let { id } = req.params
    let data = await User.findByIdAndDelete(id)
    res.send(data)
}
module.exports = { signup, signupPage, loginPage, login, updateUser, deleteUser };
 