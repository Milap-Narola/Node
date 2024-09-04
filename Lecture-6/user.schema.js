const mongoose = require('mongoose');

const userschema = new mongoose.schema({
    name: String,
    email: String,
    password: String,
})
const user=mongoose.model('User', userschema)
module.exports=User