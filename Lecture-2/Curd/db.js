const mongoose = require("mongoose");

const dbConnect = async () => {
        await mongoose.connect("mongodb://localhost:27017/Node")
        console.log("Connected to the db");
};

module.exports = dbConnect;
