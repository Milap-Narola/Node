const User = require("../models/user.schema")

const createUser = async (req, res) => {

    let { email } = req.body
    console.log(req.body);

    let isUser = await User.findOne({ email: email })
    if (isUser) {
        // res.send({ message: "User already exists" })
        return res.status(409).json({ message: "User already exists" });
        //  window.location.href = 'http://127.0.0.1:5500/view/login.html'
    }
    else {
        let data = await User.create(req.body)
        // res.send(data)
        return res.status(201).json({ message: "Signup successful", data });
        // alert('signup success')
        // window.location.href = 'http://127.0.0.1:5500/view/login.html'

    }
}

const LoggedIn = async (req, res) => {
    let { email, password } = req.body
    let isUser = await User.findOne({ email: email })
    // console.log("isUser: " + isUser);
    if (!isUser) {
        // return res.send({ message: "User does not exist" })
        return res.status(404).json({ message: "User does not exist" });
        //  window.location.href = 'http://127.0.0.1:5500/view/login.html'
    }
    if (isUser.password !== password) {
        // return res.send({ message: "password is incorrect" })
        return res.status(401).json({ message: "Password is incorrect" });
    }

    res.send({ message: "logged in successfully", User: isUser })




}

module.exports = { createUser, LoggedIn }