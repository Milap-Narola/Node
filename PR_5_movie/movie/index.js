const express = require('express');
const connectDB = require('./config/db');
const userRouter = require('./routes/user.route');
const movieRouter = require('./routes/movie.route');
const { auth, authUser } = require('./middlewares/user.middleware')
const cors = require("cors")
const path = require('path');
const cookies = require("cookie-parser");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookies())
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.get('/', { auth, authUser }, (req, res) => res.render('index', { title: 'movie' }));

app.use('/user', userRouter);
app.use('/movie', movieRouter);


app.listen(8090, () => {
    console.log('listening on port 8090');
    connectDB();
})