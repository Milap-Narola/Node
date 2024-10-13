
const { Router } = require("express");
const { signupPage,signup, loginPage, login,updateUser, deleteUser} = require("../controller/user.controller");
const userRouter = Router();
const isAuth = require("../middleware/auth");

userRouter.get("/signup", signupPage);
userRouter.post("/signup",isAuth, signup);
userRouter.get("/login", loginPage);
userRouter.post("/login", login);
userRouter.put("/update/:id", isAuth, updateUser);
userRouter.delete("/delete/:id", isAuth, deleteUser);

userRouter.get("/test", (req, res) => {
  res.json({ message: "User authenticated" });
});

userRouter.get("/test-unauth", (req, res) => {
  res.json({ message: "User not authenticated" });
});

userRouter.get("/test-admin", isAuth, (req, res) => {
  res.json({ message: "User is admin" });
});

module.exports = userRouter;
