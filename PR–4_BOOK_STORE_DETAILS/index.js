// server.js
const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes');
require('dotenv').config();

const app = express();
const PORT = 8090;

// Middleware
app.use(express.json());
app.use('/books', bookRoutes);

// Database Connection
mongoose.connect(process.env.MONGODB_URI,)(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
});