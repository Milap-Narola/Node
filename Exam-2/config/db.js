const mongoose = require('mongoose');

const dbConnect = async () => {
    await mongoose.connect('mongodb+srv://milap5322:milap@cluster0.yr7ho9e.mongodb.net/')
    console.log("Connected to MongoDB");

}

module.exports =dbConnect