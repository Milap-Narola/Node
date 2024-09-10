require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const userRouter = require('./routes/user.router');

const PORT = process.env.PORT || 8090;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/user',userRouter)

// Routes
// app.use('/', require('./routes'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
