const express = require('express');
const connectDB = require('./config/db');
const userRouter = require('./routes/user.route');
const productRouter = require('./routes/product.route');
const cookies = require('cookie-parser');
const isAuth = require('./middleware/auth');
const cors = require('cors')
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookies())
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use('/user',isAuth ,userRouter);
app.use('/product', productRouter);
app.get("/", isAuth ,(req, res) => {
    res.render('product', { title: 'node' })
})


app.listen(8090, () => {
    console.log('Listening on port 8090');
    connectDB();
});