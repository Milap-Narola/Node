const express = require('express');
const app = express();
const path = require('path');
const connectDB = require('./config/db');
const userRoute = require('./routes/user.route');
const blogRoute = require('./routes/blog.route');
const cookies = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookies());

app.use(express.static(path.join(__dirname, 'public')));
app.set("view", path.join(__dirname, "view"));
app.set('view engine', 'ejs');


app.use((req, res, next) => {
  res.locals.cookies = req.cookies;
  next();
});

app.use('/user', userRoute);
app.use('/blog', blogRoute);


app.get('/', (req, res) => {
  res.redirect('/blog/');
});

app.listen(8090, () => {
  console.log(`Server is running on 8090`);
  connectDB();
});
