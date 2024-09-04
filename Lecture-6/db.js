const mongoose = require("mongoose");

const db = async () => {
        await mongoose.connect("mongodb://0.0.0.0:27017/db")
        console.log("Connected to the db");
};

module.exports = db;