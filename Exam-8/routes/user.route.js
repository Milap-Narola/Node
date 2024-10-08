const { Router } = require("express")
const User = require("../models/user.schema")
const { getUser, createUser, deleteUser, updateUser, upload, getIndex, login, sendOtp, resetPassword } = require("../controllers/user.controller")
const sendingMail = require("../service/mailservice")
const userRouter = Router()


userRouter.get("/", getUser)
userRouter.post("/", upload.array("img", 5), createUser)
userRouter.delete("/:id", deleteUser)
userRouter.patch("/:id", updateUser)


userRouter.post("/upload", upload.single("img"), (req, res) => {
    console.log("req.file", req.file);
    res.send("file uploaded successfully")
})

// index page
userRouter.get("/login", (req, res) => {
    res.render("login");
})
userRouter.post("/login", login)
userRouter.get("/signup", (req, res) => {
    res.render("signup")
});

userRouter.get("/index", getIndex)

// delete many

userRouter.delete("/delete", async (req, res) => {

    let user = await User.deleteMany({})


    res.send({ user, msg: "delete" })

});



// mail

userRouter.post("/mail", (req, res) => {
    const { to, subject, html } = req.body
    sendingMail(to, subject, html)
    res.send("sending mail")
})


userRouter.post("/otp", sendOtp)
userRouter.post("/reset", resetPassword)

// view
userRouter.get("/otp", (req, res) => {
    res.render("sendOtp")
})

userRouter.get("/reset", (req, res) => {
    res.render("password")
})
module.exports = userRouter