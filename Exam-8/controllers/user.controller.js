const User = require("../models/user.schema");
const multer = require("multer");
const sendingMail = require("../service/mailservice");
const { render } = require("ejs");


const getUser = async (req, res) => {
  let data = await User.find();
  res.send(data);
};
const createUser = async (req, res) => {
  let { username, email, password, role } = req.body;

  const isExists = await User.findOne({ email });

  if (!isExists) {
role = role ||'user'
      let data = await User.create({ username, email, password,role });
      res.send(data);
      res.cookie =('id',data.id)
      return render('login');
  } else {
      res.send({ user: isExists, msg: "User exists" });
  }
};


const updateUser = async (req, res) => {
  let { id } = req.params;
  let data = await User.findByIdAndUpdate(id, req.body, { new: true });

  res.send(data);
};

const deleteUser = async (req, res) => {
  let { id } = req.params;
  let data = await User.findByIdAndDelete(id);
  res.send(data);
};

// file upload

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
});


// html

const getIndex = (req, res) => {
  res.render("index")
}




// login
const login = async (req, res) => {
  let { email, password } = req.body;
  let user = await User.findOne({ email })
  if (!user) {
    return res.send("user not found")
  }

  if (user.password !== password) {
    return res.send("password is incorrect")
  }
  res.cookie("id", user.id).send({ user, msg: "logged in successfully" })
  res.render('index')

}


// password reset

let otps = new Map()
const sendOtp = async (req, res) => {
  let { email } = req.body;
  let user = await User.findOne({ email: email });
  if (!user) {
    res.send({ msg: "user not found" })
  }
  else {


    let otp = Math.round(Math.random() * 10000)

    otps.set(email, otp)
    console.log(otps);

    let html = `<h1>otp : ${otp}</h1> <div> <a href="http://localhost:8090/user/reset">reset</a></div>`
    sendingMail(email, "password reset", html)

    res.cookie("id", user.id).send({ msg: "otp sending........" })
  }

}

const resetPassword = async (req, res) => {
  let { otp, password } = req.body
  let { id } = req.cookies
  let user = await User.findById(id)
  if (otp == otps.get(user.email)) {
    let newPassword = await User.findByIdAndUpdate(id, { password: password }, { new: true })
    res.send(newPassword)
  }
  else {
    res.send({ msg: "otp invalid" })
  }



}

module.exports = { getUser, updateUser, deleteUser, createUser, upload, getIndex, login, sendOtp, resetPassword };
