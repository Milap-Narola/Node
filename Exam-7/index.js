const express = require('express');
const connectDB = require('./config/db');
const userRouter = require('./routes/userRoutes');
const path = require('path');
const cookies = require("cookie-parser");
const isAuth = require('./middleware/auth');
const ProductRouter = require('./routes/productRoutes');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookies())
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, 'view'))
app.use(express.static(path.join(__dirname, 'public')));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/user", userRouter)
app.use("/product",ProductRouter)
app.get("/", isAuth,(req, res) => {
    res.render('index', { title: 'node' })
})
app.get("/",isAuth,(req, res) => {
    res.render('home', { title: 'Home' })
})



app.listen(8090, () => {
    console.log('listening on port 8090');
    connectDB();
})
