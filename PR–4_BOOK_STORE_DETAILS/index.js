const express = require('express');
const bookRoutes = require('./routers/book.router');
const dbConnect = require('./config/db');
require('dotenv').config();


const app = express();
const PORT = 8090;
app.use(express.json());
app.use('/books', bookRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    dbConnect()
});