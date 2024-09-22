const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://milap5322:<MVC-01>@mvc01.sczgo.mongodb.net/?retryWrites=true&w=majority&appName=MVC01');
    console.log('connect to database');
}

module.exports = connectDB;
